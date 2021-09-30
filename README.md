# todo-list
#### Video Demo:  <https://youtu.be/ftqC1eWBWWE>
#### Description:
My final CS50 project is a todo-list front-end only website. It uses Vuejs and localStorage to store the list.

It has a minimalist look and nice animations in my opinion.

Most of the code I wrote lives in the home.vue file inside the views folder. It is separated into three parts: the template, script, and style (which uses scss).

The template contains the elements of the webpage as one would expect. It uses a table to display the elements of the todo-list and align the text and icons. The + icon below the table is used to hide and show the add form to add elements to the list. The form has a Title field and detail textarea (which is shown when hovering over elements).

The script uses Vue and its reactivity to simplify updating values and the list. It defines various functions that will update the ui and localstorage to account for the modifications done by the user.

finally, the stylesheet uses scss as preprocessor. I mainly used it for nesting. Naturally, it defines the style elements used to make elements look good (in my opinion).

The animations have been made using transform and transition tags. Thanks to vue, The animation of the add form appearing and disappearing was simple enough.

Challenges:
At the start, I had planned to use django and django rest framework to make API calls and update a mysql database. But then I chose to use localstorage which would simpler and faster. LocalStorage saves a JSON file to the internal storage of the device which then has to be parsed when requested in the website. Another dilemma was choosing a front-end framwork. I chose vue because I prefer it being independent and not owned by a big company.
Challenges:
At the start, I had planned to use django and django rest framework to make API calls and update a mysql database. But then I chose to use localstorage which would simpler and faster. LocalStorage saves a JSON file to the internal storage of the device which then has to be parsed when requested in the website. Another dilemma was choosing a front-end framwork. I chose vue because I prefer it being independent and not owned by a big company.

### Compiles and hot-reloads for development
// this commnad will start a developement server which you can use to prototype the website
npm run serve

### Compiles and minifies for production
// this command will build a deployement ready project
npm run build

### Lints and fixes files
npm run lint

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
