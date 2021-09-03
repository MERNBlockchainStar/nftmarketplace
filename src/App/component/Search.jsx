import { InputBase, makeStyles, alpha } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import RouteLink from "./RouteLink";
import ematyBox from "../images/ematy-box.png";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#171717",
    //border: "1px solid #000",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(6),
      width: "100%",
    },
    boxShadow: "5px 5px 17px #101010, -5px -5px 17px #1e1e1e",
  },
  searchIcon: {
    padding: theme.spacing(0, 3),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "13px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(8)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon style={{ fontSize: "28px", color: "#fff" }} />
          </div>
          <InputBase
            placeholder="Search by creators arts and collections"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <RouteLink to="/">
          <CloseOutlinedIcon style={{ color: "#fff", fontSize: "24px" }} />
        </RouteLink>
      </div>
      <div style={{ width: "100%", height: "600px" }}>
        <h2 style={{ color: "#fff", margin: "20px 0 " }}>Search Results for</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "600px",
          }}
        >
          <img src={ematyBox} alt="ematy-box" style={{ width: "80px" }} />
        </div>
      </div>
    </div>
  );
};

export default Search;
