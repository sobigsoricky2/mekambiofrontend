import Image from "next/image";
import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import { useParams } from "react-router-dom";
import { getImage, ContentfulClient } from "./utils";
import { useRouter } from "next/router";
const singleBlog = (props) => {
  const router = useRouter();
  const { pid } = router.query;

  const [blog, setBlog] = useState({});
  useEffect(() => {
    ContentfulClient.getEntries()
      .then((response) => {
        const currentBlog = response.items.filter(
          (item) => item.fields.title === pid
        );
        console.log(currentBlog);
        setBlog(currentBlog[0].fields);
      })
      .catch((err) => console.error(err));
  }, [pid]);

  console.log(blog);
  return (
    <div>
      <Banner title="Blog Details" />

      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="image mb-25 wow fadeInUp delay-0-2s">
                  {/* <Image
                    width="525"
                    height={"394"}
                    src={blog?.coverImage?.fields?.file?.url}
                    alt="Blog"
                  /> */}
                  <img src={blog?.coverImage?.fields?.file?.url}></img>

                  <a href="#">
                    <i className="fas fa-share-alt"></i>
                  </a>
                </div>
                <ul className="blog-standard-header wow fadeInUp delay-0-2s">
                  <li>
                    <span className="name">{blog?.authorName}</span>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt"></i>{" "}
                    <a href="blog-details.html">February 20, 2022</a>
                  </li>
                  <li>
                    <i className="far fa-comments"></i>{" "}
                    <a href="blog-details.html">Comments (05)</a>
                  </li>
                </ul>
                <h3 className="title">{blog?.title}</h3>
                <article>
                  {blog.blogContent?.content[0]?.content?.map((c) => c.value)}
                </article>
                <div className="tag-share pt-10">
                  <div className="tag-coulds pb-25">
                    <h6>Tags</h6>
                    {blog.tags?.map((t) => (
                      <a href="blog.html">{t}</a>
                    ))}
                  </div>
                  <div className="social-style-two">
                    <h6>Share :</h6>
                    <a href="contact.html">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="contact.html">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="contact.html">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="admin-comment text-white bg-light-blue p-40 br-10 mt-50 wow fadeInUp delay-0-2s">
                  <div className="comment-body mb-0">
                    <div className="author-thumb">
                      <img
                        src="./assets/images/blog/admin-author.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="content">
                      <h4>Rasalina Wilimson</h4>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atqu corruptie quos dolores et quas molestias excepturi
                        sint
                      </p>
                      <div className="social-style-two">
                        <a href="contact.html">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="contact.html">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="contact.html">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="contact.html">
                          <i className="fab fa-behance"></i>
                        </a>
                        <a href="contact.html">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-nav pt-60 pb-25">
                  <div className="prev-blog wow fadeInLeft delay-0-2s">
                    <div className="blog-thumb">
                      <a href="blog-details.html">
                        <img
                          src="./assets/images/blog/blog-nav-prev.jpg"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="blog-details.html">
                          How Deal With Back During Pregn
                        </a>
                      </h6>
                      <span>
                        <i className="far fa-calendar-alt"></i> 25 May 2022
                      </span>
                    </div>
                  </div>
                  <div className="next-blog wow fadeInRight delay-0-2s">
                    <div className="blog-thumb">
                      <a href="blog-details.html">
                        <img
                          src="./assets/images/blog/blog-nav-next.jpg"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="blog-details.html">
                          Online Environme Work Older See
                        </a>
                      </h6>
                      <span>
                        <i className="far fa-calendar-alt"></i> 25 May 2022
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="comments pt-40 pb-30 wow fadeInUp delay-0-2s">
                  <h4 className="template-title mb-35">Peopel Comments</h4>
                  <ul className="comment-list">
                    <li>
                      <div className="comment-body">
                        <div className="author-thumb">
                          <img
                            src="./assets/images/blog/comment-author1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="name-date">
                            <h6>John F. Medina</h6>
                            <span className="comment-date">25 Feb 2022</span>
                          </div>
                          <p>
                            Quis autem vel eum iure reprehenderit quin voluptate
                            velit esseeso quam nihile molestiae consequatur
                            veillum quolore
                          </p>
                          <a href="#" className="reply-link">
                            Reply{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="comment-body">
                            <div className="author-thumb">
                              <img
                                src="./assets/images/blog/comment-author2.jpg"
                                alt="Image"
                              />
                            </div>
                            <div className="comment-content">
                              <div className="name-date">
                                <h6>Somalia D. Silva</h6>
                                <span className="comment-date">
                                  25 Feb 2022
                                </span>
                              </div>
                              <p>
                                Quis autem vel eum iure reprehenderit quin
                                voluptate velit esseeso quam nihile molestiae
                                consequatur veillum quolore
                              </p>
                              <a href="#" className="reply-link">
                                Reply{" "}
                                <i className="fas fa-long-arrow-alt-right"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment-body">
                        <div className="author-thumb">
                          <img
                            src="./assets/images/blog/comment-author3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="name-date">
                            <h6>Roger A. Torrence</h6>
                            <span className="comment-date">25 Feb 2022</span>
                          </div>
                          <p>
                            Quis autem vel eum iure reprehenderit quin voluptate
                            velit esseeso quam nihile molestiae consequatur
                            veillum quolore
                          </p>
                          <a href="#" className="reply-link">
                            Reply{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar rmt-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form action="#">
                    <input type="text" placeholder="Search Here" required />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    ></button>
                  </form>
                </div>
                <div className="widget widget-about wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img src="./assets/images/widgets/about.jpg" alt="Author" />
                  </div>
                  <h4>James D. Thomas</h4>
                  <p>
                    Sit amet consectetur adipiscing elits do eiusmod tempor
                    incididunt ut labore etdol magna aliquas uspensis.{" "}
                  </p>
                  <div className="social-style-two">
                    <a href="contact.html">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="contact.html">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="contact.html">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="contact.html">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <a href="blog.html">Business Coach </a> <span>(25)</span>
                    </li>
                    <li>
                      <a href="blog.html">Life Coach </a> <span>(07)</span>
                    </li>
                    <li>
                      <a href="blog.html">Health Coach </a> <span>(12)</span>
                    </li>
                    <li>
                      <a href="blog.html">Web Design </a> <span>(55)</span>
                    </li>
                    <li>
                      <a href="blog.html">Web Development </a> <span>(14)</span>
                    </li>
                    <li>
                      <a href="blog.html">SEO Optimizations </a>{" "}
                      <span>(30)</span>
                    </li>
                    <li>
                      <a href="blog.html">Digital Analysis </a>{" "}
                      <span>(18)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-recent-courses wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent Courses</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="./assets/images/widgets/course1.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="./categories.html">
                            How to Learn Basic Web (UI) Design
                          </a>
                        </h6>
                        <span>
                          By <a href="#">Williams</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="./assets/images/widgets/course2.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="./categories.html">
                            How to Learn Basic Web Development
                          </a>
                        </h6>
                        <span>
                          By <a href="#">Somalia</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="./assets/images/widgets/course3.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="./categories.html">
                            How to Learn Basic (SEO) Marketing{" "}
                          </a>
                        </h6>
                        <span>
                          By <a href="#">Blanchard</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="./assets/images/widgets/course4.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="./categories.html">
                            Business Strategy Managements
                          </a>
                        </h6>
                        <span>
                          By <a href="#">Johnson</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <a href="blog.html">Course</a>
                    <a href="blog.html">Design</a>
                    <a href="blog.html">Marketing</a>
                    <a href="blog.html">Life Course</a>
                    <a href="blog.html">Health Course</a>
                    <a href="blog.html">SEO</a>
                    <a href="blog.html">Business</a>
                    <a href="blog.html">Graphics</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// export async function getStaticProps(context) {
//   const res = await fetch("http://test.skg-walldorf.de/graphql", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `
//                 query SinglePost($id: ID!, $idType: PostIdType!) {
//                     blog(id: $id, idType: $idType) {
//                         title
//                         id
//                         content
//                         featuredImage {
//                             node {
//                                 sourceUrl
//                             }
//                         }
//                     }
//                 }
//             `,
//       variables: {
//         id: context.params.id,
//         idType: "SLUG",
//       },
//     }),
//   });

//   const json = await res.json();

//   return {
//     props: {
//       blog: json.data.blog,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch("http://test.skg-walldorf.de/graphql", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `
//             query AllPostsQuery {
//                 posts {
//                     nodes {
//                         id
//                         content
//                         title
//                         featuredImage {
//                             node {
//                                 sourceUrl
//                             }
//                         }
//                     }
//                 }
//             }
//         `,
//     }),
//   });

//   const json = await res.json();
//   const posts = json.data.posts.nodes;

//   const paths = posts.map((blog) => ({
//     params: { id: blog.id },
//   }));

//   return { paths, fallback: false };
// }

export default singleBlog;
