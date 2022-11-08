import Image from 'next/image';
import React from 'react'
import Banner from '../../components/Banner'

const singleBlog = (data ) => {

    const post = data.post;
  return (
    <div>
      <Banner/>

      <section class="blog-details-area py-130 rpy-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="blog-details-wrap">
                        <div class="image mb-25 wow fadeInUp delay-0-2s">
                            <Image width="525" height={'394'}  src={post.featuredImage?.node?.sourceUrl} alt="Blog"/>
                       
                            <a href="#"><i class="fas fa-share-alt"></i></a>
                        </div>
                        <ul class="blog-standard-header wow fadeInUp delay-0-2s">
                            <li><span class="name">Michael M. Morris</span></li>
                            <li><i class="far fa-calendar-alt"></i> <a href="blog-details.html">February 20, 2022</a></li>
                            <li><i class="far fa-comments"></i> <a href="blog-details.html">Comments (05)</a></li>
                        </ul>
                        <h3 class="title">{post.title}</h3>
                        <article dangerouslySetInnerHTML={{__html: post.content}}></article>
                        <div class="tag-share pt-10">
                            <div class="tag-coulds pb-25">
                                <h6>Tags</h6>
                                <a href="blog.html">Course</a>
                                <a href="blog.html">Design</a>
                                <a href="blog.html">Marketing</a>
                            </div>
                            <div class="social-style-two">
                                <h6>Share :</h6>
                                <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                                <a href="contact.html"><i class="fab fa-twitter"></i></a>
                                <a href="contact.html"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="admin-comment text-white bg-light-blue p-40 br-10 mt-50 wow fadeInUp delay-0-2s">
                            <div class="comment-body mb-0">
                                <div class="author-thumb">
                                    <img src="./assets/images/blog/admin-author.jpg" alt="Image"/>
                                </div>
                                <div class="content">
                                    <h4>Rasalina Wilimson</h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqu corruptie quos dolores et quas molestias excepturi sint</p>
                                    <div class="social-style-two">
                                        <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                                        <a href="contact.html"><i class="fab fa-twitter"></i></a>
                                        <a href="contact.html"><i class="fab fa-instagram"></i></a>
                                        <a href="contact.html"><i class="fab fa-behance"></i></a>
                                        <a href="contact.html"><i class="fab fa-dribbble"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="post-nav pt-60 pb-25">
                            <div class="prev-post wow fadeInLeft delay-0-2s">
                                <div class="post-thumb">
                                    <a href="blog-details.html"><img src="./assets/images/blog/post-nav-prev.jpg" alt="Image"/></a>
                                </div>
                                <div class="content">
                                    <h6><a href="blog-details.html">How Deal With Back During Pregn</a></h6>
                                    <span><i class="far fa-calendar-alt"></i> 25 May 2022</span>
                                </div>
                            </div>
                            <div class="next-post wow fadeInRight delay-0-2s">
                                <div class="post-thumb">
                                    <a href="blog-details.html"><img src="./assets/images/blog/post-nav-next.jpg" alt="Image"/></a>
                                </div>
                                <div class="content">
                                    <h6><a href="blog-details.html">Online Environme Work Older See</a></h6>
                                    <span><i class="far fa-calendar-alt"></i> 25 May 2022</span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="comments pt-40 pb-30 wow fadeInUp delay-0-2s">
                            <h4 class="template-title mb-35">Peopel Comments</h4>
                            <ul class="comment-list">
                                <li>
                                    <div class="comment-body">
                                        <div class="author-thumb">
                                            <img src="./assets/images/blog/comment-author1.jpg" alt="Image"/>
                                        </div>
                                        <div class="comment-content">
                                            <div class="name-date">
                                                <h6>John F. Medina</h6>
                                                <span class="comment-date">25 Feb 2022</span>
                                            </div>
                                            <p>Quis autem vel eum iure reprehenderit quin voluptate velit esseeso  quam nihile molestiae consequatur veillum quolore</p>
                                            <a href="#" class="reply-link">Reply <i class="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                    <ul class="children">
                                        <li>
                                            <div class="comment-body">
                                                <div class="author-thumb">
                                                    <img src="./assets/images/blog/comment-author2.jpg" alt="Image"/>
                                                </div>
                                                <div class="comment-content">
                                                    <div class="name-date">
                                                        <h6>Somalia D. Silva</h6>
                                                        <span class="comment-date">25 Feb 2022</span>
                                                    </div>
                                                    <p>Quis autem vel eum iure reprehenderit quin voluptate velit esseeso  quam nihile molestiae consequatur veillum quolore</p>
                                                    <a href="#" class="reply-link">Reply <i class="fas fa-long-arrow-alt-right"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="comment-body">
                                        <div class="author-thumb">
                                            <img src="./assets/images/blog/comment-author3.jpg" alt="Image"/>
                                        </div>
                                        <div class="comment-content">
                                            <div class="name-date">
                                                <h6>Roger A. Torrence</h6>
                                                <span class="comment-date">25 Feb 2022</span>
                                            </div>
                                            <p>Quis autem vel eum iure reprehenderit quin voluptate velit esseeso  quam nihile molestiae consequatur veillum quolore</p>
                                            <a href="#" class="reply-link">Reply <i class="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-sidebar rmt-75">
                        <div class="widget widget-search wow fadeInUp delay-0-2s">
                            <form action="#">
                                <input type="text" placeholder="Search Here" required/>
                                <button type="submit" class="searchbutton fa fa-search"></button>
                            </form>
                        </div>
                        <div class="widget widget-about wow fadeInUp delay-0-4s">
                            <div class="image">
                                <img src="./assets/images/widgets/about.jpg" alt="Author"/>
                            </div>
                            <h4>James D. Thomas</h4>
                            <p>Sit amet consectetur adipiscing elits do eiusmod tempor incididunt ut labore etdol magna aliquas uspensis. </p>
                            <div class="social-style-two">
                                <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                                <a href="contact.html"><i class="fab fa-twitter"></i></a>
                                <a href="contact.html"><i class="fab fa-linkedin-in"></i></a>
                                <a href="contact.html"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div class="widget widget-menu wow fadeInUp delay-0-2s">
                            <h4 class="widget-title">Category</h4>
                            <ul>
                                <li><a href="blog.html">Business Coach </a> <span>(25)</span></li>
                                <li><a href="blog.html">Life Coach </a> <span>(07)</span></li>
                                <li><a href="blog.html">Health Coach </a> <span>(12)</span></li>
                                <li><a href="blog.html">Web Design </a> <span>(55)</span></li>
                                <li><a href="blog.html">Web Development </a> <span>(14)</span></li>
                                <li><a href="blog.html">SEO Optimizations </a> <span>(30)</span></li>
                                <li><a href="blog.html">Digital Analysis </a> <span>(18)</span></li>
                            </ul>
                        </div>
                        <div class="widget widget-recent-courses wow fadeInUp delay-0-2s">
                            <h4 class="widget-title">Recent Courses</h4>
                            <ul>
                                <li>
                                    <div class="image">
                                        <img src="./assets/images/widgets/course1.jpg" alt="Course"/>
                                    </div>
                                    <div class="content">
                                        <h6><a href="./categories.html">How to Learn Basic Web (UI) Design</a></h6>
                                        <span>By <a href="#">Williams</a></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="image">
                                        <img src="./assets/images/widgets/course2.jpg" alt="Course"/>
                                    </div>
                                    <div class="content">
                                        <h6><a href="./categories.html">How to Learn Basic Web Development</a></h6>
                                        <span>By <a href="#">Somalia</a></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="image">
                                        <img src="./assets/images/widgets/course3.jpg" alt="Course"/>
                                    </div>
                                    <div class="content">
                                        <h6><a href="./categories.html">How to Learn Basic (SEO) Marketing </a></h6>
                                        <span>By <a href="#">Blanchard</a></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="image">
                                        <img src="./assets/images/widgets/course4.jpg" alt="Course"/>
                                    </div>
                                    <div class="content">
                                        <h6><a href="./categories.html">Business Strategy Managements</a></h6>
                                        <span>By <a href="#">Johnson</a></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="widget widget-tag-cloud wow fadeInUp delay-0-2s">
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
    </div>
  )
}

export async function getStaticProps(context) {

    const res = await fetch('http://test.skg-walldorf.de/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch('http://test.skg-walldorf.de/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}

export default singleBlog