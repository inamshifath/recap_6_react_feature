import { useState } from "react";
import './person.css'

export default function Button(){
    function click1(){
        alert('this is alert one');
    }
    function click2(num){
        alert(num+4);
    }
    const [num,setnum]=useState(0);
    function add(){
        setnum(num+1);
    }
    function remove(){
        if(num){
            setnum(num-1);
        }
    }
    return(
        <div className="box2" >
            <button onClick={click1}>Click One</button>
            <button onClick={()=>click2(6)}>Click Two</button>
            <h1>Count number:{num} </h1>
            <button onClick={add} >Add</button>
            <button onClick={remove} >Remove</button>
        </div>
    )
}