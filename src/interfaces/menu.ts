interface Menu {
    menutitle: string
    items : Item[]
}

interface Item {
    id: number
    seq: number
    itemTitle: string
    itemDescription: string
    photoUrl: string
    price: string
    disabled: boolean
}
 
export type {Menu, Item}