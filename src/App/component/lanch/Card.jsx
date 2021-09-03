import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "275px",
    height: "530px",
    border: "2px solid #FF9C00",
    borderRadius: "25px",
    backgroundColor: "#fff",
    margin: "15px 25px 15px 0",
    boxShadow: "5px 5px 17px #101010, -5px -5px 17px #1e1e1e",
  },
  button: {
    backgroundColor: "#FF9C00",
    color: "#fff",
    outline: 0,
    padding: "5px 15px",
    minWidth: "140px",
    border: 0,

    borderRadius: "50px",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "20px",
    display: "block",
    margin: "auto",
    marginTop: "30px",
    "&:hover": {
      color: "#000",
    },
  },
}));

const Card = ({ title, price, img }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div
        style={{
          height: "280px",
          width: "275px",
          maxWidth: "100%",
          position: "relative",
        }}
      >
        <div style={{ paddingBottom: (280 / 275) * 100 + "%" }}>
          <img
            src={img}
            alt="explore-card"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "25px",
            }}
          />
        </div>
      </div>

      <h4 style={{ fontSize: "22px", margin: "8px 0 8px 20px" }}>{title}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 20px 20px 20px",
        }}
      >
        <p
          style={{
            color: "#5D5D5D",
            fontSize: "16px",
            margin: 0,
          }}
        >
          Package Price
        </p>
        <p
          style={{
            color: "#131313",
            fontSize: "16px",
            margin: 0,
          }}
        >
          {" "}
          {price.price} USD
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 20px 10px 20px",
        }}
      >
        <p
          style={{
            color: "#5D5D5D",
            fontSize: "16px",
            margin: 0,
          }}
        >
          Tokens In Package
        </p>
        <p
          style={{
            color: "#131313",
            fontSize: "16px",
            margin: 0,
          }}
        >
          {" "}
          {price.tokens} AIRT
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 20px 10px 20px",
        }}
      >
        <p
          style={{
            color: "#5D5D5D",
            fontSize: "16px",
            margin: 0,
          }}
        >
          Package Supply
        </p>
        <p
          style={{
            color: "#131313",
            fontSize: "16px",
            margin: 0,
          }}
        >
          {price.supply}
        </p>
      </div>
      <Button className={classes.button}>Buy</Button>
    </div>
  );
};

export default Card;
