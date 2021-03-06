import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./containers/Home/Index";
import Film from "./containers/Film/List";
import Detail from "./containers/Film/Detail";
import "./styles/reset.css";
import "./styles/icon.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNav : false,
        title : "卖座电影"
    }
  }
//修改showNav,用来切换菜单的状态
    toggleNav(){
        this.setState ({
            showNav : !this.state.showNav
        })
    }
  render() {
    return (
      <div>
          <Header title={this.state.title } toggleNav={this.toggleNav.bind(this)} />
          {this.state.showNav ? <Navbar toggleNav={this.toggleNav.bind(this)} /> : null}
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/film" component={Film} />
           <Route path="/detail/:id" exact component={Detail} />
         </Switch>
      </div>
    );
  }
}

export default App;
