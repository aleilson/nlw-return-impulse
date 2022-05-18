export interface FeedbackCretateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCretateData) => Promise<void>;
}