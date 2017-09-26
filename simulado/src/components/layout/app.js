import React, { Component } from 'react';

import Navbar from '../navbar/navbar';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navbar : { 
        links : [
          {dropdown: true, text: "Questões", links: [
            {linkTo: "#", text: "Dropdown Link 1"},
            {linkTo: "#", text: "Dropdown Link 2", active: true}
          ]}
        ]
      }
    }
  }

  render() {
    return (
      <section>
        <Navbar {...this.state.navbar}/>
        {this.props.children}
      </section>
    );
  }
}

export default App;