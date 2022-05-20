type ServuceResponse<T> = {
    status: number;
    data: T;
}

export const responseWrapper = <T>(status: number, data: T) => {
    const responseObject: ServuceResponse<T> = {
        status,
        data,
    };
    return responseObject;
}

export const responseSuccess = <T>(data: T) => {
    return responseWrapper(200, data);
}

export const responseError = <T>(status: number, error: T, details: any = undefined) => {
    if (details) {
        return responseWrapper(status, { error, details });
    }
    return responseError(status, { error });
}

export const SERVER_ERROR = 'Server Error';