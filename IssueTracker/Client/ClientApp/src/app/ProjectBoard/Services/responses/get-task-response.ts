export class GetTaskResponse  {
    public tasks:projectTask[]  = [];
}

export class projectTask {
    public id = null;
    public title = null;
    public statusId: number = 0; 
    public status: string = ''; 
}