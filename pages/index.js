import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {

  return (
    <>
         <div>
        <Image style={{borderRadius:"50%"}} src={data.avatar_url} alt="avtar" width={200} height={200} />
          <h1>{data.name}</h1>
          <h3>{data.bio}</h3>
         
        <div style={{display:"flex", gap:"20px", marginTop:"10px",}}>
          <Link href="https://drive.google.com/file/d/1Kn0iGcxuQb-Fe8ZyWxbqb9UP33vyNutV/view?usp=share_link">

          <button style={{fontSize:"15px", padding:"8px", backgroundColor:"blue", borderRadius:"50px"}}>Resume</button>
          </Link>
         
           <Link href={data.html_url}>
                    
           <button style={{fontSize:"15px", padding:"8px", backgroundColor:"blue",borderRadius:"50px"}}>Follow</button>
            </Link>
          
        </div>


        <div className='lang' style={{marginTop:"20px", marginLeft:"20px"}}>

            <h1 style={{margin:"10px"}}>Tech Stack</h1>

            <h3> JAVASCRIPT</h3>
            <br/>
            <h3> REACT</h3>
            <br/>
            <h3> HTML</h3>
            <br/>
            <h3> CSS</h3>
            <br/>
            <h3> REDUX</h3>
            <br/>
            <h3> TYPESCRIPT</h3>
        </div>
    

        </div>

    
    </>
    
  )


}





export const getStaticProps= async()=>{

   let res =await fetch("https://api.github.com/users/yogeshnishad007")
   let data = await res.json();

   
    return{
      props:{
        data:data,
      }
    }

}
