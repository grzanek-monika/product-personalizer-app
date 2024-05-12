import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import OptionColor from './OptionColor/OptionColor.js';
import OptionSize from './OptionSize/OptionSize.js';
import Button from "./Button/Button.js";

const ProductForm = ({addToCart, sizes, setCurrentSize, setCurrentColor, colors, currentColor}) => {    
    return(
        <form onClick={addToCart}>
          <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} />
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

ProductForm.propTypes = {
  addToCart: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired
}

export default ProductForm;