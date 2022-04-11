ALTER TABLE JOB_REQUIREMENTS
ALTER COLUMN GRADE VARCHAR(2);

ALTER TABLE JOB
DROP CONSTRAINT TRUEFALSE;
--I removed the constraint here because I believe it is better to use a bit datatype than char(1) and having a constraint for when you want a true false column
ALTER TABLE JOB
ALTER COLUMN FILLED_STATUS BIT;

ALTER TABLE CLASSES_TAKEN
ALTER COLUMN GRADE VARCHAR(2);

ALTER TABLE CLASSES
ALTER COLUMN [CLASSES.TERM] DATE;
-- Switched datatype from datetime to date for column term we don't need the exact time of the class just date
EXEC sp_rename 'dbo.CLASSES.[CLASSES.TERM]', 'TERM', 'COLUMN';
--Renamed [Classes.Term] to TERM for more simplicity
GO

ALTER PROCEDURE [dbo].[jobAdd]
	@CLASSID INT,
	@JOB_ID INT,
	@JOB_TITLE VARCHAR(50),
	@TEACHER VARCHAR(50),
	@FILLED_STATUS BIT,
	@JOB_DESCRIPTION VARCHAR(280)
AS
	SET NOCOUNT ON;
	INSERT INTO JOB
	VALUES (@CLASSID, @JOB_ID, @JOB_TITLE, @TEACHER, @FILLED_STATUS, @JOB_DESCRIPTION);
	GO

	ALTER PROCEDURE [dbo].[classestakenAdd]
	@STUDENTID INT,
	@CLASSID INT,
	@GRADE VARCHAR(2),
	@AT_UMKC BIT = 1,
	@LOCATION_TAKEN VARCHAR(50) = "UMKC"
AS
	SET NOCOUNT ON
	INSERT INTO CLASSES_TAKEN
	VALUES(	@STUDENTID, @CLASSID, @GRADE, @AT_UMKC, @LOCATION_TAKEN)
	GO

	ALTER PROCEDURE [dbo].[classesAdd]
	@CLASSID INT,
	@TERM DATE,
	@DEPARTMENT VARCHAR(30),
	@SECTION INT,
	@CLASS_DESCRIPTION VARCHAR(500)
AS
	SET NOCOUNT ON;
	INSERT INTO CLASSES
	VALUES (@CLASSID, @TERM, @DEPARTMENT,@SECTION, @CLASS_DESCRIPTION);
	GO

	ALTER PROCEDURE [dbo].[applicationsAdd]
	@STUDENTID INT,
	@JOBID INT
AS
	SET NOCOUNT ON;
	INSERT INTO APPLICATIONS
	VALUES(@STUDENTID, @JOBID);
	GO