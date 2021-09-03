import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import avater from "../images/avater2.png";
import { Avatar, Button } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CancelIcon from "@material-ui/icons/Cancel";
import RouteLink from "./RouteLink";

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
    width: 450,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    border: 0,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "30px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 4, 3),
  },
}));

export default function AppModal({ showModal, setShow }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [copyState, setCopyState] = React.useState(false);

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
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ borderBottom: "1px solid #707070", marginBottom: "20px" }}>
        <div style={{ display: "flex", margin: "20px 0" }}>
          <Avatar
            src={avater}
            alt="avater"
            style={{ width: "80px", height: "80px", marginRight: "10px" }}
          />

          <div>
            <h4 style={{ margin: "15px 0 10px 0", fontSize: "16px" }}>
              USER NAME
            </h4>
            <p
              style={{
                fontSize: "15px",
                color: "#747474",
                margin: 0,
              }}
            >
              www.profilelink.com{""}
              <Button style={{ minWidth: "32px" }}>
                <CopyToClipboard
                  text="www.profilelink.com"
                  onCopy={() => setCopyState(true)}
                >
                  <FileCopyIcon
                    style={{ color: "#747474", fontSize: "18px" }}
                  />
                </CopyToClipboard>
              </Button>
              {copyState && <span style={{ color: "green" }}>Copied</span>}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", margin: "20px 0" }}>
          <Avatar
            src={avater}
            alt="avater"
            style={{ width: "80px", height: "80px", marginRight: "10px" }}
          />

          <div>
            <h4 style={{ margin: "15px 0 10px 0", fontSize: "16px" }}>
              0.00BNB
            </h4>
            <p
              style={{
                fontSize: "15px",
                color: "#747474",
                margin: 0,
              }}
            >
              0.00$
            </p>
          </div>
        </div>
        <div style={{ display: "flex", margin: "20px 0" }}>
          <Avatar
            src={avater}
            alt="avater"
            style={{ width: "80px", height: "80px", marginRight: "10px" }}
          />

          <div>
            <h4 style={{ margin: "15px 0 10px 0", fontSize: "16px" }}>
              0.00BNB
            </h4>
            <p
              style={{
                fontSize: "15px",
                color: "#747474",
                margin: 0,
              }}
            >
              0.00$
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <RouteLink to="userprofile">
          <Button style={{ fontSize: "18px", textTransform: "capitalize" }}>
            Edit Profile
          </Button>
        </RouteLink>
        <Button style={{ fontSize: "18px" }}>Link here</Button>
        <Button style={{ fontSize: "18px" }}>Link here</Button>
        <Button
          style={{ fontSize: "22px", fontWeight: "bold", marginTop: "20px" }}
          endIcon={<ExitToAppOutlinedIcon style={{ fontSize: "28px" }} />}
        >
          Log out
        </Button>
      </div>
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
