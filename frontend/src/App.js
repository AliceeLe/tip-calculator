import React, { useEffect, useState } from "react";
import "./App.css";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
import logo from "./images/logo.svg";

function Input({ value, setValue, title, image }) {
  return (
    <div className="input flex flex-col align-stretch gap-2">
      <div className="flex flex-row justify-between align-center text-lg">
        <h2 className="text-dark-grayish-cyan font-bold text-lg">{title}</h2>
        <label className="text-red text-bold">
          {title === "Number of People" && value === 0 ? "Can't be zero" : ""}
        </label>
      </div>
      <div
        className={`flex flex-row align-stretch items-center justify-center py-1 px-2 bg-very-light-grayish-cyan rounded 
        ${
          title === "Number of People" && value === 0
            ? "border-2 border-red"
            : "border-2 border-green"
        }`}
      >
        <div className="px-2">
          <img src={image} className="w-4 h-auto" />
        </div>
        <input
          className="w-full font-bold text-very-dark-cyan text-2xl text-right bg-very-light-grayish-cyan"
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

function ButtonTip({ value, setValue }) {
  return (
    <button
      className="bg-very-dark-cyan py-2 rounded-lg hover:bg-strong-cyan hover:text-very-dark-cyan active:bg-light-grayish-cyan"
      type="button"
      onClick={() => setValue(value)}
    >
      {value}%
    </button>
  );
}

function Tip({ value, setValue }) {
  return (
    <div className="input">
      <h2 className="text-dark-grayish-cyan font-bold text-lg">Select Tip %</h2>
      <div className="pt-2 grid grid-cols-2 gap-3 text-light-grayish-cyan font-bold text-2xl">
        <ButtonTip value={5} setValue={setValue} />
        <ButtonTip value={10} setValue={setValue} />
        <ButtonTip value={15} setValue={setValue} />
        <ButtonTip value={25} setValue={setValue} />
        <ButtonTip value={50} setValue={setValue} />
        <input
          className={`bg-very-light-grayish-cyan text-grayish-cyan text-center ${
            value < 0 ? "border-2 border-red" : "border-2 border-green"
          }`}
          type="number"
          placeholder="Custom"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

function Calculator({ bill, setBill, tip, setTip, people, setPeople }) {
  return (
    <div>
      <form className="flex-1 flex flex-col gap-6 align-stretch pb-8">
        <Input
          value={bill}
          setValue={setBill}
          title="Bill"
          image={iconDollar}
        />
        <Tip value={tip} setValue={setTip} />
        <Input
          value={people}
          setValue={setPeople}
          title="Number of People"
          image={iconPerson}
        />
      </form>
    </div>
  );
}

function SummaryInfo({ bill, tip, people, title }) {
  let amount;
  if (title === "Tip Amount") {
    amount = Math.round(((bill * (tip / 100)) / people) * 100) / 100;
  } else if (title === "Total") {
    amount = Math.round(((bill * (1 + tip / 100)) / people) * 100) / 100;
  }
  if (isNaN(amount)) {
    amount = 0;
  }
  return (
    <div className="flex summary-info px-6 py-8 justify-between">
      <div className="summary-info-title">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <p className="text-grayish-cyan">/ person</p>
      </div>
      <p className="text-strong-cyan font-bold text-5xl">${amount}</p>
    </div>
  );
}

function Summary({ bill, setBill, tip, setTip, people, setPeople }) {
  function Reset() {
    setBill(0);
    setTip(0);
    setPeople(0);
  }

  return (
    <div className="flex flex-col justify-between w-full md:w-2/5 bg-very-dark-cyan rounded-xl">
      <div className="summary">
        <SummaryInfo
          bill={bill}
          tip={tip}
          people={people}
          title={"Tip Amount"}
        />
        <SummaryInfo bill={bill} tip={tip} people={people} title={"Total"} />
      </div>
      <button
        className="w-3/4 mx-auto my-auto py-2 bg-strong-cyan font-bold text-lg hover:cursor-pointer hover:bg-light-grayish-cyan rounded mb-4"
        onClick={Reset}
      >
        RESET
      </button>
    </div>
  );
}

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  return (
    <div className="bg-light-grayish-cyan h-screen flex flex-col font-mono text-base justify-normal items-center">
      <div className="mx-auto my-8 md:mt-20 md:mb-5">
        <img src={logo} alt="logo splitter" />
      </div>
      <div className="w-full boxShadow-shadow flex flex-col md:flex-row md:my-auto justify-between md:w-3/5 gap-4 bg-white mx-auto rounded-t-lg md:rounded-lg px-8 py-8 ">
        <Calculator
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Summary
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
      </div>
    </div>
  );
}

export default App;
