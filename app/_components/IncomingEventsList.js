import { HiClock, HiPencil } from "react-icons/hi2";
import ModalButton from "./ModalButton";

function IncomingEventsList({ data, userId, tomorrow = false }) {
  const sortedData = data
    ?.slice()
    ?.sort(
      (a, b) =>
        Number(a.eventTime.split(":").join("")) -
        Number(b.eventTime.split(":").join(""))
    );

  return (
    <div className="2xs:h-24 md:h-36 2xl:h-48 border-amber-300 bg-amber-200 dark:bg-blue-950 border dark:border-blue-800 rounded-2xl transition-colors ">
      <ul className="p-3 max-w-11/12 mx-auto overflow-y-auto flex flex-col gap-3 h-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#828892] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#686C6F]">
        {data === null || data.length === 0 ? (
          <h2 className="text-xl font-semibold text-center">
            {`Brak wydarzen na ${tomorrow ? "jutro" : "dzisiaj"}`}
          </h2>
        ) : (
          sortedData.map((e) => (
            <li
              key={`${e.eventDate}/${e.eventTime}`}
              className="flex justify-between px-1 mx-3 items-center border-b border-gray-600 pb-3 last:border-none"
            >
              <span className="2xs:text-xs 2xl:text-base break-all 2xs:pr-3 2xl:pr-10">
                {e.eventDescription}
              </span>
              <div className="flex items-center gap-4">
                {userId === e.eventCreatedBy && (
                  <ModalButton
                    className="cursor-pointer hover:text-gray-500 pl-2"
                    userId={userId}
                    text="Edytuj"
                    data={e}
                    type="calendarEdit"
                  >
                    <HiPencil size="24" />
                  </ModalButton>
                )}
                <HiClock />
                <span>{e.eventTime}</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default IncomingEventsList;
