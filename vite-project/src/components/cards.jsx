function Card(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <img  width={props.width} src={props.imagem} alt="carro ferrare" />
        </div>
    )
}
export default Card