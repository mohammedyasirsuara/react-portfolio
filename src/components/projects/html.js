import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from '../../img/proj1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 450,
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="250"
                image={img1}
                title="Recipe Search"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Recipe Search
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className='proj-des'>
                    A web app that uses the Youtube API and a Food Recipe(Edamam) API to generate random food recipies using your main ingredient 
                    as the base for the dish.  
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary">
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/a-mccaffrey/aplus-foodies'>Github</a>
                </Button>
                <Button size="medium" color="primary">
                <a target='_blank' rel="noopener noreferrer" href='https://a-mccaffrey.github.io/aplus-foodies/'>Deployed App</a>
                </Button>
            </CardActions>
            </Card>
        </Grid>

        {/*Project2*/}
        <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="250"
                image={img2}
                title="Weather Dashboard"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Weather Dashboard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className='proj-des'>
                    Colourful web app made using the Open Weather API, it can be used to check the weather of a place and 
                    also the forecast for the next 5-days.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary">
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/mohammedyasirsuara/WeatherDashBoard'>Github</a>
                </Button>
                <Button size="medium" color="primary">
                <a target='_blank' rel="noopener noreferrer" href='https://mohammedyasirsuara.github.io/WeatherDashBoard/'>Deployed App</a>
                </Button>
            </CardActions>
            </Card>
        </Grid>

        {/*Project3*/}
        <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="250"
                image={img3}
                title="Random Password Generator"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Random Password Generator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className='proj-des'>
                    A web application that takes in user input and generates a random password using the inputs.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary">
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/mohammedyasirsuara/RandomPasswordGenerator'>Github</a>
                </Button>
                <Button size="medium" color="primary">
                <a target='_blank' rel="noopener noreferrer" href='https://mohammedyasirsuara.github.io/RandomPasswordGenerator/'>Deployed App</a>
                </Button>
            </CardActions>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}
