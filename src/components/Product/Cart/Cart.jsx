import { useAPI } from '../../../hooks/useAPI'


function Cart() {

    const { shopCart } = useAPI()

    return (
        <div className="cart">
            {
                shopCart.map(item => (
                    <div className="cart_item" key={item.id}>
                        <div className="cart_item_product">
                            <h3>{item.title}</h3>
                            <h4>Size: {item.size}</h4>
                            <h4>{item.color}</h4>
                            {
                                item.compare_price && (
                                    <h4 className="compare">${item.compare_price}</h4>
                                )
                            }
                            <h4 className={ item.compare_price && "price"}>${item.price}</h4>
                        </div>
                        <div className="cart_item_accions">
                            <button>
                                Edit
                            </button>
                            <button>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart