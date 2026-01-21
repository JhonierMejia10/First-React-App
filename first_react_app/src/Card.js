import './Card.css'

function Card(props){
    const CardStyle = {
        backgroundColor : 'blue',
        border : '1px solid black',
        borderRadius : '8px',
        width : "100%"
    }
    return(
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card