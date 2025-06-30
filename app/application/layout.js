import AppHeader from "@/app/_components/AppHeader";
import AppNav from "../_components/AppNav";
import CustomToast from "../_components/CustomToast";

export const metadata = {
  title: { template: "%s / SPK", default: "App / SPK" },
};

function layout({ children }) {
  return (
    <div className="flex flex-col h-screen ">
      <CustomToast />
      <AppHeader />
      <main className="2xs:flex 2xs:flex-col xl:grid xl:grid-cols-[17rem_auto] h-full">
        <AppNav />
        {children}
      </main>
    </div>
  );
}

export default layout;
