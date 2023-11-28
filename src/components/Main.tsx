import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { listCharacters } from "../store/modules/album/ characters";

function Main() {
  const charactersRedux = useAppSelector((state) => state.characters);

  // disparar ações de modificação da store
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listCharacters());
  }, []);

  return (
    <Box component="main" sx={{ pt: 4 }}>
      <Container maxWidth="sm" sx={{ paddingY: 1 }}>
        <Grid container spacing={4}>
          {charactersRedux &&
            charactersRedux.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    elevation={6}
                  >
                    <CardMedia
                      sx={{ pt: "100%" }}
                      image={item.imageUrl}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h6"
                        color="#264063"
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="#5d7796">
                        {item.fullName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#969696"
                        sx={{ paddingY: 1 }}
                      >
                        {item.family}
                      </Typography>
                    </CardContent>

                    {/* <CardActions>
                      <IconButton aria-label="Favorite">
                        <FavoriteBorderRounded color="error" />
                      </IconButton>
                    </CardActions> */}
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
      ></Box>
    </Box>
  );
}

export default Main;
