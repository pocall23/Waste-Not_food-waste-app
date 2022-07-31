import React from "react";
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './FoodList.css'

function FoodList({ foods, title }) {
  
  if (!foods.length) {
    console.log(foods)
    return <h3 className="heading">No Foods avaliable</h3>
  }
  return (
    <div className="flex-column justify-space-between my-4">
      <h3 className="heading">{title}</h3>
      
        
        {foods && foods.map((food)=> (
          <div>
          <Card key={food._id} sx={{ maxWidth: 500, mx: "auto" }} className>
            <CardHeader title={food.name}>
            </CardHeader>
            <CardMedia
              component="img"
              height="194"
              image= {food.image}
              alt={food.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              {food.description}
              </Typography>
              
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Button size="small">
                  <Link to={`/Food/${food._id}`}>
                  More info
                  </Link>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <br/>
          </div>
          ))}
        
        
          
        
   
      
        
    </div>
  );
}

export default FoodList;
