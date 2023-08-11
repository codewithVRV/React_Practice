import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PokemonCard({name, url}) {

  return (
    <Card sx={{ maxWidth: 345, marginBottom: "1rem", }}>
      <CardHeader
      
        title={name}
        subheader="We will solve it later"
      />
      <CardMedia
        component="img"
        height="194"
        image={url}
        alt="Paella dish"
      />
    </Card>
  );
}