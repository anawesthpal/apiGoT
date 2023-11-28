import { Box, Pagination, Stack } from '@mui/material';

function Footer() {
	return (
		<Box
			sx={{ p: 6 }}
			component='footer'
		>
	
    <Stack spacing={2}>
      <Pagination count={10} />
    </Stack>


		</Box>
	);
}

export default Footer;
