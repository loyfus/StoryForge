const TOKEN_KEY = 'auth_token';

/**
 * Obtém o token do localStorage.
 */
export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

/**
 * Salva o token no localStorage.
 * @param {string} token - Token a ser salvo.
 */
export const saveToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Remove o token do localStorage.
 */
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};
