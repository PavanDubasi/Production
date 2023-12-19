import { LightningElement } from 'lwc';

export default class DemoOnArrays extends LightningElement {
    demo(event){
        const personName = ['sandeep', 'cricket', 'bowling'];
        console.log('get details..:'+personName);
        console.log('get details..:'+personName.length);
         const isThere = personName.includes('sandeep');
         console.log('get details..:'+isThere);
         const detailsofPerson = new Array('sandy', 'cric', 'bowl', 'bat');
         for(let i=0; i<detailsofPerson.length; i++){
            console.log('get details of person..:'+detailsofPerson[i]);
         }
         for(const item of detailsofPerson ){
            console.log('get details of person..:'+item);         
         }
         const candidatedetails = new Map();
         candidatedetails.set(1,'sandy');
         candidatedetails.set(2,'cricketer');
         candidatedetails.set(3,'bowler');
         console.log(candidatedetails);
         for(const [key, value] of candidatedetails){
            console.log(key +' = '+ value);
        }

    }
    
}