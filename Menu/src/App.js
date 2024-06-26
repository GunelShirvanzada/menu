import React from "react";

import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu />
      </section>
    </main>
  );
};

export default App;
