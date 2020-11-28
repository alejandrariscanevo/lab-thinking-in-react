import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './components/SearchInput';
import { Table } from './components/Table';
import dataInfo from './data.json'
class App extends Component {

  state={
    store:dataInfo.data
  }

  handleChange = (event) => {

    const{value,name} = event.target
    let {store} = this.state
    console.log("que es?",value,name)

    let newStore = dataInfo.data.filter((item, index)=> item.name.toLowerCase().includes(value.toLowerCase()))

    console.log("este es el nuevo arreglo", newStore)

    this.setState({store:newStore})

  }
  render(){
  return (
    <div className="App">
      <div>
      <span>Iron Store</span>
      </div>
    {/**
    *Aqui va mis buscadpr */}
    <SearchInput
      handleChange={this.handleChange}
    />
    {/**
     *Aqui va mi tabla*/}
     <Table
       store={this.state.store}
     />
    </div>
  );
}
}

export default App;
