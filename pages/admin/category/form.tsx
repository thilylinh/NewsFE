import CategoryAPI from "lib/api/category";
import { useCallback, useEffect, useState } from "react";
import Router from "next/router";

const FormCategory = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [position, setPosition] = useState("");
    const [isLoading, setLoading] = useState(false);
    let { id } = props;

    useEffect(() => {
        if (id) {
            getCategoryById(id)
        }
    }, [])

    const getCategoryById = async (id) => {
        const { data, status } = await CategoryAPI.getById(id);
        if (status === 200) {
            //setData(data)
            console.log(data)
            setTitle(data.name)
            setDescription(data.description)
            setPosition(data.position)
        } else {
            alert("Error")
        }
    }

    const handleTitleChange = useCallback((e) => {
        setTitle(e.target.value)
    }, [])

    const handleDescriptionChange = useCallback((e) => {
        setDescription(e.target.value)
    }, [])

    const handlePositionChange = useCallback((e) => {
        setPosition(e.target.value)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let res;
        let statusRes;
        try {
            if (id) {
                const { data, status } = await CategoryAPI.edit(id, title, description, position);
                res = data;
                statusRes = status;
            } else {
                const { data, status } = await CategoryAPI.add(title, description, position);
                res = data;
                statusRes = status;
            }
            if (statusRes !== 200) {
                //setErrors(data.errors);
                alert("Error")
            }
            if (res) {
                Router.push("/admin/category/category-manager");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Tên danh mục</label>
                <input type="text" className="form-control" value={title} onChange={handleTitleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <textarea className="form-control" value={description} onChange={handleDescriptionChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Vị trí</label>
                <input type="text" className="form-control" value={position} onChange={handlePositionChange} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>{id ? "Cập nhật" : "Tạo mới"}</button>
        </form>
    </>
}

export default FormCategory