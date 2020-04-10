const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const bodyParser = require("body-parser");
const constants = require("./helpers/constants");
const utils = require("./helpers/utils");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const logger = require('./helpers/logger');
const mongoClient = new MongoClient(url, { useNewUrlParser: true  });

app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({limit: '50mb', extended: true}));
const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));

client.connect(function (err) {
    console.log("Connected!");
    logger.writeLog("Postgres was connected");

});
let mongoCl;
mongoClient.connect(function(err, client){
    mongoCl = client;
    console.log("connected mongo");
    logger.writeLog("Mongo was connected");
});

app.post(constants.deleteStudentUrl,  (req, res) => utils.deleteStudentFromTable(req, res, client, mongoCl));
app.post(constants.authorizationUrl,  (req, res) => utils.autorizationValidationCheck(req, res, client, mongoCl));
app.post(constants.registrationUrl,  (req, res) => utils.registrationRequest(req, res, client));
app.post(constants.groupStudentUrl, (req, res) => utils.getGroupOfStudents(req, res, client));
app.post(constants.getAllGroupsUrl, (req, res) => utils.getAllGroups(req, res, client));
app.get(constants.accountSettingUrl,  (req, res) => utils.accountSettingsRequest(req, res, client));
app.post(constants.groupsUrl,  (req, res) => utils.createGroupRequest(req, res, client));
app.post(constants.insertStudentUrl, (req, res) => utils.createStudent(req, res, client, mongoCl));
app.post(constants.updateStudentUrl, (req, res) => utils.updateStudent(req, res, client, mongoCl));
app.post(constants.accountupdateUrl,  (req, res) => utils.accountUpdate(req, res, client));
app.post(constants.forgottenPassUrl,  (req, res) => utils.forgottenPass(req, res, client));
app.post(constants.deleteGroupUrl,  (req, res) => utils.deleteGroup(req, res, client));
app.post(constants.clearStudentsUrl,  (req, res) => utils.clearStudents(req, res, client) );
app.post(constants.updateGroupUrl,  (req, res) => utils.updateGroup(req, res, client));
app.post(constants.sendImageUrl,  (req, res) => utils.sendImage(req, res, client) );
app.post(constants.resetSettingsUrl,  (req, res) => utils.resetSettings(req, res, client));
app.post(constants.getInfoTeacherUrl, (req, res) => utils.getTeacherInfo(req, res, client));
app.post(constants.updateInfoTeach, (req, res) => utils.updateInfoTeach(req, res, client));
app.post(constants.getPassword, (req, res) => utils.getPasswordForgot(req, res, client));



app.post("/mongo",  (req, res) => {
    const db = mongoCl.db("test");
    const collection = db.collection("users");
    collection.find({}).toArray().then(result => res.send(result))
         .catch(err => console.log(err));
});

app.post("/mongoCreateUser",  (req, res) => {
    let info = req.body;
    const db = mongoCl.db("test");
    const collection = db.collection("users");
    collection.insertOne({ "_id": info.login, info});
    const collection2 = db.collection("clicks");
    collection2.insertOne({"_id": req.body.login, "login":req.body.login,
        "create":0, "update":0, "delete":0, "converter": 0, "calculator": 0, "paint":0, "table":0, "sessions":1, "messages":0})
});

app.post("/updateMongoMessages",  (req, res) => {
    const db = mongoCl.db("test");
    const collection = db.collection("clicks");
    collection.find({"login": req.body.teacherLogin}).toArray()
        .then(result => {
            if (result.length > 0) {
                collection.updateOne({login: `${req.body.teacherLogin}`}, {$inc: {messages: + 1}});
            }
        }).then(() => res.send("ok"))
        .catch(err => console.log(err));
});

app.post("/updateMongoTime",  (req, res) => {
    const db = mongoCl.db("test");
    const collection = db.collection("clicks");
    collection.find({"login": req.body.teacherLogin}).toArray()
        .then(result => {
            if (result.length > 0) {
                switch(req.body.mode){
                    case "table":{
                        collection.updateOne({login: req.body.teacherLogin}, {$inc: {"table": req.body.time}});
                        break;
                    }
                    case "calculator": {
                        collection.updateOne({login: req.body.teacherLogin}, {$inc: {"calculator": req.body.time}});
                        break;
                    }
                    case "paint": {
                        collection.updateOne({login: req.body.teacherLogin}, {$inc: {"paint": req.body.time}});
                        break;
                    }
                    case "converter": {
                        collection.updateOne({login: req.body.teacherLogin}, {$inc: {"converter": req.body.time}});
                        break;
                    }
                }
            }
        }).then(() => res.send("ok"))
        .catch(err => console.log(err));

});

app.post("/updateMongoUser",  (req, res) => {
    const info = req.body;
    const db = mongoCl.db("test");
    const collection = db.collection("users");
    collection.find({"login": req.body.teacherLogin}).toArray()
        .then(result => {
            if (result.length > 0) {
                collection.updateOne({"_id": `${req.body.login}`}, {$set: {info}}, {upsert: true});
            }
        }).then(() => res.send("ok"))
        .catch(err => console.log(err));
});

app.post("/mongoGetClicks",  (req, res) => {
    const db = mongoCl.db("test");
    const collection = db.collection("clicks");
    collection.find({}).toArray().then(result => res.send(result))
        .catch(error => console.log(error));
});
//try on enginx
app.use(express.static("/Users/bogdan/Downloads/frontEndLearn/DataStudentsUsage/dist/"));
app.post("/table", (req, res) =>{
    res.sendFile("/Users/bogdan/Downloads/frontEndLearn/DataStudentsUsage/dist/table.html")
});

app.listen(constants.port, function () {
    console.log("port: " + constants.port)
});

const webSocket = express();
const webSocketServer = webSocket.listen(3020, () => {
    console.log(`Websocket running on port 3020`);
});

const users = [];
const rooms = [{
    id: 1,
    type: "General",
    name: "General chat",
    participants: [],
    messages: [],
}];

const io = require('socket.io')(webSocketServer);
io.sockets.on('connection', socket => {
    console.log('new user connected');

    socket.on("INIT_USER", teacher => {
        users.push(teacher);


        let userChats = [];
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].type === "General") {
                rooms[i].participants.push({...teacher, isRead: true});
                userChats.push(rooms[i]);
            } else {
                for (let j = 0; j < rooms[i].participants.length; j++) {
                    if (teacher.id === rooms[i].participants[j].id) {
                        rooms[i].participants.push({...teacher, isRead: true});
                        userChats.push(rooms[i]);
                        break;
                    }
                }
            }
        }
        users.forEach(item => users.length !== 0 ? io.sockets.sockets[item.socket].emit('SHOW_USERS', users) : null);
        socket.emit("SHOW_CHATS", userChats);
    });

    socket.on('ADD_PRIVATE_CHAT', dataChat => {

        for (let i = 0; i < users.length; i++) {
            if (dataChat.participants[0].id === users[i].id && dataChat.participants[0].socket !== users[i].socket) {
                dataChat.participants.push({...users[i], isRead: true});
            }
            if (dataChat.participants[1].id === users[i].id && dataChat.participants[1].socket !== users[i].socket) {
                dataChat.participants.push({...users[i], isRead: false});
            }
        }
        rooms.push(dataChat);

        for (let k = 0; k < dataChat.participants.length; k++) {
            let userChats = [];
            for (let j = 0; j < rooms.length; j++) {
                for (let y = 0; y < rooms[j].participants.length; y++) {
                    if (dataChat.participants[k].socket === rooms[j].participants[y].socket) {
                        userChats.push(rooms[j])
                        break;
                    }
                }
            }
            io.sockets.sockets[dataChat.participants[k].socket].emit('SHOW_CHATS', userChats);
            userChats.length = 0;
        }
    });

    socket.on('SEND_MESSAGE', messageData => {
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].id === messageData.idRoom) {
                rooms[i].messages.push({login: messageData.login, message: messageData.message});

                for (let j = 0; j < rooms[i].participants.length; j++) {
                    if (rooms[i].participants[j].id === messageData.idTeacher) {
                        rooms[i].participants[j].isRead = true;
                    } else {
                        rooms[i].participants[j].isRead = false;
                    }
                }

                for (let u = 0; u < rooms[i].participants.length; u++) {
                    let userChats = [];
                    for (let k = 0; k < rooms.length; k++) {
                        for (let y = 0; y < rooms[k].participants.length; y++) {
                            if (rooms[i].participants[u].socket === rooms[k].participants[y].socket) {
                                userChats.push(rooms[k]);
                                break;
                            }
                        }
                    }
                    if(rooms[i].participants[u].socket !== null ){
                        io.sockets.sockets[rooms[i].participants[u].socket].emit('SHOW_CHATS', userChats);
                    }
                }
                break;
            }
        }
    });

    socket.on("READ", dataChat => {
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].id === dataChat.idChat) {
                for (let j = 0; j < rooms[i].participants.length; j++) {
                    if (rooms[i].participants[j].id === dataChat.idTeacher) {
                        rooms[i].participants[j].isRead = true;
                    }
                }
                break;
            }
        }

        for (let i = 1; i < users.length; i++) {
            if (users[i].id === dataChat.idTeacher) {
                let userChats = [];
                for (let j = 0; j < rooms.length; j++) {
                    for (let y = 0; y < rooms[j].participants.length; y++) {
                        if (rooms[j].participants[y].socket === users[i].socket) {
                            userChats.push(rooms[j]);
                            break;
                        }
                    }
                }
                io.sockets.sockets[users[i].socket].emit('SHOW_CHATS', userChats);
            }
        }
    });

    socket.on("LEAVE_CHAT", idChat => {
        for (let i = rooms.length - 1; i >= 0; i--) {
            if (rooms[i].id === idChat) {
                let participants = rooms[i].participants;
                rooms.splice(i, 1);

                for (let j = 0; j < participants.length; j++) {
                    let userChats = [];
                    for (let k = 0; k < rooms.length; k++) {
                        for (let y = 0; y < rooms[k].participants.length; y++) {
                            if (participants[j].socket === rooms[k].participants[y].socket) {
                                userChats.push(rooms[k]);
                                break;
                            }
                        }
                    }
                    io.sockets.sockets[participants[j].socket].emit('SHOW_CHATS', userChats);
                }
                break;
            }
        }
    });

    socket.on('disconnect', () => {
        //delete session
        for (let i = 0; i < users.length; i++) {
            if (users[i].socket === socket.id) {
                users.splice(i, 1);
                break;
            }
        }

        //delete from chats
        for (let i = rooms.length - 1; i >= 0; i--) {
            if (rooms[i].type === "General") {
                for (let j = 0; j < rooms[i].participants.length; j++) {
                    if (rooms[i].participants[j].socket === socket.id) {
                        rooms[i].participants.splice(j, 1);
                        if (rooms[i].participants.length === 0) {
                            rooms[i].messages.length = 0;
                        }
                        break;
                    }
                }
            } else {
                for (let j = 0; j < rooms[i].participants.length; j++) {
                    if (rooms[i].participants[j].socket === socket.id) {
                        let idUser = rooms[i].participants[j].id;
                        rooms[i].participants.splice(j, 1);
                        let participants = rooms[i].participants;

                        let exist = false;
                        for (let y = 0; y < participants.length; y++) {
                            if (idUser === participants[y].id) {
                                exist = true;
                                break;
                            }
                        }

                        if (!exist) rooms.splice(i, 1);

                        for (let h = 0; h < participants.length; h++) {
                            let userChats = [];
                            for (let k = 0; k < rooms.length; k++) {
                                for (let l = 0; l < rooms[k].participants.length; l++) {
                                    if (participants[h].socket === rooms[k].participants[l].socket) {
                                        userChats.push(rooms[k]);
                                        break;
                                    }
                                }
                            }
                            io.sockets.sockets[participants[h].socket].emit('SHOW_CHATS', userChats);
                            userChats.length = 0;
                        }
                        break;
                    }
                }
            }
        }
        users.forEach(item => io.sockets.sockets[item.socket].emit('SHOW_USERS', users));
    })
});

webSocket.use(
    express.json()
);