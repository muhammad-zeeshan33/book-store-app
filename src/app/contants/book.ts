export class Book {
    id: number = 0;
    title: string = '';
    description: string = '';
    price: number = 0;
    coverImg : string = '';
    discountRate: number = 0;
    constructor(id: number, title: string, description: string, price: number, coverImg: string, discountRate: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.coverImg = coverImg;
        this.discountRate = discountRate;
    }
    
}