import Cookies from 'universal-cookie';

const cookies = new Cookies();

// server

export function serverGetCookies(request, name) {
    return request.universalCookies.get(name);
}

// client

export function clientSetCookies(name, data, path, lifeTime) {
    return cookies.set(name, data, {path: path, maxAge: lifeTime});
}

export function clientGetCookies(name) {
    return cookies.get(name);
}

export function clientRemoveCookies(name, path) {
    return cookies.remove(name, {path: path});
}