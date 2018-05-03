import React from 'react';
import MyStore from './MobX/MobX'
import { observer } from 'mobx-react'

 
class Second extends React.Component {
  render() {
    return(
      <div>
        <h1>Second Page</h1>
        <br/>
        <button onClick={ () => { MyStore.name = "Julius" } } >Chage to Julius</button>
      </div>
    )
  }
}
 
export default observer(Second)