export default function Warnin(date){


return<div>
    <h2>{date.id}</h2>
<h2>{date.name}</h2>




</div>

}


export async function getStaticPaths(){


try{
 const red= await fetch('https://jsonplaceholder.typicode.com/users');
const date= await red.json()
 const paths = date.map((e)=>{ return { params:{id: `${e.id}`}}     }   )


 return {
  paths,
  fallback: false
 }


}catch(error){
console.log(error)
}


}


export async function getStaticProps({params}){


    try{
const  red= await fetch('https://jsonplaceholder.typicode.com/users/' + params.id  )
const date= await red.json()

return {
    props: date
}


    }catch(error){

console.log(error)
    }

}






