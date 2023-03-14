export type ProductsType = {
    data: ProductType[];
    meta: ProductMetaType;
}

export type ProductMetaType = {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }
}

export type ProductType = {
    id: number;
    attributes: ProductAttributesType;
}

export type ProductAttributesType = {
    type: string;
    typeGroup: string;
    title: string;
    price: number;
    updatedAt: Date;
    publishedAt: Date;
    createdAt: Date;
    description: string;
    images: ImagesType;
    category: ProductCategoryType;
    diagnosesTable: DiagnosesTableType[]
}

export type ImagesType = {
    data: ImagesType[];
    attributes: ImageAttributesType;
}

export type ImageType = {
    id: number;
    attributes: ImageAttributesType;
}

export type ImageAttributesType = {
    name: string;
    alternativeText: string;
    url: string;

}

export type ProductCategoryType = {
    data: {
        attributes: {
            title: string;
            products: {
                data: ProductType[]
            }
        }
    }
}

export type DiagnosesTableType = {
    notes?: {
        id: number;
        text: string
    }[];
    percent?: string;
    specialists: string;
    id: number;
    diagnoses: DiagnoseType[];
}

export type DiagnoseType = {
    id: number;
    description: string;
}
export type SpecialistType = {
    id: number;
    attributes: {
        specialisation: string;

    }
}