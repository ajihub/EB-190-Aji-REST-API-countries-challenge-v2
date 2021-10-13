import styled from "styled-components";

export const RootDiv = styled.div`
    min-height: 1080px;
    background-color: ${props=> props.theme.background}
`
export const SubRoot = styled.div`
    padding-left:80px;
    background-color: ${props=> props.theme.background};
    @media screen and (max-width: 650px) {
        padding-left: 17px;
    }
`
export const TopDiv = styled.div`
    padding-top:80px;
    @media screen and (max-width: 650px) {
        padding-top:40px;
    }
` 
export const DetailsDiv = styled.div`
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    color: ${props=> props.theme.text};
    @media screen and (max-width: 650px) {
        margin-top: 64px;
    };
`
export const FlexDiv = styled.div`
    flex:1;
    display: flex;
    flex-wrap: wrap;
`
export const TextDiv = styled.div`
    padding: 0px 36px;
    @media screen and (max-width: 650px) {
        padding: 0px 0px;
    }
`
export const BorderDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
export const BackButton = styled.button`
    cursor: pointer;
    height: 40px;
    width: 135px;
    border-radius: 5px;
    border: none;
    align-items: center;
    justify-content: center;
    display: flex;
    font-family : inherit;
    background-color: ${props=> props.theme.body};
    color: ${props=> props.theme.text}
`
export const BorderButton = styled.button`
    cursor: pointer;
    min-width: 95px;
    height: 28px;
    margin: 5px;
    border-radius: 5px;
    border:none;
    font-family : inherit;
    background-color: ${props=> props.theme.body};
    color: ${props=> props.theme.text};
    :hover{
        box-shadow: 0px 0px 3px 0.5px #ABABAB;
        transition: box-shadow 0.3s ease-in 0s;
    };
`

export const CountryImage = styled.img`
    height: 400px;
    width: 560px;
    min-width: 560px;
    margin-right: 110px;
    @media screen and (max-width: 650px) {
        height: 230px;
        width: 325px;
        min-width: 325px;
        margin-right: 0px;
    }
`