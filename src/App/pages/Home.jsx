import Explore from "../component/explore/Explore";
import Footer from "../component/footer/Footer";
import NavBar from "../component/menu/NavBar";
import TopArtist from "../component/toArtist/TopArtist";
import TrendingNft from "../component/trendingNft/TrendingNft";

function Home() {
  return (
    <>
      <TopArtist />
      <TrendingNft />
      <Explore />
      <Footer />
    </>
  );
}

export default Home;
