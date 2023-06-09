import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../darkModeState';
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
    Modal,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import ShareIcon from "@mui/icons-material/Share";
  import WebIcon from '@mui/icons-material/Web';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import posts from "../../posts.json";
  import profiles from "../../profiles.json";
  import { useState } from "react";
  import makeStyles from "../../base_styles";
  import PostDescriptions from "./PostDescriptions";
import DateParser from '../DateParser';
  
  const Posts = ({overridePosts, post}) => {
  const darkMode = useRecoilValue(darkModeState);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');
    const classes = makeStyles();
    //Check if icon is checked
    const [checked, setChecked] = useState(false);

    const handleAction = (() => {
        console.log("handle Open options");
    })
    
    const addRemoveFavorites = checked
      ? "Add to favorites"
      : "Remove from favorites";

    const imgArrPositioning = [ 
      [{row: 4, col: 4}],
      [{row: 2, col: 2}, {row: 2, col: 2}],
      [{row: 2, col: 2}, {row: 2, col: 1}, {row: 2, col: 1}],
      [{row: 2, col: 2}, {row: 1, col: 1}, {row: 1, col: 1}, {row: 1, col: 2}],
    ];

    useEffect(() => {
      if (overridePosts){
        setCurrentPosts(post);
      }else{
        setCurrentPosts(posts);
      }
    })

    //Zoom in on Image
    const handleOpenZoomedImageModal = (e) => {
      setModalImageSrc(e.target.src)
      setModalImageAlt(e.target.alt)
      setOpen(true);
    }
    const handleCloseZoomedImageModal = () => {
      setOpen(false);
    }



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
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    handleOpenZoomedImageModal(e);
                  }}
                />
              </ImageListItem>
            )
          })}
        </ImageList>
      );
    }

    return(
        <>
        {currentPosts.map((post, key) => {
            return (
                <Card className={`${classes.card} ${darkMode ? classes.darkMode_Card : classes.lightMode_Card}`} key={key}>
                  <CardHeader
                  className={`${classes.postHeader} ${darkMode ? classes.darkMode_PostHeader : ''}`} 
                    avatar={
                        <Tooltip title={profiles[post?.user]?.name}>
                      <Avatar
                        src={profiles[post?.user]?.img}
                        alt={profiles[post?.user]?.alt}
                        aria-label="Profile Picture"
                        onClick={() => {
                          window.open(profiles[post?.user]?.faceblog, "_self");
                        }}
                      >
                        {profiles[post?.user]?.initials}
                      </Avatar>
                      </Tooltip>
                    }
                    action={
                      <IconButton className={`${classes.icons} ${darkMode ? classes.darkMode_Icon : ''}`} title="More Options" aria-label="settings" onClick={() => {
                        handleAction();
                      }}>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={
                    <div>
                      <Typography variant='h5'>{profiles[post?.user]?.name}</Typography>
                    <div>
                      <Typography variant='h6'>{post?.title}</Typography>
                      {(!post?.LiveLink && !post?.github) ? '' : 
                      <span>
                        <br/>
                    {post?.LiveLink === '' ? '' : 
                      <IconButton className={`${classes.icons} ${darkMode ? classes.darkMode_Icon : ''}`} title="View Website" aria-label="see Website" onClick={() => {
                          window.open(post?.LiveLink, '_blank');
                        }}
                        >
                          <WebIcon />
                      </IconButton>
                    }
                    {post?.github === '' ? '' : 
                      <IconButton className={`${classes.icons} ${darkMode ? classes.darkMode_Icon : ''}`} title="View Github link" aria-label="see Github" 
                      onClick={() => {
                        window.open(post?.github, '_blank');
                      }}>
                          <GitHubIcon />
                      </IconButton>
                    }
                      </span>}
                    </div>
                    </div>
                    }
                    subheader={DateParser(post?.date)}
                  />
                  {post?.itemData ? <CardMedia>
                    <QuiltedImageList itemData={post?.itemData}/>
                  </CardMedia> : ''}

                  <CardContent style={{ padding: '20px 20px 0px' }}>
                    <PostDescriptions texts={post?.description} />
                    <br/>
                    {post?.tech ? <Typography variant="body2">Tech Used: {post?.tech}</Typography> : ''}
                    {post?.learned ? <Typography variant="body2">What I learned: {post?.learned}</Typography> : ''}
                  </CardContent>
                  <CardActions disableSpacing>
                    <Checkbox
                      onMouseOver={(e) => {
                        e.target.checked ? setChecked(false) : setChecked(true);
                      }}
                      title={addRemoveFavorites}
                      icon={<FavoriteBorderIcon className={`${classes.icons} ${darkMode ? classes.darkMode_Icon : ''}`} />}
                      checkedIcon={<FavoriteIcon sx={{ color: "#ff2222" }} />}
                    />
                    <IconButton className={`${classes.icons} ${darkMode ? classes.darkMode_Icon : ''}`} title="Share" aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              );
        })}

        {/* Zoomed Image Modal START */}
        <Modal
        open={open}
        onClose={handleCloseZoomedImageModal}
        aria-labelledby="picture-modal"
        aria-describedby="picture-modal-description"
        sx={{ overflow: "auto", }}
        >
          <div className={classes.imgModal} >
            <img
            className={classes.imgModal_img}
            src={modalImageSrc}
            alt={modalImageAlt}
            />
          </div>
        </Modal>
        {/* Zoomed Image Modal END */}
        </>
    )
  };
  
  export default Posts;
  