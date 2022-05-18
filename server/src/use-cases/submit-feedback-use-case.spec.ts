import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn(); // fn function spy without funcionality.
const sendMailSpy = jest.fn();

describe('Submit feedback', () => {
    const submiFeedback = new SubmitFeedbackUseCase(
        { create: createFeedbackSpy },
        { sendMail: sendMailSpy }
    )

    it('should be able to submit a feedback', async () => {
        await expect(submiFeedback.execute({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64dasdasdsa'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => {
        await expect(submiFeedback.execute({
            type: '',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64dasdasdsa'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async () => {
        await expect(submiFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64dasdasdsa'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with a invalid screenshot', async () => {
        await expect(submiFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });
});