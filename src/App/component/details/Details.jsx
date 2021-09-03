import {
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Image } from "antd";
import { useState } from "react";

import avater from "../../images/avater.png";
import nftImage1 from "../../images/group3.png";
import nftImage2 from "../../images/group4.png";
import nftImage3 from "../../images/group5.png";
import Card from "../explore/Card";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#FF9C00",
    color: "#fff",
    outline: 0,
    padding: "5px 15px",
    minWidth: "100%",
    border: 0,

    borderRadius: "50px",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "18px",
    display: "block",
    margin: "auto",
    marginTop: "30px",
  },
  tab: {
    color: "#fff",
    minWidth: "100px",
    fontSize: "14px",
    fontWeight: 400,
  },
  container: {
    height: "640px",
    overflow: "hidden",
    borderRadius: "15px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
}));
const Details = () => {
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const { state } = useLocation();
  const { title, img, price } = state;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section style={{ padding: "50px 0" }}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.container}>
              <Image
                src={img}
                style={{ width: "100%", borderRadius: "15px" }}
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <div style={{ marginLeft: "40px", width: "250px" }}>
              <h3 style={{ margin: "10px 0", color: "#fff", fontSize: "24px" }}>
                {title}
              </h3>
              <h3 style={{ margin: "5px 0", color: "gray", fontSize: "18px" }}>
                {price.bnb} BNB
              </h3>
              <p style={{ margin: "5px 0", color: "gray", fontSize: "16px" }}>
                She fights evil corporations who abuse the planet for profit.
              </p>
              <p style={{ margin: "20px 0", color: "gray", fontSize: "16px" }}>
                by tomi anime <br /> 2021
              </p>
              <p style={{ margin: "15px 0", color: "gray", fontSize: "16px" }}>
                #3/50
              </p>
              <Button className={classes.button}>Buy</Button>
            </div>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              style={{
                background: "#171717",
                borderRadius: "15px",
                boxShadow: "0px 11px 28px 3px rgb(0 0 0 / 16%)",
                margin: "40px 0 0 40px",
                maxWidth: "300px",
              }}
            >
              <Tab label="OWNER" className={classes.tab} />
              <Tab label="HISTORY" className={classes.tab} />
              <Tab label="INFO" className={classes.tab} />
            </Tabs>
            <div style={{ marginLeft: "40px" }}>
              {value === 0 && (
                <div
                  style={{
                    display: "flex",
                    margin: "20px 0",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={avater}
                    alt="avater"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />

                  <div>
                    <h4
                      style={{
                        margin: "0px 0 2px 0",
                        fontSize: "12px",
                        color: "gray",
                      }}
                    >
                      CREATOR
                    </h4>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Tomi Anime
                    </p>
                  </div>
                </div>
              )}
              {value === 1 && (
                <div
                  style={{
                    display: "flex",
                    margin: "20px 0",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={avater}
                    alt="avater"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />

                  <div>
                    <h4
                      style={{
                        margin: "0px 0 2px 0",
                        fontSize: "14px",
                        color: "#f2f2f2",
                      }}
                    >
                      Tomi Anime
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#fff",
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      The NFT was minted
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        margin: 0,
                      }}
                    >
                      12 hours ago
                    </p>
                  </div>
                </div>
              )}
              {value === 2 && (
                <>
                  <div style={{ margin: "20px 0" }}>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        margin: "5px 0",
                      }}
                    >
                      NFT ID
                    </p>
                    <p
                      style={{
                        color: "#FAB33F",
                        fontSize: "14px",
                        margin: "5px 0",
                      }}
                    >
                      108951
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        margin: "5px 0",
                      }}
                    >
                      MINT TRANSACTION
                    </p>
                    <p
                      style={{
                        color: "#FAB33F",
                        fontSize: "14px",
                        margin: "5px 0",
                      }}
                    >
                      0x8012b682...cbbb2de527
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        margin: "5px 0",
                      }}
                    >
                      CONTRACT ADDRESS
                    </p>
                    <p
                      style={{
                        color: "#FAB33F",
                        fontSize: "14px",
                        margin: "5px 0",
                      }}
                    >
                      0xF5db...CdAA4b
                    </p>
                  </div>
                </>
              )}
            </div>
          </Grid>
        </Grid>
        <h3
          style={{
            fontSize: "24px",
            color: "#fff",
            margin: "50px 0 0 0",
            textAlign: "center",
          }}
        >
          More By Tomi Anime
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexFlow: "wrap",
            flex: "0 1 auto",
            justifyContent: "center",
            marginTop: "30px",
            width: "100%",
          }}
        >
          <Card
            title="Tomi anime name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
        </div>
      </Container>
    </section>
  );
};

export default Details;
