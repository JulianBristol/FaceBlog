import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../darkModeState';
import { Avatar, Box, Button, ImageList, ImageListItem, Link, Modal, Tab, Tabs, Typography } from '@mui/material';
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
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Friends from '../Friends/Friends';
import makeStyles from "../styles";
import Posts from '../Posts/Posts';
import DateParser from '../DateParser';
import profiles from '../../profiles.json';
import posts from '../../posts.json';
import { useParams } from 'react-router-dom';

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
  const [open, setOpen] = useState(false);
  const [singlePost, setSinglePost] = useState([{}]);
  const [userAccount, setUserAccount] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [mutualFriends, setMutualFriends] = useState(0);
  
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      setUserAccount(profiles[id]);
      setUserPosts(posts.filter(post => post.user === id));
    } else{
      setUserAccount(profiles.JulianBristol);
      setUserPosts(posts.filter(post => post.user === "JulianBristol"));
    }
  },[id])

  useEffect(() => {
      let mutualFriendsCount = 0;
      profiles.JulianBristol.friends.forEach((friend) => {
        if (userAccount?.friends?.includes(friend)) {
          mutualFriendsCount++;
        }
      });
      setMutualFriends(mutualFriendsCount);

  }, [userAccount]);

  const schoolStatus = ['Attending', 'Graduated', 'Dropped out', 'Will be attending', ]
  const relationshipStatus = ['In a Relationship', 'Single', 'Married', 'It\'s complicated', 'FWB', 'Divorced' ]

  const mediaData = userPosts.map(post => ({
    id: post.id,
    itemData: post.itemData
  }));

  const handleChange = (event, newTabNum) => {
    setTabNum(newTabNum);
  };
  const handleAboutChange = (event, newTabNum) => {
    setAboutTabNum(newTabNum);
  };
  const handleOpenPostModal = (postID) => {
    setOpen(true)
    setSinglePost(userPosts.filter(post => post.id === postID));
  };
  const handleClosePostModal = (postID) => {
    setOpen(false)
  };
  

  return (
    <>
      {/* Profile Container START */}
    <Box className={`${darkMode ? classes.darkMode_AccountContainer: ''} ${classes.accountContainer} `} >
    <Avatar 
    src={userAccount.banner}
    alt={`${userAccount.name}'s banner`}
    className={classes.profileBanner}
    variant='square'
    />
    {/* Profile Header START*/}
    <Box>
    <Box sx={{ display: 'flex', }}>
      <Avatar 
      src={userAccount.img}
      alt={`${userAccount.name}'s profile picture`}
      className={classes.profileImg}
      />
    <Box sx={{ position: 'relative', width: '100%',  padding: '20px 10px' }}>
      <Typography className={classes.profileBaseText}>{userAccount.name}</Typography>
        {userAccount.name !== 'Julian Bristol' ? 
          <Typography className={classes.profileBaseText} sx={{ marginTop: '10px' }}>{mutualFriends} Mutual Friends</Typography> : ''
        }
      <Box sx={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px'  }}>
        {userAccount.name === 'Julian Bristol' ? '' : <>
        <Button variant='contained' className={classes.profileBtn}>Message</Button>
        <Button variant='contained' className={classes.profileBtn}>
        {profiles.JulianBristol.friends.includes(id) ? 'Remove' : 'Add'} Friend</Button>
        </>}
      </Box>
      </Box>
    </Box>
    <Box sx={{ padding: '0px 20px 0px', display: 'flex', flexWrap: 'wrap'}}>
      <a className={`${classes.profileBaseText} ${classes.portfolioLinks}`} onClick={() => {
        setTabNum(3)
      }}>
        <Typography className={classes.profileBaseText}>{userAccount?.friends?.length} Friends</Typography>
        </a>

      {userAccount.website !== undefined ? 
      <a href={userAccount.website} target='_blank' rel="noreferrer" className={`${classes.profileBaseText} ${classes.portfolioLinks}`}>
        {userAccount.website === 'https://julianbristol.netlify.app/' ?
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='86.4 -0.22 7.8 7.8' className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `} style={{ minWidth: '32px', minHeight: '32px', maxWidth: '32px', maxHeight: '32px' }}>
        <path
        d='M91.9,1.366a2.777,2.777,0,0,0-3.57.435.349.349,0,0,0,.147.569l.337.112a.342.342,0,0,0,.35-.078,1.758,1.758,0,0,1,2.529.121.351.351,0,0,0,.493.033l.4-.348a.35.35,0,0,1,.542.109,3.083,3.083,0,0,1-1.274,4.062.346.346,0,0,0-.173.377l.013.063a.349.349,0,0,0,.51.235,3.84,3.84,0,0,0,1.018-5.94.35.35,0,0,0-.491-.028l-.266.236a.461.461,0,0,1-.569.042ZM88.7,3.118a1.736,1.736,0,0,0-.093.566,1.759,1.759,0,0,0,1.253,1.685.34.34,0,0,1,.242.264l.073.348a.35.35,0,0,1-.419.412,2.778,2.778,0,0,1-2.167-2.709c0-.057,0-.113,0-.169a.462.462,0,0,0-.319-.471l-.338-.112a.351.351,0,0,1-.223-.44A3.842,3.842,0,0,1,92.371.407a.338.338,0,0,1,.166.267.338.338,0,0,1-.116.292l-.047.042a.344.344,0,0,1-.414.039,3.079,3.079,0,0,0-4.153.928.349.349,0,0,0,.176.524l.5.176a.35.35,0,0,1,.217.443Zm2.01,2.293a1.77,1.77,0,0,0,1.414-1.727,1.811,1.811,0,0,0-.046-.406.341.341,0,0,1,.107-.341l.266-.237a.35.35,0,0,1,.566.158,2.78,2.78,0,0,1-1.412,3.311.461.461,0,0,0-.248.512l.072.348a.351.351,0,0,1-.271.413,3.843,3.843,0,0,1-4.633-3.758c0-.032,0-.064,0-.1a.35.35,0,0,1,.459-.324l.061.021a.346.346,0,0,1,.24.338v.06A3.079,3.079,0,0,0,90.17,6.757a.349.349,0,0,0,.365-.415c-.033-.173-.065-.346-.1-.521A.351.351,0,0,1,90.713,5.411Z'>
            </path>
            <path
            d='M 90.368 4.8 A 1.12 1.12 0 1 0 89.248 3.68 A 1.122 1.122 0 0 0 90.368 4.8 Z'>
                </path>
       </svg> : 
        <WebIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/> 
        }
        {userAccount.websiteName}
      </a> : ''}

      {userAccount.github !== undefined ?
      <a href={userAccount.github} target='_blank' rel="noreferrer" className={`${classes.profileBaseText} ${classes.portfolioLinks}`}>
        <GitHubIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
        Github
      </a> : ''}

      {userAccount.linkedin !== undefined ? <a href={userAccount.linkedin} target='_blank' rel="noreferrer" className={`${classes.profileBaseText} ${classes.portfolioLinks}`}>
        <LinkedInIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
        LinkedIn
      </a> : ''}
    </Box>
    </Box>
    {/* Profile Header END */}
    {/* Main Tab Container */}

    <Tabs
    className={`${darkMode ? classes.darkMode_TabContainer: ''} ${classes.tabContainer} `}
    indicatorColor="primary"
    onChange={handleChange}
    value={tabNum}
    variant='scrollable'
    aria-label="Profile Tab Selection"
    sx={{ /* background: '#dfdfdf', */marginTop: '15px', borderRadius: '0px 0px 5px 5px', }}
  >
    <Tab label="Posts" {...a11yProps(0)} />
    <Tab label="About" {...a11yProps(1)} />
    <Tab label="Media" {...a11yProps(2)} />
    <Tab label="Friends" {...a11yProps(3)} />
  </Tabs>
    </Box>
    {/* Profile Container END */}

    {/* Posts Tab START */}
  <TabPanel component='div' style={{ padding: '0 5px', }} tabNum={tabNum} index={0}>
    <Box sx={{ marginTop: '15px', }}>
    <Posts overridePosts={true} post={userPosts}/>
    </Box>
    </TabPanel>
    {/* Posts Tab END */}

    {/* About Tab START */}
    <TabPanel style={{ padding: '0 5px', }} component='div' tabNum={tabNum} index={1}>
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
          sx={{ marginTop: '15px', marginBottom: '15px', borderRadius: '0px 0px 5px 5px', borderRight: 1, borderColor: 'divider', minWidth: '125px', '& .MuiTabs-flexContainer': { height: '250px', justifyContent: 'space-evenly' } }}
        >
          <Tab label="Overview" {...AboutTabProps(0)} />
          <Tab label="Contact" {...AboutTabProps(1)} />
          <Tab label="About" {...AboutTabProps(2)} />
        </Tabs>

        {/* About/Overview Tab START */}
        <TabPanel component='div' tabNum={aboutTabNum} index={0} style={{ padding: '10px', width: '100%' }}>
          {userAccount.jobTitle !== undefined ? 
            <Box
            className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
              <WorkIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
              <Typography variant='body'>{userAccount.jobTitle}
              {userAccount.employer !== undefined ? 
                <>
                &nbsp;at {userAccount.employerLink !== undefined ? 
                  <a href={userAccount.employerLink} target='_blank' rel="noreferrer">{userAccount.employer}</a>
                  : <>{userAccount.employer}</>}
                </> : ''}
              </Typography>
            </Box>
            : ''
          }
          
          {userAccount.school !== undefined ? 
            <Box
            className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
              <SchoolIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
              <Typography variant='body'>
                {schoolStatus[userAccount.schoolStatus]}
                {userAccount.school !== undefined ? 
                  <>
                    {userAccount.schoolStatus === 1 || userAccount.schoolStatus === 2 ? ' from ' : ' '}
                    {userAccount.schoolLink !== undefined ? 
                      <a href={userAccount.schoolLink} target='_blank' rel="noreferrer">{userAccount.school}</a>
                      :
                      <>{userAccount.school}</>
                    }
                  </>
                  : ''
                } 
                {userAccount.graduationYear !== undefined ? 
                  <>&nbsp;in {userAccount.graduationYear}</> : ''
                }
              </Typography>
            </Box>
            : ''
          }
          
          {userAccount.home !== undefined ? 
            <Box
            className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
              <CottageIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
              <Typography variant='body'>Lives in&nbsp;
                {userAccount.homeLink !== undefined ?
                  <a href={userAccount.homeLink} target='_blank' rel="noreferrer">{userAccount.home}</a>
                  :
                  <>{userAccount.home}</>
                }
              </Typography>
            </Box>
            : ''
          }
          
          {userAccount.relationship !== undefined ? 
            <Box
              className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
              <FavoriteIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
              <Typography variant='body'>
                {relationshipStatus[userAccount.relationship]} 
                {userAccount.relationshipName !== undefined && userAccount.relationship !== 1 ? 
                  <>
                    {userAccount.relationship === 0 || userAccount.relationship === 3 || userAccount.relationship === 4 ? ' with ' : ''}
                    {userAccount.relationship === 2 || userAccount.relationship === 5 ? ' to ' : ''}
                    {userAccount.relationshipLink !== undefined ? 
                      <a href={userAccount.relationshipLink}>{userAccount.relationshipName}</a>
                      : 
                      <>{userAccount.relationshipName}</>
                    }
                  </> : ''
                }
              </Typography>
            </Box>
            : ''
          }
        </TabPanel>
        {/* About/Overview Tab END */}

        {/* About/Contact Tab START */}
        <TabPanel component='div' tabNum={aboutTabNum} index={1} style={{ padding: '10px', width: '100%' }}>
          {userAccount.phone !== undefined ?
            <Box
            className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
              <LocalPhoneIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
              <Typography variant='body'><a href={`tel:+${userAccount.phone}`}>{userAccount.phone}</a></Typography>
            </Box>
            : ''
          }
          
          {userAccount.email !== undefined ?
            <Box
            className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
              <EmailIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
              <Typography variant='body'>
                <a href={`mailto:${userAccount.email}`}>{userAccount.email}</a>
              </Typography>
            </Box>
            : ''
          }
          
          {userAccount.website !== undefined || userAccount.github !== undefined || userAccount.linkedin !== undefined ?
            <Box
            className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
              <Typography variant='body'>
                {userAccount.linkedin !== undefined ?
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                      <LinkedInIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
                      <a href={userAccount.linkedin}target='_blank' rel="noreferrer">LinkedIn</a>
                    </div>
                  </> : ''
                }

                {userAccount.github !== undefined ?
                  <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <GitHubIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
                    <a href={userAccount.github} target='_blank' rel="noreferrer">Github</a>
                  </div>
                  </> : ''
                }

                {userAccount.website !== undefined ?
                  <>
                  <div style={{ display: 'flex', alignItems: 'center', }}>
                    <WebIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
                    <a href={userAccount.website} target='_blank' rel="noreferrer">{userAccount.websiteName}</a>
                  </div>
                  </> : ''
                }
              </Typography>
            </Box>
            : ''
          }

          {userAccount.dob !== undefined ?
            <Box
            className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}>
              <CakeIcon className={`${darkMode ? classes.darkMode_ProfileIcon: ''} ${classes.profileIcon} `}/>
              <Typography variant='body'>{DateParser(userAccount.dob)}</Typography>
            </Box>
            : ''
          }
        </TabPanel>
        {/* About/Contact Tab END */}

        {/* About/About Tab Start */}
        <TabPanel component='div' tabNum={aboutTabNum} index={2} style={{ padding: '10px 20px', width: '100%' }}>
          <Box
          className={`${darkMode ? classes.darkMode_ProfileDataItem: ''} ${classes.profileDataItem} `}
          sx={{ display: 'block', overflow: 'auto' }}
          >
            {userAccount?.about?.map((about, key) => (
              <Typography key={key} className={classes.aboutMeText}>{about}</Typography>
            ))}
          </Box>
        </TabPanel>
        {/* About/About Tab END */}
      </Box>
    </TabPanel>
    {/* About Tab END */}

    {/* Media Tab START */}
    <TabPanel style={{ padding: '0 5px', }} component='div' tabNum={tabNum} index={2} >
      <Box className={`${darkMode ? classes.darkMode_TabStyle: ''} ${classes.tabStyle} `}>
        <ImageList className={`${darkMode ? classes.darkMode_ScrollBar : '' }`} cols={3} /* rowHeight={164} */>
          {mediaData?.map((imageObject, key) => (
            imageObject?.itemData?.map((item, key) => (
              <ImageListItem key={key}>
                <img
                  className='mediaImage'
                  src={`${item.img}?w=300&h=300&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  onClick={() => {
                    handleOpenPostModal(imageObject.id);
                  }}
                  loading="lazy"
                />
              </ImageListItem>
              ))
          ))}
        </ImageList>
      </Box>
    </TabPanel>
    {/* Media Tab Modal START */}
    <Modal
    open={open}
    onClose={handleClosePostModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{ overflow: "auto" }}
    >
      <Box className={classes.postModal}>
        <Posts overridePosts={true} post={singlePost}/>
      </Box>
    </Modal>
    {/* Media Tab Modal END */}
    {/* Media Tab END */}

    {/* Friend Tab START */}
    <TabPanel style={{ padding: '0 5px', }} component='div' tabNum={tabNum} index={3} >
      <Box sx={{ marginTop: '15px', }}>
        <Friends overrideFriends={true} friends={userAccount.friends} minWidth='200px'/>
      </Box>
    </TabPanel>
    {/* Friend Tab END */}
  </>
  )
}

export default Account
