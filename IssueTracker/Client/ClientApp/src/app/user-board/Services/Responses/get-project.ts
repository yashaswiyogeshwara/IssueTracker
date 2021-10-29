export class GetProjectsResponse  {
    public projects:Project[]  = [];
}

export class Project{
    public id : number = 0;
    public title : string = '';
    public startDate = null;
    public endDate = null;
    public description : string = '';
    public timeSpent = null;
    public estimate = null;
}