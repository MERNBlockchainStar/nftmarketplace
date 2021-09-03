import { Avatar, makeStyles } from "@material-ui/core";
import RouteLink from "../RouteLink";

const useStyles = makeStyles((theme) => ({
  card: {
    color: "#fff",
    backgroundColor: "#171717",
    textAlign: "center",
    padding: "10px",
    borderRadius: 15,
    width: "150px",
    position: "relative",
    margin: "20px 10px",
    boxShadow: "0px 11px 28px 3px rgb(0 0 0 / 16%)",
  },
  cardNumber: {
    position: "absolute",
    left: 5,
    top: "6px",
    backgroundColor: "#FAB33F",
    color: "#000",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    fontWeight: "bold",
    fontSize: "14px",
  },
}));

const Card = ({ img, name, amount, count }) => {
  const classes = useStyles();
  return (
    <RouteLink to="/profile">
      <div className={classes.card}>
        <Avatar
          alt="avater"
          src={img}
          style={{ width: "60px", height: "60px", margin: "auto" }}
        />
        <h4
          style={{
            margin: "5px",
            fontSize: "18px",
            marginBottom: "20px",
            fontWeight: 500,
            color: "#fff",
          }}
        >
          {name}
        </h4>
        <h4
          style={{
            margin: "5px",
            fontSize: "17px",
            color: "#fff",
          }}
        >
          {amount} BNB
        </h4>
        <p className={classes.cardNumber}>{count}</p>
      </div>
    </RouteLink>
  );
};

export default Card;
