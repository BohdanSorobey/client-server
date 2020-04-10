import React from 'react'
import Keypad from '../keypad/Keypad'
import Display from '../display/Display'
import '../../../../../styles/stylesComponents/calculator/App.less'

const App = ({ displayValue, mode, trigUnit, dictionary, ...keypadProps }) => (
  <div className="App">
    <div className={`calculator ${mode}`}>
        <h1>{dictionary.resources.calculatorMode}</h1>
      <Display trigUnit={trigUnit} value={displayValue} mode={mode} />
      <Keypad trigUnit={trigUnit} {...keypadProps} />
    </div>
  </div>
);

export default App
