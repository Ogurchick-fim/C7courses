// src/utils/PerspectiveTransform.ts

export class PerspectiveTransform {
  element: HTMLElement;
  width: number;
  height: number;
  style: CSSStyleDeclaration;

  topLeft = { x: 0, y: 0 };
  topRight = { x: 0, y: 0 };
  bottomLeft = { x: 0, y: 0 };
  bottomRight = { x: 0, y: 0 };
  hasError: boolean = false;

  static transformStyleName: string = 'transform';
  static transformOriginStyleName: string = 'transformOrigin';

  constructor(element: HTMLElement, width: number, height: number) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.style = element.style;
  }

  checkError(): boolean {
    return (
      isNaN(this.topLeft.x) || isNaN(this.topLeft.y) ||
      isNaN(this.topRight.x) || isNaN(this.topRight.y) ||
      isNaN(this.bottomLeft.x) || isNaN(this.bottomLeft.y) ||
      isNaN(this.bottomRight.x) || isNaN(this.bottomRight.y)
    );
  }

  calc(): void {
    const w = this.width;
    const h = this.height;

    const tl = this.topLeft;
    const tr = this.topRight;
    const bl = this.bottomLeft;
    const br = this.bottomRight;

    const a = tr.x - tl.x;
    const b = tr.y - tl.y;
    const c = bl.x - tl.x;
    const d = bl.y - tl.y;
    const e = tr.x + bl.x - tl.x - br.x;
    const f = tr.y + bl.y - tl.y - br.y;

    const g = (a * f - b * e) / (c * f - d * e);
    const hValue = (g * d - b) / f;

    const matrix = [
      a + g * c, b + g * d,
      e, f,
      tl.x, tl.y
    ];

    this.setTransform(matrix);
  }

  setTransform(matrix: number[]): void {
    const [a, b, c, d, tx, ty] = matrix;
    this.style[PerspectiveTransform.transformStyleName as any] =
      `matrix3d(${a},${b},0,0, ${c},${d},0,0, 0,0,1,0, ${tx},${ty},0,1)`;
  }

  update(): void {
    if (!this.hasError) {
      this.calc();
    } else {
      this.style[PerspectiveTransform.transformStyleName as any] = 'translate3d(-8192px, 0, 0)';
    }
  }
}