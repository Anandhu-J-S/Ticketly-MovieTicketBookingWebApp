import * as yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;






export const basicSchema = yup.object().shape({
    email:yup.string().email("Enter a valid email").required("Required"),
    password:yup.string().min(5).matches(passwordRegex,{message: "Please create a stronger password"}).required("Required")
})