import { LightningElement } from 'lwc';

export default class Democmplwc extends LightningElement {
    desiredvalue = null;
    desireddate = null;
    desireddatetime = null;
    printthevalue(event){
        this.desiredvalue = event.target.value;
    }
    printthedate(event){
        this.desireddate = event.target.value;
    }
    printdatetime(event){
        this.desireddatetime = event.target.value;
    }
}