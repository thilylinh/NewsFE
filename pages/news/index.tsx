import Client from "layouts/client";
import PostApi from "lib/api/post.api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';


const NewsDetails = (initialArticle: any) => {
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [content, setContent] = useState("")
  const [urlImage, setUrlImage] = useState("")
  const [user, setUser] = useState("")
  const [category, setCategory] = useState("")
  const [createDate, setCreateDate] = useState("")
  const router = useRouter();
  const {
    query: { id },
  } = router;
  useEffect(() => {
    getNewsById(id);
  })

  const getNewsById = async (id: any) => {
    const { data, status } = await PostApi.getForClientById(id);
    if (status == 200 && data) {
      setTitle(data.tittle)
      setSubTitle(data.subTitle)
      setContent(data.content)
      setUrlImage(data.url)
      setCategory(data.categoryName)
      setUser(data.userName)
      setCreateDate(data.createDate)
    } else {
      console.log("Error get news by id")
    }
  }
  
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-container fl-wrap fix-container-init">
                <div className="single-post-header fl-wrap">
                  <a className="post-category-marker" href="https://webredox.net/demo/wp/gmag/category/politics/">{category}</a>
                  <div className="clearfix" />
                  <h1>{title}</h1>
                  <h4>{subTitle}</h4>
                  <div className="clearfix" />
                  <div className="author-link"><a href="https://webredox.net/demo/wp/gmag/author/webredox/"><img src="https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/3.jpg" width={36} height={36} alt="Ann Kowalsky" className="avatar avatar-36 wp-user-avatar wp-user-avatar-36 alignnone photo" />  <span>By Ann Kowalsky</span></a></div>
                  <span className="post-date"><i className="ion-calendar" /> {createDate}</span>
                  <ul className="post-opt">
                    <li><i className="ion-chatbox" /> 3 </li>
                    <li><i className="ion-eye" /> 436 views </li>
                  </ul>
                </div>
                <div className="single-post-media fl-wrap">
                  <div className="row">
                    <img src="/images/client-banner.jpg" />
                  </div>
                </div>
                <div className="single-post-content spc_column fl-wrap">
                  <div className="fs-wrap smpar fl-wrap">
                    {/* <div className="show-more-snopt-tooltip">
                      <a href="#respond" className="custom-scroll-link"> <i className="fas fa-comment-alt" /> Write a Comment</a>
                    </div> */}
                  </div>
                  <div className="clearfix" />
                  <div className="single-post-content_text" id="font_chage">
                    {parse(content)}
                  </div>
                  {/* <div className="single-post-nav fl-wrap">
                    <a href="https://webredox.net/demo/wp/gmag/innovations-that-bring-pleasure-to-all-peoples/" className="single-post-nav_prev spn_box">
                      <div className="spn_box_img">
                        <img src="https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/20-758x520.jpg" className="respimg" alt="Innovations that Bring Pleasure to All Peoples" />
                      </div>
                      <div className="spn-box-content">
                        <span className="spn-box-content_subtitle"><i className="fas fa-caret-left" /> Prev Post</span>
                        <span className="spn-box-content_title">Innovations that Bring Pleasure to All Peoples</span>
                      </div>
                    </a>
                    <a href="https://webredox.net/demo/wp/gmag/how-maps-reshape-american-politics-in-world/" className="single-post-nav_next spn_box">
                      <div className="spn_box_img">
                        <img src="https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/56-758x520.jpg" className="respimg" alt="How Maps Reshape American Politics In World" />
                      </div>
                      <div className="spn-box-content">
                        <span className="spn-box-content_subtitle">Next Post <i className="fas fa-caret-right" /></span>
                        <span className="spn-box-content_title">How Maps Reshape American Politics In World</span>
                      </div>
                    </a>
                  </div> */}
                </div>
                <div className="limit-box2 fl-wrap" />
                {/* <div className="post-author fl-wrap">
                  <div className="author-img">
                    <img src="https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/3.jpg" width={80} height={80} alt="Ann Kowalsky" className="avatar avatar-80 wp-user-avatar wp-user-avatar-80 alignnone photo" />
                  </div>
                  <div className="author-content fl-wrap">
                    <h5>Written By <a href="https://webredox.net/demo/wp/gmag/author/webredox/">Ann Kowalsky</a></h5>
                    <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that’s filled with content hourly on the day of going live. Filled with content hourly on the day of going live.</p>
                  </div>
                  <div className="profile-card-footer fl-wrap">
                    <a href="https://webredox.net/demo/wp/gmag/author/webredox/" className="post-author_link">View Profile <i className="fas fa-caret-right" /></a>
                    <div className="profile-card-footer_soc">
                      <div className="profile-card-footer_title">Follow:</div>
                      <div className="profile-card-social">
                        <ul>
                          <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                          <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                          <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                          <li><a href="#" target="_blank"><i className="fab fa-pinterest" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="more-post-wrap  fl-wrap mt-5">
                  <div className="pr-subtitle prs_big">Related Posts</div>
                  <div className="list-post-wrap list-post-wrap_column fl-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="list-post fl-wrap">
                          <a className="post-category-marker" href="https://webredox.net/demo/wp/gmag/category/politics/">Politics </a>
                          <div className="list-post-media">
                            <a href="https://webredox.net/demo/wp/gmag/how-maps-reshape-american-politics-in-world/">
                              <div className="bg-wrap"><div className="bg" data-bg="https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/56.jpg" style={{ backgroundImage: 'url("https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/56.jpg")' }} /></div>
                            </a>
                            <span className="post-media_title">© Image Copyrights Title</span>
                          </div>
                          <div className="list-post-content">
                            <h3><a href="https://webredox.net/demo/wp/gmag/how-maps-reshape-american-politics-in-world/">How Maps Reshape American Politics In World</a></h3>
                            <span className="post-date"><i className="ion-calendar" /> June 9, 2022</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="list-post fl-wrap">
                          <a className="post-category-marker" href="https://webredox.net/demo/wp/gmag/category/politics/">Politics </a>
                          <div className="list-post-media">
                            <a href="https://webredox.net/demo/wp/gmag/what-the-federal-infrastructure-package-means-for-minnesota/">
                              <div className="bg-wrap"><div className="bg" data-bg="https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/7-2.jpg" style={{ backgroundImage: 'url("https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/7-2.jpg")' }} /></div>
                            </a>
                            <span className="post-media_title">© Image Copyrights Title</span>
                          </div>
                          <div className="list-post-content">
                            <h3><a href="https://webredox.net/demo/wp/gmag/what-the-federal-infrastructure-package-means-for-minnesota/">What the federal infrastructure package means for Minnesota</a></h3>
                            <span className="post-date"><i className="ion-calendar" /> June 12, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="limit-box fl-wrap" /></div>
      </section>
    </>
  );
};

// ArticlePage.getInitialProps = async ({ query: { pid } }) => {
//   const { data } = await ArticleAPI.get(pid);
//   return data;
// };
NewsDetails.layout = Client
export default NewsDetails;
