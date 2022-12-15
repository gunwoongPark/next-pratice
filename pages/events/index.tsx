import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventSSearch";

import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
