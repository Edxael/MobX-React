import { extendObservable } from 'mobx'


class MyStorage {
    constructor(){
        extendObservable(this, {
            name: 'Hello'
        })
    }
}


var MyStore = new MyStorage()
export default MyStore

