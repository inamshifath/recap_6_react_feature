import { useEffect, useState } from "react"
import Person from "./person";

export default function User(){
    const [users, setusers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setusers(data))
    },[])
    return(
        <div>
            {
                users.map(user => <Person person={user} ></Person>)
            }
        </div>
    )
}