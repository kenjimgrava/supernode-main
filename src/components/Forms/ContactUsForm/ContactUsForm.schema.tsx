import * as Yup from "yup";

const schema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email"),
    rfc: Yup.string().required("Required"),
    details: Yup.string().required("Required").trim(),
});

export default schema;
