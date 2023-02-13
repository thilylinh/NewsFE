import Admin from "layouts/admin"
import { useRouter } from "next/router"
import FormCategory from "./form"

const EditCategory = () => {
    const router = useRouter()
    const {
        query: { id },
    } = router
    return <>
        <div className="container">
            <div className="row">
                <FormCategory id={id} />
            </div>
        </div>
    </>
}

EditCategory.layout = Admin
export default EditCategory