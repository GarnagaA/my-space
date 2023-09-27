import classes from "./index.module.scss";
const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
