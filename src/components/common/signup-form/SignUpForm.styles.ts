// SignUpForm.styles.ts
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const container: SxProps<Theme> = {
    borderRadius: "10px",
    padding: "20px",
};

export const input: SxProps<Theme> = {
    width: "100%",
    margin: "20px 0 10px 30px",
};

export const buttonSend: SxProps<Theme> = {
    width: "50%",
    margin: "10px 120px",
    borderRadius: "8px",
};

export const snackbar: SxProps<Theme> = {
    zIndex: 9999,
};
