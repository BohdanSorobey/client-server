import React from 'react';

const ConvertBox = props => {
    const {placeholderText, convertInputRef, convertSelectRef, value, maxLength, callback, disabled} = props;
    return (
        <div className='convert-item'>
            <input type='text' placeholder={placeholderText} ref={convertInputRef} defaultValue={value} maxLength={maxLength} onChange={callback} disabled={disabled} />
            <select className='convert-item-select' ref={convertSelectRef}>
                <option value='UAH'>UAH</option>
                <option value='EUR'>EUR</option>
                <option value='USD'>USD</option>
                <option value='RUR'>RUR</option>
            </select>
        </div>
    )
} 

export default ConvertBox