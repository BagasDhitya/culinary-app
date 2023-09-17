export interface Button {
    id: string;
    label?: string,
    onClick?: () => void
}

export interface Card {
    id: string;
    children?: React.ReactNode
}