import { padding, styled } from "@mui/system";

export const TenantDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "620px",
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

export const FormTitle = styled("h2")(({ theme }) => ({
  fontSize: "18px",
}));

export const FormSubtitle = styled("p")(({ theme }) => ({
  fontSize: "18px",
  margin: "6px 0 24px",
}));

export const FormDiv = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "20px 0 40px",
  flexDirection: "column",
}));

export const CiosTitle = styled("h4")(({ theme }) => ({}));

export const CiosSubtitle = styled("p")(({ theme }) => ({}));

export const CiosDiv = styled("div")(({ theme }) => ({
  display: "flex",
  background: "#efefef",
  borderRadius: "7px",
  padding: "18px",
  width: "100%",
  margin: "20px 0 40px",
  flexDirection: "column",
  margin: "auto",
}));

export const CiosButton = styled("button")(({ theme }) => ({
  display: "flex",
  background: "#efefef",
  borderRadius: "7px",
  padding: "18px",
  margin: "20px 0 40px",
  flexDirection: "column",
  margin: "auto",
}));
