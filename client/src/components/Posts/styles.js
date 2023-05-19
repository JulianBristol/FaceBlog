import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    card:{
        marginBottom: '40px',
        background: "#E8E8E8 !important"
    },
    postHeader: {
        background: '#f6f6f6',
        '& .MuiAvatar-root': {
            width: '75px',
            height: '75px',
            outline: '1px solid black',
        },
        '& .MuiCardHeader-title':{
        fontSize: '1.2rem',
        }
    },
    textTruncate: {
        whiteSpace: 'pre-line',
    },
    icons: {
        transition: 'all 0.5s ease !important',
        '&:hover': {
            color: 'black'
        },
    }
}));
