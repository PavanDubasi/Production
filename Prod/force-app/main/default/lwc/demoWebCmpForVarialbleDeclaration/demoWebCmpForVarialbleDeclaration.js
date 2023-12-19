import { LightningElement } from 'lwc';

export default class DemoWebCmpForVarialbleDeclaration extends LightningElement {
    onLoadVar = null;
    colors = ['sandy','yellow','white'];
    personaName = 'sandeep';
    Hardcoded = 'This is an hardcoded value given by sandeep from Java Script';
    onclickOfButton = null;
    dynamicValue = null;
    Diplay = false;
    //Diplay = true;
    marksAttained = null;
    totalMarks = null;
    totalPercentage = null;
    showresult1 = false;
    Details = null;
    datedetails = null;
    filesdetails = null;
    FirstNumber = null;
    SecondNumber = null;
    ThirdNumber = null;
    connectedCallback(){
        this.onLoadVar = 'This data will when on load of data';
    }
    handleClick(event){
        this.onclickOfButton = 'Hi this is sandeep new user';
        this.onClickOfLabel = event.target.label;
        this.Diplay = true;
    }
    captureOnchangeValue(event){
        this.dynamicValue = event.target.value;
    }
    captureAttainedMarks(event){
        this.marksAttained = event.target.value;
    }
    captureTotalMarks(event){
        this.totalMarks = event.target.value;
    }
    calculate(event){
        this.totalPercentage = this.marksAttained * (100/this.totalMarks)
        console.log('res..'+this.totalPercentage);
        this.showresult1 = true;
    }
    capturedetails(event){
        this.Details = event.target.value;
    }
    capturedate(event){
        this.datedetails = event.target.value;
    }
    capturefiles(event){
     this.filesdetails = event.target.value;
    }
    ansvwer(event){
        /*let i = 0;
        if(i < 10){
            console.log('print true :'+i)
        }else{
            console.log('print false'+i) 
        }*/
        let result = 5 > 2;
        console.log("res.."+result);
    }
    captureFirstNumber(event){
        this.FirstNumber = event.target.value;
    }
    captureSecondNumber(event){
      this.SecondNumber = event.target.value;
    }
    captureThirdNumber(event){
    this.ThirdNumber = event.target.value;
    }
    getResult(event){
        const num1= parseInt(this.FirstNumber);
        const num2= parseInt(this.SecondNumber);
        const num3= parseInt(this.ThirdNumber);

        if(num1 > num2 && num1 >num3 ){
            alert('FirstInput is grater among others');
        }
        else if(num2 > num1 && num2 > num3 ){
            alert('SecondInput is grater among others');
        }
        else if(num3 > num1 && num3 > num1 ){
            alert('ThirtInput is grater among others');
        }
    }
    ReSetData(event){
        this.FirstNumber = null;
        this.SecondNumber = null;
        this.ThirdNumber = null;
        this.handleMethod();
    }
    handleMethod(){
        let i = 0;
        do{
            console.log('print..'+i);
            i++;
        }while(i<10);
    }
}