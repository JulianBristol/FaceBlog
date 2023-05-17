import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    ImageList,
    ImageListItem,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React from "react";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import ShareIcon from "@mui/icons-material/Share";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import JuDev_Image from "../../images/feed-images/JuDev2.png";
  import ProfilePicture from "../../images/avatar/Profile Picture.jpg";
  import posts from "../../posts.json";
  import { useState } from "react";
  import makeStyles from "./styles";
  
  const Posts = () => {
    const classes = makeStyles();
    //Check if icon is checked
    const [checked, setChecked] = useState(false);
    const handleClick = (() => {
        console.log("handleClick");
    })

    const profiles = {
        "portfolio": {
            "name": "Julian Bristol",
            "initials": "JB",
            "img": ProfilePicture,
            "alt": "Julian Bristol's profile picture"
        },
        
        "twitter": {
            "name": "test",
            "initials": "Test",
            "img": ProfilePicture,
            "alt": "test's profile picture"
        },
    }
    
    const addRemoveFavorites = checked
      ? "Add to favorites"
      : "Remove from favorites";

const imgArrPositioning = [ 
    [{row: 4, col: 4}],
    [{row: 2, col: 2}, {row: 2, col: 2}],
    [{row: 2, col: 2}, {row: 1, col: 2}, {row: 1, col: 2}],
    [{row: 2, col: 2}, {row: 1, col: 1}, {row: 1, col: 1}, {row: 1, col: 2}],
];


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}%&h=${size * rows}%&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}%&h=${
      size * rows
    }%&fit=crop&auto=format&dpr=2 2x`,
  };
}

function QuiltedImageList({itemData}) {
    const variant = itemData.length -1;
  return (
    <ImageList
      sx={{ width: '100%', height: '20%', maxHeight: '540px', overflow: 'hidden' }}
      variant="quilted"
      cols={4}
    >
      {itemData.map((item, key) => {
        return (
        <ImageListItem key={item.img} cols={imgArrPositioning[variant][key].col || 1} rows={imgArrPositioning[variant][key].row || 1}>
          <img
            {...srcset(item.img, 121, imgArrPositioning[variant][key].row, imgArrPositioning[variant][key].col)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      )
      })}
    </ImageList>
  );
}

    return(
        <>
        {posts.map((post, key) => {
            return (
                <Card className={classes.card} key={key}>
                  <CardHeader
                  className={classes.postHeader}
                    avatar={
                        <Tooltip title={profiles[post.type].name}>
                      <Avatar
                        src={profiles[post.type].img}
                        alt={profiles[post.type].alt}
                        aria-label="Profile Picture"
                      >
                        {profiles[post.type].initials}
                      </Avatar>
                      </Tooltip>
                    }
                    action={
                      <IconButton title="More Options" aria-label="settings" onClick={() => {
                        handleClick();
                      }}>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={post.title}
                    subheader={post.date}
                  />
                  <CardMedia>
                    <QuiltedImageList itemData={post.itemData}/>
                  </CardMedia>
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
        })}
        </>
    )
  };
  
  export default Posts;
  