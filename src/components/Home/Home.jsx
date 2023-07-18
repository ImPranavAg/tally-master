import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrementCounter,
//   incrementCounter,
//   resetCounter,
//   setCounter,
// } from "../../reduxServices/actions/counterActions";

const Home = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, name: "Counter 1" },
  ]);
  const [counterName] = useState("Tally Counter Using React");

  const handleChange = (event, counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, name: event.target.value };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  const handleValChange = (event, counterID) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterID) {
        return { ...counter, value: parseInt(event.target.value) || 0 };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  //increase counter
  const increase = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, value: counter.value + 1 };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  //decrease counter
  const decrease = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, value: counter.value - 1 };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  //reset counter
  const reset = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, value: 0 };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  //add counter
  const addCounter = () => {
    const newCounterId = counters.length + 1;
    const newCounter = {
      id: newCounterId,
      value: 0,
      name: `Counter ${newCounterId}`,
    };
    setCounters([...counters, newCounter]);
  };
  return (
    <div className="counter">
      <h1 className="counter-name">{counterName}</h1>
      <div className="counter__container">
        {counters.map((counter, index) => (
          <div
            className="counter__wrapper"
            key={counter.id}
            style={{ marginLeft: index > 0 ? "10px" : "0" }}
          >
            <h2 className="counter-heading">{counter.name}</h2>

            <div className="count-val">{counter.value}</div>
            <div className="counter__output">
              <div className="btn__container">
                <button
                  type="button"
                  className="btn btn-primary mx-2 my-2"
                  onClick={() => increase(counter.id)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-2 my-2"
                  onClick={() => decrease(counter.id)}
                >
                  -
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-2 my-2"
                  onClick={() => reset(counter.id)}
                >
                  Reset
                </button>
              </div>

              <div className="btn__container">
                <button
                  type="button"
                  className="btn btn-primary mx-2 my-2"
                  onClick={addCounter}
                >
                  Add Counter
                </button>
                <textarea
                  className="name-box"
                  placeholder="Enter Name of Counter"
                  onChange={(event) => handleChange(event, counter.id)}
                ></textarea>
                <textarea
                  className="val-box"
                  placeholder="Enter Start Value"
                  onChange={(event) => handleValChange(event, counter.id)}
                ></textarea>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
