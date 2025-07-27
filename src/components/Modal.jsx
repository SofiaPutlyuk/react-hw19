import { useContext } from "react"
import { ImageContext } from "./ImageContext"
import "./modal.css"
export const Modal = () => {
    const { image, setImage } = useContext(ImageContext)
    const handleClose = () => {
        setImage(null)
    }
    return (
        <div className="overlay" onClick={handleClose}>
            <div className="modal" >
                <img src={image} alt="" onClick={(e) => e.stopPropagation()} />
            </div>
        </div>
    )
}