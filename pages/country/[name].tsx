import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import { NextPage } from "next";
import { addCommas } from "..";
import { IoArrowBackOutline } from "react-icons/io5";
import { RootDiv, SubRoot, TopDiv, DetailsDiv, FlexDiv, TextDiv, BorderDiv, BackButton, BorderButton, CountryImage} from "../../styles/styles-detailspage";


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

    let NativeNameArr:Array<string>;
    if('nativeName' in country[0].name){
     NativeNameArr = (Object.values(country[0].name.nativeName)).map((val:any)=> val.common)
    }else{
     NativeNameArr = ['No native name']
    }

    let CurrencyArr:Array<string>;
    if('currencies' in country[0]){
        CurrencyArr = (Object.values(country[0].currencies)).map((val:any)=> val.name)
    }else{
        CurrencyArr = ['No currency']
    }

    let LanguagesArr:Array<string>;
    if('languages' in country[0]){
        LanguagesArr= (Object.values(country[0].languages))
    }else{
        LanguagesArr = ['No languages']
    }
    
    return(
<RootDiv>
    <Head>
        <title>REST API Countries | Details</title>
        <meta name="description" content="rest api countries challenge" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <SubRoot>
        <TopDiv>
            <Link href={'/'}>
                <BackButton>
                    <IoArrowBackOutline size={20}/>Back
                </BackButton>
            </Link>
        </TopDiv>

        <DetailsDiv>
            <CountryImage src={country[0].flags.png} alt={country[0].name.common}/>
            <div> 
                <div>
                    <TextDiv>
                    <h2>{country[0].name.common}</h2>
                    </TextDiv>
                </div>
                <FlexDiv>
                    <TextDiv>
                        <p><b>Native Name:</b> {NativeNameArr.join(", ")}</p>
                        <p><b>Population:</b> {addCommas(country[0].population)}</p>
                        <p><b>Region:</b> {country[0].region}</p>
                        <p><b>Sub Region:</b> {country[0].subregion}</p>
                        <p><b>Capital:</b> {country[0].capital}</p>
                    </TextDiv>

                    <TextDiv>
                        <p><b>Top Level Domain:</b> {country[0].tld}</p>
                        <p><b>Currencies:</b> {CurrencyArr.join(", ")}</p>
                        <p><b>Languages:</b> {LanguagesArr.join(", ")}</p>
                    </TextDiv>
                </FlexDiv>
                <div>   
                    <TextDiv>
                        <BorderDiv>
                            <p><b>Border Countries: </b></p>
                            <div>
                                {neighbors.map((neighbors:any) => (
                                <Link href={'/country/'+neighbors.name} key={neighbors.name}>
                                    <BorderButton>{neighbors.name}</BorderButton>
                                </Link>
                                ))}
                            </div>
                        </BorderDiv>
                </TextDiv>
                </div>  
            </div>
            
        </DetailsDiv>
    </SubRoot>    
</RootDiv>    
    )
}

export default CountryDetails;