import { LightningElement } from 'lwc';

export default class Lwcdemocmp2 extends LightningElement {
handledemo(){
    const candidatename = ['sandeep', 'korukonda'];
    console.log('the list is'+candidatename);
}
}