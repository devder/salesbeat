import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const ErrorDiv: React.VFC = () => {
  return (
    <Container>
      <Typography variant="subtitle1" component="div">
        Something went wrong...
      </Typography>
    </Container>
  );
};
