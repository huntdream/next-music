const BASE_URL = 'https://ncmusic.vercel.app';

type Params = {
  params: Record<string, any>;
};

type RequestOptions = RequestInit & Params;

const request = (url: string, options?: RequestOptions) => {
  let path = new URL(`${BASE_URL}${url}`);

  const { params, ...requestOptions } = options || {};

  if (params) {
    Object.entries(params).map(([key, value]) => {
      path.searchParams.set(key, value);
    });
  }

  return fetch(path, {
    credentials: 'include',
    ...requestOptions,
  }).then((res) => res.json());
};

export default request;
