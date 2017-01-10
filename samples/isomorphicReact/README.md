#Isomorphic React Sample

##Usage

Check out the project from Github, and run `./gradlew bootRun` to start it up.

Run `./gradlew npm_run_webpack` to run webpack in watch mode and recompile the React code upon changes.

#Explanation

This project demonstrates use of the `grails-isomorphic` plugin (http://plugins.grails.org/plugin/grails-isomorphic) with React. The basic React application code is kept under `src/main/webapp`. It's a simple table list with a form for adding new items (books) to the database.

The interesting pieces of code are in  `grails-app/views/application/index.gsp`. Here you'll note that we are using the `isomorphic` plugin's  `iso:bundle` tag to render the Webpack bundle on the server side, and passing in data from a GORM query (`bookInstanceList`). 

This approach means that when the page is loaded in the browser, the data has already been retrieved and rendered in the browser, which means the React app has no need to make an initial API call to get the data from the server. This saves a typical roundtrip of loading the page, then calling the API to get initial data. 

Once the page is loaded, the React app functions just like it would if it were client-rendered, including making API calls to insert new books and update the table. The server-side rendering only happens once per request, after that point the client works as expected.

There are other benefits to the isomorphic approach, especially for SEO purposes. This is a very basic sample and is intended as a proof-of-concept project. Feedback/PRs are welcome!
