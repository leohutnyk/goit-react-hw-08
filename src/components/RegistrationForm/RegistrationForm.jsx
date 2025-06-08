import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapper} autoComplete="off">
        <h1 className={css.heading}>Registration</h1>
        <div className={css.inputboxcontainer}>
          <Field
            className={css.inputbox}
            type="text"
            name="name"
            placeholder="Username"
            required
          />
          <FaUser className={css.icon} />
        </div>
        <div className={css.inputboxcontainer}>
          <Field
            className={css.inputbox}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <MdEmail className={css.icon} />
        </div>
        <div className={css.inputboxcontainer}>
          <Field
            className={css.inputbox}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <FaLock className={css.icon} />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
