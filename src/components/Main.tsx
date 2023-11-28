import {
  FavoriteBorderRounded
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { listCharacters } from "../store/modules/album/ characters";

function Main() {

  const charactersRedux = useAppSelector( (state)=> state.characters )

  // disparar ações de modificação da store
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(listCharacters())
  },[])

  return (
    <Box component="main" sx={{ pt: 10 }}>
      <Container maxWidth="md" sx={{ paddingY: 8 }}>
        <Grid container spacing={4}>
          {charactersRedux &&
            charactersRedux.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <Card sx={{ width: "100%" }} elevation={10}>
                    <CardMedia
                      sx={{ pt: "56.25%" }}
                      image={item.imageUrl}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h6">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="GrayText">
                        {item.fullName}
                      </Typography>
                      <Typography variant="body2" color="GrayText">
                        {item.family}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <IconButton
                        aria-label="Favorite"
                      >
                          <FavoriteBorderRounded color="error" />                       
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>

      <Box
        display="flex"
        flexDirection="column"
        position="fixed"
        gap={2}
        right={10}
        bottom={10}
      >    
      </Box>

    </Box>
  );
}

export default Main;
