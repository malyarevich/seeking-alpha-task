import DataExpert from "../../services/DataExpert.service";
import { IMagicElement } from "../MagicGrid/MagicGrid.types";

export class GameBoardService {
    public static nextTick(data: IMagicElement[][]): IMagicElement[][] {
        return data.map((row, rowIndex) => row.map((item, columnIndex) => GameBoardService.getNextState(data, rowIndex, columnIndex)))
    }

    /** count of alive (1-9)/(N)eighbors (E)lement
     * 1|2|3
     * 4|E|6
     * 7|8|9
     */
    public static getAliveNeighborsCount(data: IMagicElement[][], rowIndex: number, columnIndex: number): number {
        let count = 0;
        if (rowIndex - 1 >= 0 && columnIndex - 1 >= 0 && data[rowIndex - 1][columnIndex - 1].state) {//1
            count++;
        }
        if (rowIndex - 1 >= 0 && data[rowIndex - 1][columnIndex].state) {//2
            count++;
        }
        if (rowIndex - 1 >= 0 && columnIndex + 1 < data[rowIndex].length && data[rowIndex - 1][columnIndex + 1].state) {//3
            count++;
        }
        if (columnIndex - 1 >= 0 && data[rowIndex][columnIndex - 1].state) {//4
            count++;
        }
        if (columnIndex + 1 < data[rowIndex].length && data[rowIndex][columnIndex + 1].state) {//6
            count++;
        }
        if (rowIndex + 1 < data.length && columnIndex - 1 >= 0 && data[rowIndex + 1][columnIndex - 1].state) {//7
            count++;
        }
        if (rowIndex + 1 < data.length && data[rowIndex + 1][columnIndex].state) {//8
            count++;
        }
        if (rowIndex + 1 < data.length && columnIndex + 1 < data[rowIndex].length && data[rowIndex + 1][columnIndex + 1].state) {//9
            count++;
        }
        return count;
    }

    /** get next state of (E)lement by his (N)eighbors
     * N|N|N
     * N|E|N
     * N|N|N
     */
    public static getNextState(data: IMagicElement[][], rowIndex: number, columnIndex: number): IMagicElement {
        const aliveNeighborsCount = GameBoardService.getAliveNeighborsCount(data, rowIndex, columnIndex)
        if (data[rowIndex][columnIndex].state && (aliveNeighborsCount === 2 || aliveNeighborsCount === 3)) {
            return data[rowIndex][columnIndex]
        }
        if (!data[rowIndex][columnIndex].state && aliveNeighborsCount === 3) {
            return DataExpert.createDataElement(true)
        }
        if (data[rowIndex][columnIndex].state) {
            return DataExpert.createDataElement(false)
        } else {
            return data[rowIndex][columnIndex]
        }
    }
}

export default GameBoardService;
