import {
  Button,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState, useEffect } from 'react';

import inputImg from "../../images/img-input.png";
import ipfs from '../../../utils/ipfsApi.js'
import { zeppelinSolidityHotLoaderOptions } from '../../../webpack';
import getWeb3, { getGanacheWeb3, Web3 } from "../../../utils/getWeb3";
const useStyles = makeStyles((theme) => ({
  box: {
    width: "500px",
    backgroundColor: "#171717",
    borderRadius: "15px",
    margin: "40px auto 20px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 0",
    boxShadow: "5px 5px 7px #101010, -5px -5px 7px #1e1e1e",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  inputBox: {
    margin: "10px 0",
    color: "gray",
  },
  button: {
    backgroundColor: "#FF9C00",
    color: "#fff",
    outline: 0,
    padding: "5px 20px",
    minWidth: "200px",
    border: 0,

    borderRadius: "50px",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "16px",
    display: "block",
    margin: "30px auto",
  },
}));
const Create = (props) => {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState(null);
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
  const handleNFTName=event=> {
       setValueNFTName(event.target.value);
       console.log(valueNFTName)
    }

   const handleNFTSymbol = event=> {
        setValueNFTSymbol(event.target.value);
    }

    const handlePhotoPrice = event => {
        setValuePhotoPrice(event.target.value);
    }

    const handleNFTPrice = event =>{
       setValuePhotoPrice(event.target.value);
    }

   const captureFile = event => {
          event.preventDefault()
          console.log(window.name);
          setImageUrl(URL.createObjectURL(event.target.files[0]))
          const file = event.target.files[0]
          
          const reader = new window.FileReader()
          reader.readAsArrayBuffer(file)  // Read bufffered file

          // Callback
          reader.onloadend = () => {
            // this.setState({ buffer: Buffer(reader.result) })
            setBuffer(Buffer(reader.result));
           
            
          }
   }
   const getWebProviderInstance = async () =>{
          let PhotoNFTFactory = {};
          let PhotoNFTMarketplace = {};
          try {
            PhotoNFTFactory = require("../../../build/contracts/PhotoNFTFactory.json"); // Load ABI of contract of PhotoNFTFactory
            PhotoNFTMarketplace = require("../../../build/contracts/PhotoNFTMarketplace.json");
          } catch (e) {
            console.log(e);
          }
         web3provider = window.web3provider;
        //  Use web3 to get the user's accounts.
        const accounts = await web3provider.eth.getAccounts();
        // Get the contract instance.
        const networkId = await web3provider.eth.net.getId();
        const networkType = await web3provider.eth.net.getNetworkType();
        const isMetaMask = web3provider.currentProvider.isMetaMask;
        let balance = accounts.length > 0 ? await web3provider.eth.getBalance(accounts[0]): web3provider.utils.toWei('0');
        balance = web3provider.utils.fromWei(balance, 'ether');

        let instancePhotoNFTFactory = null;
        let instancePhotoNFTMarketplace = null;
        let PHOTO_NFT_MARKETPLACE;
        let deployedNetwork = null;
        console.log(accounts,networkId)
        // Create instance of contracts
        if (PhotoNFTFactory.networks) {
          deployedNetwork = PhotoNFTFactory.networks[networkId.toString()];
          if (deployedNetwork) {
            instancePhotoNFTFactory = new web3provider.eth.Contract(
              PhotoNFTFactory.abi,
              deployedNetwork && deployedNetwork.address,
            );
            console.log('=== instancePhotoNFTFactory ===', instancePhotoNFTFactory);
          }
        }

        if (PhotoNFTMarketplace.networks) {
          deployedNetwork = PhotoNFTMarketplace.networks[networkId.toString()];
          if (deployedNetwork) {
            instancePhotoNFTMarketplace = new web3provider.eth.Contract(
              PhotoNFTMarketplace.abi,
              deployedNetwork && deployedNetwork.address,
            );
            PHOTO_NFT_MARKETPLACE = deployedNetwork.address;
            console.log('=== instancePhotoNFTMarketplace ===', instancePhotoNFTMarketplace);
            console.log('=== PHOTO_NFT_MARKETPLACE ===', PHOTO_NFT_MARKETPLACE);
          }
        }

        if (instancePhotoNFTFactory) {
            // Set web3provider, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            setWeb3(web3provider);
            setganacheAccounts(ganacheAccounts);
            setaccounts(accounts);
            setbalance(balance);
            setnetworkId(networkId);
            setnetworkType(networkType);
            sethotLoaderDisabled(hotLoaderDisabled);
            setPhotoNFTFactory(instancePhotoNFTFactory);
            setPhotoNFTMarketplace(instancePhotoNFTMarketplace);
            setPHOTO_NFT_MARKETPLACE(PHOTO_NFT_MARKETPLACE);
            console.log("this is instance nft factory")
           
        }
        else {
          // this.setState({ web3, ganacheAccounts, accounts, balance, networkId, networkType, hotLoaderDisabled, isMetaMask });
        }
      }
   
   const handleSubmit = async(event) => {
    event.preventDefault()
    console.log(buffer)
        let PhotoNFTFactory = {};
        let PhotoNFTMarketplace = {};
        try {
          PhotoNFTFactory = require("../../../build/contracts/PhotoNFTFactory.json"); // Load ABI of contract of PhotoNFTFactory
          PhotoNFTMarketplace = require("../../../build/contracts/PhotoNFTMarketplace.json");
        } catch (e) {
          console.log(e);
        }
      web3provider = window.web3provider;
      //  Use web3 to get the user's accounts.
      const accounts = await web3provider.eth.getAccounts();
      // Get the contract instance.
      const networkId = await web3provider.eth.net.getId();
      const networkType = await web3provider.eth.net.getNetworkType();
      const isMetaMask = web3provider.currentProvider.isMetaMask;
      let balance = accounts.length > 0 ? await web3provider.eth.getBalance(accounts[0]): web3provider.utils.toWei('0');
      balance = web3provider.utils.fromWei(balance, 'ether');
      console.log("this is information",accounts, networkId,balance)
      let instancePhotoNFTFactory = null;
      let instancePhotoNFTMarketplace = null;
      let PHOTO_NFT_MARKETPLACE;
      let deployedNetwork = null;
      console.log(accounts,networkId)
      // Create instance of contracts
      if (PhotoNFTFactory.networks) {
        deployedNetwork = PhotoNFTFactory.networks[networkId.toString()];
        if (deployedNetwork) {
          instancePhotoNFTFactory = new web3provider.eth.Contract(
            PhotoNFTFactory.abi,
            deployedNetwork && deployedNetwork.address,
          );
          console.log('=== instancePhotoNFTFactory ===', instancePhotoNFTFactory);
        }
      }

      if (PhotoNFTMarketplace.networks) {
        deployedNetwork = PhotoNFTMarketplace.networks[networkId.toString()];
        if (deployedNetwork) {
          instancePhotoNFTMarketplace = new web3provider.eth.Contract(
            PhotoNFTMarketplace.abi,
            deployedNetwork && deployedNetwork.address,
          );
          PHOTO_NFT_MARKETPLACE = deployedNetwork.address;
          console.log('=== instancePhotoNFTMarketplace ===', instancePhotoNFTMarketplace);
          console.log('=== PHOTO_NFT_MARKETPLACE ===', PHOTO_NFT_MARKETPLACE);
        }
      }

      // if (instancePhotoNFTFactory) {
      //     // Set web3provider, accounts, and contract to the state, and then proceed with an
      //     // example of interacting with the contract's methods.
      //     setWeb3(web3provider);
      //     setganacheAccounts(ganacheAccounts);
      //     setaccounts(accounts);
      //     setbalance(balance);
      //     setnetworkId(networkId);
      //     setnetworkType(networkType);
      //     sethotLoaderDisabled(hotLoaderDisabled);
      //     setPhotoNFTFactory(instancePhotoNFTFactory);
      //     setPhotoNFTMarketplace(instancePhotoNFTMarketplace);
      //     setPHOTO_NFT_MARKETPLACE(PHOTO_NFT_MARKETPLACE);
      //     console.log("this is instance nft factory")
        
      // }
      // else {
      //   // this.setState({ web3, ganacheAccounts, accounts, balance, networkId, networkType, hotLoaderDisabled, isMetaMask });
      // }
    
     alert("please wait a moment")
    ipfs.files.add(buffer, (error, result) => {
      // In case of fail to upload to IPFS
      if (error) {
        console.log("there is error")
        console.error(error)
        return
      }
      alert("Success photo upload");
      console.log(result[0].hash)
      // In case of successful to upload to IPFS
      setIpfsHash(result[0].hash);
      console.log('=== ipfsHash ===', result[0].hash);
      
      const nftName = valueNFTName;
      const nftSymbol = "NFT-MARKETPLACE";  /// [Note]: All NFT's symbol are common symbol
      //const nftSymbol = valueNFTSymbol;
      const _photoPrice = valuePhotoPrice;
      console.log('=== nftName ===', nftName);
      console.log('=== nftSymbol ===', nftSymbol);
      console.log('=== _photoPrice ===', _photoPrice);
      setValueNFTName('');
      setValueNFTSymbol('');
      setValueNFTPrice('');
    
      
      let PHOTO_NFT;  /// [Note]: This is a photoNFT address created
      let web3provider = window.web3provider;
      const photoPrice = web3provider.utils.toWei(_photoPrice, 'ether');
      const ipfsHashOfPhoto = result[0].hash;
      console.log("ipfs",ipfsHashOfPhoto)
      instancePhotoNFTFactory.methods.createNewPhotoNFT(nftName, nftSymbol, photoPrice, ipfsHashOfPhoto).send({ from: accounts[0] })
      .once('receipt', (receipt) => {
        console.log('=== receipt ===', receipt);

        const PHOTO_NFT = receipt.events.PhotoNFTCreated.returnValues.photoNFT;
        console.log('=== PHOTO_NFT ===', PHOTO_NFT);

        /// Get instance by using created photoNFT address
        let PhotoNFT = {};
        PhotoNFT = require("../../../build/contracts/PhotoNFT.json"); 
        let photoNFT = new web3provider.eth.Contract(PhotoNFT.abi, PHOTO_NFT);
        console.log('=== photoNFT ===', photoNFT);
 
        /// Check owner of photoId==1
        const photoId = 1;  /// [Note]: PhotoID is always 1. Because each photoNFT is unique.
        photoNFT.methods.ownerOf(photoId).call().then(owner => console.log('=== owner of photoId 1 ===', owner));
        
        /// [Note]: Promise (nested-structure) is needed for executing those methods below (Or, rewrite by async/await)
        photoNFT.methods.approve(PHOTO_NFT_MARKETPLACE, photoId).send({ from: accounts[0] }).once('receipt', (receipt) => {
            console.log("this is approve")
            /// Put on sale (by a seller who is also called as owner)
            instancePhotoNFTMarketplace.methods.openTradeWhenCreateNewPhotoNFT(PHOTO_NFT, photoId, photoPrice).send({ from: accounts[0] }).once('receipt', (receipt) => {})
              console.log("this is trade")
          })
      })
    })
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
   useEffect( async () => {
    
    const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;
     
    let PhotoNFTFactory = {};
    let PhotoNFTMarketplace = {};
    try {
      PhotoNFTFactory = require("../../../build/contracts/PhotoNFTFactory.json"); // Load ABI of contract of PhotoNFTFactory
      PhotoNFTMarketplace = require("../../../build/contracts/PhotoNFTMarketplace.json");
    } catch (e) {
      console.log(e);
    }

  
  })
  return (
    <div className={classes.box}>
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        style={{ visibility: "hidden" }}
        onChange={captureFile}
        required={true}
      />
      <label for="image">
        <div
          style={{
            width: "300px",
            height: "220px",
            borderRadius: "15px",
            border: "2px solid #878787",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="input" style={{ width: "100%" }} />
          ) : (
            <>
              <span
                style={{
                  color: "#FF9C00",
                  fontSize: "18px",
                  margin: "0 10px 0 0 ",
                }}
              >
                Choose File
              </span>
              <img src={inputImg} alt="input" style={{ width: "40px" }} />
            </>
          )}
        </div>
      </label>

      <div style={{ width: "300px", marginTop: "30px" }}>
        <TextField
          id="standard-basic"
          label="NFT Name"
          fullWidth
          className={classes.inputBox}
          onChange={handleNFTName}
        />
        <TextField
          id="standard-basic"
          label="NFT Description"
          fullWidth
          multiline
          rows={4}
          className={classes.inputBox}
          onChange={handleNFTSymbol}
        />
        <TextField
          id="standard-basic"
          label="NFT Price"
          fullWidth
          className={classes.inputBox}
          onChange={handleNFTPrice}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" style={{ color: "#fff" }}>
                BNB
              </InputAdornment>
            ),
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <p style={{ fontSize: "14px", color: "gray", margin: 0 }}>
            Service Fee
          </p>
          <p style={{ fontSize: "14px", color: "gray", margin: 0 }}>2.5%</p>
        </div>
        <p style={{ fontSize: "14px", color: "gray", margin: 0 }}>
          You will receive
        </p>
        <Button className={classes.button} onClick={handleSubmit}>Approve</Button>
      </div>
    </div>
  );
};

export default Create;
