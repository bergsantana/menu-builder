interface Menu {
    _id?: string
    menutitle: string
    ownerId: string,
     
    items : Item[]
}

interface Item {
    _id?: string
    id: number
    seq: number
    itemTitle: string
    itemDescription: string
    photoUrl: string
    price: string
    disabled: boolean
}
 
export type {Menu, Item}