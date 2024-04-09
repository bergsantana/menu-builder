export default interface Menu {
    menutitle: string
    items: [
        {
            id: number
            itemTitle: string
            itemDescription: string
            photoUrl: string
            price: string
            disabled: boolean
        }
    ]
}