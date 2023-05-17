import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    card:{
        marginBottom: '40px',
        background: "#E8E8E8 !important"
    },
    postHeader: {
        '& .MuiAvatar-root': {
            width: '75px',
            height: '75px',
        },
        '& .MuiCardHeader-title':{
        fontSize: '1.2rem',
        }
    }
}));
