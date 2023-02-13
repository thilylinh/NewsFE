import CustomLink from "components/common/CustomLink";
import Maybe from "components/common/Maybe";
import NavLink from "components/common/NavLink";
import { usePageDispatch } from "lib/context/PageContext";
import checkLogin from "lib/utils/checkLogin";
import storage from "lib/utils/storage";
import { useCallback } from "react";
import useSWR from "swr";

const AdminNavbar = (props: any) => {
  let { brandText } = props;
  const setPage = usePageDispatch();
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);

  const handleClick = useCallback(() => setPage && setPage(0), []);

  return (
    <>
      <div className="navbar navbar-light">
        <div className="container navbar-custom">
          <CustomLink className="navbar-brand" href="/admin/dashboard" as="/admin/dashboard">
            <span onClick={handleClick}>{brandText}</span>
          </CustomLink>
          <ul className="nav navbar-nav pull-xs-right horizontal">
            <li className="nav-item">
              <NavLink href="/admin/post/post-manager" as="/admin/post/post-manager">
                <i className="ion-compose" />
                &nbsp;New Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/admin/category/category-manager" as="/admin/category/category-manager">
                <i className="ion-navicon" />
                &nbsp; Danh mục
              </NavLink>
            </li>
            <Maybe test={isLoggedIn}>
              <li className="nav-item">
                <NavLink href="/" as="/">
                  <span onClick={handleClick}>Home</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink href="/user/settings" as="/user/settings">
                  <i className="ion-gear-a" />
                  &nbsp;Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  href={`/profile/${currentUser?.username}`}
                  as={`/profile/${currentUser?.username}`}
                >
                  <span onClick={handleClick}>{currentUser?.username}</span>
                </NavLink>
              </li>
            </Maybe>
            <Maybe test={!isLoggedIn}>
              <li className="nav-item">
                <NavLink href="/admin/user/login" as="/admin/user/login">
                  Đăng nhập
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/user/register" as="/user/register">
                  Sign up
                </NavLink>
              </li>
            </Maybe>
          </ul>
        </div>
      </div>
    </>
  );
};
export default AdminNavbar;
