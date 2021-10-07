import { IMagicElement } from "../components/MagicGrid/MagicGrid.types";

export class DataExpert {
  public static createDataElement(state: boolean): IMagicElement {
    return { state, key: Math.random().toString() } as IMagicElement
  }
  public static composeData(matrix: boolean[][]): IMagicElement[][] {
    return matrix.map((row, rowIndex) =>
      row.map((state, elemIndex) => (DataExpert.createDataElement(state)))
    )
  }
  public static generateData(size: number): boolean[][] {
    let matrix: boolean[][] = [];
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
      matrix.push([]);
      for (let columnIndex = 0; columnIndex < size; columnIndex++) {
        matrix[rowIndex].push(Math.round(Math.random()) as unknown as boolean);
      }
    }
    return matrix;
  }
  public static isSameData(first: IMagicElement[][], second: IMagicElement[][]): boolean {
    return !first.some((firstRow, rowIndex) => {
      return firstRow.some((element, columnIndex) => {
        return element !== second[rowIndex][columnIndex]
      })
    });
  }
}

export default DataExpert;