import { Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

import inputImg from "../../images/img-input.png";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "500px",
    backgroundColor: "#171717",
    borderRadius: "15px",
    margin: "40px auto 20px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 0",
    boxShadow: "0px 11px 28px 3px rgb(0 0 0 / 16%)",
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
    minWidth: "140px",
    border: 0,

    borderRadius: "50px",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "14px",
    display: "block",
    margin: "auto",
    marginTop: "30px",
  },
}));
const FormBox = () => {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState(null);
  return (
    <div className={classes.box}>
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        style={{ visibility: "hidden" }}
        onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))}
      />
      <label htmlFor="image">
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
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
            <img src={inputImg} alt="input" style={{ width: "40px" }} />
          )}
        </div>
      </label>
      <p
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "14px",
          width: "300px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        ducimus ad corporis
      </p>
      <div style={{ width: "300px" }}>
        <TextField
          id="standard-basic"
          label="User Name*"
          fullWidth
          className={classes.inputBox}
        />
        <TextField
          id="standard-basic"
          label="Your Bio*"
          fullWidth
          className={classes.inputBox}
        />
        <TextField
          id="standard-basic"
          label="Social Link*"
          fullWidth
          className={classes.inputBox}
        />
        <Button className={classes.button}>update profile</Button>
      </div>
    </div>
  );
};

export default FormBox;
