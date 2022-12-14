import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventSSearch";

import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const router = useRouter();

  const events = getAllEvents();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
