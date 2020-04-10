import React from 'react';
import PropTypes from 'prop-types';
import ConvertBox from './components/ConvertBox.jsx'
import '../../../../../../styles/stylesComponents/converter/ConvLength.less';

export default class ConvLength extends React.Component {

    state = {
        outputValue: ''
    };

    convRef = {
        inputValue: React.createRef(),
        outputValue: React.createRef(),
        inputSelect: React.createRef(),
        outputSelect: React.createRef(),
        convertBtn: React.createRef()
    };

    selectBox = {
        meter: 1,
        verst: 1067,
        mile: 1609,
        foot: 0.3047851264858275,
        yard: 0.9144,
    };

    checkEnterNumber = event => {
        event.target.value =  event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    };

    calculate = () => {
        let convertToMeter = () => this.convRef.inputValue.current.value * this.selectBox[this.convRef.inputSelect.current.value];
        let convertFromMeter = (value) => value / this.selectBox[this.convRef.outputSelect.current.value];
        let result = convertFromMeter(convertToMeter());
        this.setState({
            outputValue: result
          });
    };

    render() {
        const {dictionary} = this.props;
        return (
            <main className='wrapper-main-conv'>
                <h2>{dictionary.resources.converterLength}</h2>
                <div className='content-box-conv'>
                    <ConvertBox 
                        dictionary={dictionary}
                        placeholderText={dictionary.placeholders.converterLength}
                        convertInputRef={this.convRef.inputValue}
                        convertSelectRef={this.convRef.inputSelect}
                        maxLength={10} 
                        callback={event => this.checkEnterNumber(event)}
                        meter={dictionary.resources.meter} />

                    <ConvertBox 
                        dictionary={dictionary}
                        placeholderText={dictionary.placeholders.converterResult}
                        convertInputRef={this.convRef.outputValue}
                        convertSelectRef={this.convRef.outputSelect}
                        value={this.state.outputValue}
                        meter={dictionary.resources.meter}
                        disabled={"disabled"} />
                </div>
                <div>
                    <button className='convBtn' ref={this.convRef.convertBtn} onClick={this.calculate}>{dictionary.resources.convert}</button>
                </div>
            </main>
        )
    }
}
