CREATE TABLE STUDENT
(STUDENTID INT NOT NULL,
FIRST_NAME VARCHAR(20) NOT NULL,
LAST_NAME VARCHAR(20) NOT NULL,
YEAR_GRAD INT NOT NULL,
EMAIL VARCHAR(50) NOT NULL,
PHONE INT NOT NULL,
GTA_CERT_LOCATION VARCHAR(50),
GTA_TERM DATE,
INTERNATL BIT,
GRADE_LEVEL VARCHAR(10) NOT NULL,
GPA FLOAT,
HOURS_COMPLETED INT,
SEMESTERS_COMPLETED INT,
CURRENT_MAJOR_FEILD VARCHAR(50),
UNDERGRAD_DEGREE_TYPE VARCHAR(50),

CONSTRAINT PKSTUDENT PRIMARY KEY(STUDENTID),
CONSTRAINT GRADEFORMAT CHECK (GRADE_LEVEL = 'M' OR GRADE_LEVEL = 'U'),
CONSTRAINT GRADERANGE CHECK(GPA <= 4.0 AND GPA >= 0.0)
);
GO

CREATE TABLE CLASSES
(CLASSID INT NOT NULL,
DEPARTMENT VARCHAR(50) NOT NULL,
CLASS_DESCRIPTION VARCHAR(250),
CLASS_NAME VARCHAR(20) NOT NULL,
CONSTRAINT PKCLASSES PRIMARY KEY(CLASSID)
);
GO

CREATE TABLE CLASS_TERMS (
CLASSID INT NOT NULL,
TERM DATE NOT NULL,
SECTION INT,
CONSTRAINT PKCLASS_TERMS PRIMARY KEY(CLASSID, TERM),
CONSTRAINT CLASS_TERMSFKCLASS FOREIGN KEY(CLASSID) REFERENCES CLASSES(CLASSID)
ON DELETE CASCADE
);
GO


CREATE TABLE JOB
(CLASSID INT NOT NULL,
JOB_ID INT NOT NULL,
JOB_TITLE VARCHAR(50) NOT NULL,
POSITIONS_AVAILABLE INT NOT NULL,
JOB_DESCRIPTION VARCHAR(250) NOT NULL,
CONSTRAINT PKJOB PRIMARY KEY(JOB_ID),
CONSTRAINT JOBFKCLASSES FOREIGN KEY(CLASSID) REFERENCES CLASSES(CLASSID)
ON DELETE CASCADE,
CONSTRAINT NUMJOBS CHECK(POSITIONS_AVAILABLE >= 0)
);
GO


CREATE TABLE APPLICATIONS
(STUDENTID INT NOT NULL,
JOBID INT NOT NULL,
CONSTRAINT PKAPPLICATIONS PRIMARY KEY(STUDENTID, JOBID),
CONSTRAINT APPLICATIONSFKSTUDENT FOREIGN KEY(STUDENTID) REFERENCES STUDENT(STUDENTID)
ON DELETE CASCADE,
CONSTRAINT APPLICATIONSFKJOB FOREIGN KEY(JOBID) REFERENCES JOB(JOB_ID)
ON DELETE CASCADE
);
GO

CREATE TABLE CLASSES_TAKEN
(STUDENTID INT NOT NULL,
CLASSID INT NOT NULL,
GRADE FLOAT NOT NULL,
AT_UMKC BIT NOT NULL,
LOCATION_TAKEN VARCHAR(50),
TERM DATE NOT NULL,
CONSTRAINT PKCLASSES_TAKEN PRIMARY KEY(STUDENTID, CLASSID),
CONSTRAINT FKCLASSES_TAKENFKSTUDENT FOREIGN KEY(STUDENTID) REFERENCES STUDENT(STUDENTID)
ON DELETE CASCADE,
CONSTRAINT CLASSES_TAKENFKCLASSES FOREIGN KEY(CLASSID) REFERENCES CLASSES(CLASSID)
ON DELETE CASCADE,
CONSTRAINT GRADERANGETAKEN CHECK(GRADE <= 4.0 AND GRADE >= 0.0)
);
GO

CREATE TABLE JOB_REQUIREMENTS
(JOBID INT NOT NULL,
CLASSID INT NOT NULL,
GRADE FLOAT NOT NULL,
CONSTRAINT PKJOB_REQUIREMENTS PRIMARY KEY(JOBID, CLASSID),
CONSTRAINT JOB_REQUIREMENTSFKJOBID FOREIGN KEY(JOBID) REFERENCES JOB(JOB_ID)
ON DELETE CASCADE,
CONSTRAINT JOB_REQUIREMENTSFKCLASSID FOREIGN KEY(CLASSID) REFERENCES CLASSES(CLASSID),
CONSTRAINT GRADERANGEREQUIREMENTS CHECK(GRADE <= 4.0 AND GRADE >= 0.0)
);
GO



CREATE PROCEDURE filterJobRequirements
	@JOBID INT
AS
	SET NOCOUNT ON;
	SELECT CLASSID, GRADE
	FROM JOB_REQUIREMENTS
	WHERE JOBID = @JOBID;
GO



CREATE PROCEDURE filterJob
	@CLASSID int
AS
	SET NOCOUNT ON;
	SELECT JOB_TITLE, POSITIONS_AVAILABLE
	FROM JOB
	WHERE CLASSID = @CLASSID;
GO



CREATE PROCEDURE filterApplicationsbyJob
	@JOBID INT
AS
	SET NOCOUNT ON;
	SELECT JOBID, STUDENTID
	FROM APPLICATIONS
	WHERE JOBID = @JOBID;
GO



CREATE PROCEDURE filterApplicationsbyClass
	@CLASSID INT
AS
	SET NOCOUNT ON;
	SELECT JOBID, STUDENTID
	FROM APPLICATIONS
	WHERE JOBID IN (
	SELECT JOB_ID
	FROM JOB
	WHERE CLASSID = @CLASSID);
GO



CREATE PROCEDURE filterApplicantsByJob
	@JOBID INT
AS
	SET NOCOUNT ON;
	SELECT  STUDENT.FIRST_NAME, STUDENT.LAST_NAME, CLASSES_TAKEN.GRADE
	FROM APPLICATIONS 
	INNER JOIN STUDENT
	ON APPLICATIONS.STUDENTID = STUDENT.STUDENTID
	INNER JOIN JOB 
	ON APPLICATIONS.JOBID = JOB.JOB_ID
	INNER JOIN CLASSES_TAKEN
	ON APPLICATIONS.STUDENTID = CLASSES_TAKEN.STUDENTID
	WHERE APPLICATIONS.JOBID = @JOBID;
GO



CREATE TRIGGER noApplyUnlessAllRequirementMet
ON APPLICATIONS AFTER INSERT
AS
IF (0 != (SELECT COUNT(CLASSES_TAKEN.GRADE) FROM 
JOB_REQUIREMENTS
join inserted
ON inserted.JOBID = JOB_REQUIREMENTS.JOBID
LEFT JOIN CLASSES_TAKEN
ON JOB_REQUIREMENTS.CLASSID = CLASSES_TAKEN.CLASSID AND CLASSES_TAKEN.STUDENTID = inserted.STUDENTID
WHERE CLASSES_TAKEN.GRADE IS NULL))
BEGIN
	RAISERROR('Requirements not met',1,1);
	ROLLBACK
END
IF (0 != (SELECT COUNT(CLASSES_TAKEN.GRADE) FROM
JOB_REQUIREMENTS
join inserted
ON inserted.JOBID = JOB_REQUIREMENTS.JOBID
JOIN CLASSES_TAKEN
ON JOB_REQUIREMENTS.CLASSID = CLASSES_TAKEN.CLASSID AND CLASSES_TAKEN.STUDENTID = inserted.STUDENTID
WHERE CLASSES_TAKEN.GRADE >= JOB_REQUIREMENTS.GRADE))
BEGIN
	RAISERROR('Requirements not met',1,1);
	ROLLBACK
END
GO




CREATE PROCEDURE studentAdd
	@SID int,
	@FIRSTN VARCHAR(20),
	@LASTN VARCHAR(20),
	@YEARGRAD INT,
	@EMAIL VARCHAR(50),
	@PHONE INT,
	@GTACERTLOC VARCHAR(50) = NULL,
	@GTATERM DATE = NULL,
	@INTERNATL BIT = 0,
	@GRADELEVEL VARCHAR(10),
	@GPA FLOAT,
	@HOURSCOMPLETED INT,
	@SEMESTERSCOMPLETED INT,
	@CURRENTMAJOR VARCHAR(50),
	@UNDERGRADDEGREETYPE VARCHAR(50)

AS
	SET NOCOUNT ON;
	INSERT INTO STUDENT
	VALUES (@SID, @FIRSTN, @LASTN, @YEARGRAD, 
	@EMAIL, @PHONE, @GTACERTLOC, @GTATERM, @INTERNATL, @GRADELEVEL,
	@GPA, @HOURSCOMPLETED, @SEMESTERSCOMPLETED, @CURRENTMAJOR, @UNDERGRADDEGREETYPE);
GO



CREATE PROCEDURE jobAdd
	@CLASSID INT,
	@JOBID INT,
	@JOBTITLE VARCHAR(50),
	@JOBSTATUS INT = 0,
	@JOBDESCRIPTION VARCHAR(250)
AS
	SET NOCOUNT ON;
	INSERT INTO JOB
	VALUES (@CLASSID, @JOBID, @JOBTITLE, @JOBSTATUS, @JOBDESCRIPTION);
GO



CREATE PROCEDURE classesAdd
	@CLASSID INT,
	@DEPARTMENT VARCHAR(1),
	@CLASSDESCRIPTION VARCHAR(280),
	@CLASSNAME VARCHAR(20)
AS
	SET NOCOUNT ON;
	INSERT INTO CLASSES
	VALUES (@CLASSID, @DEPARTMENT,  @CLASSDESCRIPTION, @CLASSNAME);
GO



CREATE PROCEDURE jobrequirementsAdd
	@JOBID INT,
	@CLASSID INT,
	@GRADE FLOAT
AS
	INSERT INTO JOB_REQUIREMENTS
	VALUES (@JOBID, @CLASSID, @GRADE);
GO


CREATE PROCEDURE applicationsAdd
	@SID INT,
	@JOBID INT
AS
	SET NOCOUNT ON;
	INSERT INTO APPLICATIONS
	VALUES(@SID, @JOBID);
GO


CREATE PROCEDURE classestakenAdd
	@SID INT,
	@CLASSID INT,
	@GRADE FLOAT,
	@ATUMKC BIT = 1,
	@LOCATIONTAKEN VARCHAR(50) = "UMKC",
	@TERM DATE
AS
	SET NOCOUNT ON
	INSERT INTO CLASSES_TAKEN
	VALUES(	@SID, @CLASSID, @GRADE, @ATUMKC, @LOCATIONTAKEN, @TERM);
GO


CREATE PROCEDURE termAdd
	@CLASSID INT,
	@TERM DATE,
	@SECTION INT
AS
	SET NOCOUNT ON
	INSERT INTO CLASS_TERMS
	VALUES(@CLASSID, @TERM, @SECTION);
GO



ALTER TABLE APPLICATIONS
ADD JOBSTATUS VARCHAR(20) NOT NULL;
GO



CREATE PROCEDURE apply
	@SID INT,
	@JOB INT
AS
	SET NOCOUNT ON
	INSERT INTO APPLICATIONS
	VALUES(@SID, @JOB,'PENDING');
GO


--THIS IS THE TRANSACT TO AUTOMATICALLY TURN ALL APPLICATIONS THAT 
-- HAVENT MADE THE CUT INTO REJECTS
-- BUT WE MAY WANT TO GO A DIFFERENT ROUTE
/*
CREATE TRIGGER reducePositionsAvailable
ON APPLICATIONS AFTER UPDATE
AS
DECLARE @jid int
DECLARE @sid int
DECLARE @status VARCHAR(20)
DECLARE @num int
SELECT 
	@status = inserted.JOBSTATUS,
	@jid = inserted.JOBID,
	@sid = inserted.STUDENTID
    FROM	
      inserted
    INNER JOIN
      deleted
        ON inserted.JOBID = deleted.JOBID AND inserted.JOBID = deleted.STUDENTID;
IF(@status = 'ACCEPTED')
	BEGIN
		
		UPDATE JOB
		SET @num =  POSITIONS_AVAILABLE -= 1
		WHERE JOB.JOB_ID = (SELECT inserted.JOBID FROM inserted
		INNER JOIN deleted
        ON inserted.JOBID = deleted.JOBID AND inserted.JOBID = deleted.STUDENTID)
	END
IF(@num = 0)
		DISABLE TRIGGER reducePositionsAvailable ON ALL SERVER;
		BEGIN
		UPDATE APPLICATIONS
		SET JOBSTATUS = 'REJECTED'
		WHERE JOBSTATUS = 'PENDING' AND JOBID = @jid AND STUDENTID = @sid;
		END;
		ENABLE TRIGGER reducePositionsAvailable ON ALL SERVER;
GO
*/

CREATE PROCEDURE setAllStudentsToZero
	@JOBID INT
AS
	SET NOCOUNT ON
	UPDATE APPLICATIONS
	SET JOBSTATUS = 'REJECTED'
	WHERE JOBSTATUS = 'PENDING' AND JOBID = @JOBID;
GO

CREATE PROCEDURE rejectOneStudent
	@JOBID INT,
	@STUDENT INT
AS
	SET NOCOUNT ON
	UPDATE APPLICATIONS
	SET JOBSTATUS = 'REJECTED'
	WHERE JOBID = @JOBID
GO


CREATE PROCEDURE acceptStudent
	@JOBID INT,
	@STUDENT INT
AS
BEGIN
	SET NOCOUNT ON;
	IF(1 <= (SELECT POSITIONS_AVAILABLE
	FROM JOB WHERE JOB_ID = @JOBID))
		BEGIN
		UPDATE JOB 
		SET POSITIONS_AVAILABLE -= 1
		WHERE JOB_ID = @JOBID;
		UPDATE APPLICATIONS
		SET JOBSTATUS = 'ACCEPTED'
		WHERE JOBID = @JOBID AND STUDENTID = @STUDENT;
		RETURN 'UPDATED';
		END;
	ELSE
		BEGIN
		RETURN 'NOT ENOUGH POSITIONS AVAILABLE';
		END;
		
END;
GO

CREATE PROCEDURE getJobListings
AS
BEGIN
	SELECT JOB_TITLE
	FROM JOB 
	WHERE POSITIONS_AVAILABLE != 0;
END
GO

CREATE PROCEDURE getApplicants
	@JOBTITLE VARCHAR(30)
AS
BEGIN
	SELECT STUDENT.FIRST_NAME, STUDENT.LAST_NAME, JOB_REQUIREMENTS.GRADE
	FROM STUDENT
	INNER JOIN APPLICATIONS
	ON APPLICATIONS.STUDENTID = STUDENT.STUDENTID
	INNER JOIN JOB
	ON APPLICATIONS.JOBID = JOB.JOB_ID
	INNER JOIN JOB_REQUIREMENTS
	ON JOB_REQUIREMENTS.JOBID = JOB.JOB_ID
	WHERE JOB_ID = @JOBTITLE;
END
GO

CREATE PROCEDURE getjobsbyclass
	@CLASSTITLE VARCHAR(30)
AS
BEGIN
	SELECT JOB.JOB_TITLE, JOB.JOB_DESCRIPTION
	FROM JOB
	INNER JOIN CLASSES
	ON JOB.CLASSID = CLASSES.CLASSID
	WHERE JOB.POSITIONS_AVAILABLE > 0 AND CLASS_NAME = @CLASSTITLE;
END
GO

CREATE PROCEDURE getRequirementsForJob
	@JOBTITLE VARCHAR(30)
AS
BEGIN
	SELECT CLASSES.CLASS_NAME, JOB_REQUIREMENTS.GRADE
	FROM JOB_REQUIREMENTS
	INNER JOIN CLASSES
	ON CLASSES.CLASSID = JOB_REQUIREMENTS.JOBID
	INNER JOIN JOB
	ON JOB.JOB_ID = JOB_REQUIREMENTS.JOBID
	WHERE JOB.JOB_TITLE = @JOBTITLE;
END
GO

CREATE PROCEDURE getRequirementsNotMet
	@JOBID INT,
	@STUDENTID INT
AS
BEGIN
	SELECT JOB_REQUIREMENTS.CLASSID
	FROM JOB_REQUIREMENTS
	INNER JOIN APPLICATIONS
	ON APPLICATIONS.JOBID = JOB_REQUIREMENTS.JOBID
	WHERE APPLICATIONS.STUDENTID = @STUDENTID AND JOB_REQUIREMENTS.JOBID = @JOBID;
END
GO

CREATE PROCEDURE getStudentsQalifications
@SID
AS
	SELECT CLASSES.CLASS_NAME, CLASSES_TAKEN.GRADE
	FROM CLASSES
	INNER JOIN CLASSES_TAKEN
	ON CLASSES.CLASSID = CLASSES_TAKEN.CLASSID
GO

CREATE TRIGGER noApplyUnlessAvailable
ON APPLICATIONS AFTER INSERT 
AS
DECLARE @JID INT = (SELECT TOP 1 JOBID FROM inserted);
IF(0 = (SELECT JOB.POSITIONS_AVAILABLE
	FROM JOB
	WHERE JOB.JOB_ID = @JID))
BEGIN
	RAISERROR('No Jobs Available',1,1);
	ROLLBACK
END
GO