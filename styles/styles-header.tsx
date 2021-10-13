import styled from "styled-components";

export const HeaderRootDiv = styled.nav`
    padding: 0px 80px;
    height: 80px;
    display: flex;
    @media screen and (max-width: 650px){
        padding: 0px 15px;
    }
    background-color: ${props=> props.theme.body};
`
export const TitleDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
export const Title = styled.p`
    font-size: 20px;
    font-weight: 800;
    @media screen and (max-width: 650px){
        font-size: 17px;
    }
    color: ${props=> props.theme.text}
`
export const ToggleTheme = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const ThemeText = styled.p`
    font-weight: 600;
    padding-left: 5px;
`

export const ThemeBtn = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    border:none;
    font-family : inherit;
    color: ${props=> props.theme.text} ;
    background: none;
    border-radius: 10px;
`