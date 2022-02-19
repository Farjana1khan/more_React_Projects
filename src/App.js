import React, { useState } from "react";
import data from "./Components/data";
import List from "./Components/List";
function Main() {
  const [people, setShowpeople] = useState(false);
  return (
    <main>
      <section className="container">
        <h3> Birthdays today</h3>

        {people && (
          <div>
            <List people={data} />
          </div>
        )}
        <button onClick={() => setShowpeople(true)}>Show All</button>
        <button onClick={() => setShowpeople(false)}>Clear All</button>
      </section>
    </main>
  );
}

export default Main;
