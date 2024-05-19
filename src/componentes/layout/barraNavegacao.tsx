import React, { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

interface BarraNavegacaoProps {
    tema: string;
    botoes: string[];
    seletorView: (valor: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const BarraNavegacao: React.FC<BarraNavegacaoProps> = ({ tema, botoes, seletorView }) => {
    const [navInitialized, setNavInitialized] = useState(false);

    useEffect(() => {
        if (!navInitialized) {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
            setNavInitialized(true);
        }
    }, [navInitialized]);

    const gerarListaBotoes = () => {
        if (botoes.length <= 0) {
            return null;
        } else {
            return botoes.map(valor =>
                <li key={valor}><a href="/" onClick={(e) => selecionarView(valor, e)}>{valor}</a></li>
            );
        }
    };

    const selecionarView = (valor: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        seletorView(valor, e);
    };

    return (
        <>
            <nav className={tema}>
                <div className="nav-wrapper row">
                    <a href="/" className="brand-logo">Grupo WB</a>
                    <a href="/" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    );
};

export default BarraNavegacao;
