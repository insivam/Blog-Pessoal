import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./Footer.css";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Siga-nos nas redes sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://github.com/insivam" target="_blank">
                <img
                  src="https://i.imgur.com/TOOJuII.png"
                  alt="Vitor"
                  height="70"
                  width="70"
                />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="textos"
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://github.com/Discoleta">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                  className="textos"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
