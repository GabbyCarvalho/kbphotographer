import { useParams } from "react-router-dom";
import { posts } from "./posts";

export default function BlogPost() {
  const { slug } = useParams();

    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        return <h2>Post not found</h2>
    }

    const PostComponent = post.component

  return <PostComponent />;
}