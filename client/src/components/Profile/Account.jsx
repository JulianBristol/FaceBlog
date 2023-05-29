import { Avatar, Box, Button, Card, Link, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types';

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
        <Box sx={{ p: 3 }}>
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

const Account = () => {
  const [tabNum, setTabNum] = useState(0);
  const handleChange = (event, newTabNum) => {
    setTabNum(newTabNum);
  };

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

  <TabPanel component='img' tabNum={tabNum} index={0} style={{ padding: '0px 10px 10px' }}>
    <Card sx={{ background: '#DFDFDF' }}>testing</Card>
</TabPanel>

  <TabPanel component='img' tabNum={tabNum} index={1} style={{ padding: '0px 10px 10px' }}>
    Test2
</TabPanel>

  <TabPanel component='img' tabNum={tabNum} index={2} style={{ padding: '0px 10px 10px' }}>
    Test3
</TabPanel>

  <TabPanel component='img' tabNum={tabNum} index={3} style={{ padding: '0px 10px 10px' }}>
    Test4
</TabPanel>

    </>
  )
}

export default Account
