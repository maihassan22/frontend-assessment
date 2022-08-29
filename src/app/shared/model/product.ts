export class Product{
    id?: 1;
    title?: String;
    price?: Number;
    description?: String;
    category?:String;
    image?: String;
    rating?: Rating;
}


export class Rating{
    rate?:Number;
    count?: Number;
}