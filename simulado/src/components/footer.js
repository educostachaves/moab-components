import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <footer className={'footer-simulado'}>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <ul className="footer-copyright">
                <li><p>Copyright © 2017 Master OAB </p></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="footer-privacy">
                <li><a href="/politica-de-privacidade"><small>Política de privacidade</small></a></li>
                <li><a href="/termos-de-uso"><small>Termos de uso</small></a></li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="footer-social">
                <li><a target="_blank" href="https://www.facebook.com.br/masteroab"><span className="fa fa-facebook"></span></a></li>
                <li><a target="_blank" href="https://www.twitter.com/masteroab"><span className="fa fa-twitter"></span></a></li>
                <li><a target="_blank" href="https://www.instagram.com/masteroab"><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;