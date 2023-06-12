import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    card:{
        marginBottom: '40px',
        backgroundColor: '#DFDFDF !important',
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
            '&:hover': {
                cursor: 'pointer'
            }
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
    friendCard: {
        height: '100px',
        width: 'calc(50% - 10px)',
        display: 'grid',
        position: 'relative',
       /*  minWidth: '300px', */
        '@media (max-width: 1250px)': {
            '& .MuiAvatar-root': {
                height: '50px',
                width: '50px',
            },
            '& .MuiTypography-h5': {
                fontSize: '0.85rem',
            }
        },
        '@media (max-width: 975px)': {
            width: '100%',
            marginBottom: '10px',
            '& .MuiAvatar-root': {
                height: '75px',
                width: '75px',
            },
            '& .MuiTypography-h5': {
                fontSize: '1rem',
            }
        },
        '@media (max-width: 475px)': {
            marginLeft: '0px',
            marginRight: '0px',
        },
    },
    imgModal: {
        width: '40vw',
        margin: '10vh auto',
        outline: 'none',
        '@media (max-width: 1200px)': {
            width: '60vw',
        },
        '@media (max-width: 800px)': {
            width: '80vw',
        },
    },
    imgModal_img:{
        maxWidth: '40vw',
        display: 'flex',
        margin: '0 auto',
        '@media (max-width: 1200px)': {
            maxWidth: '60vw',
        },
        '@media (max-width: 800px)': {
            maxWidth: '80vw',
        },
    }
}));
