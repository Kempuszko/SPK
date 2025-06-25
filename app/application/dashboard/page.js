import IncomingEventsList from "@/app/_components/IncomingEventsList";
import Post from "@/app/_components/Post";
import { auth } from "@/app/_lib/auth";
import { getLatestPost, getTodayEvents } from "@/app/_lib/data-service";

export const metadata = {
  title: "Strona glowna",
  description: "dashboard of SPK app",
};

async function page() {
  const today = new Date(new Date().setHours(0, 0, 0, 0)).toString();
  const tomorrow = new Date(new Date().setHours(24, 0, 0, 0)).toString();

  const [incomingEvents, latestPost, session] = await Promise.all([
    getTodayEvents(today, tomorrow),
    getLatestPost(),
    auth(),
  ]);

  return (
    <div className="flex flex-col 2xs:gap-2 md:gap-6 xl:gap-10 2xl:gap-12 2xs:p-1 md:p-3 xl:py-4 xl:px-8 2xs:w-screen xl:w-fit">
      <h1 className="font-semibold tracking-wide 2xs:text-center xl:text-start 2xs:text-xl md:text-2xl 2xl:text-3xl">
        Witaj {session.user.name}
      </h1>
      <div>
        <h2 className="2xs:text-base md:text-xl 2xl:text-2xl 2xs:text-center xl:text-start 2xs:mb-2 xl:mb-6 font-medium">
          Ostatni post
        </h2>
        <Post data={latestPost.at(0)} dashboard={true} />
      </div>
      <div>
        <h2 className="2xs:text-base md:text-xl 2xl:text-2xl 2xs:text-center xl:text-start 2xs:mb-2 2xl:mb-6 font-medium">
          Nadchodzace wydarzenia
        </h2>
        <div className="grid sm:grid-cols-2 2xs:gap-2 2xl:gap-4">
          <h3 className="2xs:text-sm md:text-base 2xl:text-xl text-center">
            Dzisiaj
          </h3>
          <IncomingEventsList
            data={incomingEvents.filter((e) => e.eventDate === today)}
          />
          <h3 className="2xs:text-sm md:text-base 2xl:text-xl text-center sm:row-start-1 sm:col-start-2">
            Jutro
          </h3>
          <IncomingEventsList
            data={incomingEvents.filter((e) => e.eventDate === tomorrow)}
            tomorrow={true}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
