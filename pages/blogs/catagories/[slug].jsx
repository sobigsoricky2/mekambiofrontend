import Link from "next/link";
import React, { useEffect, useState } from "react";
import Banner from "../../../components/Banner";
import Layout from "../../../components/Layout";
import axios from "axios";
import { getImage, ContentfulClient } from "../../../helpers/utils";
import { RWebShare } from "react-web-share";
import { useRouter } from "next/router";

const Category = () => {
  const [blogs, setBlog] = useState([]);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    ContentfulClient.getEntries()
      .then((response) => {
        const currentCategory = response.items.filter(
          (item) => item?.fields?.title === slug
        );
        let data = [];
        response.items.forEach((element) => {
          if (element.sys.contentType.sys.id == "categories") {
            data.unshift(element);
          }
        });

        console.log(currentCategory);
        setTitle(currentCategory[0]?.fields?.title);
        setBlog(currentCategory[0]?.fields?.blog);
        setCategories(data);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  console.log(categories);
  return (
    <Layout>
      <Banner
        title={title}
        //   para="La clave del éxito radica en el conocimiento"
      />
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
                        loading="lazy"
                        src={fields?.coverImage?.fields?.file?.url}
                        // src=""
                        alt="Blog"
                      />
                      <RWebShare
                        data={{
                          text: fields?.title,
                          url: `/blogs/${fields?.title}`,
                          title: "Flamingos",
                        }}
                      >
                        <a>
                          <i className="fas fa-share-alt"></i>
                        </a>
                      </RWebShare>
                    </div>
                    <div className="blog-standard-content">
                      <div className="author">
                        <img
                          loading="lazy"
                          src={fields?.authorImage?.fields?.file?.url}
                          alt="Author"
                          style={{ borderRadius: "50%" }}
                        />
                      </div>
                      <div className="content">
                        <ul className="blog-standard-header">
                          <li>
                            <span className="name">{fields?.authorName}</span>
                          </li>
                          <li>
                            {/* <i className="far fa-calendar-alt"></i>{" "} */}
                            {/* <Link href="blog-details ">February 20, 2022</Link> */}
                          </li>
                          <li>
                            {/* <i className="far fa-comments"></i>{" "} */}
                            {/* <Link href="blog-details ">Comments (05)</Link> */}
                          </li>
                        </ul>
                        <h3>
                          <Link href={`/blogs/${fields?.title}`}>
                            {fields?.title}
                          </Link>
                        </h3>
                        <p>{fields?.shortDescription}</p>
                        <Link
                          href={`/blogs/${fields?.title}`}
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
                {/* <div
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
                </div> */}
                {/* <div
                    className="widget widget-about wow fadeInUp delay-0-4s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="image">
                      <img  loading="lazy" width="auto" height="auto"src="" alt="Author" />
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
                  {categories?.map((category) => (
                    <ul>
                      <li>
                        <Link
                          href={`/blogs/catagories/${category?.fields?.title}`}
                        >
                          {category?.fields?.title}{" "}
                        </Link>{" "}
                        {/* <span>(25)</span> */}
                      </li>
                    </ul>
                  ))}
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

export default Category;
