import cookie from 'js-cookie'

export const setCookie = (key, value) => {
    if (window !== 'undefiend') {
        const date = new Date();
        date.setTime(date.getTime() + (60 * 2000));
        cookie.set(key, value, {
            expires: date
        }) 
    }
}

export const removeCookie = key => {
    if (window !== 'undefined') {
        const date = new Date();
        date.setTime(date.getTime() + (60 * 2000));
        cookie.remove(key, {
            expires: date 
        });
    }
};

export const getCookie = key => {
    if (window !== 'undefined') {
        return cookie.get(key);
    }
};

export const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

export const authenticate = (response, next) => {
    setCookie('token', response.data.token);
    setLocalStorage('user', response.data.data.name);
    next();
};

export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};

export const signout = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();
};

export const updateUser = (response, next) => {
    console.log('UPDATE USER IN LOCALSTORAGE HELPERS', response);
    if (typeof window !== 'undefined') {
        let auth = JSON.parse(localStorage.getItem('user'));
        auth = response.data;
        localStorage.setItem('user', JSON.stringify(auth));
    }
    next();
};