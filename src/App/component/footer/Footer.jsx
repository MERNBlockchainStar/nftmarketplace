import { Container, Grid, makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";

import logo from "../../images/logo.png";
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  icon: { fontSize: "38px", color: "#fff", marginRight: "10px" },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <section style={{ padding: "50px 0 50px 0" }}>
      <Container>
        <Grid container>
          <Grid
            item
            md={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: "20px 0",
            }}
          >
            <img src={logo} alt="logo" style={{ width: "80px" }} />
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#fff",
                margin: "10px 0",
              }}
            >
              FOLLOW US
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexFlow: "wrap",
                flex: "0 1 auto",
                marginTop: "10px",
              }}
            >
              <TwitterIcon className={classes.icon} />
              <InstagramIcon className={classes.icon} />
              <TelegramIcon className={classes.icon} />
            </div>
          </Grid>
          <Grid
            item
            md={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: "20px 0",
            }}
          >
            <Menu
              title="LINK HERE"
              link={[
                { name: "LINK" },
                { name: "LINK" },
                { name: "LINK" },
                { name: "LINK" },
              ]}
            />
          </Grid>
          <Grid
            item
            md={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: "20px 0",
            }}
          >
            <Menu
              title="LINK HERE"
              link={[
                { name: "LINK" },
                { name: "LINK" },
                { name: "LINK" },
                { name: "LINK" },
              ]}
            />
          </Grid>
          <Grid
            item
            md={3}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: "20px 0",
            }}
          >
            <Menu
              title="LINK HERE"
              link={[
                { name: "LINK" },
                { name: "LINK" },
                { name: "LINK" },
                { name: "LINK" },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
