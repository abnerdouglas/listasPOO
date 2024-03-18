import { Component } from "react";

type props = {
    tema: string
}

export default class Home extends Component<props>{
    render() {
        return (
            <p> Ola! Seja Bem vindo(a) ao Grupo World Beauty! </p>
        )
    }
}