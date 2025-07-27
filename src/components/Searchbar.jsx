import { useState, useCallback } from 'react'
import { ImageGallary } from './ImageGallery'
import { ItemsContext } from './ItemsContext'
import { ImageContext } from './ImageContext'
import { Modal } from './Modal'
import { Loader } from './Loader'
import "./searchbar.css"
import { Button } from './Button'
export const Searchbar = () => {
    const [query, setQuery] = useState("")
    const [images, setImages] = useState([])
    const [image, setImage] = useState(null)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const perPage = 12;
    const fetchImages = useCallback(async (searchTerm, pageNum = 1) => {
        setLoading(true);
        try {
            const key = "50531843-b8fbb02fd39d6518fd4d2cd71";
            const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${searchTerm}&page=${pageNum}&per_page=${perPage}`)
            const data = await response.json()
            if (pageNum === 1) {
                setImages(data.hits)
            } else {
                setImages(prev => [...prev, ...data.hits])
            }
        } catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false);
        }
    }, [perPage])
    const handleSearch = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setPage(1)
        fetchImages(query, 1)
    }
    const selectedImage = (image) => {
        setImage(image)
    }
    const handleLoadMore = () => {
        const nextPage = page + 1
        setPage(nextPage)
        fetchImages(query, nextPage)
    }

    return (
        <ImageContext.Provider value={{ image, setImage }}>
            <ItemsContext.Provider value={{ images, selectedImage }} >
                <div>
                    <header className="searchbar">
                        <form className="searchForm">
                            <button type="submit" className="searchForm-button" onClick={handleSubmit}>
                                <span className="button-label">Search</span>
                            </button>

                            <input
                                className="searchForm-input"
                                type="text"
                                autoComplete="off"
                                autoFocus
                                placeholder="Search images and photos"
                                onChange={handleSearch}
                            />
                        </form>
                    </header>
                    <ImageGallary />
                    {loading && <Loader />}
                    {!loading && images.length > 0 && <Button addImage={handleLoadMore} />}
                    {image && <Modal />}
                </div>
            </ItemsContext.Provider>
        </ImageContext.Provider>
    )
}