import Admin from "layouts/admin"
import FormCategory from "./form"

const CreateCategory = () => {
    return <>
        <div className="container">
            <div className="row">
                <FormCategory />
            </div>
        </div>
    </>
}

CreateCategory.layout = Admin
export default CreateCategory