public class CollectionClass {
    public id creatAssosiatedContacts(){
        Savepoint sp = database.setsavepoint();
        Account acc = New Account();
        acc.Name = 'Skala yodha';
        acc.Phone = '123856';
        try{
            insert acc;
            List<Contact> conlst = new List<Contact>();
            for(integer i = 0 ; i < 10; i++){
                Contact con = New Contact();
                //con.LastName = 'sandeep k';
                con.AccountId = acc.id;
                conlst.add(con);
            }
            insert conlst;
        } catch(exception ex){
            system.debug('error vachind bhaya check it once' +ex.getMessage());
            database.rollback(sp);
        }
        return acc.id;
    }
    public void getAllAccounts(){
        List<Account> acclst = [Select id, name from account ];
        //system.debug('List of accounts:' +acclst);
        for(Account ac:acclst){
            system.debug('get acclist' +ac.name);
        }
    }
    public void getAssosiatedAccountsRelatetoContacts(){
        List<Contact> conlst = [Select id, LastName, accountId, Phone from contact where accountId != null];
        Set<Id> accIdlst = new Set<Id>();
        for(Contact con:conlst){
            accIdlst.add(con.accountId);
        }
        List<Account> acclst = [Select Id, Name from Account where Id IN :accIdlst ];
        system.debug('assosiated accounts' +acclst.size());
    }
    public void doDemoOnMaps(){
        Map<String,String> mapVar = New Map<String,String>();
        mapVar.put('sandy@gm.com','pass@123');
        mapVar.put('sudee@gm.com', 'pass@1304');
        mapVar.put('zack@gm','234');
        mapVar.put('apple','453');
        mapVar.put('sandy@gm.com','pass@123');
        system.debug('results' +mapVar);
        system.debug('results' +mapVar.size());
        system.debug('results' +mapVar.keyset());
        system.debug('results' +mapVar.values());
        Set<String> valuesin = mapVar.keyset();
        system.debug('results' +valuesin);
        List<String> keysin= mapVar.values();
        system.debug('results' +keysin);
        String val = mapVar.get('apple');
        system.debug('results' +val);
        String val2 = mapVar.get('pass@123');
        system.debug('results' +val2);
 
       }
    public void doMap(){
        Map<Id,Account> accMap = New Map<Id,Account>();
         
       List<Account> acclst= [select Id, Name, Phone from Account];
        for(Account acc:acclst){
            accMap.put(acc.id,acc);
            system.debug('res'+accMap);
        }
        
    }
    public void doMap2(){
        Map<Id,String> mapvarr = new Map<Id,String>();
        List<Contact> conlst= [Select Id, lastName from Contact];
        for(Contact con:conlst){
            mapvarr.put(con.id,con.LastName);
            system.debug('res'+mapvarr);
        }
    }
                   }