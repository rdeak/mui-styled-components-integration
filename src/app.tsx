import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Copyright } from "@mui/icons-material";
import { ProTip } from "./pro-tip";
import { Card } from "./card";
import { Page } from "./page";

export function App() {
  return (
    <Container maxWidth="sm">
      <Page>
        <Card>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI with stayled component
          </Typography>
        </Card>
        <ProTip />
        <Copyright />
      </Page>
    </Container>
  );
}
