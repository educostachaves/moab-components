import React, { Component } from 'react';

import Footer from '../footer';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section>
        {this.props.children}
        <Footer />
      </section>
    );
  }
}

export default App;