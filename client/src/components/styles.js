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
            color: '#1976d2',
        },
    },
    darkMode_AccountContainer:{
        background: '#454545',
        color: '#d5d5d5',
        '& a': {
            color: '#dcf7ab',
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
}
));