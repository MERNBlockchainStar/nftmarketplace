import React from "react";
import { Button, Container, makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import nftImage1 from "../../images/group3.png";
import nftImage2 from "../../images/group4.png";
import nftImage3 from "../../images/group5.png";
import Card from "../explore/Card";
import UserDetails from "./UserDetails";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    outline: 0,
    padding: "0px 15px 0px 15px",
    marginRight: "30px",
    border: "1px solid #707070",
    fontSize: "16px",
    borderRadius: "15px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
    flex: 1,
  },
  lbutton: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    outline: 0,
    padding: "0px 15px 0px 15px",

    border: "1px solid #707070",

    borderRadius: "15px",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "20px",
    display: "block",
    margin: "auto",
    marginTop: "30px",
    "&:hover": {
      color: "#fff",
    },
  },
  card: {
    width: "250px",
    height: "280px",
    border: "2px solid #FF9C00",
    borderRadius: "25px",
    backgroundColor: "#fff",
    margin: "15px 15px 15px 0",
  },
  tab: {
    color: "#fff",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section style={{ padding: "50px 0 50px 0" }}>
      <Container>
        <UserDetails />
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
              style={{
                background: "#171717",
                borderRadius: "15px",
                boxShadow: "5px 5px 17px #101010, -5px -5px 17px #1e1e1e",
                marginTop: "40px",
              }}
            >
              <Tab label="DROPS" className={classes.tab} />
              <Tab label="DROPS" className={classes.tab} />
              <Tab label="DROPS" className={classes.tab} />
              <Tab label="DROPS" className={classes.tab} />
              <Tab label="DROPS" className={classes.tab} />
            </Tabs>
          </div>
        </div>

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
            title="Art name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Art name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
        </div>
        <Button className={classes.lbutton}>Load more</Button>
      </Container>
    </section>
  );
};

export default Profile;
