import { useContext } from "react"
import { ItemsContext } from "./ItemsContext"
import './gallaryitem.css'
export const ImageGallaryItem = ({ image }) => {
  const { selectedImage } = useContext(ItemsContext)
  return (
    <>
      <li onClick={() => { selectedImage(image.largeImageURL) }} className="item">
        <img src={image.webformatURL} alt={image.tags} className="item-image" />
      </li>
    </>
  )
}