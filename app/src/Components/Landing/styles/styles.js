import { styled } from "@mui/system";

//Many styles on this view are inline to save time :)

export const LandingDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "620px",
  maxWidth: "80%",
  padding: "50px",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {
    margin: "auto",
    padding: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

export const ContentCard = styled("div")(({ theme }) => ({
  padding: "20px",
}));;

export const TitleDiv = styled("div")(({ theme }) => ({
  margin: "18px 0",
}));;

export const ContentTitle = styled("h2")(({ theme }) => ({

}));

export const ContentSubtitle = styled("p")(({ theme }) => ({
  margin: "8px 0 16px",
  fontSize: "16px",
}));
