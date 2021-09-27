export type productItemTYPE = {
    brand: string; 
    product: string; 
    productType: Array<string>; 
    variantIndex: number;
    variants: Array<variantTYPE>;
}

export type variantTYPE = {
    variantId: number,
    variantColor: string,
    variantImage: string,
    variantSale: boolean,
    variantQuantity: number,
}