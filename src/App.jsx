import "./App.css";
import * as rRouter from 'react-router-dom'
import Pages from "./components/Pages";
// import * as rRouters from "react-router-dom";

function App() {
  return (
    <>
      <rRouter.BrowserRouter>
        <Pages />
      </rRouter.BrowserRouter>
      
    </>
  );
}

export default App;
