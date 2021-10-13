import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link';
import { RootDiv, IndexDiv, IndexFlexDiv, CardTestDiv, SubDiv, SubPs, HeadPs } from '../styles/styles-index';

export const getStaticProps = async () =>{

  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json(); 

  return {
      props: {allcountries: data}
  }
}

export const addCommas =(val:number)=>{
  return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}            


const Home: NextPage <{allcountries: Array<any>}> = ({allcountries}) => {
  return (
    <RootDiv>
      <Head>
          <title>REST API Countries | by Aji</title>
          <meta name="index" content="rest api countries challenge" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexDiv>
        <IndexFlexDiv>
            {allcountries.map((allcountries: any, key) =>(
              <Link href={'/country/'+allcountries.name.common} key={allcountries.name.official}>
                <CardTestDiv key ={key}>
                  <Image src={allcountries.flags.png} alt={allcountries.name.common} width={265} height={161}/>
                  <SubDiv>
                    <HeadPs>{allcountries.name.common}</HeadPs>
                    <SubPs><b>Population: </b>{addCommas(allcountries.population)}</SubPs> 
                    <SubPs><b>Region: </b>{allcountries.region}</SubPs>
                    <SubPs><b>Capital: </b>{allcountries.capital}</SubPs>
                  </SubDiv>
                </CardTestDiv>
              </Link> 
            ))}
        </IndexFlexDiv>
      </IndexDiv>

    </RootDiv>
  )
}

export default Home
