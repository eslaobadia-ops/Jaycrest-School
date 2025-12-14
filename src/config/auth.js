
export const getAuth = () => {
  try { return JSON.parse(localStorage.getItem("auth")); } catch { return null; }
}
export const setAuth = (auth) => localStorage.setItem("auth", JSON.stringify(auth));
export const clearAuth = () => localStorage.removeItem("auth");
