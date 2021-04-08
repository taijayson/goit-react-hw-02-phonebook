import styles from "./ContactList.module.css"
import PropTypes from "prop-types"

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={styles.item} key={id}>
            {name + " : " + number}
            <button
                className={styles.delete_btn}
                onClick={() => onRemoveContact(id)}
            >
                Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList
