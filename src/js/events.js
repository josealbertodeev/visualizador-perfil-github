import { fetchGithubProfile } from './api.js';
import { renderProfile } from './render.js';

export function setupEvents() {
    const btnSearch = document.getElementById('btn-search');
    const inputSearch = document.getElementById('input-search');
    const profileResults = document.querySelector('.profile-results');

    async function handleSearch() {
        const userName = inputSearch.value;
        if (!userName) {
            alert('Por favor, digite um nome de usuário do GitHub.');
            renderProfile(profileResults, null);
            return;
        }
        profileResults.innerHTML = '<p class="loading">Carregando...</p>';
        const data = await fetchGithubProfile(userName);
        if (!data) {
            alert('Usuário não encontrado no GitHub, tente novamente.');
            renderProfile(profileResults, null);
            return;
        }
        renderProfile(profileResults, data);
    }

    btnSearch.addEventListener('click', handleSearch);
    inputSearch.addEventListener('keydown', e => e.key === 'Enter' && handleSearch());
}
