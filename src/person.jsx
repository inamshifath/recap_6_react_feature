import './person.css'
export default function Person({person}){
    const{id,title,body}=person;
    return(
        <div className="box1" >
            <h2>Title:   {title} </h2>
            <h2>User id:   {id} </h2>
            <p>body</p>
            <p>{body} </p>
        </div>
    )
}