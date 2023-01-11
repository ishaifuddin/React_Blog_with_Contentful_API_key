import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link, useParams } from "react-router-dom";

function BlogDetails() {
  const [singleBlogPosts, setSingleBlogPost] = useState([]);
  const client = createClient({
    space: "wouyhuy9cj6c",
    accessToken: "-ZoL9BlXhLZGsFcwTPNdKDhqYgE0gJSV4jBpLHvdSOs"
  });
  const { id } = useParams();

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSingleBlogPost(entries);
        });
      } catch (error) {
        // console.log('error');
      }
    };
    getEntryById();
  }, []);

  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <Link to={"/"}>
              <h1>Web Dev Blog</h1>
            </Link>

            <section className="post">
              <header className="post-header">
                <img
                  src={singleBlogPosts?.fields?.blogMedia?.fields?.file?.url}
                  title=""
                  alt=""
                  width="578"
                  height="291"
                />
                <h2 className="post-title pt-3">
                  {singleBlogPosts?.fields?.blogTitle}
                </h2>
                <p className="post-meta">
                  By{" "}
                  <a href="https://thecodeangle.com/" className="post-author">
                    {singleBlogPosts?.fields?.blogAuthor}
                  </a>{" "}
                  Date <span>{singleBlogPosts?.fields?.blogDate}</span>
                </p>
              </header>
              <div className="post-description">
                <p>{singleBlogPosts?.fields?.blogContent}</p>
              </div>
            </section>
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

export default BlogDetails;
