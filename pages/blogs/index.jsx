import Link from "next/link";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import axios from "axios";
import { getImage, ContentfulClient } from "../../helpers/utils";

var contentful = require("contentful");
const Index = ({ posts }) => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    var data = [];
    ContentfulClient.getEntries()
      .then((response) => {
        response.items.forEach((element) => {
          if (element.sys.contentType.sys.id == "blog") {
            data.push(element);
          }
        });

        setblogs(data);
      })
      .catch(console.error);
  }, []);

  console.log(blogs);
  return (
    <Layout>
      <Banner title="Blogs" />
      <section className="blog-standard-area py-130 rpt-95 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrap">
                {blogs?.map(({ fields, sys }) => (
                  <div
                    className="blog-standard-item wow fadeInUp delay-0-2s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                    key={sys.id}
                  >
                    <div className="image">
                      <img
                        src={fields.coverImage.fields.file.url}
                        // src=""
                        alt="Blog"
                      />
                      <Link href="#">
                        <i className="fas fa-share-alt"></i>
                      </Link>
                    </div>
                    <div className="blog-standard-content">
                      <div className="author">
                        <img
                          src={fields.authorImage.fields.file.url}
                          alt="Author"
                        />
                      </div>
                      <div className="content">
                        <ul className="blog-standard-header">
                          <li>
                            <span className="name">{fields.authorName}</span>
                          </li>
                          <li>
                            <i className="far fa-calendar-alt"></i>{" "}
                            <Link href="blog-details ">
                              February 20, 2022
                            </Link>
                          </li>
                          <li>
                            <i className="far fa-comments"></i>{" "}
                            <Link href="blog-details ">Comments (05)</Link>
                          </li>
                        </ul>
                        <h3>
                          <Link href="blog-details ">{fields?.title}</Link>
                        </h3>
                        <p>{fields?.shortDescription}</p>
                        <Link
                          href={`blogs/${fields?.title}`}
                          className="theme-btn style-two"
                        >
                          Leer más <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <ul className="pagination flex-wrap">
                                <li className="page-item disabled">
                                    <span className="page-link"><i className="fas fa-angle-double-left"></i></span>
                                </li>
                                <li className="page-item active">
                                    <span className="page-link">
                                        01
                                        <span className="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li className="page-item"><Link className="page-link" href="#">02</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">03</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" href="#"><i className="fas fa-angle-double-right"></i></Link>
                                </li>
                            </ul> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar rmt-75">
                <div
                  className="widget widget-search wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <form action="#">
                    <input type="text" placeholder="Search Here" required="" />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    ></button>
                  </form>
                </div>
                {/* <div
                  className="widget widget-about wow fadeInUp delay-0-4s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="image">
                    <img width="auto" height="auto"src="" alt="Author" />
                  </div>
                  <h4>James D. Thomas</h4>
                  <p>
                    Sit amet consectetur adipiscing elits do eiusmod tempor
                    incididunt ut labore etdol magna aliquas uspensis.{" "}
                  </p>
                  <div className="social-style-two">
                    <Link href="contact ">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="contact ">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="contact ">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="contact ">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div> */}
                <div
                  className="widget widget-menu wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="blog ">meKambio mONday </Link>{" "}
                      <span>(25)</span>
                    </li>
                    <li>
                      <Link href="blog ">Coaching </Link> <span>(07)</span>
                    </li>
                    <li>
                      <Link href="blog ">Mentoring</Link> <span>(12)</span>
                    </li>
                    <li>
                      <Link href="blog ">Liderazgo </Link> <span>(55)</span>
                    </li>
                    <li>
                      <Link href="blog ">
                        Habilidades y Competencias Profesionales{" "}
                      </Link>
                      <span>(14)</span>
                    </li>
                    <li>
                      <Link href="blog ">Impulso Internacional</Link>{" "}
                      <span>(30)</span>
                    </li>
                    <li>
                      <Link href="blog ">Progresión de Carrera</Link>{" "}
                      <span>(18)</span>
                    </li>
                    <li>
                      <Link href="blog ">Acceso al Mercado Laboral </Link>{" "}
                      <span>(07)</span>
                    </li>
                    <li>
                      <Link href="blog ">Cambio de Carrera</Link>{" "}
                      <span>(12)</span>
                    </li>
                    <li>
                      <Link href="blog ">Emprendimiento </Link>{" "}
                      <span>(55)</span>
                    </li>
                    <li>
                      <Link href="blog ">Regreso al Mercado Laboral</Link>{" "}
                      <span>(18)</span>
                    </li>
                  </ul>
                </div>
                {/* <div
                  className="widget widget-tag-cloud wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
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

// export async function getStaticProps() {
//   // const res = await fetch("http://test.skg-walldorf.de/graphql", {
//   //   method: "POST",
//   //   headers: { "Content-Type": "application/json" },
//   //   body: JSON.stringify({
//   //     query: `
//   //     query AllpostQuery {
//   //       posts {
//   //         nodes {
//   //           slug
//   //           title
//   //           excerpt
//   //           date
//   //           comments {
//   //             nodes{
//   //               approved
//   //             }
//   //           }
//   //           featuredImage{
//   //             node{
//   //               sourceUrl
//   //             }
//   //           }
//   //           author{
//   //             node{
//   //               name
//   //               avatar {
//   //                 default
//   //                 extraAttr
//   //                 forceDefault
//   //                 foundAvatar
//   //                 height
//   //                 isRestricted
//   //                 rating
//   //                 scheme
//   //                 size
//   //                 url
//   //                 width
//   //               }

//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //           `,
//   //   }),
//   // });
//   // const client = contentful.createClient({
//   //   space: process.env.SPACE_ID,

//   //   accessToken: process.env.ACCESS_TOKEN,
//   // });

//   var data = [];

//   contentful
//     .createClient({
//       space: "rnas9vwjhliq",
//       accessToken: "tcLuykWlQVqx8w0NWJmIs7MMxVHBuekaS8yTIg8_6jw",
//     })
//     .getEntries()
//     .then((response) => {
//       response.items.forEach((element) => {
//         data.push(element);
//       });
//       console.log(data);
//     })
//     .catch(console.error);

//   console.log(data);

//   // console.log(res.data);

//   // const json = await res.json();

//   //for Image

//   // contentful.js v4.x.x

//   // const client = contentful.createClient({
//   //   space: "rnas9vwjhliq",
//   //   accessToken: "tcLuykWlQVqx8w0NWJmIs7MMxVHBuekaS8yTIg8_6jw",
//   // });
//   var imageurl = "";

//   //
//   return {
//     props: {
//       posts: data,
//     },
//   };
// }
export default Index;
