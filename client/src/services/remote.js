export default function* request (options) {
    const url = process.env.SERVER_BASE_URL + options.route;
    delete options.route;

    let statusCode;
    const returnData = {
        success: false,
        data: {},
        error: {}
    };
    return yield fetch (url, options)
        .then(response => {
            statusCode = response.status;
            if (statusCode === 200) {
                returnData.success = true;
            }
            if (statusCode >= 400 && (statusCode !== 409 && statusCode !== 422)){
                returnData.success = false;
                return returnData;
            }

            return response.json()
                .catch(err => {
                    if (options.method === 'GET') {
                        throw err;
                    } else {
                        console.warn('Invalid json response received.', err);
                        return '';
                    }
                })
        })
        .then(response => {
            if (returnData.success) {
                returnData.data = response;
            } else {
                returnData.error = 'fail';
            }
            return returnData;
        })
        .catch(error => {
            returnData.success = false;
            returnData.error.type = 422;
            returnData.error.message = 'Smth went wrong';
            console.error(error);
            return returnData;
        })
}

