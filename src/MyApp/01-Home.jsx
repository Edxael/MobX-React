import React from 'react';
import MyStore from './MobX/MobX'
import { observer } from 'mobx-react'
 
class Home extends React.Component {
  render() {
    return(
      <div>
        <div>Homme Comp.jsx </div>
        <br/>
        <button onClick={ () => { MyStore.name = "Edxael" } } >Chage to Edxael</button>
      </div>
    )
  }
}
 
export default observer(Home)