import { useState} from "react";

function ModeToggler(){

    const[darkModeOn, setDarkModeOn] = useState(true);

    const darkMode = <h1>Dark Mode is On</h1> 
    const LightMode = <h1>Light Mode is On</h1>
    let text;

    function handleClick(){
        setDarkModeOn(!darkModeOn);
    }
    return(
        <div>
            {darkModeOn ? darkMode : LightMode}
            <button onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}

export default ModeToggler