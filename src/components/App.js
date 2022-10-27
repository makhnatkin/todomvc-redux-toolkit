import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
