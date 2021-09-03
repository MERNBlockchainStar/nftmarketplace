import Details from "../component/details/Details";
import Footer from "../component/footer/Footer";
import NavBar from "../component/menu/NavBar";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";

function NftDetails() {
  const { img, title, price } = useParams();
  return (
    <>
      <Details img={img} title={title} price={price} />
      <Footer />
    </>
  );
}

export default NftDetails;
