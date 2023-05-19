import {
    Avatar,
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
  import WebIcon from '@mui/icons-material/Web';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import ProfilePicture from "../../images/avatar/Profile Picture.jpg";
  import posts from "../../posts.json";
  import { useState } from "react";
  import makeStyles from "./styles";
  import PostDescriptions from "./PostDescriptions";
  
  const Posts = ({singlePost, post}) => {
    if (singlePost){
      posts = post
    }
    const classes = makeStyles();
    //Check if icon is checked
    const [checked, setChecked] = useState(false);
    const handleAction = ((liveLink, github) => {
        console.log("handleClick");
        console.log(liveLink, github);
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
      [{row: 2, col: 2}, {row: 2, col: 1}, {row: 2, col: 1}],
      [{row: 2, col: 2}, {row: 1, col: 1}, {row: 1, col: 1}, {row: 1, col: 2}],
    ];

    function srcset(image, size, rows = 1, cols = 1) {
      return {
        src: `${image}`/* ?w=${size * cols}%&h=${size * rows}%&fit=crop&auto=format */,
        /* srcSet: `${image}?w=${size * cols}%&h=${
          size * rows
        }%&fit=crop&auto=format&dpr=2 2x`, */
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
              <ImageListItem key={key} cols={imgArrPositioning[variant][key].col || 1} rows={imgArrPositioning[variant][key].row || 1}>
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

    function getOrdinalSuffix(day) {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
    
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }
    
    const parseDate = ((dateStr) => {
      const date = new Date(`${dateStr}T00:00:00`);
      const options = { month: 'long', day: 'numeric', year: 'numeric' };

      const formattedDate = date.toLocaleDateString('en-US', options);
      const ordinalSuffix = getOrdinalSuffix(date.getDate());

      const result = formattedDate.replace(/(\d+)/, `$1${ordinalSuffix}`);

      return result;

    })

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
                      <IconButton className={classes.icons} title="More Options" aria-label="settings" onClick={() => {
                        handleAction(post.LiveLink, post.github);
                      }}>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={
                    <div>
                      {post.title}
                      {post.LiveLink === '' && post.github === '' ? '' : 
                      <span>
                        <br/>
                    {post.LiveLink === '' ? '' : 
                      <IconButton className={classes.icons} title="View Website" aria-label="see Website" onClick={() => {
                          window.open(post.LiveLink, '_blank');
                        }}
                        >
                          <WebIcon />
                      </IconButton>
                    }
                    {post.github === '' ? '' : 
                      <IconButton className={classes.icons} title="View Github link" aria-label="see Github" 
                      onClick={() => {
                        window.open(post.github, '_blank');
                      }}>
                          <GitHubIcon />
                      </IconButton>
                    }
                      </span>}
                    </div>}
                    subheader={parseDate(post.date)}
                  />
                  <CardMedia>
                    <QuiltedImageList itemData={post.itemData}/>
                  </CardMedia>
                  <CardContent style={{ padding: '20px 20px 0px' }}>
                    <PostDescriptions texts={post.description} />
                    <br/>
                    {post.tech === '' ? '' : <Typography variant="body2">Tech Used: {post.tech}</Typography>}
                    {post.learned === '' ? '' : <Typography variant="body2">What I learned: {post.learned}</Typography>}
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
  