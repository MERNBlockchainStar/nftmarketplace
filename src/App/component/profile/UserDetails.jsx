import React from "react";
import { Avatar, Button } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import { CopyToClipboard } from "react-copy-to-clipboard";

import avater from "../../images/avater.png";

const UserDetails = () => {
  const [copyState, setCopyState] = React.useState(false);

  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        src={avater}
        alt="avater"
        style={{ width: "130px", height: "130px", marginBottom: "8px" }}
      />
      <h4 style={{ fontSize: "24px", color: "#fff", margin: "5px 0 0 0" }}>
        Tomi anime
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
            <FileCopyIcon style={{ color: "#747474", fontSize: "18px" }} />
          </CopyToClipboard>
        </Button>
        {copyState && <span style={{ color: "green" }}>Copied</span>}
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "#fff",
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque
        nisi
      </p>
      <a
        href="https://tomianime.com/"
        style={{
          textDecoration: "none",
          fontSize: "16px",
          color: "#FAB33F",
        }}
      >
        www.social-link.com
      </a>
    </div>
  );
};

export default UserDetails;
