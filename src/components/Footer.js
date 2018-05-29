import React,{Component} from 'react';
import logo from '../dfs.png';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import gamble from '../gamble.png';
import thawte from '../thawte.png';
import adult from '../adult.png';

class Footer extends Component {
  render(){
    return(
      <footer>
        <Router>
          <div className="footer_section">
            <img src={logo} width="250" alt="Globaldfs"/>
            <div>
              <ul className="footerlinks">
                <li><Link to="">Help</Link></li>
                <li><Link to="">Banking</Link></li>
                <li><Link to="">Responsible Gaming</Link></li>
                <li><Link to="">Terms & Conditions</Link></li>
                <li><Link to="">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <ul className="footerlinks">
                <li><img src={gamble} width="200" alt="gamble"/></li>
                <li><img src={thawte} width="200" alt="thawte"/></li>
                <li><img src={adult} width="50" alt="adult"/></li>
              </ul>
            </div>
          </div>
        </Router>
      </footer>
    )
  }
}

export default Footer;
