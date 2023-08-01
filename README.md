# Front-End-Basic-React

## React
React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.   
React can be used as a base in the development of single-page or mobile applications.   
React can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.   
React is not a framework, nor is it a complete solution. It is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC.   
React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.   
React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.   
React is declarative. React uses JSX - an XML-like syntax that allows you to write React components in a familiar way.   
React Virtual DOM - a JavaScript representation of the actual DOM.   
React only makes changes to the parts of the DOM that need updating. React is modular - you can use React with any other JavaScript framework.   
React is scalable - large applications with data that changes over time without reloading the page is where   
React performs best. React is flexible - you can use React for interesting projects that have nothing to do with making a web app.   

### React Features
 

- a JavaScript library for building user interfaces.
- a tool for building SPAs (Single Page Applications).
- a tool for handling the view layer for web and mobile apps.
- a tool for building fast and scalable front-end applications.
- a tool for building UI components that can be used on their own or combined with other components to build complex UIs.

SPA's are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. SPAs use AJAX and HTML5 to create fluid and responsive web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript.  
React allows developers to build SPAs.

## Starting to use React on my projects   
   
### First install React using:   
```npx create-react-app my-app```  
  
Updating your build tooling is typically a daunting and time-consuming task. When new versions of Create React App are released, you can upgrade using a single command:   
```npm install react-scripts@latest```  

## Create a new react-app using:
```npm init react-app``` "App name" <samp> or </samp> ```npx create-react-app .``` <samp> where "." means the current directory. </samp> 
### Run the new app using:
If diferent directory then use ```cd ``` <samp>"app name"</samp>   
Then ```npm start```  
 
```npm install react-router-dom```   
React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!
   
What is react router?   
React router is a routing library built on top of the react which is used to create the routing in react apps. It is used to create routes in the react app. It maintains the mapping between the url and the components. It keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. It is used to create the single page application. It is used to create the navigation between the components. It is used to create the multiple pages in the react app. It is used to create the dynamic routing in the react app. It is used 

```npm install react-bootstrap bootstrap```  
React-Botstrap is a library with a complete re-implementation of Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed you have everything you need.   

```npm install react-icons --save```  
React Icons Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.   

## React JSX
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements. JSX is an extension to the JavaScript language based on ES6, but it is not required to use it. JSX is not a necessity to write React applications. JSX is a syntax extension to JavaScript. JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string. Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression.
   
## React Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function.   

Components come in two types, Class components and Function components.

# Create a React Component
A React component is a function or a class which optionally accepts input and returns a React element (typically via JSX which gets compiled to a createElement invocation).

![React Function](/img/functionComponent.png);   
For a component to render something on the page, it needs to return it as one or more JSX elements.

# React Class Components



## React Props
Props are arguments passed into React components. Props are passed to components via HTML attributes.  
Props can be used to pass data, or functions, from one component to another.

## React State
React State is?
React State is a JavaScript object that stores a component's dynamic data and determines the component's behavior. React State is mutable.

### Throubleshooting
## Git 

Note:   
```I use copilot to help me to write this readme file.```