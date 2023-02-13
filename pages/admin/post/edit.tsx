import Admin from "layouts/admin"
import { useRouter } from "next/router"
import PostForm from "./post-form"

const Edit = () => {
    const router = useRouter()
    const {
        query: { id },
    } = router

    return <><div className="container">
        <h5>Chỉnh sửa bài đăng mới</h5>
        <div className="row">
            <PostForm idPost={id}/>
        </div>
    </div></>
}

Edit.layout = Admin
export default Edit