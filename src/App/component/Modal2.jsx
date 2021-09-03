import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    border: 0,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "30px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 3),
  },
}));

export default function AppModal2({ showModal, setShow }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShow(false);
  };
  useEffect(() => {
    if (showModal) {
      handleOpen();
    }
  });
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 style={{ fontSize: "18px", color: "#333", margin: 0 }}>Order By</h4> 
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio color="primary" />}
          label="Demo"
        />
        <FormControlLabel
          value="male"
          control={<Radio color="primary" />}
          label="Demo"
        />
        <FormControlLabel
          value="other"
          control={<Radio color="primary" />}
          label="Demo"
        />
        <FormControlLabel
          value="disabled"
          control={<Radio color="primary" />}
          label="Demo"
        />
      </RadioGroup>
      <Button
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={handleClose}
      >
        {" "}
        <CancelIcon
          style={{
            fontSize: "45px",
          }}
        />
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ outline: 0 }}
      >
        {body}
      </Modal>
    </div>
  );
}
