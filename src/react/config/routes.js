const APP_URL_BASE = '/';

export const formatUrlForRouter = url => {
  return url.replace(/{/g, ':').replace(/}/g, '');
};

export const getHomeUrl = () => APP_URL_BASE;
