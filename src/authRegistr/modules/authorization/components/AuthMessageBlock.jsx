import React from 'react';
import PropTypes from "prop-types";

const AuthMessage = props => {
    const {classNameDiv, classNameMessage, dictionary, refAuthMessage} = props;
    return(
        <div className={classNameDiv}>
            <div className={classNameMessage} ref={refAuthMessage}/>
        </div>
    )
};

AuthMessage.propTypes = {
    refAuthMessage: PropTypes.object.isRequired,
    classNameMessage: PropTypes.string.isRequired,
    dictionary: PropTypes.object.isRequired,
    classNameDiv: PropTypes.string.isRequired,
};

export default React.memo(AuthMessage);