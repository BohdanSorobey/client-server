import React from "react";
import GameBall from './components/GameBall.jsx'
import Chat from './components/chat/index'


export default class LeftBlockMyAccount extends React.Component {
    componentDidMount(){
        const xz = require('./components/balls');
    }
    render() {
        const {inputs, dictionary, onlineTeachers, teacher, socket} = this.props;
        return (
            <>
                <div className={'right-block'}>
                    <Chat socket = {socket} onlineTeachers ={onlineTeachers} dictionary={dictionary}/>
                    <GameBall dictionary={dictionary}/>
                </div>
            </>
        );
    }
};