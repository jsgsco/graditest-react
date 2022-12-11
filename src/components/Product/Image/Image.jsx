import { useAPI } from '../../../hooks/useAPI'
import { useState } from 'react'
import Modal from '../../Modal/Modal'

function Image() {

    const { data } = useAPI()
    const { featured_image, title, images } = data

    const [stateModal, setStateModal] = useState(false)
    const [urlImage, setUrlImage] = useState('')

    const upImage = (url) => {
        setUrlImage(url)
        setStateModal(true)
    }

    return (
        <>
            <div className="product_image">
                <div className="product_image_wrapper">
                    <img src={featured_image} alt={title} />
                </div>
                <div className="product_image_more">
                    {
                        images.map(item => (
                        <div className="product_image_more_item" key={item}>
                            <img 
                                src={item} 
                                alt={item}
                                onClick={() => upImage(item)}
                            />
                        </div>
                        ))
                    }
                </div>
                <div className="product_image_more2">
                    {
                        images.map(item => (
                        <div className="product_image_more2_item2" key={item}>
                            <img 
                                src={item} 
                                alt={item}
                                onClick={() => upImage(item)}
                            />
                        </div>
                        ))
                    }
                </div>
            </div>
            <Modal
                stateModal={stateModal}
                setStateModal={setStateModal}
                view="view"
                title="Free Trainer 3 / MMW"
            >
                {
                    urlImage && (
                    <img src={urlImage} className="up-image" />
                    )
                }
            </Modal>
        </>
    );
}

export default Image;