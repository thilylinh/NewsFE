import { useCallback, useEffect, useState } from "react";
import PostApi from "lib/api/post.api";
import dynamic from "next/dynamic";
import Router, { useRouter } from "next/router";
import CategoryAPI from "lib/api/category";
import useSWR from "swr";
import storage from "lib/utils/storage";
const CKeditor = dynamic(() => import("../../../components/common/Ckeditor"), { ssr: false });

const PostForm = (props: any) => {
    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState()
    const [imageDisplay, setImageDisplay] = useState("")
    const [categoryId, setCatgoriId] = useState("")
    const [isLoading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

    const { data: currentUser } = useSWR("user", storage);
    let { idPost } = props;

    const router = useRouter()
    const {
        query: { id },
    } = router

    useEffect(() => {
        getCategories();
        console.log(currentUser)
        if (idPost || id) {
            let idp = idPost || id
            getPostById(idp)
        }
    }, [])

    const getPostById = async (id: any) => {
        const { data, status } = await PostApi.getPostById(id);
        if (status === 200) {
            console.log(data)
            setTitle(data.tiltle)
            setSubTitle(data.subTitle)
            setContent(data.content)
            setCatgoriId(data.categoryId)
            setImageDisplay(data.urlImage)
        }
    }

    const getCategories = async () => {
        try {
            const { data, status } = await CategoryAPI.getAll();
            if (status === 200) {
                setCategories(data)
            } else {
                console.log("err")
            }
        } catch (err) {
            console.log("err category", err)
        }
    }

    const titleChange = useCallback((e: any) => {
        setTitle(e.target.value)
    }, [])

    const subTitleChange = useCallback((e: any) => {
        setSubTitle(e.target.value)
    }, [])

    const subImageChange = useCallback((e: any) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }, [])

    const handleCategoryChange = useCallback((e: any) => {
        console.log(e.target.value)
        if (e.target.value !== "") {
            setCatgoriId(e.target.value);
        }
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            let res;
            let statusRes;
            if (id) {
                const { data, status } = await PostApi.edit(id, title, subTitle, content, image, categoryId, 1);
                res = data;
                statusRes = status;
            } else {
                const { data, status } = await PostApi.add(title, subTitle, content, image, categoryId, 1);
                res = data;
                statusRes = status;
            }
            if (statusRes !== 200) {
                //setErrors(data.errors);
                alert("Lỗi")
            }
            if (res) {
                Router.push("/admin/post/post-manager");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const removeAdvertisement = () => {
        if (content !== "" && content != null) {
            let contentTemp = content;
            let indexImg = contentTemp.indexOf("<iframe");
            debugger
            while (indexImg > -1) {
                debugger
                let chuoiDau = contentTemp.substring(0, indexImg);
                let indexCuoiImg = contentTemp.indexOf("/iframe>", indexImg + 1);
                //
                let chuoiCuoi = contentTemp.substring(indexCuoiImg + 8);
                contentTemp = chuoiDau + chuoiCuoi;
                indexImg = contentTemp.indexOf("<iframe");
            }
            console.log("contentTemp", contentTemp)
            setContent(contentTemp);
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                <input type="text" className="form-control" placeholder="Tiêu đề" value={title} onChange={titleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Phụ đề</label>
                <input type="text" className="form-control" placeholder="Phụ đề" value={subTitle} onChange={subTitleChange} />
            </div>
            <div className="form-group">
                <label>Nội dung</label>
                <CKeditor
                    value={content}
                    onChange={(v: any) => setContent(v)}
                />
            </div>
            <div className="form-group">
                <label>Ảnh</label>
                <input type="file" className="form-control" onChange={subImageChange} />

                {(image || imageDisplay) && <img className="image-pre" src={image ? URL.createObjectURL(image) : imageDisplay} />}
            </div>
            <div className="form-group">
                <label>Danh mục</label>
                <select className="form-select" onChange={handleCategoryChange} value={categoryId}>
                    <option value="">Chọn danh mục</option>
                    {categories && categories.map((item: any, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>{id ? "Cập nhật" : "Tạo mới"}</button>
        </form>
        <div className="row mt-3">
            <div className="col-md-3">
                <button type="button" className="btn btn-primary" onClick={removeAdvertisement}>Loại bỏ quảng cáo</button>
            </div>
        </div>
    </>
}

export default PostForm