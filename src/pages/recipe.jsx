import React from 'react'
import { useEffect,useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Recipe() {
    const key = process.env.REACT_APP_API_KEY
    const param = useParams()
    const [details,setRecipe] = useState({})
    const [activeTab,setActiveTab] = useState('instructions')
    const recipe_api = async() =>{
        const data = await fetch("https://api.spoonacular.com/recipes/"+param.id+"/information?apiKey="+key)
        const recipe = await data.json()
        setRecipe(recipe)
    }
    useEffect(()=>{
        recipe_api()
    },[param.name])
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt=''/>
      </div>
      <Info>
        <Buttonin className={activeTab ==='instructions'?'active':''} onClick={()=>setActiveTab('instructions')}>Instructions</Buttonin>
        <Buttonig className={activeTab ==='ingredients'?'active':''} onClick={()=>setActiveTab('ingredients')}>Ingredients</Buttonig>
        {activeTab ==='instructions'&&(
          <Ins>
            <h6 dangerouslySetInnerHTML={{__html:details.summary}}></h6 >
            <h6 dangerouslySetInnerHTML={{__html:details.instructions}}></h6>
          </Ins>
        )
        } 
        {activeTab === 'ingredients' &&(
          <div>
              {details.extendedIngredients.id}
          </div> 
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top:5rem;
margin-bottom:5rem;
display:flex;
text-align:left;
.active{
  background:linear-gradient(35deg,#494949,#313131);
  color:white;
}
h2{
  margin-bottom:2rem;
}
li{
  font-size:1.2rem;
  line-height:2.5rem;
}
ul{
  margin-top:2rem;
}
img{
  height:200px;
  width:300px;
}`

const Buttonin = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
position:relative;
margin-bottom:2rem;
top:6rem;
left:-17rem;
`
const Buttonig = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
position:relative;
margin-bottom:2rem;
width:9.05rem;
top:0.75rem;
left:-1.8rem;
`
const Info = styled.div`
margin-left:350px;`

const Ins = styled.div`
margin-left:-17rem;
width:25rem;
font-size:19px`

export default Recipe