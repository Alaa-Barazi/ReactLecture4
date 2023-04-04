
export default function Name({arr}){
   
    return(
        <ul>
       { arr.map((person)=>(
          <li  key={person.id}> {person.name}</li>
        ))}
      </ul>
    )
}