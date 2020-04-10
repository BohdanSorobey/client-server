import React from "react";
import PropTypes from 'prop-types';
import "../../../../../styles/stylesComponents/converter/mainConverter.less";
import ConvLength from './convLength/index.jsx';
import ConvCurrency from './convCurrency/index.jsx';

const ConverterTabs = props => {
    const {dictionary, callback, callback2, addClassNameConvLength, addClassNameConvCurrency} = props;
    return (
        <div className='converter-tabs'>
            <div className={addClassNameConvLength} onClick={callback}>{dictionary.resources.converterLength}</div>
            <div className={addClassNameConvCurrency} onClick={callback2}>{dictionary.resources.ConverterCurrency}</div>
        </div>
)};

export default class MainConverter extends React.Component {

    render() {
        const {dictionary, isConvLength, changeConvertorMode} = this.props;
        return (
            <main className='wrapper-main-converter'>
                <ConverterTabs 
                    dictionary={dictionary}
                    callback={changeConvertorMode}
                    callback2={changeConvertorMode}
                    addClassNameConvLength={isConvLength ? 'converter-length-tab converter-length-tab-border' : 'converter-length-tab'}
                    addClassNameConvCurrency={isConvLength ? 'converter-currency-tab' : 'converter-currency-tab converter-currency-tab-border'} />
                {isConvLength ? <ConvLength dictionary={dictionary}/> : <ConvCurrency dictionary={dictionary} /> }
            </main>
        )
    }
}
