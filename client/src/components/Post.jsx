import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import JuDev_Image from "../images/feed-images/JuDev2.png";
import ProfilePicture from "../images/avatar/Profile Picture.jpg";
import { useState } from "react";

const Post = () => {
  //Check if icon is checked
  const [checked, setChecked] = useState(false);
  const addRemoveFavorites = checked
    ? "Add to favorites"
    : "Remove from favorites";
  return (
    <Card sx={{ marginBottom: 5, bgcolor: "#eeeeee"}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "red" }}
            alt="Julian Bristol"
            src={ProfilePicture}
            aria-label="recipe"
          >
            JB
          </Avatar>
        }
        action={
          <IconButton title="More Options" aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="JuDev Website - My First Mui Project"
        subheader="August 4th, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image={JuDev_Image}
        alt="Mui Code Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This was my first time working with Mui and only my second time
          completing a React project. As you could imaging, it was fairly
          challenging to complete. I had a lot of trouble fixing the several
          errors that I made in the code but as time went on, things became much
          easier. I found myself falling in love with both React and Mui. I want
          to learn more about it and create more projects. As my portfolio
          grows, I know that I will become a much better programmer, not only in
          with React, but with all programming languages.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          onMouseOver={(e) => {
            e.target.checked ? setChecked(false) : setChecked(true);
          }}
          title={addRemoveFavorites}
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon sx={{ color: "#ff2222" }} />}
        />
        <IconButton title="Share" aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
