import { useState, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import { AddEventModal } from "../AddEventModal";
import { EditEventModal } from "../EditEventModal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DnDCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

const startEvents = [
  {
    id: 1,
    title: "Test today event",
    start: new Date(),
    end: new Date(),
  },
];

export function CustomCalendar() {
  const [eventsData, setEventsData] = useState(startEvents);
  const [eventObject, setEventsObject] = useState({});
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleSelectSlot = useCallback(
    dateObject => {
      setEventsObject(dateObject);
      setAddModalOpen(true);
    },
    [setEventsData]
  );

  const handleSelectEvent = useCallback(
    dateObject => {
      setEventsObject(dateObject);
      setEditModalOpen(true);
    },
    [setEventsData]
  );

  const moveEvent = useCallback(
    ({ event, start, end, resourceId }) => {
      const { allDay } = event;

      setEventsData(prev => {
        const existing = prev.find(ev => ev.id === event.id) ?? {};
        const filtered = prev.filter(ev => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, resourceId, allDay }];
      });
    },
    [setEventsData]
  );

  return (
    <>
      <DnDCalendar
        localizer={localizer}
        events={eventsData}
        draggableAccessor={event => true}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        onEventDrop={moveEvent}
        selectable
        resizable={false}
      />

      {addModalOpen && (
        <AddEventModal
          isOpen={addModalOpen}
          setModalOpen={setAddModalOpen}
          eventObject={eventObject}
          setEventsData={setEventsData}
        />
      )}
      {editModalOpen && (
        <EditEventModal
          isOpen={editModalOpen}
          setModalOpen={setEditModalOpen}
          eventObject={eventObject}
          setEventsData={setEventsData}
        />
      )}
    </>
  );
}
