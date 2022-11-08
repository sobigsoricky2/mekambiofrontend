import Link from "next/link";
import React from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";

const index = ({ posts }) => {
  console.log(posts.nodes);
  return (
    <Layout>
      <Banner />
      <section class="blog-standard-area py-130 rpt-95 rpb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog-standard-wrap">
                {posts?.nodes?.map((post) => (
                  <div
                    class="blog-standard-item wow fadeInUp delay-0-2s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div class="image">
                      <img
                        src={post.featuredImage?.node?.sourceUrl}
                        // src=""
                        alt="Blog"
                      />
                      <a href="#">
                        <i class="fas fa-share-alt"></i>
                      </a>
                    </div>
                    <div class="blog-standard-content">
                      <div class="author">
                        <img
                          src="./assets/images/blog/blog-standard-author1.jpg"
                          alt="Author"
                        />
                      </div>
                      <div class="content">
                        <ul class="blog-standard-header">
                          <li>
                            <span class="name">Michael M. Morris</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>{" "}
                            <a href="blog-details.html">February 20, 2022</a>
                          </li>
                          <li>
                            <i class="far fa-comments"></i>{" "}
                            <a href="blog-details.html">Comments (05)</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">{post.title}</a>
                        </h3>
                        <p>
                          Sit amet consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.
                          Quis ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.{" "}
                        </p>
                        <Link href={`blog/${post.slug}`} class="theme-btn style-two">
                          Leer más <i class="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <ul class="pagination flex-wrap">
                                <li class="page-item disabled">
                                    <span class="page-link"><i class="fas fa-angle-double-left"></i></span>
                                </li>
                                <li class="page-item active">
                                    <span class="page-link">
                                        01
                                        <span class="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">02</a></li>
                                <li class="page-item"><a class="page-link" href="#">03</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="fas fa-angle-double-right"></i></a>
                                </li>
                            </ul> */}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-sidebar rmt-75">
                <div
                  class="widget widget-search wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <form action="#">
                    <input type="text" placeholder="Search Here" required="" />
                    <button
                      type="submit"
                      class="searchbutton fa fa-search"
                    ></button>
                  </form>
                </div>
                <div
                  class="widget widget-about wow fadeInUp delay-0-4s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div class="image">
                    <img src="./assets/images/widgets/about.jpg" alt="Author" />
                  </div>
                  <h4>James D. Thomas</h4>
                  <p>
                    Sit amet consectetur adipiscing elits do eiusmod tempor
                    incididunt ut labore etdol magna aliquas uspensis.{" "}
                  </p>
                  <div class="social-style-two">
                    <a href="contact.html">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="contact.html">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="contact.html">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="contact.html">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="widget widget-menu wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h4 class="widget-title">Category</h4>
                  <ul>
                    <li>
                      <a href="blog.html">meKambio mONday </a> <span>(25)</span>
                    </li>
                    <li>
                      <a href="blog.html">Coaching </a> <span>(07)</span>
                    </li>
                    <li>
                      <a href="blog.html">Mentoring</a> <span>(12)</span>
                    </li>
                    <li>
                      <a href="blog.html">Liderazgo </a> <span>(55)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        Habilidades y Competencias Profesionales{" "}
                      </a>
                      <span>(14)</span>
                    </li>
                    <li>
                      <a href="blog.html">Impulso Internacional</a>{" "}
                      <span>(30)</span>
                    </li>
                    <li>
                      <a href="blog.html">Progresión de Carrera</a>{" "}
                      <span>(18)</span>
                    </li>
                    <li>
                      <a href="blog.html">Acceso al Mercado Laboral </a>{" "}
                      <span>(07)</span>
                    </li>
                    <li>
                      <a href="blog.html">Cambio de Carrera</a>{" "}
                      <span>(12)</span>
                    </li>
                    <li>
                      <a href="blog.html">Emprendimiento </a> <span>(55)</span>
                    </li>
                    <li>
                      <a href="blog.html">Regreso al Mercado Laboral</a>{" "}
                      <span>(18)</span>
                    </li>
                  </ul>
                </div>
                <div
                  class="widget widget-tag-cloud wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h4 class="widget-title">Popular Tags</h4>
                  <div class="tag-coulds">
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
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://test.skg-walldorf.de/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query AllpostQuery {
        posts {
          nodes {
            slug
            title
            excerpt
            date
            comments {
              nodes{
                approved
              }
            }                 
            featuredImage{
              node{
                sourceUrl
              }
            }
            author{
              node{
                name
                avatar {
                  default
                  extraAttr
                  forceDefault
                  foundAvatar
                  height
                  isRestricted
                  rating
                  scheme
                  size
                  url
                  width
                }
                
              }
            }
          }
        }
      }
            `,
    }),
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data?.posts,
    },
  };
}
export default index;
