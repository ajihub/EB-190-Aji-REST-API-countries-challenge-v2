import { NextPage } from "next";

export const getStaticPaths = async () =>{
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json()
    const paths = data.map((country:any) => {
        return {
            params: {name: country.name.common.toString()}
        }
    })
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context:any) =>{
    const id = context.params.name;

    const res = await fetch('https://restcountries.com/v3.1/name/'+encodeURI(id)+'?fullText=true')
    const country = await res.json();

    let query = [];
    if ('borders' in country[0]){
    for (const neighbor of country[0].borders) {
        query.push(neighbor)
    }
   }
    const resN = await fetch("https://restcountries.com/v3.1/alpha?codes=" + query.join(","))
    const border = await resN.json()
    let neighbors = [];
    if (border.length > 0) {
        for (let neighbor of border) {
            neighbors.push({name: neighbor.name.common })
        }
    } 
    return{
        props: {
            country,
            neighbors: neighbors,
        },
    }
}

const CountryDetails: NextPage <{country:any, neighbors:any}> = ({country, neighbors}) => {
    return(
        <>
        </>
    )
}

export default CountryDetails;