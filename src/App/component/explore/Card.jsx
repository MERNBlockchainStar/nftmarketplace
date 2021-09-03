import { makeStyles } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "280px",
    height: "400px",
    paddingTop: "30px",
    // border: "2px solid #FF9C00",
    borderRadius: "25px",
    backgroundColor: "#171717",
    margin: "15px 25px 15px 0",
    [theme.breakpoints.down("xs")]: {
      margin: "15px 0px 15px 0",
    },
    boxShadow: "0px 11px 28px 3px rgb(0 0 0 / 16%)",

    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
  },
}));

const Card = ({ img, title, price }) => {
  const classes = useStyles();
  const navigate = useHistory();
  return (
    <div
      className={classes.card}
      onClick={() =>
        navigate.push({ pathname: "/nftdetails", state: { img, title, price } })
      }
    >
      <div
        style={{
          height: "230px",
          width: "230px",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <img
          src={img}
          alt="explore-card"
          width={230}
          style={{ borderRadius: "10px" }}
        />
      </div>

      <div style={{ marginLeft: "30px" }}>
        <h4
          style={{
            fontSize: "22px",
            margin: "10px 0",
            color: "#fff",
          }}
        >
          {title}
        </h4>
        <p style={{ fontSize: "16px", color: "#fff", margin: "10px 0" }}>
          Owned By <b>Tomi Anime</b>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px 0",
          }}
        >
          {/* <p style={{ color: "gray", fontSize: "14px", margin: 0 }}>1.5 TOMI</p> */}
          {/* <p style={{ color: "gray", fontSize: "14px", margin: "0 30px 0 0" }}>
            1 of 1
          </p> */}
           <span
        style={{
          display: "block",
          margin: "5px 0",
          textAlign: "center",
          color: "gray",
          fontSize:"14px"
        }}
      >
        {price.bnb}BNB = {price.dollar}$
      </span>
        </div>
      </div>

     
    </div>
  );
};

export default Card;
