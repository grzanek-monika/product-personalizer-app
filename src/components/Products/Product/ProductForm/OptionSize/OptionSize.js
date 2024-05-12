import styles from './../ProductForm.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, setCurrentSize}) => {
    return(
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => 
              <li key={size.name}>
                <button type='button' onClick={() => setCurrentSize(size.name)}>
                  {size.name}
                </button>
              </li>)}        
            </ul>
        </div>
    )
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired
}

export default OptionSize;