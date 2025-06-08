import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapper} autoComplete="off">
        <h1 className={css.heading}>Please log in</h1>
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
