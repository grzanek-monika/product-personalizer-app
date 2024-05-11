import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from './Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({name, title, basePrice, colors, sizes}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}
  
const getPrice = () => {
  const result = sizes.find(size => size.name === currentSize);
    return basePrice + result.additionalPrice; 
}

const addToCart = e => {
  e.preventDefault();
  console.log( `
      Summary
    ===========
    Name: ${title},
    Price: ${getPrice()},
    Size: ${currentSize},
    Color: ${currentColor}`
  )
}
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={addToCart}>
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
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => 
                <li key={color}>
                  <button type='button' 
                  onClick={() => setCurrentColor(color)}
                  className={clsx(prepareColorClassName(color), 
                    color === currentColor && styles.active)} >
                    {color}
                  </button>
                </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
}

export default Product;