import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link,useParams } from 'react-router-dom';

const key = process.env.REACT_APP_API_KEY;
function Cuisine() {
  const [cuisine,setCuisne] = useState([])
  let params = useParams()
  useEffect(()=>{
    getRecipes(params.type);
  },[params.type]);
  const getRecipes = async(cuisines) =>{
      const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+key+"&cuisine="+cuisines+"*number=9")
      const recipes = await data.json()
      localStorage.setItem(params,JSON.stringify(recipes.results))
      setCuisne(recipes.results)
  }
  return (
    <Grid>
      {
        cuisine.map((item)=>{
          return (
            <Link to={'/recipes/'+item.id}>
            <Card key={item.id}>
            <img src={item.image} alt=''/>
            <h4>{item.title}</h4>
            </Card>
            </Link>
          )
        })
      }
    </Grid>
  )
}

const Grid = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
grid-gap:3rem;
`
const Card = styled.div`
img{
  width:100%;
  border10px;
  object-fit:cover;
}
a{
  text-decorator:none;
}
h4{
  text-align:center;
  padding:1px;
}
`

export default Cuisine