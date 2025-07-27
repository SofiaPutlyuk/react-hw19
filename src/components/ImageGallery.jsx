import { ImageGallaryItem } from "./ImageGalleryItem"
import { useContext } from "react"
import { ItemsContext } from "./ItemsContext"
import "./gallery.css"
export const ImageGallary = () => {
    const { images } = useContext(ItemsContext)
    return (
        <ul className="gallery">
            {images.map((elem) => (
                <ImageGallaryItem key={elem.id} image={elem} />
            ))}
        </ul>
    )
}