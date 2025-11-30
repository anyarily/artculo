import Head from "next/head"
import Styles from"./Styles.module.css"
import Link from "next/link"
import Prueba from "./Prueba"
import Image from "next/image"


export default function Principal({date}){

    let arreglo= [{nombre:"michael",edad:12},{nombre:"dany",edad:14}]

    function arriba(arreglo){
let mas= arreglo[0].edad

alert(mas)


    }
return <div    >

<Image src={ "/imagen.jpg"} width="60"  height="60" />
<button onClick={function(){arriba(arreglo)}  }> ahol</button>

  {date.map( (e) =>{return  <div key={e.id}>
    <Link href={`${e.id}`}>
    <h3>{e.id}</h3>
    </Link>
    

  </div>} )  }
<input></input>
<button>agrgue</button>

<Prueba  date={date[1].id} />
</div>
}
export async function getStaticProps() {
   
 try{

    const red= await fetch('https://jsonplaceholder.typicode.com/users');
    const date= await red.json()

    return {
        props:{
            date
        }
    }

 }catch(error){
    console.log(error)
 }



    
}


