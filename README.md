# Fit Init
Fit Devs has created the perfect app for you to reach your fitness goals and fit in those jeans you've always wanted to.

![Landing Page](https://i.imgur.com/sLA8OKm.png)
![Weekly Calander](https://i.imgur.com/XdMAR3n.png)
![Daily Workout](https://i.imgur.com/rNIMeDy.png)
![Journal Entry](https://i.imgur.com/DK8M2Ee.png)

## Technologies
* JavaScript
* Node.js
* Express
* Sequelize
* Bootstrap
* Axios

## Our Approach
Allowing users to not have to think about or plan out their workouts will motivate them more to just get up and do it. They will be able to log their progress and how they are feeling in their own personal journals and favorite workouts to do again later. 

## User Stories
1. As a user, I want to be able to sign up or sign into an existing account from the website landing page.
2. If a user already has an existing account, the user will want to be directed to the workouts homepage.
3. If the user does not have an existing account, the new user will want to be directed to the signup modal to create one.
4. Once the new user completes the sign up form with basic information (First name, last name, email, password) the user will have the option to complete their full profile before continuing to the workouts homepage.
5. A user will eventually want to be able to create a full profile with a profile picture and more in depth personal information (first name, last name, email, age, birthday, height, weight, gender.)
6. On the workout homepage, the user will want to be able to select the current day of the week to
view that day’s workout.
7. On the workout homepage, the user will also want to have the option to create a daily journal
entry on the day of their workout. The user will be able to fill out this journal entry prior to
beginning their workout and/ or after they complete it.
8. Once a user selects the day of the week they will be directed to the page that lists out the entire
workout. The workout page will include the name of each exercise, the amount of reps
recommended, and an image with a short description of each exercise.
9. The user will want to be able to click on each exercise for more detail if they need more
information on set up cues or guidance on how to execute the movement.
10. Once the user has completed the workout, they will want the option to be able to add that day’s
workout to their “Favorite Workouts”, which will allow them to revisit this particular workout at
any time.
11. When the user has completed their daily workout they will want the option to log out of their
account.

## ERD
![ERD](https://i.imgur.com/3Ah1Bum.png)

## WireFrame
![wireframe 1](https://i.imgur.com/mHkIwhT.png)

## Code Snippets
        <div class="allWorkouts">
            <%for (let i = 0; i < workout.length; i++) {%>
            <%let d = new Date(workout[i].date)%>
            <%let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']%>
            <div class="cardMonday workoutCard" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><%=days[d.getDay()]%></h5>
                    <h6 class="card-subtitle mb-2 text-muted"><%= workout[i].name %></h6>
                    <p class="card-text"></p>
                    <form action="/workout/<%=days[d.getDay()]%>" method="GET">
                        <input hidden type="text" name="<%days[d.getDay()]%>" value="<%days[d.getDay()]%>">
                        <button class="btn btn-primary start" type="submit">START!</button>
                    </form>
                    <form action="/faves" method="POST">
                        <input hidden type="text" name="name">
                        <button class="btn btn-primary faves" type="submit">Add to Favorite Exercises</button>
                    </form>
                </div>
            </div>
            <%}%>
                </div>

* GA Staff

## Future Development
* Allow user the capability to favortite workouts in order to go back to them later.
* Display descriptions for each individual exercise.
* Seed exercise into database for more options.
* Allow user to create their own unique workouts.
* After workout is complete, add a complete button which will add workout to the "archives"
* Implement COVID API to allow usesrs to check stats in their area.
* Manage equipment vs non equipment workouts to provide both at home and gym workouts.
