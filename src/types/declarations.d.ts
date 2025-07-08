declare module "../../../../assets/globe" {
  export function createGlobe(containerId: string): void;
}

// Tell TypeScript we have a JS module named PerspectiveTransform
declare module "@/utils/PerspectiveTransform" {
  export class PerspectiveTransform {
    constructor(element: HTMLElement, width: number, height: number);
    topLeft: { x: number; y: number };
    topRight: { x: number; y: number };
    bottomLeft: { x: number; y: number };
    bottomRight: { x: number; y: number };
    checkError(): boolean;
    calc(): void;
    update(): void;
    style: CSSStyleDeclaration;
    hasError: boolean;
  }

  export const PerspectiveTransform: typeof PerspectiveTransform;
  export const transformStyleName: string;
  export const transformOriginStyleName: string;
}