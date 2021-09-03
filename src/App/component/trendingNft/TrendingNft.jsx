import { Container } from "@material-ui/core";
import Card from "./Card";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import nftImage1 from "../../images/group3.png";
import nftImage2 from "../../images/group4.png";
import nftImage3 from "../../images/group5.png";

const TrendingNft = () => {
  return (
    <section
      style={{ padding: "25px 0 25px 0", borderTop: "2px solid #2B2B2B" }}
    >
      <Container>
        <h3
          style={{
            margin: "5px",
            fontSize: "24px",
            color: "#fff",
            fontWeight: 400,
            display: "inline-block",
          }}
        >
          Trending NFTs
        </h3>
        <ScrollMenu>
          <Card title="Tomi anime name" img={nftImage1} />
          <Card title="Tomi anime name" img={nftImage2} />
          <Card title="Tomi anime name" img={nftImage3} />
          <Card title="Tomi anime name" img={nftImage1} />
          <Card title="Tomi anime name" img={nftImage2} />
          <Card title="Tomi anime name" img={nftImage3} />
          <Card title="Tomi anime name" img={nftImage2} />
          <Card title="Tomi anime name" img={nftImage3} />
          <Card title="Tomi anime name" img={nftImage1} />
          <Card title="Tomi anime name" img={nftImage3} />
          <Card title="Tomi anime name" img={nftImage3} />
          <Card title="Tomi anime name" img={nftImage1} />
          <Card title="Tomi anime name" img={nftImage2} />
          <Card title="Tomi anime name" img={nftImage3} />
        </ScrollMenu>
      </Container>
    </section>
  );
};

export default TrendingNft;
