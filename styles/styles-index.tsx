import styled from "styled-components";

export const RootDiv = styled.div`
  min-height: 1080px;
  background-color: ${props=> props.theme.background};
`

//index card grid components=====
export const IndexDiv = styled.div`
 display: grid;
 flex-direction: column;
 align-items: center;
`
export const IndexFlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center; 
    background-color: ${props=> props.theme.background}
`
export const CardTestDiv = styled.div`
    margin:37.5px 36.5px;
    height: 335px;
    width: 265px; 
    min-width:265px ;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    :hover{
      box-shadow: 0px 2px 6px 3px #ABABAB;
      transition: box-shadow 0.3s ease-in 0s;
    }
    background-color: ${props=> props.theme.body};
    color: ${props=> props.theme.text}
`
export const SubDiv = styled.div`
    margin: 5px 15px;
`
export const SubPs = styled.p`
    margin: 5px 0px;
    font-size: 15px;
`
export const HeadPs = styled.p`
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0px;
`