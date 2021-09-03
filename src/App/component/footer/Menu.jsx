import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: { color: "#fff", display: "block" },
}));

const Menu = ({ title, link }) => {
  const classes = useStyles();
  return (
    <>
      <h4
        style={{
          fontSize: "18px",
          color: "#fff",
          margin: "10px 0",
        }}
      >
        {title}
      </h4>
      {link?.map((v, i) => (
        <Button key={i} className={classes.button}>
          {v.name}
        </Button>
      ))}
    </>
  );
};

export default Menu;
