import CentralHalogenSpiral from "./CentralHalogenSpiral";
import { eventsData } from "./eventsData";
import EventBlock from "./EventBlock";
import './Events.css';


export default function Events() {
  return (
    <div className="events-page">
      <div className="central-halogen">
        <CentralHalogenSpiral />
      </div>
      <div className="vertical-line">
        {eventsData.map((event, i) => (
          <EventBlock key={i} {...event} reverse={i % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}



