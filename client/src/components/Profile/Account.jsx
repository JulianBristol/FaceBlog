import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../darkModeState';
import { Avatar, Box, Button, Card, ImageList, ImageListItem, Link, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Friends from '../Friends/Friends';
import makeStyles from "../styles";

function TabPanel(props) {
  const { children, tabNum, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabNum !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {tabNum === index && (
        <Box /* sx={{ p: 3 }} */>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`,
  };
}

function AboutTabPanel(props) {
  const { children, tabNum, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabNum !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {tabNum === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

AboutTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
};

function AboutTabProps(index) {
  return {
    id: `about-tab-${index}`,
    'aria-controls': `about-tabpanel-${index}`,
  };
}

const Account = () => {
  const darkMode = useRecoilValue(darkModeState);
  const classes = makeStyles();
  const [tabNum, setTabNum] = useState(0);
  const [aboutTabNum, setAboutTabNum] = useState(0);
  const handleChange = (event, newTabNum) => {
    setTabNum(newTabNum);
  };
  const handleAboutChange = (event, newTabNum) => {
    setAboutTabNum(newTabNum);
  };

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  
  const friendsList = ['test1', 'test2', 'test3', 'test4', 'test5']

  return (
    <>
    <Box sx={{ background: '#dfdfdf' }}>
    <Avatar 
    src='https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    alt='Temporary'
    sx={{ width: '100%', height: '200px'}}
    variant='square'
    />
    <Box sx={{ /* backgroundColor: 'red' */ }}>
    <Box sx={{ /* backgroundColor: 'green',  */display: 'flex' }}>
      <Avatar 
      src='https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      alt='temp Icon image'
      sx={{ width: '100px', height: '100px', margin: '10px' }}
      />
    <Box sx={{ /* backgroundColor: 'yellow', */ width: '100%', position: 'relative', padding: '20px 10px' }}>
      <Typography>First Name Last Name</Typography>
      <Box sx={{ right: '0px', position: 'absolute', marginTop: '10px' }}>
        <Button variant='contained'>Message</Button>
        <Button variant='contained' sx={{ margin: '0 10px' }}>Add Friend</Button>
      </Box>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', }}>
      <Typography># of Friends &nbsp;</Typography>
      <Typography># of Mutual Friends</Typography>
    </Box>
    <a href='https://www.google.com/' target='_blank' rel="noreferrer">Google</a>
    </Box>

    <Tabs
    /* className={classes.tabsStyles} */
    indicatorColor="primary"
    onChange={handleChange}
    value={tabNum}
    variant='scrollable'
    aria-label="Profile Tab Selection"
    sx={{ /* background: '#dfdfdf', */marginTop: '15px', borderRadius: '0px 0px 5px 5px' }}
  >
    <Tab /* className={classes.tabStyles} */ label="Posts" {...a11yProps(0)} />
    <Tab /* className={classes.tabStyles} */ label="About" {...a11yProps(1)} />
    <Tab /* className={classes.tabStyles} */ label="Media" {...a11yProps(2)} />
    <Tab /* className={classes.tabStyles} */ label="Friends" {...a11yProps(3)} />
  </Tabs>
    </Box>

  <TabPanel component='div' tabNum={tabNum} index={0} /* style={{ padding: '0px 10px 10px' }} */>
    <Card sx={{ background: '#DFDFDF' }}>testing</Card>
</TabPanel>

  <TabPanel component='div' tabNum={tabNum} index={1}>
  <Box
      sx={{ flexGrow: 1, display: 'flex', height: 224, marginTop: '15px', background: '#DFDFDF', borderRadius: '5px'  }}
    >
    <Tabs
    /* className={classes.tabsStyles} */
    indicatorColor="primary"
    onChange={handleAboutChange}
    variant="scrollable"
    value={aboutTabNum}
    orientation='vertical'
    aria-label="About Tab Selection"
    sx={{ /* background: '#dfdfdf', */marginTop: '15px', marginBottom: '15px', borderRadius: '0px 0px 5px 5px', borderRight: 1, borderColor: 'divider', minWidth: '125px', }}
  >
    <Tab /* className={classes.tabStyles} */ label="Overview" {...AboutTabProps(0)} />
    <Tab /* className={classes.tabStyles} */ label="Contact" {...AboutTabProps(1)} />
    <Tab /* className={classes.tabStyles} */ label="About" {...AboutTabProps(2)} />
  </Tabs>

  <TabPanel component='div' tabNum={aboutTabNum} index={0} style={{ padding: '10px' }}>
      <Box sx={{ display: 'flex' }}>
      <Typography variant='body'>Front End Developer at <a href='https://lykka.org/' target='_blank' rel="noreferrer">Lykka Village</a></Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
      <Typography variant='body'>Graduated from <a href='https://capella.edu/' target='_blank' rel="noreferrer">Capella University</a> in 2022</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
      <Typography variant='body'>Lives in <a href='https://goo.gl/maps/vEPLL8zREfDD56998' target='_blank' rel="noreferrer">NYC, New York</a></Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
      <Typography variant='body'>Single with <a href='/Pages' >Name</a></Typography>
      </Box>
</TabPanel>

  <TabPanel component='div' tabNum={aboutTabNum} index={1} style={{ padding: '0px 10px 10px' }}>
      <Box sx={{ display: 'flex' }}>
      <Typography variant='body'>Phone: <a href='tel:+4753299736'>(475) 329 - 9736</a></Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
      <Typography variant='body'>Email: <a href='mailto:bristoljulian.r+promotions@gmail.com'>bristoljulian.r@gmail.com</a></Typography>
      </Box>
      <Box sx={{ }}>
      <Typography variant='body'>Websites
      <div>
        <a href='https://www.linkedin.com/in/julianbristol/' target='_blank' rel="noreferrer">LinkedIn</a>
        </div>
      <div>
        <a href='https://github.com/JulianBristol' target='_blank' rel="noreferrer">Github</a>
        </div>
      <div>
        <a href='https://www.julianbristol.netlify.app/' target='_blank' rel="noreferrer">Portfolio Page</a>
        </div>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
      <Typography variant='body'>Birthday</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
      <Typography variant='body'>July 4th</Typography>
      </Box>
</TabPanel>

  <TabPanel component='div' tabNum={aboutTabNum} index={2} style={{ padding: '10px', maxHeight: '204px', maxWidth: '515px' , overflowY: 'auto' }}>
    <Typography>Passionate and results-driven professional with a diverse background in transportation security and software development. I bring a unique perspective and a strong commitment to excellence in every endeavor. Dedicated to continuously expanding my skills and knowledge to drive innovative solutions in the technology field.</Typography>
    <Typography>What sparked my interest in software development and led me to pursue a specialization in this field is my long-standing dream to have the knowledge and ability to manipulate computers using programming. This passion has been a driving force behind my pursuit of a bachelor's degree in Information Technology with a specialization in software development.</Typography>
    <Typography>My experience as a transportation security officer with TSA has significantly contributed to my growth and development as a professional. It taught me the importance of teamwork and how a well-functioning team can move mountains. This experience has instilled in me a dedication to ensuring seamless human-to-human connections in all my endeavors.</Typography>
    <Typography>During my studies and professional career, a significant project that had a profound impact on my skills and knowledge in software development was an internship turned temporary job position. It introduced me to the world of React and JavaScript, opening my eyes to new programming languages and igniting my love for continuous learning. I believe that in the ever-evolving world of technology, there will always be new things to explore and discover.</Typography>
    <Typography>To stay up-to-date with the latest advancements and trends in the technology industry, I actively engage in reading news articles, such as Tech Brew, to stay informed. Additionally, I enjoy following tutorials on YouTube to build new projects, which not only keeps me updated but also allows me to practice and enhance my skills.</Typography>
    <Typography>In the software development field, I am motivated by the challenges and problems that need to be solved. Building websites and programming them is not only a professional pursuit but also an entertaining and leisurely activity for me. When faced with difficult problems, I approach them with an educated guess as a first step. If that doesn't work, I use console logs to debug and analyze the issue. If further assistance is needed, I turn to the internet for similar problems and also rely on my network of friends and coworkers for support and guidance.</Typography>
</TabPanel>
</Box>
</TabPanel>

  <TabPanel component='div' tabNum={tabNum} index={2} >
  <ImageList className={`${darkMode ? classes.darkMode_ScrollBar : '' }`} sx={{ height: 450 }} cols={3} /* rowHeight={164} */>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=300&h=300&fit=crop&auto=format`}
            srcSet={`${item.img}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
</TabPanel>

  <TabPanel component='div' tabNum={tabNum} index={3} >
    <Friends friendsList={friendsList} minWidth='200px'/>
</TabPanel>

    </>
  )
}

export default Account
