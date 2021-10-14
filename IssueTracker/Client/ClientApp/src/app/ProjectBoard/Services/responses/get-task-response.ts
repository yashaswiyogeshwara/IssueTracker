export class GetTaskResponse  {
    public tasks:ProjectTask[]  = [];
}

export class ProjectTask {
    public id: number = 0;
    public title = null;
    public statusId: number = 0; 
    public status: string = ''; 
    public displayOrder : number = 0;
    public userId : number = -1;
    public teamId : string = '';
    public description: string = '';
    public estimate= null;
    public startDate = null;
    public endDate = null;
    public timeSpent = null;
    
}