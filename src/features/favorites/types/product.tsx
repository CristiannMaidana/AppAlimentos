import { Nutriments } from "./nutriments";

export type Product = {
    code: string;
    productName: string;
    ecoscoreGrade?: string;
    ingredientsText: string;
    novaGroup: number;
    nutriscoreGrade: string;
    nutrientes: Nutriments;
    nutriotionalDataPer: string;
};