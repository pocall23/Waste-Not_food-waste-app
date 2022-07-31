import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function FoodList({ foods, title }) {
  if (!foods.length) {
    console.log(foods);
    return (
      <div className="container p-4">
        <div className="row">
          <div className="cold-md-4">
            <div className="card">
              <div className="card-body">
                <form action="" method="POST" enctype="multipart/form-data">
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="image title"
                    ></input>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="description"
                      className="form-control"
                      placeholder="image description"
                    ></textarea>
                  </div>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        name="image"
                        className="custom-file-input"
                        id="inputGroupFile01"
                      ></input>
                    </div>
                  </div>
                  <button className="btn btn-primary">upload photo</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3>{title}</h3>
      {foods &&
        foods.map((food) => (
          <Card key={food._id} sx={{ maxWidth: 275 }}>
            <CardHeader title={food.title}></CardHeader>
            <CardMedia
              component="img"
              height="194"
              image={food.imageUrl}
              alt={food.title}
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
                  <Link to={`/food/${food._id}`}>More info</Link>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

export default FoodList;
