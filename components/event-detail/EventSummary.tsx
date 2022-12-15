import classes from "./EventSummary.module.css";

const EventSummary = (props: { title: string }) => {
  return (
    <section className={classes.summary}>
      <h1>{props.title}</h1>
    </section>
  );
};

export default EventSummary;
