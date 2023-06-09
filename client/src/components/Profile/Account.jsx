import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../darkModeState';
import { Avatar, Box, Button, Card, ImageList, ImageListItem, Link, Tab, Tabs, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import CakeIcon from '@mui/icons-material/Cake';
import WorkIcon from '@mui/icons-material/Work';
import CottageIcon from '@mui/icons-material/Cottage';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Friends from '../Friends/Friends';
import makeStyles from "../styles";
import Posts from '../Posts/Posts';
import DateParser from '../DateParser';

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

const Account = ({account, posts}) => {
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
  
  const schoolStatus = ['Attending', 'Graduated', 'Dropped out', 'Will be attending', ]
  const relationshipStatus = ['In a Relationship', 'Single', 'Married', 'It\'s complicated', 'FWB', 'Divorced' ]
  const friendsList = ['test1', 'test2', 'test3', 'test4', 'test5']

  return (
    <>
    <Box className={`${darkMode ? classes.darkMode_AccountContainer: ''} ${classes.accountContainer} `} >
    <Avatar 
    src={account.banner}
    alt={`${account.name}'s banner`}
    className={classes.profileBanner}
    variant='square'
    />
    <Box>
    <Box sx={{ display: 'flex', }}>
      <Avatar 
      src={account.img}
      alt={`${account.name}'s profile picture`}
      className={classes.profileImg}
      />
    <Box sx={{ position: 'relative', width: '100%',  padding: '20px 10px' }}>
      <Typography className={classes.profileBaseText}>{account.name}</Typography>
      <Box sx={{ right: '0px', position: 'absolute', marginTop: '10px',  }}>
        {account.name === 'Julian Bristol' ? '' : <>
        <Button variant='contained' className={classes.profileBtn}>Message</Button>
        <Button variant='contained' className={classes.profileBtn} sx={{ margin: '0 10px' }}>Add Friend</Button>
        </>}
      </Box>
      </Box>
    </Box>
    <Box sx={{ padding: '0px 20px 0px', display: 'flex'}}>
      <a className={`${classes.profileBaseText} ${classes.portfolioLinks}`} onClick={() => {
        setTabNum(3)
      }}>
        <Typography className={classes.profileBaseText}>{account.friends.length} Friends</Typography>
        </a>

      {/* <Typography className={classes.profileBaseText}># of Mutual Friends</Typography> */}

      {account.website !== undefined ? 
      <a href={account.website} target='_blank' rel="noreferrer" className={`${classes.profileBaseText} ${classes.portfolioLinks}`}>
        {account.website === 'https://julianbristol.netlify.app/' ?
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='86.4 -0.22 7.8 7.8' className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}>
        <path
        d='M91.9,1.366a2.777,2.777,0,0,0-3.57.435.349.349,0,0,0,.147.569l.337.112a.342.342,0,0,0,.35-.078,1.758,1.758,0,0,1,2.529.121.351.351,0,0,0,.493.033l.4-.348a.35.35,0,0,1,.542.109,3.083,3.083,0,0,1-1.274,4.062.346.346,0,0,0-.173.377l.013.063a.349.349,0,0,0,.51.235,3.84,3.84,0,0,0,1.018-5.94.35.35,0,0,0-.491-.028l-.266.236a.461.461,0,0,1-.569.042ZM88.7,3.118a1.736,1.736,0,0,0-.093.566,1.759,1.759,0,0,0,1.253,1.685.34.34,0,0,1,.242.264l.073.348a.35.35,0,0,1-.419.412,2.778,2.778,0,0,1-2.167-2.709c0-.057,0-.113,0-.169a.462.462,0,0,0-.319-.471l-.338-.112a.351.351,0,0,1-.223-.44A3.842,3.842,0,0,1,92.371.407a.338.338,0,0,1,.166.267.338.338,0,0,1-.116.292l-.047.042a.344.344,0,0,1-.414.039,3.079,3.079,0,0,0-4.153.928.349.349,0,0,0,.176.524l.5.176a.35.35,0,0,1,.217.443Zm2.01,2.293a1.77,1.77,0,0,0,1.414-1.727,1.811,1.811,0,0,0-.046-.406.341.341,0,0,1,.107-.341l.266-.237a.35.35,0,0,1,.566.158,2.78,2.78,0,0,1-1.412,3.311.461.461,0,0,0-.248.512l.072.348a.351.351,0,0,1-.271.413,3.843,3.843,0,0,1-4.633-3.758c0-.032,0-.064,0-.1a.35.35,0,0,1,.459-.324l.061.021a.346.346,0,0,1,.24.338v.06A3.079,3.079,0,0,0,90.17,6.757a.349.349,0,0,0,.365-.415c-.033-.173-.065-.346-.1-.521A.351.351,0,0,1,90.713,5.411Z'>
            </path>
            <path
            d='M 90.368 4.8 A 1.12 1.12 0 1 0 89.248 3.68 A 1.122 1.122 0 0 0 90.368 4.8 Z'>
                </path>
       </svg> : 
        <WebIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/> 
        }
        {account.websiteName}
      </a> : ''}

      {account.github !== undefined ?
      <a href={account.github} target='_blank' rel="noreferrer" className={`${classes.profileBaseText} ${classes.portfolioLinks}`}>
        <GitHubIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
        Github
      </a> : ''}

      {account.linkedin !== undefined ? <a href={account.linkedin} target='_blank' rel="noreferrer" className={`${classes.profileBaseText} ${classes.portfolioLinks}`}>
        <LinkedInIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
        LinkedIn
      </a> : ''}
    </Box>
    </Box>

    <Tabs
    className={`${darkMode ? classes.darkMode_TabContainer: ''} ${classes.tabContainer} `}
    indicatorColor="primary"
    onChange={handleChange}
    value={tabNum}
    variant='scrollable'
    aria-label="Profile Tab Selection"
    sx={{ /* background: '#dfdfdf', */marginTop: '15px', borderRadius: '0px 0px 5px 5px', }}
  >
    <Tab /* className={classes.tabStyles} */ label="Posts" {...a11yProps(0)} />
    <Tab /* className={classes.tabStyles} */ label="About" {...a11yProps(1)} />
    <Tab /* className={classes.tabStyles} */ label="Media" {...a11yProps(2)} />
    <Tab /* className={classes.tabStyles} */ label="Friends" {...a11yProps(3)} />
  </Tabs>
    </Box>

  <TabPanel component='div' tabNum={tabNum} index={0} /* style={{ padding: '0px 10px 10px' }} */>
    <Box sx={{ marginTop: '15px', }}>
    <Posts overridePosts={true} post={posts}/>
    </Box>
</TabPanel>

  <TabPanel component='div' tabNum={tabNum} index={1}>
  <Box className={`${darkMode ? classes.darkMode_TabStyle: ''} ${classes.tabStyle} `}
      sx={{ flexGrow: 1, display: 'flex', }}
    >
    <Tabs
    className={`${darkMode ? classes.darkMode_TabContainer: ''} ${classes.tabContainer} `}
    indicatorColor="primary"
    onChange={handleAboutChange}
    variant="scrollable"
    value={aboutTabNum}
    orientation='vertical'
    aria-label="About Tab Selection"
    sx={{ /* background: '#dfdfdf', */marginTop: '15px', marginBottom: '15px', borderRadius: '0px 0px 5px 5px', borderRight: 1, borderColor: 'divider', minWidth: '125px', '& .MuiTabs-flexContainer': { height: '250px', justifyContent: 'space-evenly' } }}
  >
    <Tab /* className={classes.tabStyles} */ label="Overview" {...AboutTabProps(0)} />
    <Tab /* className={classes.tabStyles} */ label="Contact" {...AboutTabProps(1)} />
    <Tab /* className={classes.tabStyles} */ label="About" {...AboutTabProps(2)} />
  </Tabs>

  <TabPanel component='div' tabNum={aboutTabNum} index={0} style={{ padding: '10px', width: '100%' }}>
    {account.jobTitle !== undefined ? 
    <Box
      className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
        <WorkIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
      <Typography variant='body'>{account.jobTitle}
      {account.employer !== undefined ? 
      <>
      &nbsp;at {account.employerLink !== undefined ? <a href={account.employerLink} target='_blank' rel="noreferrer">{account.employer}</a>
      : <>{account.employer}</>}
      </> : ''}
      </Typography>
      </Box>
    : ''}
      
    {account.school !== undefined ? 
    <Box
    className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
    <SchoolIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
    <Typography variant='body'>
      {schoolStatus[account.schoolStatus]}
      {account.school !== undefined ? 
      <>
      {account.schoolStatus === 1 || account.schoolStatus === 2 ? ' from ' : ' '}
      {account.schoolLink !== undefined ? 
      <a href={account.schoolLink} target='_blank' rel="noreferrer">{account.school}</a>
      :
      <>{account.school}</>}
      </>
      : ''
      } 
      {account.graduationYear !== undefined ? 
      <>
      &nbsp;in {account.graduationYear}
      </> : ''}
      </Typography>
    </Box>
    : ''}
      
    {account.home !== undefined ? 
    <Box
    className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
    <CottageIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
    <Typography variant='body'>Lives in&nbsp;
    {account.homeLink !== undefined ?
    <a href={account.homeLink} target='_blank' rel="noreferrer">{account.home}</a>
    :
    <>{account.home}</>}
    </Typography>
    </Box>
    : ''}
      
    {account.relationship !== undefined ? 
    <Box
    className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
    <FavoriteIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
    <Typography variant='body'>{relationshipStatus[account.relationship]} 
    {account.relationshipName !== undefined && account.relationship !== 1 ? 
    <>
    {account.relationship === 0 || account.relationship === 3 || account.relationship === 4 ? ' with ' : ''}
    {account.relationship === 0 || account.relationship === 5 ? ' to ' : ''}
    {account.relationshipLink !== undefined ? <a href={account.relationshipLink}>{account.relationshipName}</a>
    : <>{account.relationshipName}</>}
    </> : ''}
    </Typography>
    </Box>
    : ''}
      
      
      
      
</TabPanel>

  <TabPanel component='div' tabNum={aboutTabNum} index={1} style={{ padding: '10px', width: '100%' }}>
    {account.phone !== undefined ?
      <Box
      className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
      <LocalPhoneIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
      <Typography variant='body'><a href={`tel:+${account.phone}`}>{account.phone}</a></Typography>
      </Box>
      : ''
      }

      {account.email !== undefined ?
      <Box
      className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
      <EmailIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
      <Typography variant='body'><a href={`mailto:${account.email}`}>{account.email}</a></Typography>
      </Box>
      : ''
      }

      {account.website !== undefined || account.github !== undefined ||
      account.linkedin !== undefined ?
      <Box
      className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
      <Typography variant='body'>
        {account.linkedin !== undefined ?
        <>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
      <LinkedInIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
        <a href={account.linkedin}target='_blank' rel="noreferrer">LinkedIn</a>
        </div>
        </> : ''}
        {account.github !== undefined ?
        <>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
      <GitHubIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
        <a href={account.github} target='_blank' rel="noreferrer">Github</a>
        </div>
        </> : ''}
        {account.website !== undefined ?
        <>
      <div style={{ display: 'flex', alignItems: 'center', }}>
      <WebIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
        <a href={account.website} target='_blank' rel="noreferrer">{account.websiteName}</a>
        </div>
        </> : ''}
        </Typography>
      </Box>
      : ''
      }

      {account.dob !== undefined ?
      <Box
      className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
      <CakeIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
      <Typography variant='body'>{DateParser(account.dob)}</Typography>
      </Box>
      : ''
      }

      
      
      
      
</TabPanel>

  <TabPanel component='div' tabNum={aboutTabNum} index={2} style={{ padding: '10px 20px', width: '100%' }}>
      <Box
      className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}
      sx={{ display: 'block', overflow: 'auto' }}
      >
    <Typography className={classes.aboutMeText}>Passionate and results-driven professional with a diverse background in transportation security and software development. I bring a unique perspective and a strong commitment to excellence in every endeavor. Dedicated to continuously expanding my skills and knowledge to drive innovative solutions in the technology field.</Typography>
    <Typography className={classes.aboutMeText}>What sparked my interest in software development and led me to pursue a specialization in this field is my long-standing dream to have the knowledge and ability to manipulate computers using programming. This passion has been a driving force behind my pursuit of a bachelor's degree in Information Technology with a specialization in software development.</Typography>
    <Typography className={classes.aboutMeText}>My experience as a transportation security officer with TSA has significantly contributed to my growth and development as a professional. It taught me the importance of teamwork and how a well-functioning team can move mountains. This experience has instilled in me a dedication to ensuring seamless human-to-human connections in all my endeavors.</Typography>
    <Typography className={classes.aboutMeText}>During my studies and professional career, a significant project that had a profound impact on my skills and knowledge in software development was an internship turned temporary job position. It introduced me to the world of React and JavaScript, opening my eyes to new programming languages and igniting my love for continuous learning. I believe that in the ever-evolving world of technology, there will always be new things to explore and discover.</Typography>
    <Typography className={classes.aboutMeText}>To stay up-to-date with the latest advancements and trends in the technology industry, I actively engage in reading news articles, such as Tech Brew, to stay informed. Additionally, I enjoy following tutorials on YouTube to build new projects, which not only keeps me updated but also allows me to practice and enhance my skills.</Typography>
    <Typography className={classes.aboutMeText}>In the software development field, I am motivated by the challenges and problems that need to be solved. Building websites and programming them is not only a professional pursuit but also an entertaining and leisurely activity for me. When faced with difficult problems, I approach them with an educated guess as a first step. If that doesn't work, I use console logs to debug and analyze the issue. If further assistance is needed, I turn to the internet for similar problems and also rely on my network of friends and coworkers for support and guidance.</Typography>
</Box>
</TabPanel>
</Box>
</TabPanel>

  <TabPanel component='div' tabNum={tabNum} index={2} >
  <Box className={`${darkMode ? classes.darkMode_TabStyle: ''} ${classes.tabStyle} `}>
  <ImageList className={`${darkMode ? classes.darkMode_ScrollBar : '' }`} cols={3} /* rowHeight={164} */>
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
  </Box>
</TabPanel>

  <TabPanel component='div' tabNum={tabNum} index={3} >
    <Box sx={{ marginTop: '15px', }}>
    <Friends friendsList={friendsList} minWidth='200px'/>
    </Box>
</TabPanel>

    </>
  )
}

export default Account
