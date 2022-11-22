
export interface IProducts {
    _id: string;
    name: string;
    text: string;
    price: number;
    photo: string;
}

export interface ITopProducts {
    id: string,
    title: string,
}

export interface ILabelInput {
    _id: string | number
    values: [] | null
}

export interface IParameters {
    id: number
    label: string
}

