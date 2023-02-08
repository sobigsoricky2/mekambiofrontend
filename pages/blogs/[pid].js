import Image from "next/image";
import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import { useParams } from "react-router-dom";
import { getImage, ContentfulClient } from "../../helpers/utils";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const SingleBlog = (props) => {
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
    <Layout>
      <Banner title={blog.title ? blog.title : "Blog Details"} />

      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="image mb-25 wow fadeInUp delay-0-2s">
                  {/* <img  loading="lazy"
                    width="525"
                    height={"394"}
                    src={blog?.coverImage?.fields?.file?.url}
                    alt="Blog"
                  /> */}
                  <img
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src={blog?.coverImage?.fields?.file?.url}
                    alt=""
                  />

                  <Link href="#">
                    <i className="fas fa-share-alt"></i>
                  </Link>
                </div>
                <ul className="blog-standard-header wow fadeInUp delay-0-2s">
                  <li>
                    <span className="name">{blog?.authorName}</span>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt"></i>{" "}
                    <Link href="blog-details ">February 20, 2022</Link>
                  </li>
                  <li>
                    <i className="far fa-comments"></i>{" "}
                    <Link href="blog-details ">Comments (05)</Link>
                  </li>
                </ul>
                <h3 className="title">{blog?.title}</h3>
                <article>
                  {/* {blog.blogContent?.content.map((c) =>
                    c.nodeType === "embedded-asset-block" ? (
                      <div className="my-4">
                        <img src={c.data?.target?.fields?.file?.url} alt="" />
                      </div>
                    ) : (
                      <p>{documentToReactComponents(blog.blogContent)}</p>
                    )
                  )} */}
                   <p>{documentToReactComponents(blog?.blogContent)}</p>
                </article>
                <div className="tag-share pt-10">
                  <div className="tag-coulds pb-25">
                    <h6>Tags</h6>
                    {blog.tags?.map((t, index) => (
                      <Link key={index} href="blog ">
                        {t}
                      </Link>
                    ))}
                  </div>
                  {/* <div className="social-style-two">
                    <h6>Share :</h6>
                    <Link
                      href="https://www.facebook.com"
                      onClick={(e) => {
                        navigator.clipboard.writeText("helloAgain");
                      }}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="contact ">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="contact ">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div> */}
                </div>
                {/* <div className="admin-comment text-white bg-light-blue p-40 br-10 mt-50 wow fadeInUp delay-0-2s">
                  <div className="comment-body mb-0">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="/assets/images/blog/admin-author.jpg"
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
                        <Link href="contact ">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="contact ">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="contact ">
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link href="contact ">
                          <i className="fab fa-behance"></i>
                        </Link>
                        <Link href="contact ">
                          <i className="fab fa-dribbble"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="blog-nav pt-60 pb-25">
                  <div className="prev-blog wow fadeInLeft delay-0-2s">
                    <div className="blog-thumb">
                      <Link href="blog-details ">
                        <img
                          loading="lazy"
                          src="/assets/images/blog/blog-nav-prev.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="blog-details ">
                          How Deal With Back During Pregn
                        </Link>
                      </h6>
                      <span>
                        <i className="far fa-calendar-alt"></i> 25 May 2022
                      </span>
                    </div>
                  </div>
                  <div className="next-blog wow fadeInRight delay-0-2s">
                    <div className="blog-thumb">
                      <Link href="blog-details ">
                        <img
                          loading="lazy"
                          src="/assets/images/blog/blog-nav-next.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="blog-details ">
                          Online Environme Work Older See
                        </Link>
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
                            loading="lazy"
                            src="/assets/images/blog/comment-author1.jpg"
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
                          <Link href="#" className="reply-link">
                            Reply{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="comment-body">
                            <div className="author-thumb">
                              <img
                                loading="lazy"
                                src="/assets/images/blog/comment-author2.jpg"
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
                              <Link href="#" className="reply-link">
                                Reply{" "}
                                <i className="fas fa-long-arrow-alt-right"></i>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment-body">
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="/assets/images/blog/comment-author3.jpg"
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
                          <Link href="#" className="reply-link">
                            Reply{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
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
                    <img
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src={blog?.authorImage?.fields?.file?.url}
                      alt="Author"
                    />
                  </div>
                  <h4>{blog?.authorName}</h4>
                  {/* <p>
                    Sit amet consectetur adipiscing elits do eiusmod tempor
                    incididunt ut labore etdol magna aliquas uspensis.{" "}
                  </p> */}
                  <div className="social-style-two">
                    {blog?.facebookLink ? (
                      <Link
                        href={blog?.facebookLink ? blog?.facebookLink : ""}
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    ) : (
                      ""
                    )}
                    {blog?.facebookLink ? (
                      <Link
                        href={blog?.TwitterLink ? blog?.TwitterLink : ""}
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                    ) : (
                      ""
                    )}
                    {blog?.facebookLink ? (
                      <Link
                        href={blog?.LinkedInLink ? blog?.LinkedInLink : ""}
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    ) : (
                      ""
                    )}
                    {blog?.youtubeLink ? (
                      <Link
                        href={blog?.youtubeLink ? blog?.youtubeLink : ""}
                        target="_blank"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div
                  className="widget widget-menu wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="/blogs/catagories/MeKambio-mONday ">meKambio mONday </Link>{" "}
                      {/* <span>(25)</span> */}
                    </li>
                    <li>
                      <Link href="/blogs/catagories/Coaching ">Coaching </Link> 
                      {/* <span>(07)</span> */}
                    </li>
                    <li>
                      <Link href="/blogs/catagories/Mentoring ">Mentoring</Link> 
                      {/* <span>(12)</span> */}
                    </li>
                    <li>
                      <Link href="/blogs/catagories/Liderazgo ">Liderazgo </Link> 
                      {/* <span>(55)</span> */}
                    </li>
                    <li>
                      <Link href="/blogs/catagories/Habilidades-y-Competencias-Profesionales ">
                        Habilidades y Competencias Profesionales{" "}
                      </Link>
                      {/* <span>(14)</span> */}
                    </li>
                    <li>
                      <Link href="/blogs/catagories/Impulsa-Internacional ">Impulso Internacional</Link>{" "}
                      {/* <span>(30)</span> */}
                    </li>
                    <li>
                      <Link href="/blogs/catagories/Progresion-de-Carrera ">Progresión de Carrera</Link>{" "}
                      {/* <span>(18)</span> */}
                    </li>
                    {/* <li>
                      <Link href="/blogs/catagories/ ">Acceso al Mercado Laboral </Link>{" "}
                      <span>(07)</span>
                    </li> */}
                    <li>
                      <Link href="/blogs/catagories/Cambio-de-Carrera ">Cambio de Carrera</Link>{" "}
                      {/* <span>(12)</span> */}
                    </li>
                    <li>
                      <Link href="/blogs/catagories/Emprendimiento ">Emprendimiento </Link>{" "}
                      {/* <span>(55)</span> */}
                    </li>
                    <li>
                      <Link href="/blogs/catagories/Regreso-al-Mercado-Laboral ">Regreso al Mercado Laboral</Link>{" "}
                      {/* <span>(18)</span> */}
                    </li>
                  </ul>
                </div>
                {/* <div className="widget widget-recent-courses wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent Courses</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          loading="lazy"
                          src="/assets/images/widgets/course1.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="./categories">
                            How to Learn Basic Web (UI) Design
                          </Link>
                        </h6>
                        <span>
                          By <Link href="#">Williams</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          loading="lazy"
                          src="/assets/images/widgets/course2.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="./categories">
                            How to Learn Basic Web Development
                          </Link>
                        </h6>
                        <span>
                          By <Link href="#">Somalia</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          loading="lazy"
                          src="/assets/images/widgets/course3.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="./categories">
                            How to Learn Basic (SEO) Marketing{" "}
                          </Link>
                        </h6>
                        <span>
                          By <Link href="#">Blanchard</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          loading="lazy"
                          src="/assets/images/widgets/course4.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="./categories">
                            Business Strategy Managements
                          </Link>
                        </h6>
                        <span>
                          By <Link href="#">Johnson</Link>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <Link href="blog ">Course</Link>
                    <Link href="blog ">Design</Link>
                    <Link href="blog ">Marketing</Link>
                    <Link href="blog ">Life Course</Link>
                    <Link href="blog ">Health Course</Link>
                    <Link href="blog ">SEO</Link>
                    <Link href="blog ">Business</Link>
                    <Link href="blog ">Graphics</Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
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

export default SingleBlog;
