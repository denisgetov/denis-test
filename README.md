# Hello QA I will keep this simple

# How to run the project
cd backend(assuming you have cloned it and in your own folder)
npm install
node index.js - http://localhost:5000/api/movies (use this to test if the server is running)

open split terminal
cd ..
cd frontend
npm install
npm test to run the test I created should be 2/2(press a if you do not see them)
npm start and open the server in the browser and everything should be working and also should be responsive

# Some thing I want to mention
3 folders - frontend, backend & content.
backend just has the server running and API calls there
content has the movies in a 'universal/root' way better for future use
frontend has the homepage, movie page and the movie details along with some coponents.
It is done pretty simple, I have used the tech stack as adivised in the readme. The scss could be done a better way ie more globally but I have decided to do it this way for showcasing and locating purposes.
The app is responsive for mobile devices aswell & some slight testing has been done. some things for future more error handling and better design could be implemented. I believe the structure is simple and progressive.

# Important
If anything is unclear or I have misunderstood or you cannot run something please let me know asap and I will try and fix it or explain it.


----


# Betsson Group Movies Application

## Scenario

You have a great idea for a new movies collection application. Your WEB application will contain the below features:

- **Movies List**

  - List Movies
  - Search
  - Filtering by Genre
  - Clicking on a particular movie will redirect you to the selected &#39;movie detail&#39; page:

- **Movie detail**
  - Show details of the selected movie
  - Navigate back to &#39;movie list&#39;

Pages should have proper URLs, and navigation / routing should work as expected (Using the back and forward button of the browser should take the user to the correct page. Reloading the current page should work as expected)

#### Technologies required

- Component-based JS library such as Stencil / VueJS / Next / React
- SCSS
- TypeScript
- Basic API layer to serve the provided movie library json (Node backend / PHP backend)
- Automated tests (basic component level tests)
- Responsive design

You may use any 3rd party libraries which can facilitate your development.

#### Extra Credit

- Dockerising your working solution
- Serving the data from a database instead of the json file
- Mobile-first
- Use Application State Management (Redux / VueX)
- Integration level E2E tests

The priority is to get the demo in good shape and deliver a usable solution. If you have extra time, add your own flair and features.

#### Content

- Together with this readme file, you will find a `content` folder which contains helpful content for your application including:
  - Movies mock data
  - Movies cover images
- Feel free to modify movies content
- Feel free to modify movies model file

#### Deliverable

- Provide a working application
- Provide source code in a public Git, Stash or Bitbucket repository
- Provide markdown readme file with instructions to build and run your project

Good luck!
