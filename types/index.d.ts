import { DOMAttributes } from "react";

export * from './graphql-types.d';
declare module "styled-components" {
    export interface DefaultTheme {
        // Your theme stuff here
    }
}

declare module "react" {
    interface Attributes {
        css?: CSSProp;
    }
}