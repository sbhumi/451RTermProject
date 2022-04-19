ALTER TABLE CLASSES
ALTER COLUMN CLASS_NAME VARCHAR(20);

ALTER TABLE CLASSES
ALTER COLUMN CLASS_DESCRIPTION VARCHAR(280);

-- I WILL NEED TO CHANGE THE STORED PROCEDURE FOR classesAdd

ALTER TABLE STUDENT
ALTER COLUMN FIRST_NAME VARCHAR(20);

ALTER TABLE STUDENT
ALTER COLUMN LAST_NAME VARCHAR(20);

ALTER TABLE STUDENT
ALTER COLUMN EMAIL VARCHAR(50);

ALTER TABLE STUDENT
ALTER COLUMN CURRENT_MAJOR_FEILD VARCHAR(50);

ALTER TABLE STUDENT
ALTER COLUMN UNDERGRAD_DEGREE_TYPE VARCHAR(50);



ALTER TABLE JOB
ALTER COLUMN JOB_TITLE VARCHAR(50);

ALTER TABLE JOB
ALTER COLUMN TEACHER VARCHAR(50);

ALTER TABLE JOB
ALTER COLUMN JOB_STATUS VARCHAR(50);

ALTER TABLE JOB
ALTER COLUMN JOB_DESCRIPTION VARCHAR(250);



-- need to change the jobstatus to an int to indicate the number of positions still 
-- available need to change jobstatus to positions_available

-- need to change a few of the pq's to reflect the change to dtypes and structural changes

-- need to require that every class added has a season added



-- OK SO YOU NEED TO TELL SWETHA AND CHRISTIAN THAT YOU HAVE APPLIED A MAPPING BETWEEN GRADES AND INTEGERS
-- use GPA in class for weights 4.0 = a 3.7 = a-, 3.3= b+, 3.0 = b, 2.7 = b-, c+ = 2.3, c= 2.0, 
-- c-= 1.7, d+ = 1.3, d = 1.0, d- = .7, f = 0   YOU WILL NEED TO CHANGE IT TO AN FLOAT

ALTER TABLE JOB_REQUIREMENTS
ALTER COLUMN GRADE FLOAT NOT NULL;

ALTER TABLE CLASSES_TAKEN
ALTER COLUMN GRADE FLOAT NOT NULL;

ALTER TABLE CLASSES_TAKEN
ALTER COLUMN LOCATION_TAKEN VARCHAR(50);


ALTER TABLE JOB_REQUIREMENTS
ADD CONSTRAINT GRADERANGEMIN CHECK(GRADE >= 0.0);


ALTER TABLE JOB_REQUIREMENTS
ADD CONSTRAINT GRADERANGEMAX CHECK(GRADE <= 4.0 AND GRADE >= 0.0);

ALTER TABLE CLASSES_TAKEN
ADD CONSTRAINT CLASSGRADEMAX CHECK(GRADE <= 4.0 AND GRADE >= 0.0 );

