import {useState,useEffect} from 'react'
import React, {Component} from 'react'
import './Searchbar.css'
import { Button, Col, Container, Form, Row,Card } from "react-bootstrap";

function ApiCall(props) {
    const [recipes, setRecipes] = useState([])

    const fetchRecipeData = () => { 
      if(props.food != "")
      {     
      {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${props.food}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'ce78851c6bc24bf4944626cc0c04848e'
        }
      
    })
    .then(response => {
    return response.json()
    })
    .then(data => {
     
        setRecipes(data.results);
      
      
    })
  }
}
    }

    useEffect(() => {     
      fetchRecipeData(props.food);
    }, [props.triggerSearch]);

    return (
      <>   
        {recipes.length > 0 && (
          <div className="justify-content-center">
             {recipes.map(recipe => (
              
            <Card className='m-2'>
              <Card.Img className='w-100' variant="top" src={recipe.image} />
               <Card.Body>
                 <Card.Title>{recipe.title}</Card.Title>                        
               </Card.Body>
             </Card>             
      ))}
      </div>          
        )}      
      </>
    )
}

export default ApiCall
