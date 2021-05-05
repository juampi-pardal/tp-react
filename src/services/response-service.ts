import { Response } from 'express';

export function successResponse<T>(DATA: T, res: Response) {
    res.status(200).json(
        DATA
    );
}

export function failureResponse(message: string, DATA: any, res: Response) {
    res.status(400).json({
        MESSAGE: message,
        DATA
    });
}
