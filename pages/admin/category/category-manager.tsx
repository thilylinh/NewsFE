import Banner from "components/admin/components/banner"
import Admin from "layouts/admin"
import Link from "next/link"
import { useEffect, useState } from "react"

import CategoryAPI from "lib/api/category";

const CategoryManager = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = async () => {
        const { data, status } = await CategoryAPI.getAll();
        if (status === 200) {
            setCategories(data)
        } else {
            alert("Error")
        }
    }

    const handleDelete = async (id) => {
        debugger
        const { data, status } = await CategoryAPI.delete(id);
        if (status == 200) {
            setCategories(categories.filter((x) => x.id !== id));
        } else {
            alert("Error")
        }
    }

    return <div className="home-page">
        <Banner title="Quản lý bài đăng" />

        <div className="container">
            <div className="row mb-3">
                <Link href="/admin/category/create">
                    <span className="btn btn-success">
                        Thêm danh mục</span></Link>
            </div>
            <div className="row mt-md-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên danh mục</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Người đăng</th>
                            <th scope="col">Người đăng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories && categories.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <th scope="row">{item.name}</th>
                                <th scope="row">{item.description}</th>
                                <th scope="row">Linh</th>
                                <th scope="row">
                                    <Link href={{
                                        pathname: "/admin/category/edit",
                                        query: { id: item.id },
                                    }}>
                                        <span className="btn btn-success">
                                            Sửa</span></Link> &ensp;|&ensp;
                                    <button className="btn btn-success" onClick={() => handleDelete(item.id)}>Xóa</button>
                                </th>
                            </tr>
                        ))}

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
}
CategoryManager.layout = Admin
export default CategoryManager