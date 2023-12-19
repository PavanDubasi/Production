import { LightningElement } from 'lwc';

export default class DemoVariableSection extends LightningElement {
    hardcoded = 'hardcode value assigned by js script';
    onload = null;
    onclickvar = null;
    connectedCallback(event){
        this.onload = 'this is loaded on load of the data updated'
    }
    handleClick(event){
        this.onclickvar = 'the data will be visible after the onclick button'
    }
}