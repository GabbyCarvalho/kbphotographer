import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { posts } from "./posts";
import "../styles/blog.css";

export default function BlogPost() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h2 className="postNotFound">Post not found</h2>;
  }

  const PostComponent = post.component;

  const siteUrl = "https://kbphotographer.com";

  return (
    <>
      <Helmet>
        {/* Básico SEO */}
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`${siteUrl}/blog/${post.slug}`}
        />
        <meta
          property="og:image"
          content={`${siteUrl}${post.image}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content={`${siteUrl}${post.image}`}
        />
      </Helmet>

      <PostComponent />
    </>
  );
}