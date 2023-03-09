import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Contact">
      <h1>Contact</h1>
       <ul className="List">
        <li>
          <p>Name: Sabina-Elena Rusu</p>
        </li>
        <li>
          <p>Address: Iasi, Romania</p>
        </li>
        <li>
          <p>Phone: 0762238203</p>
        </li>
       </ul>
       <div className="About">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam sapiente ex ducimus voluptates libero quos dolores eos, inventore molestias sed suscipit earum quas, aspernatur nulla cupiditate ea dolorem veniam dicta consequuntur? Eaque, consectetur maxime quas fugit distinctio minus illum obcaecati asperiores recusandae voluptas vitae? Dicta exercitationem minima repellat totam. </p>
       </div>
       
    </div>
  );
}

export default App;