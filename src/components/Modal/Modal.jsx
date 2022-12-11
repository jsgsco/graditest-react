/* Componente de Modal Reutilizado de un Proyecto Personal */

import styled from 'styled-components'

const Modal = ({ children, stateModal, setStateModal, title = 'Ventana Modal', setEditing = null, formulario = null, setFormulario = null, view = null }) => {

    const handleExit = () => {
        setStateModal(false)
        if(formulario) {
            setEditing(false)
            setFormulario(formulario)
        }
    }

    return ( 
        <>
            {
                stateModal && 
                    <Overlay>
                        {
                            view ? (
                                <ContainerModal view>
                                    <HeaderModal>
                                        <h3>{title}</h3>
                                    </HeaderModal>

                                    <ButtonClose
                                        onClick={ () => handleExit() }
                                    >X</ButtonClose>

                                    {children}
                                </ContainerModal>
                            ) : (
                                <ContainerModal>
                                    <HeaderModal>
                                        <h3>{title}</h3>
                                    </HeaderModal>

                                    <ButtonClose
                                        onClick={ () => handleExit() }
                                    >X</ButtonClose>

                                    {children}
                                </ContainerModal>
                            )
                        }
                    </Overlay>
            }
        </>
     );
}
 
export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
`

const ContainerModal = styled.div`
    width: ${(props) => props.view ? '800px' : '550px'};
    min-height: 100px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    text-align: center;
`

const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: black;
        font-weight: bold;
    }
`

const ButtonClose = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: black;
    font-weight: bold;

    &:hover {
        background-color: #f2f2f2;
    }
`