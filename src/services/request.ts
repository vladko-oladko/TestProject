declare function alert(msg: string):undefined;

export const requestAPI = (url: string, {body, errMessage, ...options}: any = {}): Promise<any> => {
  const headers = options.headers ? new Headers(options.headers) : {};

  const fetchOptions = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
    ...options,
  };

  return fetch(url, fetchOptions)
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response),
    )
    .then((response) => response)
    .catch(() => alert(errMessage || 'Something went wrong'));
};

export default {};
