import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";

//define part1
const Part1 = (props) => {
  return (
    <p>
      {props.part1.parts[0].name} {props.part1.parts[0].exercises}
    </p>
  );
};

//define part2
const Part2 = (props) => {
  return (
    <p>
      {props.part2.parts[1].name} {props.part2.parts[1].exercises}
    </p>
  );
};

//define part3
const Part3 = (props) => {
  return (
    <p>
      {props.part3.parts[2].name} {props.part3.parts[2].exercises}
    </p>
  );
};

//define Header component
const Header = (props) => {
  return <p> {props.course.name} </p>;
};

//define Contents component
const Contents = (props) => {
  // console.log(props.parts[0].name, "rrrrrttyyyy#####yyuuaaa");
  return (
    <div>
      <Part1 part1={props.parts} />

      <Part2 part2={props.parts} />

      <Part3 part3={props.parts} />
    </div>
  );
};

//define Total component
const Total = (props) => {
  return (
    <p>
      Number of exercises
      {props.total.parts[0].exercises +
        props.total.parts[1].exercises +
        props.total.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Contents parts={course} />

      <Total total={course} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
