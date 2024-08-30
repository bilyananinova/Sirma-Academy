import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

let ExpandMore = styled((props) => {
  let { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard({ recipe }) {
  let [expanded, setExpanded] = useState(false);

  let handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 300, m: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        sx={{ textDecoration: 'none' }}
        component={Link}
        to={`/recipes/${recipe.id}`}
        title={recipe.name}
        subheader={`Servings: ${recipe.servings}, Rating: ${recipe.rating}`}
      />

      < CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Prepare Time: {recipe.prepTimeMinutes}min <br />
          Cook Time: {recipe.cookTimeMinutes}min <br />
          Difficulty: {recipe.difficulty}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>

          {recipe.instructions.map((inst, index) =>
            <Typography paragraph key={`${recipe.id} + ${index}`}>
              {inst}
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}