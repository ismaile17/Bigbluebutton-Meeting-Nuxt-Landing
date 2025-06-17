import { useAuthStore } from '@/stores/auth';

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
    login: login('POST')
};

function request(method: string) {
    return (url: any, body?: any) => {
        const requestOptions: any = {
            method,
            headers: authHeader(url)
        };

        if (body) {
            if (body instanceof FormData) {
                // FormData ise, Content-Type başlığını ayarlamayın
                requestOptions.body = body;
            } else {
                requestOptions.headers['Content-Type'] = 'application/json';
                requestOptions.body = JSON.stringify(body);
            }
        }

        return fetch(url, requestOptions).then(handleResponse);
    };
}

function login(method: string) {
    return (url: any, body?: any) => {
        const requestOptions: any = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            requestOptions.body = body;
        }
        return fetch(url, requestOptions).then(handleResponse);
    };
}

// Yardımcı fonksiyonlar

function authHeader(url: any) {
    const { user } = useAuthStore();

    const isLoggedIn = !!user?.accessToken;
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.accessToken}` };
    } else {
        return {};
    }
}

function handleResponse(response: any) {
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const { user, logout } = useAuthStore();
            if ([401, 403].includes(response.status) && user) {
                // Eğer 401 Unauthorized veya 403 Forbidden dönerse otomatik çıkış yap
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}



