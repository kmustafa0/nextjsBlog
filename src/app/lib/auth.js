export const isAuth = (cookies) => {
  const env = process.env.NODE_ENV;
  if (env == "development") {
    const developmentToken = "next-auth.session-token";
    if (cookies.has(developmentToken)) {
      return true;
    }
  } else if (env == "production") {
    const productionToken = "__Secure-next-auth.session-token";
    if (cookies.has(productionToken)) {
      return true;
    }
  }
  return false;
};
