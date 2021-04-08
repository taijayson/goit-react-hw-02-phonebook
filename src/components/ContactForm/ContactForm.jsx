import { Component } from "react"
import styles from "./ContactForm.module.css"
import PropTypes from "prop-types"

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit({ ...this.state })
        this.setState({ name: "", number: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
            <label className={styles.label}>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                className={styles.input}
                value={this.state.name}
                onChange={this.handleChange}
            />
            <label className={styles.label}>Number</label>
            <input
                type="tel"
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                required
                className={styles.input}
                value={this.state.number}
                onChange={this.handleChange}
            />
            <button className={styles.button} type="submit" onSubmit={this.handleAddContact}>
            Add contact
            </button>    
        </form>
        )
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm