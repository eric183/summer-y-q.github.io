import { DOMAttributes } from "react";

export * from './graphql-types.d';
declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme {
        // Your theme stuff here
    }
}

declare module "react" {
    interface Attributes {
        css?: CSSProp;
    }
}
// declare module 'three.meshline';
