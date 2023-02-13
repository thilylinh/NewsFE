import Banner from "components/admin/components/banner"
import Admin from "layouts/admin"
import PostApi from "lib/api/post.api"
import Link from "next/link"
import { useEffect, useState } from "react"
import parse from 'html-react-parser';

const PostManager = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getAllNews();
    }, [])

    const getAllNews = async () => {
        const { data, status } = await PostApi.getAll();
        if (status === 200) {
            setData(data)
        } else {
            alert("Error")
        }
    }

    const handleDelete = async (id) => {

    }

    return <>
        <div className="home-page">
            <Banner title="Quản lý bài đăng" />

            <div className="container">
                <div className="row mb-3">
                    <Link href="/admin/post/create">
                        <span className="btn btn-success">
                            Thêm</span></Link>
                </div>
                <div className="row mt-md-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tiêu đề</th>
                                <th scope="col">Nội dung</th>
                                <th scope="col">Danh mục</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((t, index) => (<tr>
                                <th scope="row">{index + 1}</th>
                                <td>{t.tiltle}</td>
                                <td>{parse(t.content.length > 300 ? t.content.substring(0, 300) : t.content)}</td>
                                <td>@mdo</td>
                                <td>
                                    <Link href={{
                                        pathname: "/admin/post/edit",
                                        query: { id: t.id },
                                    }}>
                                        <span className="btn btn-success">
                                            Sửa</span></Link> &ensp;|&ensp;
                                    <button className="btn btn-success" onClick={() => handleDelete(t.id)}>Xóa</button>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                    <div className="row">
                        <nav className="d-flex justify-content-end">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </>
}

PostManager.layout = Admin
export default PostManager