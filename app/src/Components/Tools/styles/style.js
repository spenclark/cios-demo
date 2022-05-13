import { styled } from "@mui/system";

export const ToolDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "80%",
  margin: "auto",
  padding: "50px",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

export const HeaderDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  margin: "auto",
}));

export const HeaderTitle = styled("h1")(({ theme }) => ({
  fontSize: "42px",
}));

export const HeaderSubtitle = styled("p")(({ theme }) => ({
  margin: "10px",
  fontSize: "18px",
}));

export const ToolContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "80%",
  margin: "auto",
  padding: "50px",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

export const ParentDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "800px",
  maxWidth: "80%",
  margin: "auto",
  padding: "50px",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

export const ToolTitle = styled("h1")(({ theme }) => ({
  fontSize: "42px",
  textAlign: "center",
}));

export const ToolSubtitle = styled("p")(({ theme }) => ({
  margin: "10px",
  fontSize: "18px",
  textAlign: "center",
}));

export const FooterDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  margin: "auto",
}));