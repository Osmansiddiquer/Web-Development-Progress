import React, { useEffect } from "react";
import logo from './logo.svg';
import Prism from 'prismjs';
import 'prismjs/themes/prism-dark.css'
import './App.css';
import './'

let PrismJsx = require('prismjs/components/prism-jsx.min');

let sample_js_code = `
useEffect(() => {
  Prism.highlightAll();
}, []);`

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user: { firstName: string, lastName: string }) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user: { firstName: string, lastName: string }) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

let element = getGreeting(user);

let jsx_code_embedding_expressions =
  `function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

let element = getGreeting(user);
return element;`;

function MyComponent() {
  let container_style = {
    backgroundColor: "hsl(204, 30%, 40%)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 5px 1px black"
  }
  return (
    <div style={container_style}>
      <h1>Press Me -&gt;</h1>
      <button style={{ borderRadius: "50%", padding: "10px", width: "2rem", height: "2rem" }}></button>
    </div>
  );
}

let component_example =
  `function MyComponent() {
  let container_style = {
    // Some styling
  }
  return (
    <div style={container_style}>
      <h1>Press Me -&gt;</h1>
      <button style={{borderRadius: "50%",
      padding:"10px", width: "2rem", height:
      "2rem"}}>
      </button>
    </div>
  );
}`
function App(): JSX.Element {
  // thanks to:
  // https://dev.to/amitchauhan/syntax-highlighting-with-prismjs-and-react-1lep
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  // HTML goes below
  return (
    <div className="App">
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <pre className="inline">src/App.tsx</pre> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
        <p>
          Hope the journey is at least as good as the destination.
        </p>
        <p>
          Wait, isn't this just a tempelate language?
        </p>
      </section>
      <section>
        <header>
          <h2 className='center-text'>Understanding JSX/TSX</h2>
        </header>
        <p>
          JSX/TSX is a syntax extension to JavaScript/TypeScript. It is recommended to use it with React (not compulsory) to describe what the UI should look like. <em>"JSX may remind you of a template language, but it comes with the full power of JavaScript."</em> (Don't really see the difference yet, but I am going to trust them on that for now).
        </p>
        <p>
          In JSX, all the HTML elements must be enclosed in an single element. 'class' and 'for' attributes should be set using the 'className' and 'htmlFor' attribute.
        </p>
        <p>
          The App.jsx contains/exports a function called App that returns all the html that your app should display.
        </p>
        <p>
          Note: <em>All html tags with no closing tags mst be written as &lt; content /&gt; in JSX</em>
        </p>
        <h3>Importing CSS style sheets</h3>
        <p>
          To import a stylesheet, simply use 'import [css/file/path.css]'
        </p>
        <h3>How to use it?</h3>
        <p>JSX extends the syntax of vanilla javascript to allow you to use HTML within javascript. This means that you can create variables and assign HTML directly to them. Take the following example:</p>
        <code className='language-jsx'>
          const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
        </code>
        <p>In JSX, you can wrap any javascript expressions within curly braces to make them resolve into their values</p>
        <code className="language-jsx">
          {jsx_code_embedding_expressions}
        </code>
        <div className="output unselectable">
          {element}
        </div>
      </section>
      <section>
        <h2 className="center-text">Quick Intro to Components</h2>
        <div>React components are JavaScript functions that return markup:
          <code className="language-JSX">
            {component_example}
          </code>
        </div>
        <div className="output">
          <MyComponent />
        </div>
        <p>
        React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
        </p>
        <p>Note: Component names can only begin with a capital letter.</p>
        <div>
          <h4>Using the Component:</h4>
          <code className="language-JSX">
{`<div>
    <MyComponent />
</div>`}
          </code>
        </div>
      </section>
      <footer>
        <strong>Reference:</strong>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" target="_blank" rel="noopener noreferrer">Getting Started with React - MDN Guide</a></li>
          <li><a href="https://legacy.reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener noreferrer">An excellent overview of the features of JSX</a></li>
        </ul>
      </footer>
    </div>
  );
}
export default App;
