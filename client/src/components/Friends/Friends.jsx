import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../darkModeState';
import React, { useEffect, useState } from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import profiles from '../../profiles.json';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Tooltip, Typography } from '@mui/material';
import makeStyles from "../../base_styles";

const Friends = ({overrideFriends, friends}) => {
  const darkMode = useRecoilValue(darkModeState);
  const classes = makeStyles();
  const [friendsList, setFriendsList] = useState([]);
  const defaultFriends = profiles.JulianBristol.friends;
  useEffect(() => {
    overrideFriends ? setFriendsList(friends) : setFriendsList(defaultFriends);
  },[])
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gridGap: '20px', }}>
    {friendsList.map((friend, key) => {
      return (
      <Card key={key} className={`${classes.card} ${classes.friendCard} ${darkMode ? classes.darkMode_Card : classes.lightMode_Card}`}>
        <CardHeader
        className={`${classes.postHeader} ${darkMode ? classes.darkMode_PostHeader : ''}`} 
          avatar={
            <Tooltip title={profiles[friend]?.name}>
          <Avatar
            src={profiles[friend]?.img}
            alt={`${profiles[friend].name}'s Profile Picture`}
            aria-label="Profile Picture"
            sx={{ width: '75px', height: '75px'}}
            onClick={() => {
              window.open(profiles[friend]?.faceblog, "_self");
            }}
          >
          </Avatar>
          </Tooltip>
          }
          title={
            <Typography variant='h5'>
              {profiles[friend].name}
            </Typography>
          }
          /* subheader={
            <Typography variant='p'>
              Mutual Friends:
            </Typography>
          } */
          action={
            <IconButton className={`${classes.icons} ${darkMode ? classes.darkMode_Icon : ''}`} title="More Options" aria-label="settings" >
              <MoreVertIcon />
            </IconButton>
          }
        >
        </CardHeader>
      </Card>
    )
      })}
    </Box>
)}

export default Friends
