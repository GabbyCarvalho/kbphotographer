import { useState } from "react";
import { Link } from "react-router-dom";
import { postsPT } from "./postsPT";
import "../../styles/blog.css";

export default function BlogPT() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    "todos",
    "casais",
    "familia",
    "maternidade",
    "retratos",
    "branding",
    "esportes",
    "outras"
  ];

  const filteredPosts =
    selectedCategory === "todos"
      ? postsPT
      : postsPT.filter(post => post.categoryFolder === selectedCategory);

      console.log("postsPT:", postsPT);

  return (
    
    <div className="blog-wrapper">

      {/* CATEGORIAS */}
      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="blog-container">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/pt/blog/${post.slug}`} // 🔥 IMPORTANTE
            className="blog-link"
          >
            <div className="blog-card">

              <div className="imageBlog-wrapper">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="card-content">
                <h2>{post.title}</h2>
                <h3 className="category">{post.category}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <span className="read-more">Continuar lendo</span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>

  );
}
