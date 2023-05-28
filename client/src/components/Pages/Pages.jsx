import React from 'react'
import pages from '../../pages.json';
import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Pages = () => {
  return (
    <div>
      {pages.map((page, key) => (
        <Card key={key} sx={{ height: '400px', width: '400px' }}>
          <CardMedia sx={{ height: '200px', width: '400px' }}>
            <img
            style={{ height: '200px', width: '400px', objectFit: 'cover' }}
            src={"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"}
            alt="testing"
            />
          </CardMedia>
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
            <Typography>
            Friend A, Friend B, Friend C, Friend D
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Pages
