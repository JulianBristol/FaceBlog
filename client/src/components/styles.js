import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    ListItemButtonContainer:{
        minWidth: '202px',
        textDecoration: 'none',
        color: 'black',
    },
    darkMode_Link:{
        '& span':{
        color: '#DFDFDF',
        },
        '& svg':{
        color: '#a1a1a1',
        }
    },
    lightMode_Link:{
        '& span':{
        color: 'black',
        },
        '& svg':{
        color: '#6e6e6e',
        },
    },
    darkMode_SwitchL:{
        color: '#a1a1a1',
    },
    lightMode_SwitchL:{
        color: '#000000',
    },
    darkMode_SwitchD:{
        color: '#DFDFDF',
    },
    lightMode_SwitchD:{
        color: '#6e6e6e',
    },
    darkMode_Header6:{
        color: '#DFDFDF',
    },
    darkMode_AvatarGroup:{
        '& .MuiAvatar-root': {
            border: '2px solid #262626 !important',
        }
    },
    portfolioLinks: {
        marginRight: '15px',
        padding: '15px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.32s ease-in-out !important',
        '&:hover':{
            background: '#00000055',
        }
    },
    latestPosts: {
        height: 450,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '5px',
        overflowY: 'auto'
    },
    darkMode_ScrollBar: {
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(255, 255, 255, 0.454)',
            webkitBoxShadow: 'inset 0 0 6px rgba(255, 255, 255, 0.454)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, .16)',
            outline: '1px solid slategrey'
        }
    },
    accountContainer:{
        background: '#dfdfdf',
        borderRadius: '0px 0px 5px 5px',
        /* '@media (max-width: 380px)': {
          width: '290px',
        }, */
        '& a': {
            color: '#004285',
            textDecoration: 'none',
            cursor: 'pointer',
            '& svg':{
                transition: 'fill 0.32s ease-out !important',
            },
            '&:hover':{
                color: '#000',
                '& svg':{
                    fill: '#000',
                }
            }
        },
    },
    darkMode_AccountContainer:{
        background: '#454545',
        color: '#d5d5d5',
        '& a': {
            color: '#dcf7ab',
            '&:hover':{
                color: '#caff69',
                '& svg':{
                    fill: '#fff',
                }
            }
        }
    },
    profileBanner: {
        width: '100% !important',
        height: '200px !important',
        '@media (max-width: 380px)': {
            height: '100px !important',
        },
    },
    profileImg: {
        width: '100px !important',
        height: '100px !important',
        margin: '10px',
        '@media (max-width: 380px)': {
            margin: '5px',
            width: '75px !important',
            height: '75px !important',
        },
    },
    profileBaseText: {
        '@media (max-width: 380px)': {
            fontSize: '0.85rem !important',
        },
    },
    profileBtn: {
        '@media (max-width: 380px)': {
            fontSize: '0.85rem !important',
        },
    },
    tabContainer: {
        /* '& .MuiButtonBase-root':{
            color: '#dfdfdf',
        },
        '& .MuiButtonBase-root.Mui-selected':{
            color: '#dcf7ab',
        },
        '& .MuiTabs-indicator':{
            backgroundColor: '#dcf7ab',
        }, */
    },
    darkMode_TabContainer: {
        '& .MuiButtonBase-root':{
            color: '#dfdfdf',
        },
        '& .MuiButtonBase-root.Mui-selected':{
            color: '#dcf7ab',
        },
        '& .MuiTabs-indicator':{
            backgroundColor: '#dcf7ab',
        },
    },
    tabStyle: {
        marginTop: '15px',
        padding: '0 5px',
        borderRadius: '5px',
        '& a': {
            color: '#004285',
            textDecoration: 'none',
            '&:hover':{
                color: '#780707',
                fontweight: '900',
            }
        },
    },
    darkMode_TabStyle: {
        background: '#454545',
        color: '#d5d5d5',
        '& a': {
            color: '#dcf7ab',
            textDecoration: 'none',
            transition: 'color 0.32s ease-out !important',
            '&:hover':{
                color: '#caff69  '
            }
        }
    },
    profileDataItem: {
        background: '#cbcbcb',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        marginBottom: '10px',
        alignItems: 'center !important',
    },
    darkMode_ProfileDataItem: {
        background: '#1C1C1C',
    },
    aboutMeText: {
        marginBottom: '10px !important',
    },
    profileIcon: {
        color: '#323332',
        fill: '#323332',
        fontSize: '2rem !important',
        marginRight: '15px',
    },
    darkMode_ProfileIcon: {
        color: '#DFDFDF',
        fill: '#DFDFDF',
    },
    postModal: {
        width: '40vw',
        margin: '10vh auto',
        '@media (max-width: 1200px)': {
            width: '60vw',
        },
        '@media (max-width: 800px)': {
            width: '80vw',
        },
    },
}
));