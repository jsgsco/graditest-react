import { useState } from 'react'
import Info from './components/Product/Info/Info'
import Image from './components/Product/Image/Image'
import Modal from './components/Modal/Modal'
import Cart from './components/Product/Cart/Cart'

import { APIProvider } from './context/APIContext'

function App() {

  const [stateModalCart, setStateModalCart] = useState(false)

  return (
    <APIProvider> 
      <div className="slider">
        <div className="row">  
          <div className="col-6">
            <Info 
              setStateModalCart={setStateModalCart}
            />
          </div>
          <div className="col-6">
            <Image />
          </div>
        </div>
      </div>
      <Modal
          stateModal={stateModalCart}
          setStateModal={setStateModalCart}
          view="view"
          title="Shopping Cart"
      >
          <Cart />
      </Modal>
    </APIProvider>
  )
}

export default App
