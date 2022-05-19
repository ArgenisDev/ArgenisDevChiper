// @ts-ignore
interface UseHTTPType {
  method: string;
  endpoint: string;
  body?: any;
}

export default async ({method, endpoint, body}: UseHTTPType) => {
  let base_url = 'https://api.reddit.com';

  const API = base_url;

  const url = `${API}/${endpoint}`;
  const entity =
    method === 'GET'
      ? {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      : {
          method: method,
          body: JSON.stringify({
            ...body,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
  try {
    console.log('useHTTP -> url', url);
    const response = await fetch(url, entity);
    console.log('useHTTP -> url', url, 'status request ->', response.status);
    const data = await response.json();

    if (data.code !== 403) {
      return [true, data];
    }
  } catch (e) {
    return [false, e];
  }
};
