import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { observer } from 'mobx-react'
import MyStore from './MobX/MobX'
 

import Page1 from './01-Home';
import Page2 from './02-Second';
 

class Main extends React.Component{
    render() {
      return(
        <div>
          <HashRouter>
            <div>

                <h1>Change Name</h1>
        
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/1">Page 2</Link></li>
                </ul>

                <hr/>

                <div>
                    <div><strong>The Name is: </strong>{MyStore.name}</div>
                </div>
        
                <hr/>
        
                <Route exact path="/" component={Page1}/>
                <Route path="/1" component={Page2}/>
        
            </div>
            </HashRouter>
        </div>
      )
    }
  }
 
  export default observer(Main)