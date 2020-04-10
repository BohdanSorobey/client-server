import React from 'react';
import PropTypes from "prop-types";

const SelectHeaderBlock = props => {
    const {classNameDiv, classSelect, refSelect, callback, dictionary} = props;
    const checkSelected = () => {
        return localStorage.getItem("locale");
    };
    return(
        <div className={classNameDiv}>
            <select className={classSelect} ref={refSelect} onChange={callback} defaultValue={checkSelected()}>
                <option value={dictionary.resources.valueSelectEn}>{dictionary.resources.langEn}</option>
                <option value={dictionary.resources.valueSelectRu}>{dictionary.resources.langRu}</option>
                <option value={dictionary.resources.valueSelectAr}>{dictionary.resources.langAr}</option>
            </select>
        </div>
    )
};

SelectHeaderBlock.propTypes = {
    refSelect: PropTypes.object.isRequired,
    classSelect: PropTypes.string.isRequired,
    classNameDiv: PropTypes.string.isRequired,
    callback:PropTypes.func.isRequired
};

export default React.memo(SelectHeaderBlock);