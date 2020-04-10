// import React from 'react';
// import PropTypes from "prop-types";
// import * as balls from './balls';
// const GameBall = props => {
//
//     return(
//         // <div className={'ball-box'}>
//         //     <canvas id="canvas" className="canvas"/>
//         // </div>
//         <div className='game'>
//             <canvas id="canvas-game"
//                     width="830px"
//                     height="300px"
//                     className="canvas"
//                     onClick={() => balls.makeBall(event)} />
//         </div>
//
//     )
// };
//
// export default React.memo(GameBall);



import React from 'react';
import '../../../../../../styles/stylesComponents/myAccount/game.less';
import * as balls from './balls'


export default class Game extends React.Component {

    componentDidMount() {
        let canvas = document.getElementById('canvas-game');
        balls.init(canvas);
    }

    render() {

        return (
            <div className='game'>
                <h2>{this.props.dictionary.resources.gameBalls}</h2>
                <div className='naebalovo'>
                <canvas id="canvas-game"
                        width="602px"
                        height="202px"
                        onClick={() => balls.makeBall(event)} />
                </div>
            </div>

        );
    }
}
