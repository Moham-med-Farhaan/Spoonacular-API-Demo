

import './App.css'
function Recipe(props){

    return(
        
        <div className="card">

            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
        </div>
        
    )
}
export default Recipe;