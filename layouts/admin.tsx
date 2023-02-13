import AdminFooter from "components/admin/footers/adminFooter";
import AdminNavbar from "components/admin/navbars/adminNavbar";
import { useRouter } from "next/router";
import React, { useRef } from "react"
//import routes from "routes"

const Admin = (props) => {
    let mainContentRef = useRef();
    const router = useRouter();
    // const getBrandText = () => {
    //     for (let i = 0; i < routes.length; i++) {
    //         if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
    //             return routes[i].name;
    //         }
    //     }
    //     // return "AdminPage";
    // };
    return <>
        <AdminNavbar {...props} brandText="Admin page" />
        {props.children}
        {/* <AdminFooter /> */}
    </>
}
export default Admin