# Sports Maniac 

A Single Page Application used to research and learn about the sports teams in a specific location.  The app uses an open source database, theSportsDB ( https://www.thesportsdb.com/ ), to access the data for the teams.  The app is built using technology and libraries to help with API requests and DOM manipulation.  

Features of the Sports Maniac web app include:

- Location search and dynamic results
- Specific team data filtering for team info 
- An easy to use interface with the Materialize framework 

## UI/UX

General Design for the webapp went for a score card style with reliance on imagery and team colors.  Most of the structure for the app relied around two page layouts.  One for the team search and another for the team displaying its relevant data.  The colors chosen relied around a medium green tone to darker and grey tones with some white added for good contrast.  Multiple extra colors where chosen to accent the team colours in the data.  

User experiance was focused on the simplicity of the app.  Users would need need much to start using the app.  Most interactive features where designed around simplicity and self explanatory elements and widgets.  

## Technologies

The technology chosen for the app was based on ease of use.  This is not a data heavy app and so more emphasis was placed on technology that would not need as much code to utilize well.

Technologies used in this stack include:

- HTML
- SASS/SCSS
- Materialize
- Javascript
- Axios.js
- jQuery
- Gulp.js
- NPM 


#### UI Stack

For the UI implementation the Materialize framework was applied to the base HTML.  While some simple styling used materialize CSS the main use was the Grid features.  The Grid uses a simple and easy to use row/column system with advanced class options for responsive page layouts.  

SASS/SCSS was added to the stack to help breakup and optimize the CSS.  In order to compile the SCSS files Gulp.js was used as it allowed for far greater control of the format of the compiled Main CSS file.  SCSS could also be used to breakup reusable rules like colours and font styles.  

#### Logic Stack

On the logic and data manipulation side, Javascript was used with the help of a couple libraries to help achieve the desired results.

Axios.js was one of the libraries used for javascript work.  The reason behind this was to eliminate the necessity for Ajax calls which require far more code and implementation.  Axios handled most of the heavy lifting when it came to retrieving the data from the API so focus could be spent on the data flow to the UI.

JQuery was used for most DOM manipulation.  Jquery again allowed for quicker and easier implementation so the focus of development could be applied elsewhere.  

## Testing

For testing a mix of manual and unit testing was used to determine the feasability of the app.  Unit testing relied on the Jasmine library which could be used to test the pure functions needed in the app.  Manual testing was relied for most of the data and DOM manipulation methods.  As data could not be garuanteed to be similar each time the test was run unit testing was not applied to these methods.  The Google chrome Dev Tools where heavily utilised here to monitor the data flow.  

## Deployment 

Github pages was used for the deployment.  Since the design for the use of SASS/SCSS was to compile down to a single main.css file the app qualified for deployment here.  The code files where pushed to Github repo and using Settings deploy to pages the app was successfully running on the web.

