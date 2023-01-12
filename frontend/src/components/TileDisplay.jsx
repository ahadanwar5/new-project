import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { Link } from "react-router-dom";
import '../styles/tileDisplay.css'

export default function MultiActionAreaCard() {
  return (
    <div className='main-div'>

      <Typography gutterBottom variant="h4" component="div">
                  Browse Products by Category
      </Typography>

      <div className='sample-div'> 

        <div>
        <Link to={'/shop/organic'} className="link">
          <Card sx={{ maxWidth: 500, backgroundColor: '#FAF9F6'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                width="400"
                image="images/category/organic.jpg" //Change
                alt="Organic Medicine"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Organic Medicine
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>        
        </div>

        <div>
        <Link to={'/shop/medicines'} className="link">
          <Card sx={{ maxWidth: 500, backgroundColor: '#FAF9F6' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                width="400"
                image="images/category/medicines.jpg" //Chainge
                alt="organic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Medicines
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </div>

        <div>
        <Link to={'/shop/healthcare'} className="link">
          <Card sx={{ maxWidth: 500, backgroundColor: '#FAF9F6' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                width="400"
                image="images/category/health.jpg" //Change
                alt="healthcare"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Healthcare Products
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </div>
      
      </div>

      <div className='sample-div'>
        
        <div>
        <Link to={'/shop/personalCare'} className="link">
          <Card sx={{ maxWidth: 500, backgroundColor: '#FAF9F6'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                width="400"
                image="images/category/personal.jpg" //Change
                alt="personal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Personal Care
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </div>

        <div>
        <Link to={'/shop/carebaby'} className="link">
          <Card sx={{ maxWidth: 500, backgroundColor: '#FAF9F6'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                width="400"
                image="images/category/babycare.jpg" //Change
                alt="Baby Care"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Baby Care
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </div>

        <div>
        <Link to={'/shop/lifestyle'} className="link">
          <Card sx={{ maxWidth: 500, backgroundColor: '#FAF9F6'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                width="400"
                image="images/category/lifestyle.jpg" //Change
                alt="Lifestyle"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lifestyle Products
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </div>

      </div>

    </div>
  );
}
