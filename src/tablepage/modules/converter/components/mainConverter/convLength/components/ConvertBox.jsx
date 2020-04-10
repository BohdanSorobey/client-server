import React from 'react';


const ConvertBox = props => {
    const {placeholderText, convertInputRef, convertSelectRef, value, maxLength, callback, disabled, dictionary} = props
    return (
        <div className='convert-item'>
            <input type='text' placeholder={placeholderText} ref={convertInputRef} defaultValue={value} maxLength={maxLength} onChange={callback} disabled={disabled} />
            <select className='convert-item-select' ref={convertSelectRef}>
                <option value='meter'>{dictionary.resources.meter}</option>
                <option value='verst'>{dictionary.resources.verst}</option>
                <option value='mile'>{dictionary.resources.mile}</option>
                <option value='foot'>{dictionary.resources.foot}</option>
                <option value='yard'>{dictionary.resources.yard}</option>
            </select>
        </div>
    )
} 

export default ConvertBox