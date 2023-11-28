import { AppBar, Toolbar, Typography } from '@mui/material';


function Header() {
	
	return (
		<AppBar position='fixed'>
			<Toolbar>

				<Typography
					variant='h6'
					component='div'
					display='flex'
					textAlign='center'
					justifyContent='center'
					sx={{ flexGrow: 1}}
					color="#FFF"
				>
					API GOAT
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
