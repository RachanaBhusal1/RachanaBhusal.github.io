import {useTheme, useThemeUpdate} from "../context/ThemeContext";

const PracticeThemeContext =() =>{
    const darkTheme=useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return(
        <>
        <div style={themeStyles}>
        Change theme
        </div><button onClick={toggleTheme}>Toggle theme</button>
    
    </>
    )
}
export default PracticeThemeContext