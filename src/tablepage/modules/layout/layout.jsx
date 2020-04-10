import React from "react";
import Header from "../header/index.jsx";
import Footer from "../footer/index.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as helpers from "./helpers/helpers";
import io from 'socket.io-client';
import * as constants from "../../constants/constants";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.adminOrNot();
    }

    socket = io("http://localhost:3020/");
    teacher = {id: sessionStorage.getItem("teachers_id"), login: sessionStorage.getItem("login")};

    adminOrNot = () => {
        if(this.props.teacher.login !== "admin") {
            this.props.getInfoTeachers(this.props.teacher.id);
            helpers.renderAllStudents(this.props.addStudent, this.props.teacher.id);
            helpers.renderAllGroups(this.props.insertGroups, this.props.teacher.id);
        }
    };

    sendGetRequestToMongo = async () => {
        let res = await fetch(`${constants.default.serverUrl}mongo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }).catch(err => console.log(err));
        let all = await res.json();
        await all.forEach(elem => this.props.addUsers(elem));
        let rest = this.props.allUsers.map(elem => {
            if(sessionStorage.getItem("login") === elem.info.login){
                return false
            } else {
                return true
            }
        });
        if(sessionStorage.getItem("login") === "admin")return false;
        if(rest.includes(false)){
            helpers.tracePublicInfo("exist")
        } else {
            helpers.tracePublicInfo()
        }
    };

    componentDidMount = () => {
        this.sendGetRequestToMongo();
        const { socket } = this;
        const { teacher, setChatUsers, setChats, setActiveChat, setIsRead } = this.props;
        if(sessionStorage.getItem("login") !== "admin") {
            socket.on('connect', () => {
                teacher.socket = socket.id;
                socket.emit('INIT_USER', teacher);
            });

            socket.on('SHOW_USERS', users => {
                const uniqueUsers = [];
                users.forEach(item => {
                    if (item.id === teacher.id) return;

                    let exist = false;
                    for (let i = 0; i < uniqueUsers.length; i++) {
                        if (item.id === uniqueUsers[i].id) {
                            exist = true;
                            break;
                        }
                    }
                    if (!exist) uniqueUsers.push(item);
                });
                setChatUsers(uniqueUsers);
            });

            socket.on("SHOW_CHATS", dataChats => {

                const {activeMode, activeChat} = this.props;
                let indexGeneralChat = 0;
                let exist = false;
                let isRead = true;
                for (let i = 0; i < dataChats.length; i++) {
                    if (dataChats[i].type === "General") {
                        indexGeneralChat = dataChats[i].id;
                    }
                    if (dataChats[i].id === activeChat) {
                        exist = true;
                    }
                    for (let j = 0; j < dataChats[i].participants.length; j++) {
                        if (dataChats[i].participants[j].id === teacher.id && dataChats[i].participants[j].isRead === false) {
                            if (dataChats[i].id === activeChat && activeMode === "account") {
                                dataChats[i].isRead = true;
                                socket.emit('READ', {idChat: dataChats[i].id, idTeacher: teacher.id});
                                return;
                            } else {
                                dataChats[i].isRead = false;
                                isRead = false;
                            }
                        } else if (dataChats[i].participants[j].id === teacher.id && dataChats[i].participants[j].isRead === true) {
                            dataChats[i].isRead = true;
                        }
                    }
                }

                if (isRead !== this.props.isRead) {
                    setIsRead(isRead);
                }

                if (!exist) {
                    setActiveChat(indexGeneralChat);
                }

                setChats(dataChats);
            });

            socket.on('disconnect', () => console.log("disconnect"));
        }
    };


    render() {

        const {changeCurrentMode, toggleSettingsModalWindow, currentMode, onlineTeachers, dictionary} = this.props;
        return (
            <>
                <div className="main-table-page" style={{direction: `${helpers.checkLocation()}`}}>
                    <header className="main-table-page__header">
                        <Header className="header" toggleSettingsModal = {toggleSettingsModalWindow} changeCurrentMode = {changeCurrentMode} currentMode={currentMode}/>
                    </header>
                    {helpers.checkCurrentMode(currentMode, this.socket, this.teacher, onlineTeachers, dictionary )}

                       <footer className="main-table-page__footer">
                           {sessionStorage.getItem("login") !== "admin" && currentMode === "account" ? <Footer className="footer"/> : null }
                    </footer>
                </div>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </>
        );
    }
}
