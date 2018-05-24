import React,{Component} from 'react';
import {BrowserRouter as Router,NavLink,Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import logoicon from '../Gdfslogo.png';
// import cn from 'classnames';
// import {Nav,Navbar} from 'react-bootstrap';



class Header extends Component {
  render(){
    return(
      <Router>
        <header>
          <nav className="navbar navbar-default">
            <div className="container-fluid nav_innerdiv">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand logo"><img src={logoicon} width="150"  alt="Global Dfs" /></Link>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="/">Sports</Link></li>
                <li><Link to="">In-Play</Link></li>
                <li><Link to="">Casino</Link></li>
                <li><Link to="">Poker</Link></li>
                <li><Link to="">Bingo</Link></li>
                <li><NavLink to="/" activeClassName="active">DFS</NavLink></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/" className="join">join now</Link></li>
                <li className="paddingVertical"><input className="form-control input-sm" placeholder="username" type="text"/></li>
                <li className="paddingVertical"><input className="form-control input-sm" placeholder="password" type="password"/></li>
                <li className="paddingVertical"><button className="btn btn-success loginbtn">login</button></li>
              </ul>
            </div>
          </nav>
        </header>
      </Router>
    )
  }
}



Header.propTypes= {
  color: PropTypes.string,
  Theme : PropTypes.string,
}
Header.defaultProps={
  Theme: 'skyblue',
  color: 'black'
}

export default Header;
