import React from 'react';
import PropTypes from "prop-types";
import InputBlock from "../../authorization/components/InputBlock";
import * as validation from "../../helpers/authortizationValidator";

const SelectHeaderBlock = props => {

    const {classNameDiv, classSelect, refSelect, callback, dictionary, options} = props;
    const checkSelected = () => {
        return localStorage.getItem("locale");
    };
    return(
        <div className={classNameDiv}>
            <select className={classSelect} ref={refSelect} onChange={callback} defaultValue={checkSelected()}>
                {options.map(elem => <option key={elem.name} value={dictionary.resources[elem.resourceKey]}>{dictionary.resources[elem.name]}</option>)}
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