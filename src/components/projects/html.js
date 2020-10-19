import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/Card';
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
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary">
                <a href='https://github.com/a-mccaffrey/aplus-foodies'>Github</a>
                </Button>
                <Button size="medium" color="primary">
                <a href='https://a-mccaffrey.github.io/aplus-foodies/'>Deployed App</a>
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
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary">
                <a href='https://github.com/mohammedyasirsuara/WeatherDashBoard'>Github</a>
                </Button>
                <Button size="medium" color="primary">
                <a href='https://mohammedyasirsuara.github.io/WeatherDashBoard/'>Deployed App</a>
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
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary">
                <a href='https://github.com/mohammedyasirsuara/RandomPasswordGenerator'>Github</a>
                </Button>
                <Button size="medium" color="primary">
                <a href='https://mohammedyasirsuara.github.io/RandomPasswordGenerator/'>Deployed App</a>
                </Button>
            </CardActions>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}
