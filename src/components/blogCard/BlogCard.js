import React from "react";
import "./BlogCard.css";
import Button from "../button/Button";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <img src={blog.image} alt="blog" className="blog-card-image mask" />
          <div class="blog-card-title">{blog.title}</div>
          <p className="blog-card-subtitle">{blog.description}</p>

          <div>
            <Button text="Read More" href={blog.url} newTab={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
