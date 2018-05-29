import React,{Component} from 'react';

class Updates extends Component{
  render(){
    return (
      <div className="container-fluid update_section">
        <div className="row clearfix">
          <div className="col-md-5 section">
            <div className="panel panel-default row innersection">
              <div className="col-md-7">
                <h3>Play in a H2H contest</h3>
                <p className="plaintext">Limit your opponents to players of similar skill or challenge everyone!</p>
              </div>
              <div className="col-md-4">
                <div className="btn_style">
                  <button className="btn update_btn" type="button">Match Me in a H2H</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 section">
            <div className="panel panel-default row innersection">
              <div className="col-md-7">
                <h3>Build a Lineup</h3>
                <p className="plaintext">Select your sports,when to play,then build a lineup to crush the opposition</p>
              </div>
              <div className="col-md-4">
                <div className="btn_style">
                  <button className="btn update_btn" type="button">Build a Lineup</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 section">
            <div className="panel contest_section">
              <h6>MY CONTESTS OVERVIEW <i className="fa fa-external-link" style={{fontSize: "12px"}}></i></h6>
              <p>Contests Entered: <span>1000</span></p>
              <p>Cash in Play: <span>$10,500</span></p>
              <p>Currently Winning: <span>$10M</span></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Updates;
