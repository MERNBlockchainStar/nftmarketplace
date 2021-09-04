import { Avatar, Button, Container, Grid, makeStyles } from "@material-ui/core";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useState, useEffect, useMemo } from 'react'
import avaterimg from "../../images/avater.png";
import hedingimg from "../../images/heading.png";
import RouteLink from "../RouteLink";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  bCard: {
    color: "#fff",
    backgroundColor: "#171717",
    textAlign: "center",
    padding: "10px",
    borderRadius: 15,
    boxShadow: "0px 11px 28px 3px rgb(0 0 0 / 16%)",
    [theme.breakpoints.down("md")]: {
      margin: "20px",
    },
  },
  heading: {
    // display: "flex",
    width: "100%",
    borderBottom: "2px solid #2B2B2B",
  },
  card: {
    color: "#fff",
    backgroundColor: "#171717",
    textAlign: "center",
    padding: "10px",
    borderRadius: 15,
    width: "150px",
    position: "relative",
    margin: "30px 20px",
  },
  cardNumber: {
    position: "absolute",
    left: 5,
    top: -10,
    backgroundColor: "#FAB33F",
    color: "#000",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    fontWeight: "bold",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    outline: 0,
    padding: "0px 15px 0px 15px",
    marginRight: "15px",
    border: "1px solid #707070",
    fontSize: "16px",
    borderRadius: "15px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
    marginBottom: "20px",
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  container: {
    marginRight: "30px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },
  },
}));

const TopArtist = () => {
  const classes = useStyles();
  const[allphotos, setAllphotos] = useState([]);
  const getAllPhotos = async () => {
    var photoNFTData = require('../../../build/contracts/PhotoNFTData.json')
    var web3provider = window.web3provider;console.log(web3provider);
    const networkId = await web3provider.eth.net.getId();
    const deployedNetwork = photoNFTData.networks[networkId.toString()];
    var instancePhotoNFTData = new web3provider.eth.Contract(photoNFTData.abi,deployedNetwork&&deployedNetwork.address )
    const allPhotos = await instancePhotoNFTData.methods.getAllPhotos().call()
    console.log('=== allPhotos ===', allPhotos)

    return allPhotos
  }

  useEffect(async () =>{
    var allphotos = await getAllPhotos();
    console.log(allphotos)
    setAllphotos(allphotos)
  },[])
  return (
    <section style={{ padding: "50px 0 50px 0" }}>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item md={9}>
            <div className={classes.container}>
              <div className={classes.heading}>
                <h3
                  style={{
                    margin: "5px",
                    fontSize: "24px",
                    color: "#fff",
                    fontWeight: 400,
                    display: "inline-block",
                  }}
                >
                  Top Tomi anime
                </h3>
                <img
                  alt="images"
                  src={hedingimg}
                  style={{
                    width: "25px",
                    height: "20px",
                    display: "inline-block",
                    marginLeft: "5px",
                  }}
                />
              </div>

              <div>
                <ScrollMenu>
                {allphotos.map((photo, index) => (
                      <Card
                        amount={web3provider.utils.fromWei(photo.photoPrice)}
                        name = {photo.photoNFTName?photo.photoNFTName:"Token name"}
                        img={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}` }
                    />
                  ))}
                </ScrollMenu>
              </div>
              <div>
                <div
                  style={{
                    paddingTop: "30px",
                  }}
                >
                  <ScrollMenu style={{ paddingBottom: "20px" }}>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                    <Button className={classes.button}>Category</Button>
                  </ScrollMenu>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <RouteLink to="/profile">
              <div className={classes.bCard}>
                <h4
                  style={{
                    margin: "10px",
                    fontSize: "18px",
                    marginBottom: "20px",
                    color: "#fff",
                  }}
                >
                  Tomi anime of the month
                </h4>
                <Avatar
                  alt="avater"
                  src={avaterimg}
                  style={{ width: "90px", height: "90px", margin: "auto" }}
                />
                <h5
                  style={{
                    margin: "5px",
                    color: "#ccc",
                    fontSize: "18px",
                    fontWeight: 400,
                  }}
                >
                  Name Here
                </h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis veritatis possimus quasi repellendus quis magnam
                  explicabo non, labore, et beatae dolorem voluptate porro quo.
                </p>
                <h3 style={{ margin: "10px", fontSize: "18px", color: "#fff" }}>
                  Monthly Volume: ${100}
                </h3>
              </div>
            </RouteLink>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TopArtist;
