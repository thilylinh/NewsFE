import ClientFooter from "components/admin/footers/clientFooter"
import ClientNavbar from "components/admin/navbars/clientNavbar"
import React from "react"

const Client = (props) => {
    return <>
        <ClientNavbar />
        {props.children}
        <ClientFooter />
    </>
}
export default Client