import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide,SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom';

const key = process.env.REACT_APP_API_KEY;
function Veggie() {
const [veggie,setVeggie] = useState([]);
    useEffect(()=>{
        getVeggie();
    },[]);
    const getVeggie = async () =>{
        const check = localStorage.getItem('veggie');
        if (check){
            setVeggie(JSON.parse(check))
        }
        else{
            const api = await fetch("https://api.spoonacular.com/recipes/random?apiKey="+key+"&number=9&tags=vegetarian");
            const data = await api.json();
            localStorage.setItem("veggie",JSON.stringify(data.recipes))
            setVeggie(data.recipes);
        }
    }
  return (
    <div>
        <h4>Vegetarian Picks</h4>
        <Splide options={{
            perPage:3
        }}>
        {veggie.map((recipe) =>{
            return(
                <SplideSlide key={recipe.id}>
                <Wrapper>
                    <Link to={'/recipes/'+recipe.id}>
                    <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt=""></img>
                    </Card>
                    </Link>
                </Wrapper>
                </SplideSlide>
            )
        })}
        </Splide>
    </div>
    
  )
}
const Wrapper = styled.div`
margin: 10px 0rem;`;

const Card = styled.div`
text-align: center;
width:210px;
height:250px;
border-radius: 2rem;
overflow: hidden;
img{
    width:100%;
    height:100%;
    border-radius:2rem;
    object-fit:cover;
}
p{
    position:absolute;
    z-index:10;
    left:40%;
    bottom:5%;
    transform:translate(-50%,0%);
    color:white;
    text-align:center;
    font-weight:600;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}`;
export default Veggie