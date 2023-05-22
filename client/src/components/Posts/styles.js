import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    card:{
        marginBottom: '40px',
        backgroundColor: '#f6f6f6 !important',
        '& .MuiTypography-root': {
            color: '#202020 !important',
        }
    },
    darkMode_Card:{
        backgroundColor: '#454141 !important',
        '& .MuiTypography-root': {
            color: '#D5D5D5 !important',
        },
        '& a':{
            color: '#dcf7ab !important'
        }
    },
    postHeader: {
        '& .MuiAvatar-root': {
            width: '75px',
            height: '75px',
            outline: '1px solid black',
        },
        '& .MuiCardHeader-title':{
        fontSize: '1.2rem',
        }
    },
    darkMode_PostHeader: {
        '& .MuiAvatar-root': {
            outline: '1px solid #DFDFDF',
        },
    },
    textTruncate: {
        whiteSpace: 'pre-line',
    },
    icons: {
        transition: 'all 0.5s ease !important',
        color: '#717171 !important',
        '&:hover':{
            color: '#000000 !important'
        }
    },
    darkMode_Icon:{
        color: '#B5B5B5 !important',
        '&:hover':{
            color: '#FFFFFF !important'
        }
    },
    SeeMore:{
        position: 'relative', 
        left: 'calc(100% - 100px)', 
    },
    darkMode_SeeMore:{
        color: '#caff69 !important'
    },
}));
