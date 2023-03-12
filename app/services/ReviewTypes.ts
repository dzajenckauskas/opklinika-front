export type ReviewsResponseType = {
    data: ReviewType[]
}

export type ReviewType = {
    rate: number;
    review?: string;
    customer: string;
}