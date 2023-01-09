import Link from 'next/link'
import React from 'react'

const Project = ({data}) => {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Project</h1>

         <div  style={{display:"grid", gridTemplateColumns:"repeat(3,1fr", gap:"40px", marginLeft:"60px" , marginTop:"60px"}}>
         {
            data.map((el)=>{
                return(
                    <>
                    
                    <Link href={el.html_url} >
                        <div className='box'>
                       
                             
                               <h2>{el.name}</h2>
                               <div style={{display:"flex", gap:"40px"}}>
                                    
                                    <h3> fork:{el.forks_count}</h3>
                                    <h3>count :{el.size}</h3>
                               </div>

                               <h3>{el.language}</h3>

                               

                        </div>
                        </Link>
                        
                    </>
                )
            })
         }
         </div>

    </div>
  )
}

export const getServerSideProps= async()=>{

    let res =await fetch("https://api.github.com/search/repositories?q=user:yogeshnishad007+fork:true&sort=updated&per_page=10&type=Repositories")
    let data = await res.json();
 
    
     return{
       props:{
         data:data.items,
       }
     }
 
 }
 

export default Project