import {
  Avatar,
  AvatarGroup,
  Box,
/*   IconButton,
  ImageListItemBar, */
  Typography,
} from "@mui/material";
/* import { red } from "@mui/material/colors"; */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";
import IMAGES from "../images/avatar";
/* import WebIcon from "@mui/icons-material/Web"; */

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} >
          <Avatar alt="kevinLenore" src={IMAGES.kevinLenore} />
          <Avatar alt="Tim Lee" src="" />
          <Avatar alt="Thorburn Frederica" src={IMAGES.thorburnFrederica} />
          <Avatar alt="Kenneth Emanuel" src={IMAGES.kennethEmanuel} />
          <Avatar alt="Philo Koneli" src="" />
          <Avatar alt="Mitzi Ornat" src={IMAGES.mitziOrnat} />
          <Avatar alt="Charli Lola" src={IMAGES.charliLola} />
          <Avatar alt="Friederike Keiran" src={IMAGES.friederikeKeiran} />
          <Avatar alt="Colene Ernestine" src={IMAGES.coleneErnestine} />
          <Avatar alt="Danielle Allen" src="" />
          <Avatar alt="James White" src="" />
          <Avatar alt="Martin Scouse" src="" />
          <Avatar alt="Henry Mansour" src="" />
          <Avatar alt="Violet Kushner" src="" />
          <Avatar alt="Ryanne Rice" src="" />
          <Avatar alt="Betsy Cane" src="" />
          <Avatar alt="Geoff Frank" src="" />
          <Avatar alt="Richard Sense" src="" />
          <Avatar alt="The PURGE" src="" />
          <Avatar alt="FOR ALL THAT IS HOLY, HIRE ME" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Posts
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <Box key={item.img}>
              <ImageListItem>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <Box
                  position="absolute"
                  sx={{
                    bottom: 5,
                    left: 5,
                  }}
                >
                  <Avatar
                    sx={{
                      border: "solid 1px black",
                      borderRadius: 50,
                      
                    boxShadow: 4,
                      width: 50,
                      height: 50,
                      padding: 0,
                      margin: 0,
                    }}
                    alt={item.creatorTitle}
                    src={item.creator}
                  />
                </Box>
              </ImageListItem>
            </Box>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;

const itemData = [
  {
    img: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/4CBB/production/_103934691_p06pbcqh.jpg",
    title: "Precious artwork",
    creator: IMAGES.kevinLenore,
    creatorTitle: "Kevin Lenore",
  },
  {
    img: "https://ae01.alicdn.com/kf/HTB1V3rkHVXXXXc.XFXXq6xXFXXXa/Ceramic-Bunch-Shaped-Vase-Handmade-Pottery-Flower-Basket-Chinaware-Craft-Ornament-Accessories-for-Home-Decor-and.jpg",
    title: "My daughter's bridal vase",
    creator: IMAGES.thorburnFrederica,
    creatorTitle: "Thorburn Frederica",
  },/* <Avatar alt="Thorburn Frederica" src={IMAGES.thorburnFrederica} />
  <Avatar alt="Kenneth Emanuel" src={IMAGES.kennethEmanuel} />
  <Avatar alt="Philo Koneli" src="" />
  <Avatar alt="Mitzi Ornat" src={IMAGES.mitziOrnat} />
  <Avatar alt="Charli Lola" src={IMAGES.charliLola} />
  <Avatar alt="Friederike Keiran" src={IMAGES.friederikeKeiran} />
  <Avatar alt="Colene Ernestine" src={IMAGES.coleneErnestine} /> */
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/1b/20/7f/the-mall-at-bay-plaza.jpg?w=500&h=400&s=1",
    title: "Went to the Mall today",
    creator: IMAGES.mitziOrnat,
    creatorTitle: "Mitzi Ornat",
  },
  {
    img: "https://static01.nyt.com/images/2022/06/10/science/10virus-briefing-cat-transmission-b/10virus-briefing-cat-transmission-videoSixteenByNine3000.jpg",
    title: "Cat doctor",
    creator: IMAGES.charliLola,
    creatorTitle: "Charli Lola",
  },
  {
    img: "https://i.pcmag.com/imagery/reviews/05DgViq1yRS2oY9MBqVHyrO-2.fit_lim.size_1050x.jpg",
    title: "Magnamalo is a pushover",
    creator: IMAGES.kennethEmanuel,
    creatorTitle: "Kenneth Emanuel",
  },
  {
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/25/11/how-i-met-your-mother.jpg?quality=75&width=982&height=726&auto=webp",
    title: "HIMYM BSE",
    creator: IMAGES.coleneErnestine,
    creatorTitle: "Colene Ernestine",
  },
];
