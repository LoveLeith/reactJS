import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div className = "greetingContainer">
            <h1 className = "greetingStyle">{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer;