import PostsComponent from "@/app/_components/PostsComponent";
import { getSession } from "@/app/_lib/getSession";
import { getPosts } from "@/app/_lib/data-service";

export const metadata = {
  title: "Posty",
  description: "Post section of SPK app",
};

async function page() {
  const [posts, session] = await Promise.all([getPosts(), getSession()]);

  const filteredPosts = posts.slice().sort((a, b) => b.id - a.id);

  return (
    <>
      <PostsComponent data={filteredPosts} userId={session.user.userId} />
      <div id="modal-root"></div>
    </>
  );
}

export default page;
