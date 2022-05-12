import { makeStyles } from "@mui/styles";

//Many styles on this view are inline to save time :)

export const landingStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "600px",
    maxWidth: "80%",
    padding: "50px",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      padding: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  },
}));
