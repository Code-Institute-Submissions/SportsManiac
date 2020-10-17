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

SASS/SCSS was added to stack to help breakup the CSS more and even optimise the CSS.  In order to compile the SCSS files Gulp.js was used as it allowed for far greater control of the format of the compiled Main CSS file.  SCSS could also be used to breakup reusable rules like colours and font styles.  