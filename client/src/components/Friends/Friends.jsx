import React from 'react'
import friends from '../../friends.json';
import { Avatar, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Friends = () => {
  return (
    <>
    {friends.map((friend, key) => (
      <Card key={key} sx={{ height: '100px', width: '400px', display: 'flex', position: 'relative' }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Avatar
            src={"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"}
            alt={"imagessdfs"}
            sx={{ width: '75px', height: '75px'}}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography>Page Name</Typography>
            <Typography>Type of Page</Typography>
          </Box>
          </Box>
        </CardContent>
        <CardActions sx={{ width: '30px', height: '100px', position: 'absolute', right: '0px', background: 'red'}}>
          Put Icon here
        </CardActions>
      </Card>
    ))}
    </>
)}

export default Friends
