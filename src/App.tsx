import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState<{
    days: number | undefined;
    months: number | undefined;
    years: number | undefined;
  }>({
    days: undefined,
    months: undefined,
    years: undefined,
  });

  return (
    <div className="container">
      <form
        className="upper"
        onSubmit={(e: any) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          const inputDate = new Date(
            `${formData.get("year")}-${formData.get("month")}-${formData.get(
              "day"
            )}`
          );

          // Calculate the time difference in milliseconds
          const timeDifference = new Date() - inputDate;

          // Calculate years, months, and days
          const elapsedYears = Math.floor(
            timeDifference / (365.25 * 24 * 60 * 60 * 1000)
          );
          const elapsedMonths = Math.floor(
            (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) /
              (30.44 * 24 * 60 * 60 * 1000)
          );
          const elapsedDays = Math.floor(
            (timeDifference % (30.44 * 24 * 60 * 60 * 1000)) /
              (24 * 60 * 60 * 1000)
          );

          setState({
            days: elapsedDays,
            months: elapsedMonths,
            years: elapsedYears,
          });
        }}
      >
        <div className="inputs">
          <div className="inner">
            <label htmlFor="day">DAY</label>
            <input
              id="day"
              inputMode="numeric"
              type="number"
              placeholder="DD"
              name="day"
            />
          </div>
          <div className="inner">
            <label htmlFor="month">MONTH</label>
            <input
              inputMode="numeric"
              name="month"
              id="month"
              type="number"
              placeholder="MM"
            />
          </div>
          <div className="inner">
            <label htmlFor="year">YEAR</label>
            <input
              inputMode="numeric"
              name="year"
              id="year"
              type="number"
              placeholder="YYYY"
            />
          </div>
        </div>

        <div className="middle">
          <hr className="hr-line" />
          <button className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>
      </form>

      <div className="calculator">
        <div className="inner-calc">
          <span className="number">{state.years ? state.years : "- -"}</span>
          <span className="text">years</span>
        </div>
        <div className="inner-calc">
          <span className="number">{state.months ? state.months : "- -"}</span>
          <span className="text">months</span>
        </div>
        <div className="inner-calc">
          <span className="number">{state.days ? state.days : "- -"}</span>
          <span className="text">days</span>
        </div>
      </div>
    </div>
  );
}

export default App;
