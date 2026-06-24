import { Nutriments } from "./nutriments";

export type Product = {
    code: string;
    productName: string;
    ecoscoreGrade?: string;
    ingredientsText: string;
    novaGroup: string;
    nutriscoreGrade: string;
    nutriments: Nutriments;
    nutriotionalDataPer: string;
};