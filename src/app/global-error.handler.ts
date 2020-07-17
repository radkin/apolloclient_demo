import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor() { }

    handleError(error: Error) {
        const err = {
            message: error.message ? error.message : error.toString(),
            stack: error.stack ? error.stack : ''
        };

        // Log  the error
        console.log(err);

        // Optionally send it to your back-end API

        // Re-throw the error
        throw error;
    }
}
