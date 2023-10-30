public class CaseHandler {
    public static void handleCaseBeforeInsert(List<Case> newRecords){
        for(Case caseRec:newRecords){
            if(caseRec.Origin == 'Phone' ){
                caseRec.Priority ='High';
            }
            else{
                caseRec.Priority ='Low';
            }
        }
    }
}