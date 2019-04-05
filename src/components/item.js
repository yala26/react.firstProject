import React from 'react';
import List from './list';
import Weather from './weather';
import Bar from './navBar';
import {BrowserRouter, Route} from "react-router-dom";

let url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=007b56d8a8188ff942e23c1ed54e96be';
let App = () => {
  return(
    <BrowserRouter>
      <div>
          <Bar />
        <div>
          <Route path='/list' component= {List} />
          <Route path='/weather' component= {Weather}/>
        </div>
           {/*<AddElem />
          <GetWeather />*/}
      </div>
    </BrowserRouter>
  )
};

export default App;
