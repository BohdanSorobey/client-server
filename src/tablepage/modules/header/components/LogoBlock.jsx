import React from 'react';
import PropTypes from "prop-types";

const LogoBlock = props => {
    const {classNameDiv, srcImage, classImg, callback} = props;
    return(
        <div className={classNameDiv}>
            <img src={srcImage} className={classImg} onClick={callback}/>
        </div>
    )
};

LogoBlock.propTypes = {
    classImg: PropTypes.string.isRequired,
    srcImage: PropTypes.string.isRequired,
    classNameDiv: PropTypes.string.isRequired,
};

export default React.memo(LogoBlock);