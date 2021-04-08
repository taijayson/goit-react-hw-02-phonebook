import PropTypes from "prop-types"
import styles from "./Filter.module.css"

const Filter = ({ filter, onChange }) => {
  return (
    <div className={styles.filter_wrap}>
      <p className={styles.filter_title}>Find contacts by name</p>
          <input
            className={styles.filter_input}
            type="text"
            value={filter}
            onChange={onChange}
          />
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}

export default Filter
