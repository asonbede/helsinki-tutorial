import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = (props) => {
  return (
    <tr>
      <th>{props.text}</th>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  console.log(props.statistics);
  if (props.statistics.total === 0) {
    return <p>No Feedback Given </p>;
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="Good" value={props.statistics.good} />

          <Statistic text="Bad" value={props.statistics.bad} />

          <Statistic text="Neutral" value={props.statistics.neutral} />

          <Statistic text="All" value={props.statistics.total} />

          <Statistic text="Average" value={props.statistics.averageScore} />

          <Statistic
            text="Positive"
            value={props.statistics.positivePercentage}
          />
        </tbody>
      </table>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const averageScore = (good + bad + neutral) / 3;
  const positivePercentage = total === 0 ? 0 : `${(good / total) * 100} %`;

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const statisticsObj = {
    good,
    bad,
    neutral,
    total,
    averageScore,
    positivePercentage,
  };

  return (
    <div>
      <h1> Give Feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleBad} text="Bad" />
      <Button handleClick={handleNeutral} text="Neutral" />

      {/* <p>Good {good} </p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad} </p>
      <p>Statistics</p> */}
      <Statistics statistics={statisticsObj} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// const App = () => {
//   console.log("everything setting");
//   return (
//     <div>
//       <p>Hello World </p>
//     </div>
//   );
// };

// ReactDom.render(<App />, document.getElementById("root"));
