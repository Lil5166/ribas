import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
    textAlign: 'center',
    paddingTop: (theme) => theme.spacing(6),
};

export const title: SxProps<Theme> = {
    marginBottom: (theme) => theme.spacing(6),
};

export const image: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: (theme) => theme.spacing(4),
};

export const button: SxProps = {
    width: '50%',
    margin: '0 auto',
};
