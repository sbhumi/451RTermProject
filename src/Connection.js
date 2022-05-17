const { compose } = require('@reduxjs/toolkit');
var express = require('express');
var app = express();

var sql = require("mssql");

// config for your database
var config = {
    user: 'admin',
    password: 'abc123',
    database: '451RTermProject',
    server: 'localhost',
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

sql.connect(config, function (err) {

    if (err) console.log(err);
    
    app.get('/filter-requirements', function(req, res) {
        var jobid = req.query.jobid;
        console.log(jobid);

        // create Request object
        var request = new sql.Request();

        let query = "exec filterJobRequirements @JOBID = '" + jobid + "';"

        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
        });
    
    });

    
    app.get('/filter-job', function(req, res) {
    
        var classid = req.query.classid;
    
        var request = new sql.Request();
    
        let query = "exec filterJob @CLASSID = '" + classid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.get('/filter-applications-by-job', function(req, res) {
    
        var jobid = req.query.jobid;
    
        var request = new sql.Request();
    
        let query = "exec filterApplicationsbyJob @JOBID = '" + jobid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.get('/filter-applications-by-class', function(req, res) {
    
        var classid = req.query.classid;
    
        var request = new sql.Request();
    
        let query = "exec filterApplicationsbyClass @CLASSID = '" + classid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.get('/filter-applicants-by-job', function(req, res) {
    
        var jobid = req.query.jobid;
    
        var request = new sql.Request();
    
        let query = "exec filterApplicantsByJob @JOBID = '" + jobid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.post('/student-add', function(req, res) {
    
        var sid = req.query.jobid;
        var firstn = req.query.firtn;
        var lastn = req.query.lastn;
        var yeargrad = req.query.yeargrad;
        var email = req.query.email;
        var phone = req.query.phone;
        var gtacertloc = req.query.gtacertloc;
        var gtaterm = req.query.gtaterm;
        var internatl = req.query.internatl;
        var gradelevel = req.query.gradelevel;
        var gpa = req.query.gpa;
        var hourscompleted = req.query.hourscompleted;
        var semesterscompleted = req.query.semesterscompleted;
        var currentmajor = req.query.currentmajor;
        var undergraddegreetype = req.query.undergraddegreetype;
        
        var request = new sql.Request();
    
        let query = "exec studentAdd @SID = '" + sid + "', @FIRSTN = '" + firstn + "', @LASTN = '" + lastn + "', @YEARGRAD = '" + yeargrad + "', @EMAIL = '" + email + "', @PHONE = '" + phone + "', @GTACERTLOC = '" + gtacertloc + "', @GTATERM = '" + gtaterm + "', @INTERNATL = '" + internatl + "', @GRADELEVEL = '" + gradelevel + "' @GPA = '" + gpa + "', @HOURSCOMPLTETED = '" + hourscompleted + "', @SEMESTERSCOMPLETED = '" + semesterscompleted + "', @CURRENTMAJOR = '" + currentmajor + "', @UNDERGRADDEGREETYPE = '" + undergraddegreetype + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });

    app.get('/student-exists', function(req, res) {

        var sid = req.query.sid; 
    
        var request = new sql.Request();
    
        let query = "exec studentExists @SID = '" + sid + "';"
    
        request.query(query, function (err, recordset) {
    
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
    
        });
    
    });
    
    
    app.post('/job-add', function(req, res)  {
    
        var classid = req.query.classid;
        var jobid = req.query.jobid
        var jobtitle = req.query.jobtitle;
        var jobstatus = req.query.jobstatus;
        var jobdescription = req.query.jobdescription;
        
        var request = new sql.Request();
    
        let query = "exec jobAdd @CLASSID = '" + classid + "', @JOBID = '" + jobid + "', @JOBTITLE = '" + jobtitle + "', @JOBSTATUS = '" + jobstatus + "', @JOBDESCRIPTION = '" + jobdescription + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.get('/filter-requirements', function(req, res) {
    
        var jobid = req.query.jobid;
    
        var request = new sql.Request();
    
        let query = "exec filterJobRequirements @JOBID = '" + jobid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.get('/filter-job', function(req, res) {
    
        var classid = req.query.classid;
    
        var request = new sql.Request();
    
        let query = "exec filterJob @CLASSID = '" + classid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    
    app.get('/filter-applications-by-job', function(req, res) {
        
        var jobid = req.query.jobid;
    
        var request = new sql.Request();
    
        let query = "exec filterApplicationsbyJob @JOBID = '" + jobid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.get('/filter-applications-by-class', function(req,res) {
    
        var classid = req.query.classid;
    
        var request = new sql.Request();
    
        let query = "exec filterApplicationsbyClass @CLASSID = '" + classid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });  
      
    });

    
    app.post('/classes-add', function(req, res) {
    
    
        var classid = req.query.classid;
        var department = req.query.department;
        var classedscription = req.query.classdescription;
        var classname = req.query.classname;
    
    
        var request = new sql.Request();
    
        let query = "exec classesAdd @CLASSID = '" + classid + "', @DEPARTMENT = '" + department + "', @CLASSDESCRIPTION = '" + classdescription + "', @CLASSNAME = '" + classname + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.post('/job-requirements-add', function(req, res) {
    
        var jobid = req.query.jobid;
    
        var classid = req.query.classid;
    
        var grade = req.query.grade;
    
        var request = new sql.Request();
    
        let query = " jobrequirementsAdd @JOBID = '" + jobid + "', @CLASSID = '" + classid + "', @GRADE = '" + grade + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.post('/apply', function(req, res) {
    
        var sid = req.query.sid;
    
        var jobid = req.query.jobid;
    
        var request = new sql.Request();
    
        let query = "exec apply @SID = '" + sid + "', @JOBID = '" + jobid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    
    app.post('/classes-taken-add', function(req, res) {
        
        var sid = req.query.sid;
    
        var classid = req.query.classid;
    
        var grade = req.query.grade;
    
        var atumkc = req.query.atumkc;
    
        var locationtaken = req.query.locationtaken;
    
        var term = req.query.term;
    
        var request = new sql.Request();
    
        let query = "exec classestakenAdd @SID = '" + sid + "', @CLASSID = '" + classid + "', @GRADE = '" + grade + "', @ATUMKC = '" + atumkc + "', @LOCATIONTAKEN = '" + locationtaken + "', @TERM = '" + term + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.post('/term-add', function(req, res) {
    
        var classid = req.query.classid;
    
        var term = req.query.term;
    
        var section = req.query.section;
    
        var request = new sql.Request();
    
        let query = "exec termAdd @CLASSID = '" + classid + "', @TERM = '" + term + "', @SECTION = '" + section + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.post('/set-all-students-to-zero', function(req, res) {
    
        var jobid = req.query.jobid;
    
        var request = new sql.Request();
    
        let query = "exec setAllStudentsToZero @JOBID = '" + jobid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.post('/reject-one-student', function(req, res) {
    
        var jobid = req.query.jobid;	
    
        var student = req.query.student;
    
        var request = new sql.Request();
    
        let query = "exec rejectOneStudent @JOBID = '" + jobid + "', @STUDENT = '" + student + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.post('/accept-student', function(req, res) {
    
        var jobid = req.query.jobid;
        
        var student = req.query.student;
    
        var request = new sql.Request();
    
        let query = "exec acceptStudent @JOBID = '" + jobid + "', @STUDENT = '" + student + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.post('/reject-one-student', function(req, res) {
    
        var jobid = req.query.jobid;
        
        var student = req.query.student;
    
        var request = new sql.Request();
    
        let query = "exec rejectOneStudent @JOBID = '" + jobid + "', @STUDENT = '" + student + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.get('/get-job-listings', function(req, res) {
    
        var request = new sql.Request();
    
        let query = "exec getJobListings;"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.get('/get-applicants', function(res, req) {
    
        var jobtitle = req.query.jobtitle;
    
        var request = new sql.Request();
    
        let query = "exec getApplicants @JOBTITLE = '" + jobtitle + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.get('/get-jobs-by-class', function(req, res) {
    
        var classtitle = req.query.classtitle;
    
        var request = new sql.Request();
    
        let query = "exec getjobsbyclass @CLASSTITLE = '" + classtitle + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.get('/get-requirements-for-job', function(req, res) {
    
        var jobtitle = req.query.jobtitle;
    
        var request = new sql.Request();
    
        let query = "exec getRequirementsForJob @JOBTITLE = '" + jobtitle + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.get('/get-requirements-not-met', function(req, res) {
    
        var studentid = req.query.studentid;
    
        var jobid = req.query.jobid;
    
        var request = new sql.Request();
    
        let query = "exec getRequirementsNotMet @JOBID = '" + jobid + "', @STUDENTID = '" + studentid + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });
    
    app.get('/filter-applicants', function(req, res) {
    
        var jobid = req.query.jobid;
    
        var gpa = req.query.gpa;
    
        var grade_level = req.query.grade_level;
    
        var order_semesters = req.query.order_semesters;
    
        var order_gpa = req.query.order_gpa;
    
        var order_took_class = req.query.order_took_class;
    
        var request = new sql.Request();
    
        let query = "exec filterApplicants @JOBID = '" + jobid + "', @GPA = '" + gpa + "', @GRADE_LEVEL = '" + grade_level + "', @ORDER_SEMESTERS = '" + order_semesters + "', @ORDER_GPA = '" + order_gpa + "', @ORDER_TOOK_CLASS = '" + order_took_class + "';"
    
        request.query(query, function (err, recordset) {
                
            if (err) console.log(err)
    
            // send records as a response
            res.send(recordset);
            
        });
      
    });

});



var server = app.listen(5000, function () {
    console.log('Server is running..');
});
