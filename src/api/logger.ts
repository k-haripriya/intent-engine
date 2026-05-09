const isDev = __DEV__;
const format = (label: string, data: any) => {
  console.log(`\n====== ${label} ======`);
  console.log(JSON.stringify(data, null, 2));
};
export const logRequest = (config: any) => {
  if (!isDev) return;

  format('REQUEST', {
    url: config.url,
    method: config.method,
    headers: config.headers,
    body: config.data,
  });
};

export const logResponse = (response: any) => {
  if (!isDev) return;
  const config = response.config;
  format('REQUEST', {
    url: config.url,
    data: config.data,
  });
};

export const logError = (error: any) => {
  if (!isDev) return;

  format('ERROR', {
    message: error.message,
    url: error.config.url,
  });
};
