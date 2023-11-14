import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const appBar: SxProps<Theme> = {
    backgroundColor: 'rgb(0, 59, 149)',
    padding: '0',
    margin: '0'
};

export const toolbar: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
};

export const iconButton: SxProps<Theme> = {
    marginRight: theme => theme.spacing(2),
};

export const title: SxProps = {
    flexGrow: 1,
    marginTop: 4,
    marginBottom: 4,
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
