import classes from "./EventContent.module.css";

type PropType = {
  children: React.ReactNode;
};

const EventContent: React.FC<PropType> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
