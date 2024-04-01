import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Searched() {
    const key = process.env.REACT_APP_API_KEY
    const [search,getSearch] = useState([])
    let params = useParams()
    const getQuery = async(item) =>{
        const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+key+"&query="+item)
        const recipes = await data.json()
        localStorage.setItem(params,JSON.stringify(recipes.results))
        getSearch(recipes.results)
    }
    useEffect(()=>{
        getQuery(params.search)
    },[params.search])
  return (
    <Grid>
      {
        search.map((item)=>{
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
  border:10px;
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
export default Searched