export class Task{
  public id : number = 0;
  public title : string = '';
  public userId : number = -1;
  public teamId : string = '';
  public description: string = '';
  public estimate= null;
  public startDate = null;
  public endDate = null;
  public timeSpent = null;
  public statusId:number = 0;
  public displayOrder: number = 0; 
  public projectId: number =0;
}