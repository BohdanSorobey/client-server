import React from "react";
import * as helpers from "./helpers/helpersAdmin";
import * as constants from "../../constants/constants";

export default class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.sendRequestToMongo()
    }
    clicks = null;
    popularMode = null;

    sendRequestToMongo = async () => {
        let res = await fetch(`${constants.default.serverUrl}mongoGetClicks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }).catch(err => console.log(err));
       let all = await res.json();
       await all.forEach(elem => this.props.addClicks(elem));
        this.clicks = await helpers.checkClicks(this.props.allClicks);
        this.popularMode = await helpers.checkPopularMode(this.props.allClicks);
        this.isChat = await helpers.checkIsChat(this.props.allClicks);
    };

    render() {

        const { dictionary, divss, allUsers, allClicks} = this.props;
        return (
            <>
                <h1 className={"student-title"}>Admin</h1>
                <div className={"header-table"}>
                    {divss.map((elem) => <div className={elem.classDiv} key={elem.name} >{elem.resourceKey}</div>)}
                </div>
                <div>
                    {allUsers.map((elem, i) => <div className={"row-users"} key={elem._id} >
                        <div className={"col-admin-users"}>{elem.info.login}</div>
                        <div className={"col-admin-users"}>{allClicks[i]=== undefined ? null : allClicks[i].sessions}</div>
                        <div className={"col-admin-users"}>{this.popularMode === null ? null : this.popularMode[i]}</div>
                        <div className={"col-admin-users"}>{this.clicks === null ? null : this.clicks[i]}</div>
                        <div className={"col-admin-users"}>{elem.info.device}</div>
                        <div className={"col-admin-users"}>{elem.info.city}</div>
                        <div className={"col-admin-users"}>{elem.info.ip}</div>
                        <div className={"col-admin-users"}>{elem.info.browser}</div>
                        <div className={"col-admin-users"}>{this.isChat === null ? null : this.isChat[i]}</div>
                    </div>)}
                </div>
            </>
        );
    }
};
