import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToArray = () => {
    if (inputValue == "") {
      setError(true);
    } else {
      setError(false);
    }
    if (inputValue) {
      setArray([...array, inputValue]);
      setInputValue(""); // Clear the input after adding
    }
  };

  const convertedArray = array.map((element) => {
    const number = Number(element);
    return !isNaN(number) ? number : element;
  });

  const strings = convertedArray.filter(
    (element) => typeof element === "string"
  );
  const numbers = convertedArray.filter(
    (element) => typeof element === "number"
  );

  return (
    <div>
      <h1>Task Two</h1>
      <h3>
        Storing input textbox value into an array, displaying the separate
        Number Array and String Array Using Javascript
      </h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
      />
      {error ? <div>The Task Value field is required.</div> : null}
      <button onClick={handleAddToArray}>Add to Array</button>

      <h2>Original Array:</h2>
      <pre>
        {array.map((item, index) => {
          return (
            <>
              <li>{item}</li>
            </>
          );
        })}
      </pre>

      <h2>Strings:</h2>
      <ul>
        {strings.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>

      <h2>Numbers:</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
