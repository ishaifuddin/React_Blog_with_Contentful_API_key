import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

function BlogList() {
  const [blogPosts, setBlogPost] = useState([]);
  const client = createClient({
    space: "wouyhuy9cj6c",
    accessToken: "-ZoL9BlXhLZGsFcwTPNdKDhqYgE0gJSV4jBpLHvdSOs"
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setBlogPost(entries);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, []);

  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <Link to={"/"}>
              <h1>Web Dev Blog</h1>
            </Link>

            {blogPosts?.items?.map((post) => (
              <section className="post" key={post.sys.id}>
                <header className="post-header">
                  <img
                    src={post.fields.blogMedia.fields.file.url}
                    title=""
                    alt={post.fields.blogTitle}
                    width="578"
                    height="291"
                  />
                  <h2 className="post-title pt-3">{post.fields.blogTitle}</h2>
                  <p className="post-meta">
                    By{" "}
                    <a href="https://thecodeangle.com/" className="post-author">
                      {post.fields.blogAuthor}
                    </a>{" "}
                    Date <span>{post.fields.blogDate}</span>
                  </p>
                </header>
                <div className="post-description">
                  <p>{post.fields.blogSummary}</p>
                  <Link to={`/blogDetails/${post.sys.id}`}>Read More</Link>
                </div>
              </section>
            ))}
          </div>

          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a
                  href="http://twitter.com/thecodeangle"
                  className="pure-menu-link"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
