import { useState, useRef } from 'react'
import parse from 'html-react-parser'
import { useAPI } from '../../../hooks/useAPI'

function Info({setStateModalCart}) {

    const ref = useRef(null)
    const refColor = useRef(null)

    const { data, itemSelect, setItemSelect, shopCart, setShopCart } = useAPI()
    const { price, compare_at_price, title, options, description, variants } = data
    const size = options[1].values
    const color = options[0].values

    const newSize = size.map(item => {
        return {
          option2: item,
          id: item
        }
      })

    const [sizes, setSizes] = useState(newSize)

    const handleToggleClasslistRefColor = (ref) => {
        if (!ref.current) {
            return;
        }
        if (!ref.current.classList.contains("active-color")) {
            ref.current.classList.add("active-color")
        } else {
            ref.current.classList.remove("active-color")
            ref.current = null
        }
    }

    const handleToggleClasslistRef = (ref) => {
        if (!ref.current) {
            return;
        }
        if (!ref.current.classList.contains("active-size")) {
            ref.current.classList.add("active-size")
        } else {
            ref.current.classList.remove("active-size")
            ref.current = null
        }
      }

    const getItemSelect = item => {
        setItemSelect({
          ...itemSelect,
          title: item.name,
          price: item.price,
          id: item.id,
          size: item.option2,
          color: item.option1,
          compare_price: item.compare_at_price
        })
    }


    const handleColor = e => {
        handleFilter(e.target.className)
    }

    const handleFilter = (variant) => {
        // eslint-disable-next-line
        const resultFilter = variants.filter((vari) => {
            if(vari.option1.toString().toLowerCase().includes(variant.toLowerCase())) {
                return vari
            }
        }) 
        setSizes(resultFilter)
    }

    const handleAddtoCart = () => {

        if(!itemSelect.size.trim()) {
          return
        }
  
        if(!itemSelect.color.trim()) {
          return
        }
  
        setShopCart([
          ...shopCart,
          itemSelect
        ]) 
  
    }

    return (
        <div className="product">
            <div className="product_wrapper">
                <div className="product_price">
                    <span>SALE ${price}</span>
                    <span>${compare_at_price}</span>
                </div>
                <div className="product_name">
                    <h2>{title}</h2>
                </div>
                <div className="product_size">
                    <h3>SIZE</h3>
                    <div className="product_size_wrapper">
                        {
                            sizes.map(item => (
                                <div 
                                key={item.id}
                                onClick={(event) => {
                                    getItemSelect(item)
                                    handleToggleClasslistRef(ref);
                                    event.stopPropagation();
                                    ref.current = event.target;
                                    handleToggleClasslistRef(ref);
                                  }}
                                >{item.option2}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="product_color">
                    <h3>COLORS</h3>
                    <div className="product_color_wrapper">
                        {
                            color.map(item => (
                                <div 
                                    key={item}
                                    onClick={(event) => {
                                        handleColor(event);
                                        handleToggleClasslistRefColor(refColor);
                                        event.stopPropagation();
                                        refColor.current = event.target;
                                        handleToggleClasslistRefColor(refColor);
                                    }}
                                >
                                <div className={item}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product_description">
                    <p>
                        {
                        parse(description)
                        }
                    </p>
                </div>
                <div className="product_tocart">
                    <button
                        type="button"
                        onClick={handleAddtoCart}
                    >Add to Cart</button>
                    {
                        shopCart.length >= 1 && (
                            <button
                                type="button"
                                onClick={ () => setStateModalCart(true) }
                            >Shop</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Info;