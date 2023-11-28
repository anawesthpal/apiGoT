import { AppBar, Stack, Typography } from '@mui/material';

function Header() {
	
	return (
    <AppBar
      position="static"
      sx={{ py: 2, background: "#264063" }}
      elevation={8}
    >
      <Stack justifyContent="center" alignItems="center" direction="row">
        <Typography variant="h3" component="h1" fontWeight="bold">
          Game of Thrones API
        </Typography>
      </Stack>
    </AppBar>
  );
}

export default Header;
