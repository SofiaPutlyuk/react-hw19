import "./button.css"
export const Button = ({addImage}) => {
    return(
        <>
        <button onClick={addImage} className="button-load">Load more</button>
        </>
    )
}