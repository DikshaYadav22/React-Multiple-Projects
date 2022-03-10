import "./App.css";
import React, { useState } from "react";
import data from "./birthdaycomponents/data.js";
import Lists from "./birthdaycomponents/Lists.js";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <Lists people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
