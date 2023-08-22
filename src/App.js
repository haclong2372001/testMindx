import "./styles.css";
import ToDoList from "../src/ToDoList";
import TodoListHeader from "../src/ToDoListHeader";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <ToDoList />
      </div>
      <Footer />
    </div>
  );
};
