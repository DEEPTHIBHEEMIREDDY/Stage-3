import React,{Component} from 'react';
import Controller from './Details/LoginController';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className="App">
        <Controller />
      </div>
    )
  }
}
export default App;