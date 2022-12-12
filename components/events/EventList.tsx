import { EventType } from "../../type";
import EventItem from "./EventItem";

const EventList = (props: { items: EventType[] }) => {
  return (
    <ul>
      {props.items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
