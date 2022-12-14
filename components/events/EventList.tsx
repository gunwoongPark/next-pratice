import { EventType } from "../../type";
import EventItem from "./EventItem";

const EventList = (props: { items: EventType[] }) => {
  return (
    <ul>
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
