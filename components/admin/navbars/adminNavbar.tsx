import NavLink from "components/common/NavLink";
import { usePageDispatch } from "lib/context/PageContext";
import checkLogin from "lib/utils/checkLogin";
import storage from "lib/utils/storage";
import Link from "next/link";
import { useCallback } from "react";
import useSWR from "swr";

const AdminNavbar = (props: any) => {
  let { brandText } = props;
  const setPage = usePageDispatch();
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);

  const handleClick = useCallback(() => setPage && setPage(0), []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" href="/admin/dashboard" as="/admin/dashboard">
            <span onClick={handleClick}>{brandText}</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink href="/admin/dashboard" as="/admin/dashboard">
                  Dashboard
                </NavLink>
              </li>
              {isLoggedIn &&
                <>
                  <li className="nav-item">
                    <NavLink href="/admin/post/post-manager" as="/admin/post/post-manager">
                      Bài đăng
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink href="/admin/category/category-manager" as="/admin/category/category-manager">
                      Danh mục
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link user-name"> {currentUser?.name}</span>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-danger" onClick={handleLogout}>Đăng xuất</button>
                  </li>
                </>}
              {!isLoggedIn && <>
                <NavLink href="/admin/user/login" as="/admin/user/login">
                  Đăng nhập
                </NavLink>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default AdminNavbar;
