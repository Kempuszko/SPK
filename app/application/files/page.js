import Button from "@/app/_components/Button";
import UploadForm from "@/app/_components/uploadForm";
import { downloadBucketItem, uploadBucketItem } from "@/app/_lib/actions";
import { getBucketItems } from "@/app/_lib/data-service";

import { HiArrowDownOnSquare } from "react-icons/hi2";

export const metadata = {
  title: "Pliki",
  description: "files section of SPK app",
};

async function page() {
  const items = await getBucketItems();

  return (
    <div className="flex flex-col xl:gap-16 xl:px-12 xl:py-4">
      <UploadForm onClick={uploadBucketItem} />
      <ul className="grid sm:grid-cols-2 2xl:grid-cols-3 xl:gap-x-4 overflow-y-auto max-h-[60vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#828892] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#686C6F]">
        {items.map((i) => (
          <li
            key={i.id}
            className=" flex justify-between 2xs:px-1 2xs:mx-2 2xs:py-2 xl:px-4 xl:py-3 border-b-gray-200 border-b dark:border-b-gray-700 transition-all duration-200 2xs:last:border-none sm:[&:nth-last-child(-n+2)]:border-none 2xl:[&:nth-last-child(-n+3)]:border-none"
          >
            <div className="text-xs break-all">{i.name}</div>
            <Button
              type="download"
              onClick={downloadBucketItem}
              fileName={i.name}
            >
              <HiArrowDownOnSquare />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
