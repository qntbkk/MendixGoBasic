import { Component, ReactNode, createElement } from "react";
import { MendixGoBasicPreviewProps } from "../typings/MendixGoBasicProps";
import App from "./components/App";

declare function require(name: string): string;

export class preview extends Component<MendixGoBasicPreviewProps> {
    render(): ReactNode {
        return(
            createElement(App)
        )
    }
}

export function getPreviewCss(): string {
    return require("./ui/App.css");
}
