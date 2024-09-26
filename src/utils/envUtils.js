const getEnvVariable = (varName) => {
  const value = import.meta.env[varName];
  if (!value) {
    throw new Error(`${varName} is not defined in .env file`);
  }
  return value;
};

export const getBaseUrl = () => {
  return getEnvVariable("VITE_REACT_APP_BASE_URL");
};

export const getFireBaseAPI = () => {
  return getEnvVariable("VITE_REACT_APP_FIREBASE");
};

export const getDomain = () => {
  return getEnvVariable("VITE_REACT_APP_AUTH_DOMAIN");
};

export const getProjectID = () => {
  return getEnvVariable("VITE_REACT_APP_PROJECT_ID");
};
export const getBucket = () => {
  return getEnvVariable("VITE_REACT_APP_STORAGE_BUCKET");
};
export const getSenderID = () => {
  return getEnvVariable("VITE_REACT_APP_MESSAGING_SENDER_ID");
};
export const getAppID = () => {
  return getEnvVariable("VITE_REACT_APP_APP_ID");
};
