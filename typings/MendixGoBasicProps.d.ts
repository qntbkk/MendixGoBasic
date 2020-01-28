/**
 * This file was generated from MendixGoBasic.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface MendixGoBasicContainerProps extends CommonProps {
    sampleText?: string;
}

export interface MendixGoBasicPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    sampleText?: string;
}

export interface VisibilityMap {
    sampleText: boolean;
}
