import classes from "./LogisticsItem.module.css";

type PropType = {
  children: React.ReactNode;
  icon: any;
};

const LogisticsItem: React.FC<PropType> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
