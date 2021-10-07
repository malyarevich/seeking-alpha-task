export interface IMagicGridProps<T> {
    data: T[][];
}

export interface IMagicElement {
    state: boolean;
    key: string;
}