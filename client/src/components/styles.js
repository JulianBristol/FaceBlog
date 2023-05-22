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

}
));
