import fetch from 'node-fetch';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default async function fetchAPI(query, { variables } = {}) {
    let res, json;

    const updateToken = async () => {
        const tokenData = await getToken();
        token = tokenData;
        setTokenCooky(tokenData);
    };

    const getData = async () => {
        res = await fetch(import.meta.env.VITE_SQUIDEX_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token.token_type} ${token.access_token}`,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });
        json = await res.json();
    };

    let token = getTokenCooky();

    if (!token) {
        await updateToken();
    }

    await getData();

    if (!json.data && json.message === 'Unauthorized') {
        await updateToken();
        await getData();
    }

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    if (!json.data && json.message) {
        console.error(json.message);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

async function getToken() {
    const res = await fetch(import.meta.env.VITE_SQUIDEX_TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_SQUIDEX_CLIENTID}&client_secret=${import.meta.env.VITE_SQUIDEX_CLIENTSECRET}&scope=squidex-api`,
    });
    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json;
}

function setTokenCooky(token, expires_in) {
    const d = new Date(expires_in);
    cookies.set('neturu_token', token, { expires: d });
}

function getTokenCooky() {
    const cookieValue = cookies.get('neturu_token');

    return cookieValue;
}
