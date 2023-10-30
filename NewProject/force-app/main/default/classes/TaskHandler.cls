public class TaskHandler {
    public static void handleBeforeInsert(List<Task> newRecords){
        Map<Task, String> taskPrioriy = New Map<Task, string>();
        for(Task taskRec:newRecords){
            taskPrioriy.put(taskRec,'High');
        }
        for(Task updatepriority:taskPrioriy.keyset()){
            updatepriority.Priority = taskPrioriy.get(updatepriority);
        }
        
    }
}