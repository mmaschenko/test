// @flow

import API from '../../config/api.config';

async function query(path: string, method: string, args?: Object, headers?: {[string]: string}): Promise<*> {
    try {
        let response = await fetch(path, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            body: args ? JSON.stringify(args) : undefined
        });

        //Fix for RN 0.45 TODO update to 0.46
        setTimeout(() => null, 0);
        let responseJson = await response.json();
        return responseJson;
    } catch(error) {
        console.warn('SERVER_ERROR: ',error);
        return {
            type: 'SERVER_ERROR',
            error
        };
    }
}

export async function loginRequest(body: {email: string, password: string}): Promise<*> {
    const request = await query(
        `${API.API_URL}auth/login/`,
        "POST",
        body,
    );
    return Promise.resolve(request);
}

export async function getProfileRequest(token: string): Promise<*> {
    const request = await query(
        `${API.API_URL}users/current/`,
        "GET",
        undefined,
        {'Authorization': 'Bearer ' + token }
    );
    return Promise.resolve(request);
}

export async function getCategoriesRequest(token: string): Promise<*> {
    const request = await query(
        `${API.API_URL}categories`,
        "GET",
        undefined,
        {'Authorization': 'Bearer ' + token }
    );
    return Promise.resolve(request);
}

export async function getSpecificCategoryRequest(id: string, token: string): Promise<*> {
    const request = await query(
        `${API.API_URL}categories/${id}`,
        "GET",
        undefined,
        {'Authorization': 'Bearer ' + token }
    );
    return Promise.resolve(request);
}

