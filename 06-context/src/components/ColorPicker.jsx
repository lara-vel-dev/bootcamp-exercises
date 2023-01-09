import { useContext } from "react";
import { ThemeContext } from "../App";

function ColorPicker() {
    let [color, setColor] = useContext(ThemeContext);
    return (<>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
    </>)
}

export default ColorPicker;