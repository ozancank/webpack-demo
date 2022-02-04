import React, { useState } from "react";
import { render } from "react-dom";

const App = () => {
    const [state, setState] = useState("CLICK ME");

    const handleClick = () => {
    	setState("CLICKED")
    }

    return <button onClick={handleClick}>{state}</button>;
}

render(<App />, document.getElementById("root"));