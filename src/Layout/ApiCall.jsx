import {useState} from 'react'
import React, {Component} from 'react'
import './Searchbar.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function ApiCall(props) {
    const [recipes, setRecipes] = useState([])

    const fetchRecipeData = () => {
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
      setRecipes(data.results)
    })
    }

    return (
      <>
      <Row className="searchbarRow">
        <button onClick={fetchRecipeData}>Search</button>
      </Row>
      <div>
        {recipes.length > 0 && (
          <ul>
            {recipes.map(recipe => (
              <li key={recipe.id}><img src={recipe.image}/><br/>{recipe.title}</li>
            ))}
          </ul>
        )}
      </div>
      </>

    )
}

export default ApiCall
