import { EventType } from "../../type";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props: { items: EventType[] }) => {
  return (
    <ul className={classes.list}>
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
