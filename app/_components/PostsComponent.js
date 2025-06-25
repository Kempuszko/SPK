import ModalButton from "./ModalButton";
import Post from "./Post";

function PostsComponent({ data, userId }) {
  return (
    <div className="flex flex-col 2xl:gap-8 xl:gap-6 2xs:gap-4 py-4 xl:px-12 2xl:px-16 2xs:items-center">
      <ModalButton type="posts" userId={userId}>
        Dodaj
      </ModalButton>
      <div className="self-center overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#828892] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#686C6F]">
        <ul className="flex flex-col 2xl:gap-6 2xl:py-4 2xl:px-8 2xs:p-1 2xs:gap-2 md:gap-3 md:p-3">
          {data.map((p) => (
            <Post data={p} key={p.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostsComponent;
