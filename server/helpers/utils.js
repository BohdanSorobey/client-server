const logger = require('./logger');

deleteStudentFromTable = (req, res, client, mongoCl) => {
    logger.writeLog("deleteStudentFromTable was received");
    const id = req.body.id;
    const db = mongoCl.db("test");
    const collection = db.collection("clicks");
    collection.find({ "login": req.body.teacherLogin }).toArray()
        .then(result => {
            if (result.length > 0) {
                collection.updateOne({ login: `${req.body.teacherLogin}` }, { $inc: { delete: +1 } });
            }
        }).catch(err => console.log(err));
    client.query(`DELETE FROM students WHERE user_id = ${id}`, [], function (err, result) {
        if (err) {
            logger.writeLog("deleteStudentFromTable: " + err);
            res.status(401).send("error")
        } else {
            logger.writeLog("deleteStudentFromTable: success");
            res.status(200).send("ok")
        }
    });
};

autorizationValidationCheck = (req, res, client, mongoCl) => {
    logger.writeLog("autorizationValidationCheck was received");
    const db = mongoCl.db("test");
    const collection = db.collection("clicks");
    collection.find({ "login": req.body.login }).toArray()
        .then(result => {
            if (result.length > 0) {
                collection.updateOne({ login: `${req.body.login}` }, { $inc: { sessions: +1 } });
            }
        }).catch(err => console.log(err));
    var user = { login: req.body.login, password: req.body.password };
    var baseLogin;
    var basePassword;
    client.query(`SELECT * FROM teachers WHERE login = '${user.login}';`, [], function (err, result) {
        if (err) {
            logger.writeLog("autorizationValidationCheck: " + err);
        } else {
            for (var key in result.rows) {

                baseLogin = result.rows[key].login;
                basePassword = result.rows[key].password;
                teacherId = result.rows[key].teachers_id;

            }
            if (baseLogin === `${user.login}` && basePassword === `${user.password}`) {
                logger.writeLog("autorizationValidationCheck: success");
                res.json(result.rows)
            } else {
                authorizated = "";
                logger.writeLog("autorizationValidationCheck: unauthorized");
                res.status(401).send('Unauthorized ');

            }
        }
    });
};

registrationRequest = (req, res, client) => {
    logger.writeLog("registrationRequest was received");
    var user = {
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        keyword: req.body.keyword
    };
    client.query(`SELECT * FROM teachers WHERE login = '${user.login}';`, [], function (err, result) {
        if (err) {
            logger.writeLog("registrationRequest: " + err);
        } else {
            var baselogin;
            for (var key in result.rows) {
                baselogin = result.rows[key].login;
            }
            if (baselogin !== `${user.login}`) {
                var newUser = `INSERT INTO teachers(login, password, email, phone_number,keyword) VALUES ('${user.login}', '${user.password}', '${user.email}', '${user.phone}','${user.keyword}')`;
                client.query(newUser, (err, result) => {
                    if(err){
                        logger.writeLog("registrationRequest: " + err);
                        return;
                    }else{
                        logger.writeLog("registrationRequest: success");
                        res.status(200).send('Ok');
                    }
                });
            } else {
                logger.writeLog("registrationRequest: bad request");
                res.status(400).send('Bad Request ');
            }
        }
    });
};

accountSettingsRequest = (req, res, client) => {
    logger.writeLog("accountSettingsRequest was received");
    client.query(`SELECT * FROM teachers WHERE teachers_id = '${teacherId}';`, [], function (err, result) {
        if(err){
            logger.writeLog("accountSettingsRequest: " + err);
        }else{
            if (result.rows !== undefined) {
                logger.writeLog("accountSettingsRequest: success");
                res.json(result.rows);
            }
        }
    });
};

createGroupRequest = (req, res, client) => {
    logger.writeLog("createGroupRequest was received");
    var newGroup = `INSERT INTO groups(groupname, teacher_id) VALUES 
    ('${req.body.groupName}', ${req.body.teachers_id})`;
    client.query(newGroup, [],
        function (err, result) {
            if (err) {
                logger.writeLog("createGroupRequest: " + err);
                res.status(400).send(err);
            }
        });
    client.query(`SELECT * FROM groups WHERE groupname = '${req.body.groupName}';`, [], function (err, result) {
        if (err) {
            logger.writeLog("createGroupRequest: " + err);
            res.status(400).send(err)
        } else {
            logger.writeLog("createGroupRequest: success");
            res.json(result.rows[0]);
        }
    });
};

createStudent = (req, res, client, mongoCl) => {
    logger.writeLog("createStudent was received");
    const db = mongoCl.db("test");
    const collection = db.collection("clicks");
    collection.find({ "login": req.body.teacherLogin }).toArray()
        .then(result => {
            if (result.length > 0) {
                collection.updateOne({ login: `${req.body.teacherLogin}` }, { $inc: { create: +1 } });
            }
        }).catch(err => console.log(err));
    var user = {
        username: req.body.firstname,
        age: req.body.age,
        lastname: req.body.lastname,
        city: req.body.city,
        groups_id: req.body.groups_id
    };
    var returnedId;

    var newUser = `INSERT INTO students( firstname, lastname, age, city, groups_id) VALUES
    ('${user.username}', '${user.lastname}', '${user.age}', '${user.city}', ${user.groups_id}) RETURNING user_id`;
    client.query(newUser, [],
        function (err, result) {
            returnedId = result.rows[0].user_id;
            if (err) {
                logger.writeLog("createStudent: " + err);
                res.status(400).send("error")
            } else {
                client.query(`SELECT * FROM students WHERE user_id = ${returnedId} ORDER BY user_id;`, [], function (err, result) {
                    if (err) {
                        logger.writeLog("createStudent: " + err);
                        res.status(400).send("error")
                    } else {
                        logger.writeLog("createStudent: success");
                        res.json(result.rows)
                    }
                });
            }
        });
};

updateStudent = (req, res, client, mongoCl) => {
    logger.writeLog("updateStudent was received");
    const db = mongoCl.db("test");
    const collection = db.collection("clicks");
    collection.find({ "login": req.body.teacherLogin }).toArray()
        .then(result => {
            if (result.length > 0) {
                collection.updateOne({ login: `${req.body.teacherLogin}` }, { $inc: { update: +1 } });
            }
        }).catch(err => console.log(err));
    client.query(`UPDATE students SET firstname = '${req.body.username}', lastname = '${req.body.lastname}', age = '${req.body.age}',
        city = '${req.body.city}' WHERE user_id = ${req.body.id}`, [], function (err, result) {
        if (err) {
            logger.writeLog("updateStudent: " + err);
            console.log(err);
        } else {
            logger.writeLog("updateStudent: success");
            res.send("ok")
        }
    })
};

accountUpdate = (req, res, client) => {
    logger.writeLog("accountUpdate was received");
    var teacherId = {
        id: req.body.teachers_id
    };
    var teachersSqlColumn = [
        "login",
        "password",
        "email",
        "phone_number",
        "about_myself",
        // "teacher_icon"
    ];

    var queryComand = "";

    var valueCounter = 0;
    var counterLink = 1;

    var user = {
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        phone_number: req.body.phone,
        about_myself: req.body.aboutMyself,
        // teacher_icon: req.body.teacher_icon
    };

    var upgradeSQL = [];

    Object.keys(user).forEach(function (key) {
        if (!(this[key].length === 0)) {
            upgradeSQL.push(`${this[key]}`);
            // if ()
            queryComand += teachersSqlColumn[valueCounter] + "= $" + counterLink + ",";

            counterLink++
        }
        valueCounter++;
    }, user);

    queryComand = queryComand.substring(0, queryComand.length - 1);

    client.query(`UPDATE teachers SET ${queryComand} WHERE teachers_id = ${teacherId.id}`,
        upgradeSQL,
        function (err, result) {
            if (err) {
                logger.writeLog("accountUpdate: " + err);
                console.log(err);
            }else{
                logger.writeLog("accountUpdate: success");
                console.log(result);
            }
        });
};

forgottenPass = (req, res, client) => {
    logger.writeLog("forgottenPass was received");
    var user = {
        login: req.body.login,
        keyword: req.body.keyword,

    };

    client.query(`SELECT * FROM teachers WHERE login = '${user.login}';`, [], function (err, result) {
        if(err){
            logger.writeLog("forgottenPass: " + err);
        }else{

            var baseLogin;
            var basekeyword;
            var basePassword;
            for (var key in result.rows) {
    
                baseLogin = result.rows[key].login;
                basekeyword = result.rows[key].keyword;
                basePassword = result.rows[key].password;
    
            }
    
            if (baseLogin === `${user.login}` && basekeyword === `${user.keyword}`) {
                authorizated = req.body.login;
                logger.writeLog("forgottenPass: success");
                res.json(basePassword);
            } else {
                authorizated = "";
                logger.writeLog("forgottenPass: unauthorized");
                res.status(401).send('Unauthorized ');
            }
        }
    });
};

deleteGroup = (req, res, client) => {
    logger.writeLog("deleteGroup was received");
    var id = req.body.groupId;

    client.query(`DELETE FROM students WHERE groups_id = ${id}`, [], function (err, result) {
        if (err) {
            logger.writeLog("deleteGroup: " + err);
            console.log(err)
        }
    });
    client.query(`DELETE FROM groups WHERE groups_id = ${id}`, [], function (err, result) {
        if (err) {
            logger.writeLog("deleteGroup: " + err);
            res.status(401).send("error")
        } else {
            logger.writeLog("deleteGroup: success");
            res.status(200).send("ok")
        }
    });
};

clearStudents = (req, res, client) => {
    logger.writeLog("clearStudents was received");
    var id = req.body.groupId;

    client.query(`DELETE FROM students WHERE groups_id = ${id}`, [], function (err, result) {
        if (err) {
            logger.writeLog("clearStudents: " + err);
            res.status(401).send("error")
        } else {
            logger.writeLog("clearStudents: " + success);
            res.status(200).send("ok")
        }
    });
};

updateGroup = (req, res, client) => {
    logger.writeLog("updateGroup was received");
    client.query(`UPDATE groups SET groupname = '${req.body.name}' WHERE groups_id = ${req.body.id};`, [], (err, response) => {
        if (err) {
            logger.writeLog("updateGroup: " + err);
            res.status(502).send("SERVER ERROR");
        } else {
            logger.writeLog("updateGroup: success");
            res.status(200).send("ok");
        }
    });
};

sendImage = (req, res, client) => {
    logger.writeLog("sendImage was received");
    client.query(`UPDATE teachers SET teacher_icon = '${req.body.img}' WHERE teachers_id = ${req.body.teachersId};`, [], (err, response) => {
        if (err) {
            logger.writeLog("sendImage: " + err);
            res.status(500).send(err);
        } else {
            client.query(`SELECT * FROM teachers WHERE teachers_id = ${req.body.teachersId}`, [], function (err, result) {
                if(err){
                    logger.writeLog("sendImage: " + err);
                }else{
                    logger.writeLog("sendImage: success");
                    res.json(result.rows);
                }
            });
        }
    });
};

resetSettings = (req, res, client) => {
    logger.writeLog("resetSettings was received");
    req.body.teacherId.groups.forEach(elem => client.query(`DELETE FROM students WHERE groups_id = ${elem}`, [], function (err, result) {
        if (err) {
            logger.writeLog("resetSettings: " + err);
            res.status(500).send(err)
        }
    }));

    client.query(`DELETE FROM groups WHERE teacher_id = ${+req.body.teacherId.id};`, [], function (err, result) {
        if (err) {
            logger.writeLog("resetSettings: " + err);
            res.status(500).send(err)
        } else {
            logger.writeLog("resetSettings: success");
            res.status(200).send("ok")
        }
    });
};

getGroupOfStudents = (req, res, client) => {
    logger.writeLog("getGroupOfStudents was received");
    client.query(`select students.user_id, students.firstname, students.lastname, students.age, students.city, students.groups_id
  from students inner join groups on students.groups_id = groups.groups_id
  where groups.teacher_id = ${req.body.id}
     order by students.user_id`, [], function (err, result) {
         if(err){
            logger.writeLog("getGroupOfStudents: " + err);
         }else{
            logger.writeLog("getGroupOfStudents: success");
            res.json(result.rows);
         }
    });
};

getAllGroups = (req, res, client) => {
    logger.writeLog("getAllGroups was received");
    client.query(`SELECT * FROM groups WHERE teacher_id = ${req.body.teachers_id} ORDER BY groups_id;`, [], function (err, result) {
        if(err){
            logger.writeLog("getAllGroups: " + err);
        }else{
            logger.writeLog("getAllGroups: success");
            res.json(result.rows);
        }
    });
};

getTeacherInfo = (req, res, client) => {
    logger.writeLog("getTeacherInfo was received");
    client.query(`SELECT * FROM teachers WHERE teachers_id = ${+req.body.teacher_id}`, [], function (err, result) {
        if(err){
            logger.writeLog("getTeacherInfo: " + err);
        }else{
            logger.writeLog("getTeacherInfo: success");
            res.json(result.rows);
        } 
    });
};

updateInfoTeach = (req, res, client) => {
    logger.writeLog("updateInfoTeach was received");
    let logins = [];
    let teachers = [];
    let unic = true;
    client.query(`SELECT * FROM teachers`, [], function (err, result) {
        if(err){
            logger.writeLog("updateInfoTeach: " + err);
            return;
        }
        result.rows.forEach(elem => logins.push(elem.login));
        result.rows.forEach(elem => teachers.push(elem.teachers_id));
        for (let i = 0; i < logins.length; i++) {
            if (req.body.login === logins[i]) {
                if (req.body.teacherId != teachers[i]) {
                    unic = false;
                    break;
                }
            }
        }
        if (unic) {
            client.query(`UPDATE teachers SET 
                    login = '${req.body.login}', 
                    email = '${req.body.email}', 
                    phone_number = '${req.body.phone_number}' ,
                    about_myself = '${req.body.area}'
                    WHERE teachers_id = ${+req.body.teacherId}`, [], function (err, result) {
                        if(err){
                            logger.writeLog("updateInfoTeach: " + err);
                            return;
                        }
                        logger.writeLog("updateInfoTeach: success");
                        res.json("success");
            });
        } else {
            logger.writeLog("updateInfoTeach: Not unikalno");
            res.status(500).json('Not unikalno');
        }
    });
};
getPasswordForgot = (req, res, client) => {
    client.query(`SELECT * FROM teachers WHERE login = '${req.body.login}'`, [], function (err, result) {
        res.json(result.rows);
    });
};

module.exports = {
    deleteStudentFromTable,
    autorizationValidationCheck,
    registrationRequest,
    accountSettingsRequest,
    createGroupRequest,
    createStudent,
    updateStudent,
    accountUpdate,
    forgottenPass,
    deleteGroup,
    clearStudents,
    updateGroup,
    sendImage,
    resetSettings,
    getGroupOfStudents,
    getAllGroups,
    getTeacherInfo,
    updateInfoTeach,
    getPasswordForgot,
};