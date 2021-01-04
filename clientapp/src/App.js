import React, { Component } from "react";
import TopBar from "./components/Topbar.js";
import Content from "./components/Content";
import css from "./App.css";
import searchbar from './searchbar.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50
    };

    return (
      <div className="contenido">
        <h1>La Noria</h1>
        <p>Mesa 5</p>
        <div className="searchbar-div"><input className="searchbar" type="search" placeholder="Buscar en el Menú" aria-label="Search" 
              /*startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>}/*/></input></div>
            
        
        <h1>Menú del día</h1>
        <Content styles={styles} />
        <h1>Entradas</h1>
      </div>
    );
  }
}

export default App;