public class LeadHandler {
    public static void handleLeadBeforeUpdate(List<Lead> newRecords){
        for(Lead leadRecs:newRecords){
            leadRecs.status = 'working-Contacted';
        }
    }
}