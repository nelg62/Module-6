import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Pet from "./components/Pet";
import Greeting from "./components/Greeting";
import FullName from "./components/FullName";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import Callout from "./components/FancyBox";
import MoviesList from "./components/MoviesList";
import BigCats from "./components/BigCats";
import MoodChanger from "./components/MoodChanger";
import Emoji from "./components/Emoji";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import LoginForm from "./components/LoginForm";
import ExplodingBomb from "./components/ExplodingBomb";
import Calculator from "./components/Calculator";

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
  );
}

// This creates a new component as a function that returns some JSX.
function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    // author is also an object
    name: "Hello Kitty",
    avatarUrl:
      "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1714545644~exp=1714549244~hmac=f7c750e949ed8190be8004ba4e6c9eababa719d88a094829b111d6faead2e8d6/64/64",
  },
};

function App() {
  const [count, setCount] = useState(0);

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };
  // single parent <div> element
  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  // single parent fragment element
  const spideyJSXFragment = (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );

  const divStyle = {
    background: "lightblue",
    padding: "1em",
    fontWeight: "bold",
  };

  return (
    <>
      <Calculator></Calculator>
      {spideyJSX}
      {spideyJSXFragment}
      {/* This renders the component, calling the function and
including its JSX output at this point in the code. */}
      <ExampleComponent />
      {/* Renders the Welcome component with
a name prop and a child (nested)
element */}
      <Welcome name="students">
        <p>Children of Welcome</p>
      </Welcome>
      <h3 style={{ color: "blue", textTransform: "uppercase" }}>Welcome!</h3>{" "}
      {/* style object directly in JSX */}
      <div style={divStyle}>This is a styled div.</div>{" "}
      {/* style object as a variable - neater and re-usable */}
      <PropsDisplayer name="Harry Styles" age={29} />
      <PropsDisplayer pets={["cat", "dog", "goldfish"]} />
      <PropsDisplayer reactLogo={reactLogo} buttonCount={count} />
      <City name="Sydney">This is a city</City>
      <City name="Melbourne" state="VIC" />
      <City name="Chicago" state="Illinois" country="USA" />
      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>
      <Pet type={"Dog"}></Pet>
      <Greeting name="Glen">I can add stuff here</Greeting>
      <FullName first="Kendrick" last="Lamar" />
      {/* render the component, passing object data as props */}
      <ComplexComment {...comment} />
      <Comment {...comment}></Comment>
      {/* // render the Callout component with FullName as children */}
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>
      <MoviesList></MoviesList>
      <BigCats></BigCats>
      <MoodChanger></MoodChanger>
      <Emoji></Emoji>
      <BirthdayTranslator></BirthdayTranslator>
      <Weather></Weather>
      <LoginForm></LoginForm>
      <ExplodingBomb></ExplodingBomb>
      {/* <div>
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
      </p> */}
    </>
  );
}

export default App;
