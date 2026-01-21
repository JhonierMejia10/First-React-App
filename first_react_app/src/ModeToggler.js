function ModeToggler(){
    const darkModeOn = true;
    const darkMode = <h1>Dark Mode is On</h1> 
    const LightMode = <h1>Light Mode is On</h1> 
    return(
        <div>
            {darkModeOn ? darkMode : LightMode}
        </div>
    )
}

export default ModeToggler