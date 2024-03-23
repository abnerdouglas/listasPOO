/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaServicos(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <a className="collection-item">Servicos 1</a>
            <a className={estilo}>Servicos 2</a>
            <a className="collection-item">Servicos 3</a>
            <a className="collection-item">Servicos 4</a>
        </div>
    )
}