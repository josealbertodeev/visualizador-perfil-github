const BASE_URL = 'https://api.github.com';

export async function fetchGithubProfile(userName) {
    if (!userName) return null;

    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`);

        if (!response.ok) return null;
        return await response.json();

    } catch (error) {
        console.error('Erro ao buscar perfil do usuário:', error);
        return null;
    }
}
