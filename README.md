# nSpired_off-the-mat

#### Words of wisdom that can be carried off of one's yoga mat and into one's daily life

![homepage](http://i.imgur.com/Q1p08zN.png)

Whenever I teach a yoga session, I always start my classes by providing a quote that applies to both the students' practice as well as the remainder of their day (off their mats). I wanted to provide a place where anyone could find some inspiration in their day depending on their mood and/or needs. Users are able to search for quotes based upon how they are feeling and they are provided a few points to reflect upon.  If they are looking for something a little more generic, they are also able to pull up a "quote of the day". In addition, users are able to store a list of their favorites, so they can always access the words that speak to their souls. There is also a section incorporating meditation, which helps to break down the schools of thought and styles.

![search quotes](http://i.imgur.com/P3YGiDs.png)

![search quotes prompts](http://i.imgur.com/kKsQvx5.png)

##### Technologies

I built my application using the Ruby on Rails framework and the database utilized is postgresql. In addition, I integrated Semantic UI as a development framework for front-end styling along with standard HTML, CSS, javascript, and jquery. I had originally hoped to integrate react into this application for building out my UI, but I was unable to find adequate documentation to successfully incorporate it into a Rails environment. The production version is hosted on heroku and account activation and password reset functionality is sent via sendgrid.

##### General Approach

Coming into this project, I knew that I wanted to utilize new technologies that I hadn't really worked with yet. I decided that I wanted to use Ruby on Rails as my framework and then either incorporate angular.js or react for displaying views. Once I had that much determined, I went ahead and created user stories and wireframes (see links below). Then it was time to tackle the code... I began with getting the back-end setup so my user sessions (registration, login, logout) were fully functional (RESTful) and thus other tables could be associated with users. While building this out, I decided I wanted to challenge myself to figure out account activiation and password reset, so that was incorporated into the code as well.

Once the sessions were up and running, I had some time allotted to determine if working with react would be feasible (won out over angular). Unfortunately, after many hours spent trying to incorporate unsuccessfully, I ended up scrapping that endeavor and shifting my attention to integrating third party API's. I actually ended up using two separate ones, which I had not originally intended. The quotes are pulled from 'They Said So', https://theysaidso.com/api/#qimgcat, via a private key while the images are pulled from Pixabay, https://pixabay.com/.

After ensuring all the necessary API data was being pulled in and rendered appropriately, then I worked on sending some of that data to my database, so users could have "liked" quotes saved/associated with their profiles. When all of that was up and running, I began to shift my focus over to more of the styling and really digging into the semantic framework to make my site responsive, user-friendly, and visually appealing.

##### Installation Instructions

If one wants to run a local version rather than accessing the app in production, please feel free to clone or fork the github repository. Also, please make sure to have rails installed (built with version 4.2.5) as well as ruby (built with version 2.2.0). In order to set up a local database as well, one will need to be sure to have postgreql. Last, in order to install all other dependencies (libraries, frameworks, etc...) one will need to be sure to bundle before running the local server in one's console via "rails s".

Link to User Stories: https://trello.com/b/gH70wQ6f/nspired

Link to Wireframes: https://drive.google.com/file/d/0B5ZU55Leu8RVSm5sbzByRXVjOUU/view?usp=sharing

##### Problems/Hurdles

Throughout the course of this project I ran into several problems that took multiple hours to troubleshoot and resolve. The only hurdle that I did not overcame and ended up srapping instead was adding react into the mix of technologies. Everything else from my login form refusing to post to the database when my UI broke it, to my sessions being overly secure due to the account activation/password and not allowing "quote likes" to post properly to the database, ended up having a happy resolution. Even completely unexpected problems such as receiving a 'No Access-Control-Allow-Origin' error when trying to pull from one of the api's, I was able to resolve with much googling and learned that jsonp is an alternate way of implementing cross browser requests. 
