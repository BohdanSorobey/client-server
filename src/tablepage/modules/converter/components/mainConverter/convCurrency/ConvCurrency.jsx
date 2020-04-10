import React from 'react';
import PropTypes from 'prop-types';
import ConvertBox from './components/ConvertBox.jsx'
import '../../../../../../styles/stylesComponents/converter/ConvCurrency.less';


export default class ConvCurrency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outputValueResult: '',
            error: null,
            currency: []
        };
        this.convRef = {
            inputValue: React.createRef(),
            outputValue: React.createRef(),
            inputSelect: React.createRef(),
            outputSelect: React.createRef(),
            convertBtn: React.createRef()
        };
    }

    componentDidMount() {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                currency: result
            });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
            this.setState({
                error
            });
            }
        )
    }
    
    countTheCurrency = () => {
        let result = null;

        if (this.convRef.inputSelect.current.value !== this.convRef.outputSelect.current.value) {
            if (this.convRef.inputSelect.current.value === 'UAH') {
                for (let i = 0; i < this.state.currency.length; i++) {
                    if (this.state.currency[i].ccy === this.convRef.outputSelect.current.value) {
                        result = this.convRef.inputValue.current.value / this.state.currency[i].sale;
                        this.setState({
                            outputValueResult: result.toFixed(4),
                        });
                    }
                }
            } else if (this.convRef.outputSelect.current.value === 'UAH') {
                for (let i = 0; i < this.state.currency.length; i++) {
                    if (this.state.currency[i].ccy === this.convRef.inputSelect.current.value) {
                        result = this.convRef.inputValue.current.value * this.state.currency[i].sale;
                        this.setState({
                            outputValueResult: result.toFixed(4),
                        });
                    }
                }
            } else {
                for (let i = 0; i < this.state.currency.length; i++) {
                    if (this.state.currency[i].ccy === this.convRef.inputSelect.current.value) {
                        result = this.convRef.inputValue.current.value * this.state.currency[i].buy;
                        this.setState({
                            outputValueResult: result.toFixed(4),
                        });
                    }
                }
                for (let i = 0; i < this.state.currency.length; i++) {
                    if (this.state.currency[i].ccy === this.convRef.outputSelect.current.value) {
                        result = result / this.state.currency[i].sale;
                        this.setState({
                            outputValueResult: result.toFixed(4),
                        });
                    }
                }
            }
        } else if (this.convRef.inputSelect.current.value === this.convRef.outputSelect.current.value) {
            this.setState({
                outputValueResult: this.convRef.inputValue.current.value,
            });
        }
    };


    checkEnterNumber = event => {
        event.target.value =  event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    };
   
       
    render() {

        const {dictionary} = this.props;
        return (
            <main className='wrapper-main-conv'>
                <h2>{dictionary.resources.ConverterCurrency}</h2>
                <div className='content-box-conv'>
                    <ConvertBox 
                        dictionary={dictionary}
                        placeholderText={dictionary.placeholders.converterLength}
                        convertInputRef={this.convRef.inputValue}
                        convertSelectRef={this.convRef.inputSelect}
                        maxLength={10} 
                        callback={event => this.checkEnterNumber(event)} />

                    <ConvertBox 
                        dictionary={dictionary}
                        placeholderText={dictionary.placeholders.converterResult}
                        convertInputRef={this.convRef.outputValue}
                        convertSelectRef={this.convRef.outputSelect}
                        value={this.state.outputValueResult}
                        meter={dictionary.resources.meter}
                        disabled={"disabled"} />
                </div>
                <div>
                    <button className='convBtn' ref={this.convRef.convertBtn} onClick={this.countTheCurrency} >{dictionary.resources.convert}</button>
                </div>
            </main>
        )
    }
}
