import { Button, Container, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import React, { useEffect } from 'react';
import exploreImg from "../../images/explore.png";
import nftImage1 from "../../images/group3.png";
import nftImage2 from "../../images/group4.png";
import nftImage3 from "../../images/group5.png";
import AppModal2 from "../Modal2";
import Card from "./Card";

///
import { zeppelinSolidityHotLoaderOptions } from '../../../webpack';
// import getWeb3, { getGanacheWeb3, Web3 } from "../../../utils/getWeb3";
import Web3 from 'web3';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    outline: 0,
    padding: "0px 15px 0px 15px",
    margin: "10px 30px 10px 0",

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
    fontSize: "16px",
    borderRadius: "15px",
    fontWeight: 500,
    cursor: "pointer",

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
}));

const Explore = () => {
  
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [storageValue,setStorageValue] = useState(0);
  const [web3js,setWeb3] = useState(null);
  const [valueNFTName,setValueNFTName] = useState('');
  const [valueNFTSymbol,setValueNFTSymbol] = useState('');
  const [valueNFTPrice,setValueNFTPrice]=useState('');
  const [valuePhotoPrice,setValuePhotoPrice] = useState('');
  const [buffer,setBuffer] = useState('');
  const [ipfsHash,setIpfsHash] = useState('');

  ////
  const[ganacheAccounts,setganacheAccounts]=useState();
  const[accounts,setaccounts]=useState();
  const[balance,setbalance]=useState();
  const[networkId,setnetworkId]=useState();
  const[networkType,setnetworkType]=useState();
  const[hotLoaderDisabled,sethotLoaderDisabled]=useState();
  const[photoNFTFactory,setPhotoNFTFactory]=useState();
  const[photoNFTMarketplace,setPhotoNFTMarketplace]=useState();
  const[PHOTO_NFT_MARKETPLACE,setPHOTO_NFT_MARKETPLACE]=useState();
  const[photoNFTData,setPhotoNFTData]=useState();
  const[allPhotos,setAllPhotos]=useState([])

const getAllPhotos = async () =>{
        console.log("this is network id",networkId)
        console.log("photonftdata is",photoNFTData)
        const allPhotos = await photoNFTData.methods.getAllPhotos().call()
        console.log('=== allPhotos ===', allPhotos)

        // this.setState({ allPhotos: allPhotos })
        setAllPhotos(allPhotos);
        return allPhotos
}
const getinfo = () =>{
     console.log("this is network id",photoNFTData)
}
const handleinstance =() =>{
    console.log("this is instance",photoNFTData)
}
const getGanacheAddresses = async () => {
  if (!this.ganacheProvider) {
    this.ganacheProvider = getGanacheWeb3();
  }
  if (this.ganacheProvider) {
    return await this.ganacheProvider.eth.getAccounts();
  }
  return [];
}

 const timeout = (ms) => {
   return new Promise(resolve => setTimeout(resolve, ms));
 }
useEffect(async()=>{
         

          
          const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;
            
          let PhotoNFTMarketplace = {};
          let PhotoNFTData = {};
          try {
            PhotoNFTMarketplace = require("../../../build/contracts/PhotoNFTMarketplace.json");
            PhotoNFTData = require("../../../build/contracts/PhotoNFTData.json");
          } catch (e) {
            console.log(e);
          }

          try {
            const isProd = process.env.NODE_ENV === 'production';
            if (!isProd) {
              // Get network provider and web3 instance.
          
              if (window.ethereum) {
                 window.web3provider = new Web3(window.ethereum);
                try {
                  // Request account access if needed
                  await window.ethereum.enable();
                  // Acccounts now exposed
                } catch (error) {
                }
              }
              // Legacy dapp browsers...
              else if (window.web3) {
                // Use Mist/MetaMask's provider.
                 window.web3provider = window.web3;
                console.log("Injected web3 detected.");
              }
            
              web3provider=window.web3provider;
              // Use web3 to get the user's accounts.
              const accounts = await web3provider.eth.getAccounts();
              const currentAccount = accounts[0];

              // Get the contract instance.
              const networkId = await web3provider.eth.net.getId();
              const networkType = await web3provider.eth.net.getNetworkType();
              const isMetaMask = web3provider.currentProvider.isMetaMask;
              let balance = accounts.length > 0 ? await web3provider.eth.getBalance(accounts[0]): web3provider.utils.toWei('0');
              balance = web3provider.utils.fromWei(balance, 'ether');

              let instancePhotoNFTMarketplace = null;
              let instancePhotoNFTData = null;
              let PHOTO_NFT_MARKETPLACE;
              let deployedNetwork = null;

              // Create instance of contracts
              if (PhotoNFTMarketplace.networks) {
                deployedNetwork = PhotoNFTMarketplace.networks[networkId.toString()];
                if (deployedNetwork) {
                  instancePhotoNFTMarketplace = new web3provider.eth.Contract(
                    PhotoNFTMarketplace.abi,
                    deployedNetwork && deployedNetwork.address,
                  );
                  PHOTO_NFT_MARKETPLACE = deployedNetwork.address;
                  console.log('=== instancePhotoNFTMarketplace ===', instancePhotoNFTMarketplace);
                }
              }

              if (PhotoNFTData.networks) {
                deployedNetwork = PhotoNFTData.networks[networkId.toString()];
                if (deployedNetwork) {
                  instancePhotoNFTData = new web3provider.eth.Contract(
                    PhotoNFTData.abi,
                    deployedNetwork && deployedNetwork.address,
                  );
                  console.log('=== instancePhotoNFTData ===', instancePhotoNFTData);
                }
              }

              if (instancePhotoNFTMarketplace) {
                
                    const allPhotos = await instancePhotoNFTData.methods.getAllPhotos().call();
                      setAllPhotos(allPhotos);
                    console.log("this is all photo",allPhotos);
                  
              }
              else {
              }
            
            }
          } catch (error) {
            console.error(error);
          }

                  
},[])
 useEffect( async () => {


  const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;
     
  let PhotoNFTMarketplace = {};
  let PhotoNFTData = {};
  try {
    PhotoNFTMarketplace = require("../../../build/contracts/PhotoNFTMarketplace.json");
    PhotoNFTData = require("../../../build/contracts/PhotoNFTData.json");
  } catch (e) {
    console.log(e);
  }

  try {
    const isProd = process.env.NODE_ENV === 'production';
    if (!isProd) {
      // Get network provider and web3 instance.
      web3provider = window.web3provider;

     

      // Use web3 to get the user's accounts.
      const accounts = await web3provider.eth.getAccounts();
      const currentAccount = accounts[0];

      // Get the contract instance.
      const networkId = await web3provider.eth.net.getId();
      const networkType = await web3provider.eth.net.getNetworkType();
      const isMetaMask = web3provider.currentProvider.isMetaMask;
      let balance = accounts.length > 0 ? await web3provider.eth.getBalance(accounts[0]): web3provider.utils.toWei('0');
      balance = web3provider.utils.fromWei(balance, 'ether');

      let instancePhotoNFTMarketplace = null;
      let instancePhotoNFTData = null;
      let PHOTO_NFT_MARKETPLACE;
      let deployedNetwork = null;

      // Create instance of contracts
      if (PhotoNFTMarketplace.networks) {
        deployedNetwork = PhotoNFTMarketplace.networks[networkId.toString()];
        if (deployedNetwork) {
          instancePhotoNFTMarketplace = new web3provider.eth.Contract(
            PhotoNFTMarketplace.abi,
            deployedNetwork && deployedNetwork.address,
          );
          PHOTO_NFT_MARKETPLACE = deployedNetwork.address;
          console.log('=== instancePhotoNFTMarketplace ===', instancePhotoNFTMarketplace);
        }
      }

      if (PhotoNFTData.networks) {
        deployedNetwork = PhotoNFTData.networks[networkId.toString()];
        if (deployedNetwork) {
          instancePhotoNFTData = new web3provider.eth.Contract(
            PhotoNFTData.abi,
            deployedNetwork && deployedNetwork.address,
          );
          console.log('=== instancePhotoNFTData ===', instancePhotoNFTData);
        }
      }

      if (instancePhotoNFTMarketplace) {
         
            const allPhotos = await instancePhotoNFTData.methods.getAllPhotos().call();
              setAllPhotos(allPhotos);
            console.log("this is all photo",allPhotos);
           
      }
      else {
      }
    
    }
  } catch (error) {
    console.error(error);
  }

  /////////////////////////////
  
  
},[window.web3provider])

  return (
    <section style={{ padding: "50px 0 50px 0" }}>
      <Container>
        <div
          style={{
            borderBottom: "2px solid #2B2B2B",
            paddingBottom: "15px",
            position: "relative",
          }}
        >
          <h3
            style={{
              display: "inline-block",
              fontSize: "24px",
              color: "#fff",
              margin: "0 30px 0 0",
              lineHeight: 1.8,
              paddingBottom: "10px",
            }}
          >
            Explore
          </h3>
          <div style={{ paddingRight: "60px" }}>
            <ScrollMenu>
              <Button className={classes.button}>Category</Button>
              <Button className={classes.button}>Category</Button>
              <Button className={classes.button}>Category</Button>
              <Button className={classes.button}>Category</Button>
              <Button className={classes.button}>Category</Button>
            </ScrollMenu>
          </div>

          <Button
            style={{
              position: "absolute",
              right: 0,
              top: "46%",
              width: "45px",
              zIndex: 1,
              backgroundColor: "#131313",
            }}
            onClick={handleinstance}
          >
            <img src={exploreImg} alt="explore" style={{ width: "50px" }} />
          </Button>
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
        {allPhotos.map((photo, index) => (
            <Card
            key={index}
            title={photo.photoNFTName}
            img={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}` }
            price={{ bnb: web3provider.utils.fromWei(photo.photoPrice), dollar: 103 }}
          />
        ))}
         
         
        </div>
        <Button className={classes.lbutton}>Load more</Button>
      </Container>
      <AppModal2 setShow={setShow} showModal={show} />
    </section>
  );
};

export default Explore;
