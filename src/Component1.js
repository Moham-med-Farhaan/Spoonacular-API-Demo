import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import './App.css';

function Component1() {
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');
  useEffect(() => {
    getRecipes();
  }, [query]);



  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=20ff77549bd04728bdd6facf94ee6e1b&number=10&tags=${query}`
    );
    const data = await api.json();
    console.log(data.recipes);
    setRecipes(data.recipes);
  };
  const updateSearch=e=>{
    setSearch(e.target.value)
  }
  const getQuery=(e)=>{
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }

  return (
    <div>
      <form className="form-name" onSubmit={getQuery}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit"  >Search</button>
      </form>

       {recipes.map((recipe ) => {
        return(
            <Recipe key={recipe.id} image={recipe.image} title={recipe.title}></Recipe>
        )
      })}
    </div>
  );
}

export default Component1;
