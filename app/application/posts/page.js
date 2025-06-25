import PostsComponent from "@/app/_components/PostsComponent";
import { auth } from "@/app/_lib/auth";
import { getPosts } from "@/app/_lib/data-service";

export const metadata = {
  title: "Posty",
  description: "Post section of SPK app",
};

async function page() {
  const [posts, session] = await Promise.all([getPosts(), auth()]);

  const filteredPosts = posts.slice().sort((a, b) => b.id - a.id);

  return (
    <>
      <PostsComponent data={filteredPosts} userId={session.user.userId} />
      <div id="modal-root" className="transition-all duration-300"></div>
    </>
  );
}

export default page;
