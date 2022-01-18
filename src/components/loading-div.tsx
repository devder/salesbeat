import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingDiv: React.VFC = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", marginY: "50px" }}>
      <CircularProgress />
    </Container>
  );
};
