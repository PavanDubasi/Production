import { LightningElement } from 'lwc';

export default class Gratestestnumdemo extends LightningElement {
    firstvalue = null;
    secondvalue = null;
    thirdvalue = null;

    /*handlefirstvalue(event){
        this.firstvalue = event.target.value;
    }
    handlesecondvalue(event){
        this.secondvalue = event.target.value;
    }
    handlethirdvalue(event){
        this.thirdvalue = event.target.value;
    }*/
    execute(event){
        let nameval = event.target.name;
        if(nameval == 'first'){
            this.firstvalue = event.target.value;
        }else if(nameval == 'second'){
            this.secondvalue = event.target.value;  
        }else if(nameval == 'third'){
            this.thirdvalue = event.target.value;
        }
    }
    handleCalculate(event){
        const num1= parseInt(this.firstvalue);
        const num2= parseInt(this.secondvalue);
        const num3= parseInt(this.thirdvalue);

        if(num1 > num2 && num1 > num3){
            alert('First number is grater');
        }
        if(num2 > num1 && num2 > num3){
            alert('Second number is grater');
        }
        if(num3 > num1 && num3 > num2){
            alert('Third number is grater');
        }
    }
    handleReset(event){
        this.firstvalue = '';
        this.secondvalue = '';
        this.thirdvalue = '';
    }
}