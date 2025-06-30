import CalendarComponent from "@/app/_components/CalendarComponent";
import { auth } from "@/app/_lib/auth";
import { getCalendarEvents } from "@/app/_lib/data-service";

export const metadata = {
  title: "Kalendarz",
  description: "calendar section of SPK app",
};

async function page() {
  const [eventDays, session] = await Promise.all([getCalendarEvents(), auth()]);

  return (
    <>
      <CalendarComponent eventDays={eventDays} session={session} />
      <div id="modal-root"></div>
    </>
  );
}

export default page;
