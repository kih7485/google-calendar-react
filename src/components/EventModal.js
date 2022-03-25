import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const LABELS_CLASSES = ["indigo", "gray", "green", "blue", "red", "purple"];
function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? LABELS_CLASSES.find((lbl) => lbl === selectedEvent.label)
      : LABELS_CLASSES[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: Date.now(),
    };
    dispatchCalEvent({ type: "push", payload: calendarEvent });
    setShowEventModal(false);
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="제목"
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 mr-3">
                schedule
              </span>
              <p>{daySelected.format("dddd, MMMM DD")}</p>
            </div>
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 mr-3">
                segment
              </span>
              <input
                type="text"
                name="description"
                placeholder="내용"
                required
                className="border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 mr-3">
                bookmark_border
              </span>
              <div className="flex gap-x-2">
                {LABELS_CLASSES.map((lblClass, i) => (
                  <span
                    key={i}
                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                    onClick={() => setSelectedLabel(lblClass)}
                  >
                    {selectedLabel === lblClass && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-bule-600 px-5 py-2 rounded text-white"
            onClick={handleSubmit}
          >
            저장
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
