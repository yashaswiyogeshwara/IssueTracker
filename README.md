# IssueTracker
Issue Tracking and Project Management System build as a Microservice Architecture.

### Epics
Epics are highlevel blocks in a Project. Below are the Epics for the current Project.
 
1.  Project Board.
2.  Login and Authorization.
3.  User Dashboard.
4.  Configuring the Boards.
5.  Migration to Azure.
6.  Notifications.
7.  Teams and Team Boards.
8.  Integration to GitHub using git api.
9.  Deployement.
10. Mobile App.
11. Sprints and Sprint Boards. 

Below is the break down of each of the above epics.

#### Project Board

1. As a user I should be able to login to the application.[Not Authentication or Authorization required].
   
    i.   User should be created in database.
    ii.  User should be assigned a role. Either an admin role or user role.
2. As a user after login I should be driven to User Dashboard.
   
    i.   As user logs in, he should be driven to user dashboard page.      
3. As a user Admin I should be able to create a Project in User Dashboard.
   
    i.   A button should be availble to User Admin in Dashboard page to create a new Project.
    ii.  Clicking on the button should create a new Window for entering project title and description.
    iii. After creation user should see the newly created project in the projects list in User Dashboard.
    iv. Project should be saved to db and retrived eveytime page is refreshed.
4. As a user I should be able to navigate to Project Board when user clicks on the Project item in UserDashboard.
   
    i.   A Project Board page should be created.
    ii.  User should be navigated to the respective ProjectBoard Page when user clicks on the project item.
5. As an admin user I should be able to create Epics in each Project.
   
    i.   As an admin user I should see a button to add epics in each Project.
    ii.  Clicking on the button should pop up a window for Epic title and description.
6. As a user I should be able to create a Task in a project.
   
    i.   As a user I should see a button to create a task in Project Board.
    ii.  Clicking on the button should display a window for entering 
   
            a. Title.
            b. Assigned User.
            c. Project. [prepopulated, editable and nullable]
            d. Epic. [nullable]
            e. Status. 
            f. Created Date [pre populated]
            g. Start Date
            h. Expected Finish Date.
            i. Description.
            j. Add Sub Task.
    iii. Creating a task should create a ticket for this task against the assigned user, in the said project and epic.
    iv.  This task should be visble in Project Board with User Image, and Epic Label.
7. As a user I should see all the tasks of an Epic in Epic Board.
   
    i.  This task should be visible in Epic Board.
    ii. The tasks should be segregated into two sections 
        a. Open.
        b. Closed.         
8. As a user I should be able to see all the user tasks in User Board.
   
    i.   As a user I should see all the user tasks in User Board.
    ii.  The tasks should be segregated into two sections.
         a. Open.
         b. Closed.
    iii. Each tasks should contain Id, Title and status.
9. As a user I should be able to edit a task for user.
   
    i.   As a user when a task is being updated, it should not be closed for edit.
10. As a user I should be able to create adhoc tasks in my dashboard.
   
    i.   A button should be given in user dashboard to create notes.
11. As a user admin I should be able to import tasks in text pad, with certain given conventions.

12. As a user I should be able to search for a Ticket.
