import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

export const getStaticProps = async () =>{

  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json(); 

  return {
      props: {allcountries: data}
  }
}


const Home: NextPage <{allcountries: Array<any>}> = ({allcountries}) => {
  return (
    <>
    </>
  )
}

export default Home
