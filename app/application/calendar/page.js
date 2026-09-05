import CalendarComponent from "@/app/_components/CalendarComponent";
import { getSession } from "@/app/_lib/getSession";
import { getCalendarEvents } from "@/app/_lib/data-service";

export const metadata = {
  title: "Kalendarz",
  description: "calendar section of SPK app",
};

async function page() {
  const [eventDays, session] = await Promise.all([
    getCalendarEvents(),
    getSession(),
  ]);

  return (
    <>
      <CalendarComponent eventDays={eventDays} session={session} />
      <div id="modal-root"></div>
    </>
  );
}

export default page;
