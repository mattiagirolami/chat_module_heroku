import { Link as RouterLink, useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { useAuthContext } from "../context/auth";
import { useStateContext } from "../context/state";
import UserButtonsDesktop from "./UserButtonsDesktop";
import UserMenuMobile from "./UserMenuMobile";
import ChatIcon from "../svg/chat.svg";

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  useMediaQuery,
  Container,
} from "@material-ui/core";
import { useNavStyles } from "../styles/muiStyles";
import { useTheme } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const NavBar = () => {
  const { user, logoutUser } = useAuthContext();
  const { selectedChat } = useStateContext();
  const client = useApolloClient();
  const history = useHistory();
  const classes = useNavStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogout = () => {
    client.clearStore();
    logoutUser();
    history.push("/login");
  };

  if (isMobile && selectedChat) return null;

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar variant="dense" disableGutters={isMobile}>
        <Container style={{ display: "flex" }} disableGutters={isMobile}>
          <div className={classes.leftPortion}>
            <div className={classes.logoWrapper}>
              <Button
                className={classes.logoBtn}
                component={RouterLink}
                to="/"
                color="primary"
              >
                Let's Chat!
              </Button>
              {!isMobile && (
                <Typography variant="caption" color="secondary">
                  Made by
                  <Link
                    href={
                      "https://images2.corriereobjects.it/methode_image/socialshare/99c8e386-baa6-11e9-9682-c74c9096c983.jpg"
                    }
                    color="inherit"
                    target="_blank"
                    rel="noopener"
                  >
                    <strong>{` mattia&ninja`}</strong>
                  </Link>
                </Typography>
              )}
            </div>
          </div>
          <UserButtonsDesktop
            user={user}
            handleLogout={handleLogout}
            isMobile={isMobile}
          />
          <UserMenuMobile
            user={user}
            handleLogout={handleLogout}
            isMobile={isMobile}
          />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
