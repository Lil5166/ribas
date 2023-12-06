import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const container: SxProps<Theme> = {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
};

export const gridContainer: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
};

export const leftContainer: SxProps<Theme> = {
    zIndex: 2,
    position: "relative",
};

export const rightContainer: SxProps<Theme> = {
    zIndex: 1,
    position: "relative",
};

export const overlay: SxProps<Theme> = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#ffffff",
    width: "100%",
};

export const formContainer: SxProps<Theme> = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    width: "100%",
};

export const loginLink: SxProps<Theme> = {
    margin: "0 0 0 180px",
    fontFamily: 'Manrope',
    fontWeight: "bold",
    fontSize: '30px'
};

export const button: SxProps<Theme> = {
    margin: "20px 0 0 180px",
    width: '30%',
    fontFamily: 'Manrope',
    fontSize: '20px',
    borderRadius: "10px",
    textTransform: "none"
};
