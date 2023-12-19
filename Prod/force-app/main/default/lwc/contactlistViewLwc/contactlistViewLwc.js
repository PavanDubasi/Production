import { LightningElement, wire } from 'lwc';
import getContacts from "@salesforce/apex/ContactListView.getContacts"
const ACTIONS = [{label: 'Delete', name: 'delete'}]
const COLS = [{label: 'Name', fieldName:'link', type: 'url', typeattributes: {label: {fieldName: 'FullName'}}},
              {label: 'Email', fieldName: 'Email'},
               {label: 'Account', fieldName:'account link', type: 'url', typeattributes: {label:{fieldName: 'AccountName'}}},
               {label: 'Mailing Address', fieldName:'MailingAddress'},
                { fieldName: 'acctions', type:'action', typeAttributes:{rowActions: ACTIONS}}]
export default class ContactlistViewLwc extends LightningElement {
    cols = COLS;
    contacts;
    wiredContacts;
    @wire(getContacts)
    contactWire(result){
       this.wiredContacts = result;
       if(result.data){
        this.contacts = result.data.map((row) => {
            return this.mapContacts(row);
        })
       }
       if(result.error){
        console.error(result.error)
       }
    }
    mapContacts(row){
        console.log(row);

        return {...row,
            FullName: '${row.FirstName} ${row.LastName}',
            link: '/${row.id}'
    };
    }

}