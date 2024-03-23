/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProdutos(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Produto 1</a>
            <a className={estilo}>Produto 2</a>
            <a className="collection-item">Produto 3</a>
            <a className="collection-item">Produto 4</a>
        </div>
    )
}