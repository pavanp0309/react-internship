// Component : are the builiding blocks of any react application 
they break the larger parts of the ui into smaller pieces ,reuseable
<!-- a component is something that returns some jsx elements to construct an ui  -->
There are two types of components 
1.functional componet
2.class component



JSX: it is used to create the Ui 
 (Javascript Xml) is used for writing html like code 
 it is used to render the logic on js and the ui element in html 


 RULES :
 1.JSX expressions must have one parent element : if we are nesting an mutiple elements it   musted be wrapped under single parent element 
  To wrap the element we can either use html elements ,fragements in  react 
2.all jsx elements must closed  :
    eg: <br/> <img/> <input/> ,<h1></h1>
3.while rendering the javascript expression it must be wrapped in curly braces
   a.for strings boolean numbers etc  are wrapped under single curly braces
   src={} alt={} <h1>{}</h1>
   b. objects and styles are wrapped under double currly braces
      style={{ }}
4.attributes and styleproperties must start with camel case :
      className ,htmlFor ,alignItems ,backgroundColor
5.conditional and itterational statements cant be rendered inside in jsx but jsx can be rendered inside it 
 Terneray can be used inside the Jsx


Styles :
bootstrap
tailwind css
styleComponents
antdesign
chakara ui
react-bootstrap 

🏹Different ways To Write the Styles in React 🏹
 1.inline css /external css
 2.module css
 3.using external modules like bootstrap styled-components,antdesign ,tailwind etc ..


<!-- Naming formats -->
FOLDER NAMES : small case letter 
FILENames : pascalcase format  
    components Names : pascalcase format ===> HomeComp,AboutUs,ContactUs etc  
    other file names and hooks: camelcase format ===> auth.js ,signIn ,resigter.js ,paymentInfo ,

Component : it is javascript function which return jsx element(it is extension used to write html like code ,but it actually it js code) to build reuseable and maintable code  
 it is a build block any react application


