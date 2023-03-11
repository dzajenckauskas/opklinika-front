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
    diagnoses: DiagnosesType[]
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

export type DiagnosesType = {
    diagnoses: {
        data: DiagnoseType[];

    };
    specialists: {
        data: SpecialistType[];
    }
    id: number;
    reimbursementPercentage: {
        data: {
            id: number;
            attributes: {
                value: string;
            }
        }
    }
}

export type DiagnoseType = {
    id: number;
    attributes: {
        code: string;
        description: string;
    }
    specialists: {
        data: SpecialistType[];
    }
}
export type SpecialistType = {
    id: number;
    attributes: {
        specialisation: string;

    }
}