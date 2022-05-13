import { styled } from "@mui/system";

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

export const CiosSubtitle = styled("p")(({ theme }) => ({
  margin: "6px 0 18px",
}));

export const CiosDiv = styled("div")(({ theme }) => ({
  display: "flex",
  background: "#efefef",
  borderRadius: "7px",
  padding: "18px",
  width: "100%",
  alignItems: "center",
  marginTop: "3px",
}));

export const VanillaDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "7px",
  padding: "18px",
  width: "100%",
  alignItems: "center",
}));

export const Grid = styled("div")(({ theme }) => ({
  width: "100%",
}));

export const GridRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "row",
  width: "100%",
  padding: "2px 0",
  borderBottom: "1px black solid",
}));

export const PaymentDiv = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "20px 0 10px",
  flexDirection: "column",
}));

export const RadioDiv = styled("div")(({ theme }) => ({
  width: "12px",
  height: "12px",
  marginRight: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
