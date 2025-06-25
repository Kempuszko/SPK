import Header from "./_components/Header";
import LoginButton from "./_components/LoginButton";
import Slider from "./_components/Slider";

export const metadata = {
  title: "SPK",
  description: "Main page of SPK",
};

export default function Home() {
  return (
    <div className="flex flex-col xl:gap-12 2xl:gap-16 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      <Header />
      <main className="flex 2xs:flex-col xl:flex-row xl:justify-center 2xs:gap-2 xs:gap-4 xl:gap-16 2xl:gap-24">
        <div className="2xs:p-4 2xl:px-8 flex flex-col 2xs:gap-2 xs:gap-3 xl:gap-10 2xl:gap-16 items-center 2xl:max-w-[60rem] ">
          <h1 className="2xs:text-[22px] xs:text-2xl 2xs:text-center sm:text-3xl 2xl:text-4xl font-semibold 2xl:leading-16">
            Wszystko w jednym miejscu dla każdego
          </h1>
          <span className="2xs:text-sm xs:text-base sm:text-[1.1rem] 2xs:text-center xl:max-w-[40rem] xl:text-xl 2xl:text-2xl">
            Aplikacja pozwala użytkownikom na udostępnianie dat egzaminów,
            prezentacji, notatek oraz wielu innych ważnych informacji.
            Interaktywny kalendarz pozwala na dodanie konkretnej daty, godziny
            oraz opisu która będzie widoczna dla każdego zalogowanego
            użytkownika. Osoby korzystające z aplikacji mają również możliwość
            dodawania postów.
          </span>
          <LoginButton>Wypróbuj</LoginButton>
        </div>
        <Slider />
      </main>
    </div>
  );
}
