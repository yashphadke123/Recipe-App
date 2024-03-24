import Veggie from "../components/veggie";
import Category from "../components/categories";
import Popular from "../components/popular";
import React from 'react' 

function Home() {
  return (
    <div>
        <Category/>
        <Popular/>
        <Veggie/>
    </div>
  )
}

export default Home