import React,{Component} from 'react';
import sport from './sports.json';
import flag from '../Assets/england.png'

class Content extends Component {
  render(){
    var sportdata = sport.Gamelistdata;
    return(
      <div className="Main_content_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <div className="container-fluid row">
                {sportdata.map(function(val, index){
                  return(
                    <div key={index} className="col-md-1 tabs">
                      <div className="innertabs">
                        {val.name}
                        <div className="sporticon">
                          {val.name === 'More' ?
                            <i className={val.iconname} style={{"fontSize":'32px','color':'#4fb558'}}></i>
                          : <img src={require('../Assets/'+val.iconname+'.png')}  alt="icons" width="32"/>}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="container-fluid">
                <div className="container-fluid info row">
                  <div className="subtitle">LEAGUE  <i className="fa fa-info-circle"></i></div>
                  {sportdata[0].data.typedata.map(function(dat, i){
                    var datalength = sportdata[0].data.typedata.length;
                    return(
                      <div key={i} className={i===0 ? "borderradius_left  col-md-1 tabs tabactive" : i===datalength-1 ? "borderradius_right col-md-1 tabs": "col-md-1 tabs"}>
                        <div className="maintext">{i===0 ? <span style={{"padding":""}}><img src={flag} width="16" alt="flag" /></span> :<span></span>}{dat.name}</div>
                        <div className="subtext">5 Slates</div>
                      </div>
                    )
                  })}
                </div>
                <div className="container-fluid info row">
                  <div className="subtitle">GAMESLATES:EPL  <i className="fa fa-info-circle"></i></div>
                  {sportdata[0].data.typedata.map(function(dat, i){
                    return(
                      <div>
                        {dat.slates.GameSlates?
                          <div key={i} className={i===0 ? "borderradius_left  col-md-1 tabs tabactive" : i===6 ? "borderradius_right col-md-1 tabs": "col-md-1 tabs"}>
                            <div className="maintext">{dat.slates.GameSlates.size}Games</div>
                            <div className="subtext">{dat.slates.GameSlates.time}{dat.slates.GameSlates.date}</div>
                          </div>
                        :<div></div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-2 addsection">
              <h5>Next Contest Starts:
                <span style={{float:'right'}}>2:34:23</span></h5>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Content;
