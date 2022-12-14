import { useRef } from "react";
import "./index.css";
import Slider from "./components/Slider";

export default function App() {
  const sliderRef = useRef();

  return (
    <div>
      <Slider ref={sliderRef}/>
      <br />
      <div className="container">
        <button
          className="btn-neon"
          onClick={() => sliderRef.current.prevItem()}
        >
          Prev
        </button>
        <button
          className="btn-neon"
          onClick={() => sliderRef.current.nextItem()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
