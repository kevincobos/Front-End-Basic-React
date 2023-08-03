# Front-End-Basic-React

## React
React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.    
-  React can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.   
- React is not a framework, nor is it a complete solution. It is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC.   
- React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.   
- React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.   
- React uses JSX - an XML-like syntax that allows you to write React components in a familiar way.     
- React is scalable - large applications with data that changes over time without reloading the page is where React performs best. 

### React Main Features
 
- a JavaScript library for building user interfaces.
- a tool for building SPAs (Single Page Applications).
- a tool for handling the view layer for web and mobile apps.
- a tool for building fast and scalable front-end applications.
- a tool for building UI components that can be used on their own or combined with other components to build complex UIs.

SPA's are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. SPAs use AJAX and HTML5 to create fluid and responsive web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript.  
React allows developers to build SPAs.

React JSX, JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements. JSX is an extension to the JavaScript language based on ES6, but it is not required to use it. JSX is not a necessity to write React applications. JSX is a syntax extension to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string. Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression.

## Starting to use React on my projects   
   
### First install React using:   
```npx create-react-app "name of the app"``` 
  
Updating your build tooling is typically a daunting and time-consuming task. When new versions of Create React App are released, you can upgrade using a single command:   
```npm install react-scripts@latest```  

## Create a new react-app using:
```npm init react-app "App name"``` <samp> or </samp> ```npx create-react-app .``` <samp> where "." means the current directory. </samp> 
### Run the new app using:
If diferent directory then use ```cd  "app name"```   
Then ```npm start```  
 
```npm install react-router-dom```   
React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!
   
What is react router?   
React router is a routing library built on top of the react which is used to create the routing in react apps. It is used to create routes in the react app. It maintains the mapping between the url and the components. It keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. It is used to create the single page application. It is used to create the navigation between the components. It is used to create the multiple pages in the react app. It is used to create the dynamic routing in the react app. It is used 

```npm install react-bootstrap bootstrap```  
React-Botstrap is a library with a complete re-implementation of Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed you have everything you need.   

```npm install react-icons --save```  
React Icons Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.   
# Principles of React Components 
## React Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function.   

Components come in two types, Class components and Function components.   
Functional components are reusable blocks of code that act like a JavaScript function and you can pass data from one component to another using props.   
Data flow is one-directional which means that a parent component can send the same data to one or more child components, but it's not possible to communicate from the child components back to the parent component using props.   

## Create a React Component
A React component is a function or a class which optionally accepts input and returns a React element (typically via JSX which gets compiled to a createElement invocation).

![React Function](/img/functionComponent.png);   

## Importing components
- Build a new file by right-clicking on the src folder, then in the right-click contextual menu that appears, clicking on the New File command. Name the file "HelloWorld.js".   

- Once you've typed HelloWorld.js, press the ENTER key to finish the process of naming the file. Upon pressing the ENTER key, your new, empty HelloWorld.js file will be shown, ready to be edited and updated with some code.

- Import the HelloWorld component into the App component.   
Add this at the end of the file that you are exporting   
  <samp> export default HelloWorld; </samp>   
Add this to inporting file    
<samp> import HelloWorld from "./HelloWorld"; </samp>    

![React Function](/img/newComponent.png);


For a component to render something on the page, it needs to return it as one or more JSX elements.

## React Props
Props are arguments passed into React components. Props are passed to components via HTML attributes.  
Props can be used to pass data, or functions, from one component to another.  
   
This is how you pass data from one component to another as an attribute:
![React Props Code](/img/propsComponentsCode.png)    

The Browser Render:
![React Props Browser Render](/img/propsComponents.png)   

### JavaScript Expressions in JSX
You can write any JavaScript expression inside the curly braces in JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program. You can use an if statement in the curly braces to show or hide an element. You can also use the ternary operator condition ? true : false to show something. You can also use JavaScript expressions to embed a map() call in JSX. You can also use JavaScript expressions to embed a function call in JSX.   

The following JavaScript code ```{'abc'+'def'}``` will render this <samp> abcdef </samp>   
The following JavaScript code ```{2+3}``` will render this <samp> 5 </samp>   
The following JavaScript code ```{2===3}``` will render this <samp> false </samp>   

### Fragments
A common pattern in React is for a component to return multiple elements. Fragments <code> <></> </code> let you group a list of children without adding extra nodes to the DOM.

Example of a fragment:
```return(<> content here </>);```   
   
### note:   
don't forget we can't use class in react, we have to use className.   
```className``` is used to specify the class name of an element, and it is used by the browsers to apply CSS rules to elements.   
Html <code> class=" " </code>   
JSX <code> className=" " </code> 

![Example of use of className](/img/using-className.png)

### CSS Styling
React does not have a built-in way to style components, but there are several libraries that allow us to use CSS in React.   

Using React, you can easily convert a CSS rule to a JavaScript object, where each key-value pair describes a CSS declaration.   

### Arrow Functions on React

Arrow functions are a new way to write anonymous function expressions in JavaScript. They have a shorter syntax than function expressions. Arrow functions do not have their own this. They are not well suited for defining object methods. Arrow functions are not hoisted. They must be defined before they are used.   
Using const is safer than using var, because a function expression is always constant value. You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:   

Regular function declaration:   
```
function XFunction(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
};
```
Regular function expression:   
```
const XFunction = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
};
```
Arrow function expressions:   

```
const XFunction = (props) => { return (
    <ul>
        <li>{props.first}</li>
    </ul>
  )
};
```    
or   
```
const XFunction = props => { return (
    <ul>
        <li>{props.first}</li>
    </ul>
  )
};
```

### Expressions as Props
You can pass any JavaScript expression as a prop, by surrounding it with curly braces.   
Example:   
```
function App() {
  return (
    <div>
      <Header username="Kevin" />
      <Greeting />
    </div>
  )
}
```

### Enbeded Atributes
You can embed JavaScript expressions in your JSX by wrapping them in curly braces.    
Example:   
```
function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1>Good {timeOfDay}!</h1>
  )
}
```   



### If Statements and For Loops inside JSX
You can use an if statement in the curly braces to show or hide an element. You can also use the ternary operator condition ? true : false to show something. You can also use JavaScript expressions to embed a map() call in JSX. You can also use JavaScript expressions to embed a function call in JSX.   

Example of a ternary operator:   
regular if statement:   
```
{
  if (name === "Kevin"){
    return "Yes, it is Kevin"
  } else {
    return "I don't know this person"
  }
}
```   
ternary operator:
```
{
  name === "Kevin" ? "Yes, it is Kevin" : "I don't know this person"
}
```



# Miselanious
### Git CLI   
```$ git init```   
```$ git add .```   
```$ git commit -m "type a message"```   
```$ git remote add "origin"```  
   - ```$ git remote add kevincobos https://github.com/kevincobos/front-end-basic-react```  
   - ```$ git push -u kevincobos main```   

```$ git push``` 

### Create new branch using CLI
```$ git branch A```   
```$ git checkout A```
create new branch B and commit on it   
```$ git checkout -b B```    
```$ git commit -am "commit on branch B"```    
   
go back to branch A   
```$ git checkout A```       
```$ git commit -am "commit on branch A"```
   
Note:   
```I use copilot to help me writing this readme file.```