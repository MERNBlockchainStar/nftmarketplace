import React from "react";
import { Button, Container, makeStyles } from "@material-ui/core";

import UserDetails from "../profile/UserDetails";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#171717",
    color: "#fff",

    outline: 0,
    padding: "8px 28px 8px 28px",
    marginTop: "20px",

    fontSize: "14px",
    borderRadius: "8px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
    flex: 1,
    textTransform: "capitalize",
    boxShadow: "5px 5px 17px #101010, -5px -5px 17px #1e1e1e",
  },
  lbutton: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    outline: 0,
    padding: "5px 20px",

    border: "1px solid #707070",
    fontSize: "16px",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",

    display: "block",
    margin: "auto",
    marginTop: "10px",
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

const UserProfile = () => {
  const classes = useStyles();

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
          <Link to="/profileedite" style={{ textDecoration: "none" }}>
            <Button
              className={classes.button}
              endIcon={
                <CreateIcon
                  style={{ fontSize: "16px", marginLeft: "5px", color: "#fff" }}
                />
              }
            >
              Edit profile
            </Button>
          </Link>
          <h3
            style={{
              fontSize: "24px",
              color: "#fff",
              margin: "10px 0",
            }}
          >
            NFTs will appear here
          </h3>

          <p
            style={{ textAlign: "center", fontSize: "14px", color: "#747474" }}
          >
            You can create or buy some NFTs on marketplace
          </p>

          <Button className={classes.lbutton}>Explore marketplace</Button>
        </div>
      </Container>
    </section>
  );
};

export default UserProfile;
