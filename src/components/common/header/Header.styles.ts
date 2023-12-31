import {Theme} from '@mui/material/styles';
import {SxProps} from '@mui/system';

export const appBar: SxProps<Theme> = {
    backgroundColor: 'rgb(0, 59, 149)',
    padding: '0',
    margin: '0',
};

export const toolbar: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
};

export const iconButton: SxProps<Theme> = {
    marginRight: theme => theme.spacing(2),
};

export const button: SxProps<Theme> = {
    marginLeft: theme => theme.spacing(2),
    textTransform: 'none',
    fontSize: "18px",
    color: "white",
    padding: '8px'
};

export const whiteButton: SxProps<Theme> = {
    ...button,
    backgroundColor: 'white',
    color: 'blue',
    '&:hover': {
        backgroundColor: 'white',
        color: 'blue',
        cursor: 'pointer',
    },
};

export const boxAuth: SxProps<Theme> = {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
}

export const buttonAuth: SxProps<Theme> = {
    textTransform: 'none',
    margin: "5px",
    fontSize: '15px',
    borderRadius: '20px',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
        backgroundColor: "white",
    }
}