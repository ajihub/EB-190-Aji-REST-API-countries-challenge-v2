import React, {FC, Dispatch, SetStateAction} from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { HeaderRootDiv, TitleDiv, Title, ToggleTheme, ThemeText, ThemeBtn } from '../styles/styles-header';

const Navbar: FC <{theme:string, setTheme:Dispatch<SetStateAction<"light" | "dark">>}> = ({theme, setTheme}) => {
    
    return ( 
        <HeaderRootDiv>
            <TitleDiv>
                <Title>Where in the world?</Title>
            </TitleDiv>
            <ToggleTheme>
                <ThemeBtn onClick={()=>{
                    setTheme(prev => prev == "light" ? "dark" : "light")
                }}>
                    {theme === "dark" ?
                    <>  
                        <IoSunnyOutline size={20}/>
                        <ThemeText>Light Mode</ThemeText>
                    </>
                    :
                    <>
                        <IoMoonOutline size={20}/> 
                        <ThemeText>Dark Mode</ThemeText>
                    </>
                    }
                </ThemeBtn>
            </ToggleTheme>
        </HeaderRootDiv>
     );
}
 
export default Navbar;