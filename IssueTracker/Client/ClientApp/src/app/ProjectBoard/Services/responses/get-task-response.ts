export class GetTaskResponse  {
    public tasks:projectTask[]  = [];
}

export class projectTask {
    public id = null;
    public title = null;
    public description = null;
}