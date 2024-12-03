import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const initialValues = {
    title: "",
    body: "",
};

const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = "Title is required";
    } else if (values.title.length < 3) {
        errors.title = "Title must be at least 3 characters";
    }
    if (!values.body) {
        errors.body = "Body is required";
    } else if (values.body.length < 10) {
        errors.body = "Body must be at least 10 characters";
    }
    return errors;
};

const AddNewPost = ({ handleAddNewPost }) => {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values, { resetForm }) => {
                handleAddNewPost(values);
                resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="form-group">
                        <Field
                            type="text"
                            name="title"
                            className="form-control mb-2"
                            placeholder="Title"
                        />
                        <ErrorMessage
                            name="title"
                            component="p"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group">
                        <Field
                            as="textarea"
                            name="body"
                            className="form-control mb-2"
                            placeholder="Body"
                            rows="4"
                        />
                        <ErrorMessage
                            name="body"
                            component="p"
                            className="text-danger"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success"
                        disabled={isSubmitting}
                    >
                        <FontAwesomeIcon icon={faPlus} /> Add Post
                    </button>
                </Form>
            )}
        </Formik>
    )
};

export default AddNewPost;