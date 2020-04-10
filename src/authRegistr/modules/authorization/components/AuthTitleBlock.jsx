import React from 'react';
import PropTypes from "prop-types";

const AuthTitle = props => {
    const {classNameDiv, classNameMessage, dictionary } = props;
    return(
        <div className={classNameDiv}>
            <h1 className={classNameMessage} >{dictionary.resources.authorizationTitle}</h1>
        </div>
    )
};

AuthTitle.propTypes = {
    classNameMessage: PropTypes.string.isRequired,
    dictionary: PropTypes.object.isRequired,
    classNameDiv: PropTypes.string.isRequired,
};

export default React.memo(AuthTitle);