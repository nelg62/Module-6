import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer'
import City from './components/City'

// function Welcome(props) { // custom Welcome component
//   return (
//   <div className="Welcome">
//   {/* if the 'name' prop exists, render it on the screen */}
//   <h3>Welcome {props.name}!</h3>
//   {/* if this component has children, render them here */}
//   {props.children}
//   </div>
//   )
// }

// componentBox class styles a component into a box
// Welcome class identifies this component
function Welcome(props) {
  return (
  <div className="componentBox">
  <h3>Welcome {props.name}!</h3>
  </div>
  )
  }


// This creates a new component as a function that returns some JSX.
function ExampleComponent() {

  return (
  <div className="ExampleComponent componentBox">
  <h1>My Example Component</h1>
  <p>My first React component!</p>
  </div>
  )
  }


function App() {
  const [count, setCount] = useState(0)

  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
// single parent <div> element
const spideyJSX = (<div>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote>
  <cite>{spiderman.alterEgo}</cite>
  </div>);

  // single parent fragment element
const spideyJSXFragment = (<>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote>
  <cite>{spiderman.alterEgo}</cite>
  </>);

const divStyle = { background: 'lightblue', padding: '1em', fontWeight: 'bold' };

  return (
    <>
    {spideyJSX}

    {spideyJSXFragment}

  {/* This renders the component, calling the function and
including its JSX output at this point in the code. */}
<ExampleComponent/>

{/* Renders the Welcome component with
a name prop and a child (nested)
element */}
<Welcome name="students">
<p>Children of Welcome</p>
</Welcome>

<h3 style={{color: 'blue', textTransform: 'uppercase'}}>Welcome!</h3> {/* style object directly in JSX */}

<div style={divStyle}>This is a styled div.</div> {/* style object as a variable - neater and re-usable */}


<PropsDisplayer name="Harry Styles" age={29}/>

<PropsDisplayer pets={["cat", "dog", "goldfish"]}/>

<PropsDisplayer reactLogo={reactLogo} buttonCount={count}/>

<City name="Sydney" />

<City name="Melbourne" state="VIC" />

<City name="Chicago" state="Illinois" country="USA" />

<City name="Newcastle">
<div>Newcastle is a harbour city in the Australian state
of New South Wales.</div>
<div><strong>Population:</strong> 322,278 (2016)</div>
</City>



      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
