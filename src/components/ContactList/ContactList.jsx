import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";
// import { selectAllContacts } from "../../redux/contacts/selectors";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (filteredContacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact
            contact={contact}
            onDelete={() => handleDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
