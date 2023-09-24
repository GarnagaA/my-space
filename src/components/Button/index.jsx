import classes from "./index.module.scss";
const Button = ({ children, style, onClick }) => {
  return (
    <button className={classes.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
