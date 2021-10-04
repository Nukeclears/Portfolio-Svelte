export type productItemTYPES = Array<productItemTYPE>

export type productItemTYPE = {
    brand: string; 
    product: string; 
    productType: Array<string>; 
    variantIndex: number;
    variants: variantTYPES;
}

export type variantTYPES = Array<variantTYPE>;

export type variantTYPE = {
    variantId: number,
    variantColor: string,
    variantImage: string,
    variantSale: boolean,
    variantQuantity: number,
}

