import { ImagesType } from "../products/productTypes";

export type ServicesResponseType = {
    data: ServiceType[]
}

export type ServiceType = {
    id: number;
    attributes: ServiceAttributesType;
}

export type ServiceAttributesType = {
    title: string;
    description?: string;
    images?: ImagesType;
}