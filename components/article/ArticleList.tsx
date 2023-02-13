import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { usePageState } from "../../lib/context/PageContext";
import {
  usePageCountState,
  usePageCountDispatch,
} from "../../lib/context/PageCountContext";
import useViewport from "../../lib/hooks/useViewport";
// import { SERVER_BASE_URL, DEFAULT_LIMIT } from "../../lib/utils/constant";
// import fetcher from "../../lib/utils/fetcher";
import PostApi from "lib/api/post.api";
import parse from 'html-react-parser';
import Link from "next/link";

const ArticleList = () => {
  const [news, setNews] = useState([])
  const page = usePageState();
  const pageCount = usePageCountState();
  // const setPageCount = usePageCountDispatch();
  // const lastIndex =
  //   pageCount > 480 ? Math.ceil(pageCount / 20) : Math.ceil(pageCount / 20) - 1;

  const { vw } = useViewport();
  const router = useRouter();
  const { asPath, pathname, query } = router;
  // const { favorite, follow, tag, pid } = query;

  // const isProfilePage = pathname.startsWith(`/profile`);

  // let fetchURL = `${SERVER_BASE_URL}/articles?offset=${page * DEFAULT_LIMIT}`;

  // switch (true) {
  //   case !!tag:
  //     fetchURL = `${SERVER_BASE_URL}/articles${asPath}&offset=${page * DEFAULT_LIMIT
  //       }`;
  //     break;
  //   case isProfilePage && !!favorite:
  //     fetchURL = `${SERVER_BASE_URL}/articles?favorited=${encodeURIComponent(
  //       String(pid)
  //     )}&offset=${page * DEFAULT_LIMIT}`;
  //     break;
  //   case isProfilePage && !favorite:
  //     fetchURL = `${SERVER_BASE_URL}/articles?author=${encodeURIComponent(
  //       String(pid)
  //     )}&offset=${page * DEFAULT_LIMIT}`;
  //     break;
  //   case !isProfilePage && !!follow:
  //     fetchURL = `${SERVER_BASE_URL}/articles/feed?offset=${page * DEFAULT_LIMIT
  //       }`;
  //     break;
  //   default:
  //     break;
  // }

  //const { data, error } = useSWR(fetchURL, fetcher);

  // if (error) {
  //   return (
  //     <div className="col-md-9">
  //       <div className="feed-toggle">
  //         <ul className="nav nav-pills outline-active"></ul>
  //       </div>
  //       <ErrorMessage message="Cannot load recent articles..." />
  //     </div>
  //   );
  // }

  // if (!data) return <LoadingSpinner />;

  // const { articles, articlesCount } = data;
  // setPageCount(articlesCount);

  // if (articles && articles.length === 0) {
  //   return <div className="article-preview">No articles are here... yet.</div>;
  // }

  useEffect(() => { getNews() }, [])

  const getNews = async () => {
    const { data, status } = await PostApi.getForClient();
    if (status === 200) {

      console.log(data)
      setNews(data);
    }
    else {
      console.log("Error when get news");
    }
  }

  return (
    <>
      <div className="row">
        <div className="section-title full-width">
          <h2>Latest World News </h2>
          <h4>Do not miss daily news</h4>
        </div>
      </div>
      {news && news.map((item: any, index) => (
        <div className="row" key={index}>
          <div className="list-post fl-wrap">
            <div className="col-md-3">
              <img src="images/test.jpg" className="image-post" />
            </div>
            <div className="col-md-9">
              <div className="list-post-content">
                <p className="post-category-marker">{item.categoryName} </p>
                <h3>
                  <Link href={{
                    pathname: "/news/",
                    query: { id: item.id },
                  }}>
                    {item.tittle}
                  </Link>
                </h3>
                <span className="post-date"><i className="ion-calendar" /> {item.createDate}</span>
                <p> {parse(item.content.length > 300 ? item.content.substring(0, 300) : item.content)}...</p>
                <ul className="post-opt">
                  <li><i className="ion-chatbox" /> 3 </li>
                  <li><i className="ion-eye" /> 431 views </li>
                </ul>
                <div className="author-link">
                  <a href="https://webredox.net/demo/wp/gmag/author/webredox/">
                    <img decoding="async" loading="lazy" src="https://webredox.net/demo/wp/gmag/wp-content/uploads/2022/06/3.jpg" width={36} height={36} alt="Ann Kowalsky" className="avatar avatar-36 wp-user-avatar wp-user-avatar-36 alignnone photo" />
                    <span>{item.userName}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}

      {/* {articles?.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}

      <Maybe test={articlesCount && articlesCount > 20}>
        <Pagination
          total={pageCount}
          limit={20}
          pageCount={vw >= 768 ? 10 : 5}
          currentPage={page}
          lastIndex={lastIndex}
          fetchURL={fetchURL}
        />
      </Maybe> */}
    </>
  );
};

export default ArticleList;
