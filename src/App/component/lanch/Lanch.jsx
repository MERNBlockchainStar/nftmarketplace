import React from "react";
import { Container } from "@material-ui/core";
import nftImage1 from "../../images/group3.png";
import nftImage2 from "../../images/group4.png";
import nftImage3 from "../../images/group5.png";
import Card from "./Card";

const Lanch = () => {
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
          NFT Launchpad - AIRT
        </h3>
        <p style={{ color: "#707070", fontSize: "16px", margin: "5px 0" }}>
          INITIAL PRICE:{" "}
          <span style={{ color: "#fff" }}> ${0.05} PER AIRT</span>
        </p>
        <p style={{ color: "#707070", fontSize: "16px", margin: "5px 0" }}>
          YOU WILL RECEIVE: <span style={{ color: "#fff" }}>{0} AIRT</span>
        </p>
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
            price={{ price: 500, tokens: "10,000", supply: "5/5,000" }}
          />
          <Card
            title="Art name"
            img={nftImage2}
            price={{ price: 500, tokens: "10,000", supply: "5/5,000" }}
          />
          <Card
            title="Art name"
            img={nftImage3}
            price={{ price: 500, tokens: "10,000", supply: "5/5,000" }}
          />
          <Card
            title="Art name"
            img={nftImage1}
            price={{ price: 500, tokens: "10,000", supply: "5/5,000" }}
          />
        </div>
        <h3
          style={{
            fontSize: "26px",
            color: "#fff",
            fontWeight: 400,
            margin: "40px 0 20px 0",
          }}
        >
          Distribution rules
        </h3>
        <p style={{ color: "#fff", margin: "10px 0", fontSize: "15px" }}>
          Once you buy an NFT package, your launchpad AIRT balance will increase
          with respect to the AIRT in the package purchased. AIRT will be locked
          and distributed to your address after the launchpad event ends. The
          collectible launchpad NFTs will be distributed after the event as
          well.
          <a
            href="https://tomianime.com/"
            style={{
              textDecoration: "none",
              fontSize: "16px",
              color: "#FF9C00",
            }}
          >
            Read more
          </a>
        </p>
        <p style={{ color: "#707070", margin: "8px 0", fontSize: "10px" }}>
          AIRNFTS reserves the right in its sole discretion to amend or change
          or cancel this announcement at any time and for any reasons without
          prior notice.
        </p>
      </Container>
    </section>
  );
};

export default Lanch;
