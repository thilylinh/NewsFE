import Admin from "layouts/admin"
import { useEffect } from "react";
import PostForm from "./post-form"

const Create = () => {
    return <>
        <div className="container">
            <h5>Thêm bài đăng mới</h5>
            <div className="row">
                <PostForm />
            </div>
        </div>
    </>
}

Create.layout = Admin
export default Create