import { HiPencil, HiTrash } from "react-icons/hi2";
import { getUserById } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import { deletePost } from "../_lib/actions";
import EditDeleteButtons from "./EditDeleteButtons";
import ModalButton from "./ModalButton";

async function Post({ data, dashboard = false }) {
  const { postTitle, postDescription, postCreatedBy } = data;
  const [{ fullName, image }, session] = await Promise.all([
    getUserById(postCreatedBy),
    auth(),
  ]);

  return (
    <li className="bg-amber-200 dark:bg-blue-950 flex flex-col px-2 py-2 rounded-2xl border border-amber-300 dark:border-blue-800 transition-[background-color,_border]">
      <h1 className="md:text-xl 2xl:text-2xl font-semibold md:px-2 2xl:px-4">
        {postTitle}
      </h1>
      <span className="2xs:p-1 2xs:text-xs md:text-sm 2xl:text-base leading-5 md:py-2 md:px-4">
        {postDescription}
      </span>
      <div className="flex justify-between md:px-1 md:py-1 2xl:px-2 2xl:py-2 items-center">
        {session.user.userId === postCreatedBy && !dashboard ? (
          <div className="flex items-center 2xs:gap-4 md:gap-6 2xl:gap-8">
            <ModalButton
              className="cursor-pointer hover:text-gray-500 pl-2 transition-[background-color,_box-shadow,_border]"
              userId={session.user.userId}
              text="Edytuj"
              data={data}
              type="posts"
            >
              <HiPencil className="2xs:h-4 2xs:w-4 xs:w-5 xs:h-5 md:h-6 md:w-6 xl:h-8 xl:w-8" />
            </ModalButton>
            <EditDeleteButtons onClick={deletePost} data={data}>
              <HiTrash className="2xs:h-4 2xs:w-4 xs:w-5 xs:h-5 md:h-6 md:w-6 xl:h-8 xl:w-8" />
            </EditDeleteButtons>
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex justify-end 2xs:gap-2 sm:gap-3 md:gap-4 2xl:gap-8 items-center">
          <span
            className="text-gray-500 2xs:text-sm
          "
          >
            {fullName}
          </span>
          <img
            src={image}
            className="rounded-full 2xs:w-6 md:w-8 2xl:w-12 ring-amber-400 dark:ring-blue-800 ring-4 transition-[box-shadow]"
          />
        </div>
      </div>
    </li>
  );
}

export default Post;
