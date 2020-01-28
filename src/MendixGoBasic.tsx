import { Component, ReactNode, createElement } from "react";
import { MendixGoBasicContainerProps } from "../typings/MendixGoBasicProps";

import "./ui/App.css";
import App from "./components/App";

class MendixGoBasic extends Component<MendixGoBasicContainerProps> {
    render(): ReactNode {
        return(
            createElement(App)
        )
    }
}

export default MendixGoBasic;
