import { Avatar, makeStyles } from "@material-ui/core";
import RouteLink from "../../component/RouteLink";

import avater from "../../images/avater.png";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "330px",
    height: "440px",
    paddingTop: "30px",
    // border: "2px solid #FF9C00",
    borderRadius: "25px",
    backgroundColor: "#171717",
    margin: "15px 25px 15px 0",

    boxShadow: "0px 11px 28px 3px rgb(0 0 0 / 16%)",

    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
  },
}));

const Card = ({ title, img }) => {
  const classes = useStyles();
  return (
    <RouteLink to="/launch">
      <div className={classes.card}>
        <div
          style={{
            height: "275px",
            width: "275px",
            borderRadius: "10px",
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <img
            src={img}
            alt="explore-card"
            width={275}
            style={{ borderRadius: "10px" }}
          />
        </div>

        <h4
          style={{
            fontSize: "22px",
            margin: "48px 0 8px 0",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {title}
        </h4>

        <span
          style={{
            display: "block",
            margin: "5px 0",
            textAlign: "center",
            color: "gray",
          }}
        >
          TOMI - 397
        </span>
        <Avatar
          img={avater}
          alt="avater"
          style={{
            width: "70px",
            height: "70px",
            position: "absolute",
            top: `69%`,
            left: `53%`,
            transform: `translate(-70%, -50%)`,
            border: "1px solid #FF9C00",
          }}
        />
      </div>
    </RouteLink>
  );
};

export default Card;
