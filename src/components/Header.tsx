import NatIcon from "@mui/icons-material/Nat";
import { AppBar, Stack, Typography } from '@mui/material';

function Header() {
	
	return (
    <AppBar position="static" sx={{ py: 2, background: "#264063" }}>
      <Stack justifyContent="center" alignItems="center" direction="row">
        <Typography variant="h6" component="h1" fontWeight="bold">
          API GOAT
        </Typography>

        <NatIcon
          spacing={10}
          sx={{ color: "#5d7796", fontSize: "50", mb: 0, marginX: 2 }}
        />
      </Stack>
    </AppBar>
  );
}

export default Header;
