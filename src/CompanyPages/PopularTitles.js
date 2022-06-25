import "../StyleAndImg/style.css";

const PopularTitle = (props) => {
    return (
        <div className="grid-container">
            {props.titles.map(item => (
                <div id ="grid-text" className="grid-item"> {item} </div>
            ))}
        </div> 
    )
}

export default PopularTitle