import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactEditor.module.css";

export default function ContactEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (name !== "" && number !== "") {
      dispatch(addContact({ name, number }));
      form.reset();
      return;
    }

    alert("Please fill in both name and number.");
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.field} type="text" name="name" placeholder="Name" />
      <input
        className={css.field}
        type="text"
        name="number"
        placeholder="Phone number"
      />
      <button className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
}
