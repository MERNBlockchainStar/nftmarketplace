import { Container } from "@material-ui/core";
import nftImage1 from "../../images/group3.png";
import nftImage2 from "../../images/group4.png";
import nftImage3 from "../../images/group5.png";
import Card from "./Card";
import { zeppelinSolidityHotLoaderOptions } from '../../../webpack';
import Web3 from 'web3';
import React, { useEffect,useState } from 'react';
const Token = () => {
  // const classes = useStyles();
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
  const[allPhotos,setAllPhotos]=useState([]);
  const[ownerPhotos,setOwnerPhotos]=useState([]);

const getAllPhotos = async () =>{
        console.log("this is network id",networkId)
        console.log("photonftdata is",photoNFTData)
        const allPhotos = await photoNFTData.methods.getAllPhotos().call()
        console.log('=== allPhotos ===', allPhotos)
        console.log('===selected address===',window.address);
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
                    // console.log('===selected address===',window.address);
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
            console.log('===selected address===',window.address);
            var ownerPhotostemp=[];
            var currentAddress = window.address.toUpperCase();

            for(var id=0;id<allPhotos.length;id++){
                               
                if(allPhotos[id].ownerAddress.toUpperCase()==currentAddress){
                    console.log("this is same")
                    ownerPhotostemp.push(allPhotos[id]);
                }

            }
            setOwnerPhotos(ownerPhotostemp);
           
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
        <h3
          style={{
            fontSize: "26px",
            color: "#fff",
            fontWeight: 400,
            margin: "10px 0",
          }}
        >
         TOKEN CARDS
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
          
      {ownerPhotos.map((photo, index) => (
            <Card
            key={index}
            title={photo.photoNFTName}
            img={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}` }
            price={{ bnb: web3provider.utils.fromWei(photo.photoPrice), dollar: 103 }}
          />
        ))}
        </div>
       
      </Container>
    </section>
  );
};

export default Token;
