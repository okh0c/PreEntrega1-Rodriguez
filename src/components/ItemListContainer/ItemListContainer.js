import "./ItemListContainer.css"

function ItemListContainer(props){
    
    let greeting = props.greeting;

    return(

        <div className="main">
            <h2>{greeting}</h2>
        </div>

    )
}



export default ItemListContainer;