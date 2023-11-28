import { Box, Stack, Typography } from '@mui/material';

function Footer() {
	return (
    <Box sx={{ p: 6 }} component="footer">
      <Stack
        component="div"
        display="flex"
        textAlign="center"
        justifyContent="center"
        sx={{ flexGrow: 1 }}
        color="#CaCaCa"
      >
        <Typography color="#5d7796">Programa Starter Web Full Stack</Typography>

        <Typography color="#969696">
          Feito por 👩🏻‍💻 Ana Westhpal & 👨🏻‍💻 Felipe Giehl
        </Typography>
      </Stack>

      {/* <Stack spacing={2}>
      <Pagination count={10} />
    </Stack> */}
    </Box>
  );
}

export default Footer;
