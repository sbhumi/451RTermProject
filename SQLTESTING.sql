
CREATE PROCEDURE [TestStudent].[tests to check if student information is added to the table]
AS

EXEC tSQLt.FakeTable @TableName = 'dbo.STUDENT';

CREATE TABLE [TestStudent].[Expected]
(
[STUDENTID] INT NOT NULL,
[FIRST_NAME] VARCHAR(20) NOT NULL,
[LAST_NAME] VARCHAR(20) NOT NULL,
[YEAR_GRAD] INT NOT NULL,
[EMAIL] VARCHAR(30), 
[PHONE] BIGINT,
[GTA_CERT_LOCATION] VARCHAR(20), 
[GTA_TERM] DATE, 
[INTERNATL] BIT, 
[GRADE_LEVEL] VARCHAR(20),
[GPA] FLOAT, 
[HOURS_COMPLETED] INT, 
[SEMESTERS_COMPLETED] INT, 
[CURRENT_MAJOR_FEILD] VARCHAR(20), 
[UNDERGRAD_DEGREE_TYPE] VARCHAR(20),
CONSTRAINT [PKSTUDENT] PRIMARY KEY(STUDENTID)
)

INSERT INTO TestStudent.Expected
(STUDENTID, FIRST_NAME, LAST_NAME, YEAR_GRAD, EMAIL, PHONE, GTA_CERT_LOCATION, GTA_TERM, INTERNATL, GRADE_LEVEL,
GPA, HOURS_COMPLETED, SEMESTERS_COMPLETED, CURRENT_MAJOR_FEILD, UNDERGRAD_DEGREE_TYPE) VALUES
(12345678, 'John', 'Doe', 2023, 'jdoe123@umkc.mail.com', 8160001111, 'Calculus', '2021-12-20', 1, 
'Junior', 4.0, 90, 5, 'Computer Science', 'Bachelors')

EXEC dbo.studentAdd 12345678, 'John', 'Doe', 2023, 'jdoe123@umkc.mail.com', 8160001111, 'Calculus', '2021-12-20', 1,
'Junior', 4.0, 90, 5, 'Computer Science', 'Bachelors'

SELECT * INTO TestStudent.Actual from dbo.Student

EXEC tSQLt.AssertEqualsTable @Expected='TestStudent.Expected', @Actual='TestStudent.Actual'
GO

CREATE PROCEDURE [TestJobReqAdd].[Test to check if job requirements are added to the table]
AS

EXEC tSQLt.FakeTable @TableName = 'dbo.JOB_REQUIREMENTS';

CREATE TABLE [TestJobReqAdd].[Expected]
(
[JOBID] INT,
[CLASSID] INT,
[GRADE] FLOAT
)

INSERT INTO TestJobReqAdd.Expected
(JOBID, CLASSID, GRADE) VALUES
(1, 1, 3.9)

EXEC dbo.jobrequirementsAdd 1, 1, 3.9

SELECT * INTO TestJobReqAdd.Actual from dbo.JOB_REQUIREMENTS

EXEC tSQLt.AssertEqualsTable @Expected='TestJobReqAdd.Expected', @Actual='TestJobReqAdd.Actual'
GO


CREATE PROCEDURE [testJobAdd].[test to check if jobs are added to table]
AS

EXEC tSQLt.FakeTable @TableName = 'dbo.JOB'

CREATE TABLE [testJobAdd].[Expected]
(
[CLASSID] INT,
[JOB_ID] INT,
[JOB_TITLE] VARCHAR(50),
[POSITIONS_AVAILABLE] INT, 
[JOB_DESCRIPTION] VARCHAR(250)
)

INSERT INTO testJobAdd.Expected 
(CLASSID, JOB_ID, JOB_TITLE, POSITIONS_AVAILABLE, JOB_DESCRIPTION) VALUES
(1, 1, 'Tutor',  1, 'Help tutor students in Ms.Smith class')

EXEC dbo.jobAdd 1, 1, 'Tutor',  1, 'Help tutor students in Ms.Smith class'

SELECT * INTO testJobAdd.Actual FROM dbo.JOB

EXEC tSQLt.AssertEqualsTable @Expected='testJobAdd.Expected', @Actual='testJobAdd.Actual'
GO

CREATE PROCEDURE [testClassesTakenAdd].[test to check if classes taken are added to table]
AS
EXEC tSQLt.FakeTable @TableName = 'dbo.CLASSES_TAKEN';

CREATE TABLE [testClassesTakenAdd].[Expected]
(
[STUDENTID] INT,
[CLASSID] INT,
[GRADE] FLOAT,
[AT_UMKC] BIT,
[LOCATION_TAKEN] VARCHAR(50),
[TERM] DATE
)

INSERT INTO testClassesTakenAdd.Expected
(STUDENTID, CLASSID, GRADE, AT_UMKC, LOCATION_TAKEN, TERM) VALUES
(12345678, 1, 3.9, 1, 'Kansas City', '2021-12-20')

EXEC dbo.classesTakenAdd 12345678, 1, 3.9, 1, 'Kansas City', '2021-12-20'
SELECT * INTO testClassesTakenAdd.Actual FROM dbo.CLASSES_TAKEN

EXEC tSQLt.AssertEqualsTable @Expected='testClassesTakenAdd.Expected', @Actual='testClassesTakenAdd.Actual'
GO
tSQLt.RunAll

CREATE PROCEDURE [testClassesAdd].[test to check if classes are added to the table]
AS
EXEC tSQLt.FakeTable @TableName = 'dbo.CLASSES';

CREATE TABLE [testClassesAdd].[Expected]
(
[CLASSID] INT,
[TERM] DATE,
[DEPARTMENT] VARCHAR(30),
[SECTION] INT,
[CLASS_DESCRIPTION] VARCHAR(250)
)

INSERT INTO testClassesAdd.Expected
(CLASSID, TERM, DEPARTMENT, SECTION, CLASS_DESCRIPTION) VALUES
(1, '2021-12-20', 'Computer Sciecne', 1, 'Class about programming')

EXEC dbo.classesAdd 1, '2021-12-20', 'Computer Sciecne', 1, 'Class about programming'
SELECT * INTO testClassesAdd.Actual from dbo.CLASSES

EXEC tSQLt.AssertEqualsTable @Expected='testClassesAdd.Expected', @Actual='testClassesAdd.Actual'
GO

CREATE OR ALTER PROCEDURE [testApplicationsAdd].[test to check if applications are added to the table]
AS
EXEC tSQLt.FakeTable @TableName = 'dbo.APPLICATIONS';

CREATE TABLE [testApplicationsAdd].[Expected]
(
[STUDENTID] INT,
[JOBID] INT,
[JOBSTATUS] VARCHAR(20)
)

INSERT INTO testApplicationsAdd.Expected
(STUDENTID, JOBID, JOBSTATUS) VALUES
(1,1, 'PENDING')

EXEC dbo.apply 1, 1
SELECT * INTO testApplicationsAdd.Actual FROM dbo.APPLICATIONS;

EXEC tSQLt.AssertEqualsTable @Expected='testApplicationsAdd.Expected', @Actual='testApplicationsAdd.Actual'
GO

CREATE OR ALTER PROCEDURE [testTermAdd].[test to check if term is added to the table]
AS 
EXEC tSQLt.FakeTable @TableName = 'dbo.CLASS_TERMS';

CREATE TABLE [testTermAdd].[Expected]
(
CLASSID INT,
TERM DATE,
SECTION INT 
)

INSERT INTO testTermAdd.Expected
(CLASSID, TERM, SECTION) VALUES
(1, '2021-12-20', 1)

EXEC dbo.termAdd 1, '2021-12-20', 1
SELECT * INTO testTermAdd.Actual FROM dbo.CLASS_TERMS;

EXEC tSQLt.AssertEqualsTable @Expected='testTermAdd.Expected', @Actual='testTermAdd.Actual'
GO

tSQLt.RunAll
