import { styled } from "@mui/system";

export const LandingDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  width: "65%",
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

export const HeroDiv = styled("div")(({ theme }) => ({
  margin: "18px 0",
}));

export const HeroTitle = styled("h1")(({ theme }) => ({
  width: "80%",
  fontSize: "48px",
  minWidth: "300px",
}));

export const HeroSubtitle = styled("p")(({ theme }) => ({
  width: "80%",
  fontSize: "20px",
  margin: "20px 0 30px",
}));

export const ButtonDiv = styled("div")(({ theme }) => ({
  width: "80%",
  fontSize: "20px",
  margin: "20px 0 30px",
  display: "flex",
}));

export const LearnButton = styled("div")(({ theme }) => ({
  padding: "12px 28px",
  border: "1px solid black",
  background: "white",
  fontWeight: "600",
  borderRadius: "4px",
  fontSize: "16px",
}));

export const ContactButton = styled("div")(({ theme }) => ({
  padding: "12px 28px",
  border: "1px solid black",
  borderRadius: "4px",
  fontSize: "16px",
  background: "black",
  color: "white",
  fontWeight: "600",
  borderRadius: "4px",
  marginRight: "24px",
}));

export const HeroImg = styled("img")(({ theme }) => ({
  width: "100%",
}));

export const TrustedBar = styled("div")(({ theme }) => ({
  display: "flex",
}));

export const TrustedIcon = styled("img")(({ theme }) => ({
  width: "auto",
  margin: "0 20px 0 0",
  height: "120px",
}));

export const CaseDiv = styled("div")(({ theme }) => ({
  display: "flex",
}));
