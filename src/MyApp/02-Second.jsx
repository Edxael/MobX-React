import React from 'react';
import MyStore from './MobX/MobX'
import { observer } from 'mobx-react'
 
class Second extends React.Component {
  render() {
    return(
      <div>
        <div>Second Page</div>
        <br/>
        <button onClick={ () => { MyStore.name = "Alexander" } } >Chage to Edxael</button>
      </div>
    )
  }
}
 
export default observer(Second)