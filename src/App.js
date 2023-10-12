import { useState } from "react";
import "./App.css";

function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day); // Note: month is zero-based

    if (birthDate > currentDate) {
      setAge("Invalid birth date");
      return;
    }

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      const prevMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        0
      );
      ageDays += prevMonthDate.getDate();
      ageMonths--;
    }

    setAge(
      `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days`
    );
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">Age Calculator</h2>
        <div className="input-group">
          <label className="input-label">
            Year:
            <input
              type="number"
              className="input-field"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>
          <label className="input-label">
            Month:
            <input
              type="number"
              className="input-field"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </label>
          <label className="input-label">
            Day:
            <input
              type="number"
              className="input-field"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </label>
        </div>
        <button className="calculate-button" onClick={calculateAge}>
          Calculate Age
        </button>
        <p className="result">{age}</p>
      </div>
    </div>
  );
}

export default App;