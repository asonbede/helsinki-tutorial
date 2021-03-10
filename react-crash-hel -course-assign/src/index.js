import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = (props) => {
  console.log(props, "yydddddd");
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log(props.part, "UUUUUUUU");
  const parts = props.course;
  return (
    <>
      {parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </>
  );
};

const Total = (props) => {
  console.log(props, "popopopopooo");
  const parts = props.course;
  console.log(parts, "popopopopooo5555555");
  const exercisesArray = parts.map((item) => item.exercises);
  console.log(exercisesArray, "popopopopooo2222222");
  const exercisesSum = exercisesArray.reduce(
    (accum, currValue) => accum + currValue
  );
  return <p> Total of {exercisesSum} exercises</p>;
};

const Part = (props) => {
  return (
    <p>
      {" "}
      {props.part} {props.exercises}
    </p>
  );
};
const Course = (props) => {
  return (
    <>
      <Header course={props.name} />
      <Content course={props.part} />

      <Total course={props.part} />
    </>
  );
};

const App = () => {
  const notes = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      {notes.map((item) => (
        <Course name={item.name} part={item.parts} key={item.id} />
      ))}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
