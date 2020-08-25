import React, {Component} from 'react';
import './App.css'
import Die from './Die'
import RollDice from './RollDice'
import Helper from './Helper';

class App extends Component{
    render(){
        return(
            <div className="App">
               <Helper />
               <Die />
            </div>
        )

    }
}

export default App;
