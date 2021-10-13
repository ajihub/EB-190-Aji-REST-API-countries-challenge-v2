import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/dist/client/link';
import { SearchFilterDiv, IconDiv, SearchbarDiv, SearchBar, RootDiv, IndexDiv, IndexFlexDiv, CardTestDiv, SubDiv, SubPs, HeadPs } from '../styles/styles-index';
import { IoSearchOutline } from "react-icons/io5"; 

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

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <RootDiv>
      <Head>
          <title>REST API Countries | by Aji</title>
          <meta name="index" content="rest api countries challenge" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchFilterDiv>
          <IconDiv>
            <IoSearchOutline size={20}/>
          </IconDiv>
          <SearchbarDiv>
            <SearchBar type="text" placeholder="Search for a country..." onChange={e => {setSearchTerm(e.target.value)}}/>
          </SearchbarDiv>
      </SearchFilterDiv>

      <IndexDiv>
        <IndexFlexDiv>
            {allcountries.filter((val) =>{ //Search Filter
                if(searchTerm == "0"){
                  return val
                }else if (val.name.common.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
            }).map((allcountries: any, key) =>(
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
