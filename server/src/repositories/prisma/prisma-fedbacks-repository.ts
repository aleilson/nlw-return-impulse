import { prisma } from "../../prisma";
import { FeedbackCretateData, FeedbacksRepository } from "../feebacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCretateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    };
}