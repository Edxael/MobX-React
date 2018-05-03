import { extendObservable } from 'mobx'


class MyStorage {
    constructor(){
        extendObservable(this, {
            name: 'Edmundo'
        })
    }
}


var MyStore = new MyStorage()
export default MyStore

