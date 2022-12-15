/* eslint-disable @next/next/no-img-element */
import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import LogisticsItem from "./LogisticsItem";
import classes from "./EventLogistics.module.css";

const EventLogistics = (props: {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}) => {
  const humanReadableDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = props.address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${props.image}`} alt={props.imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
