import React,{Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Subheader extends Component {
  constructor(){
    super();
    this.style={
      fontSize:'25px',
    };
  }
  render(){
    return(
      <Router>
        <nav className="navbar navbar-default subheader_section">
          <div className="container-fluid">
            <ul className="nav navbar-nav subheaderlinks">
              <li className="subheaderlinkactive"><Link to="">Lobby</Link></li>
              <li><Link to="">Upcoming</Link></li>
              <li><Link to="">Live</Link></li>
              <li><Link to="">Completed</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to=""><i className="fa fa-question-circle" style={this.style}></i></Link></li>
              <li><Link to=""><i className="fa fa-user-circle" style={this.style}></i></Link></li>
            </ul>
          </div>
        </nav>
      </Router>
    )
  }
}
export default Subheader
