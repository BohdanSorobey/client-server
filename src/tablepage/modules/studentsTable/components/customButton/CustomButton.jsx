import React from 'react';
import PropTypes from 'prop-types';

const CustomButon = (props) => {
  const {
    nameButton, classNameButton, classNameDiv, dictionary, callback,
  } = props;
  return (
    <div className={classNameDiv}>
      <button onClick={callback} disabled={sessionStorage.getItem("teachers_id") === null ? "disabled" : null }
              className={classNameButton}>{dictionary.resources[nameButton]}</button>
    </div>
  );
};

CustomButon.propTypes = {
  nameButton: PropTypes.string.isRequired,
  classNameButton: PropTypes.string.isRequired,
  dictionary: PropTypes.object.isRequired,
  classNameDiv: PropTypes.string.isRequired,
  callback: PropTypes.func,
};

export default React.memo(CustomButon);
