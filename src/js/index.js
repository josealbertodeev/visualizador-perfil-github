import { setupEvents } from './events.js';

setupEvents();

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        profileResults.innerHTML = /*html*/`<p class="loading">Carregando...</p>`;

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`)

            if (!response.ok) {
                alert('Usuário não encontrado no GitHub, tente novamente.');
                profileResults.innerHTML = '';
                return;
            }

            const data = await response.json();

            profileResults.innerHTML =`
                <div class="profile-card">
                    <img src="${data.avatar_url}" alt="Foto de ${data.name}" class="profile-avatar"/> 
                    <div class="profile-info">
                        <h2>${data.name || "Nome não disponível"}</h2>
                        <p>${data.bio || "Não possui bio cadastrada 😢."}</p>
                    </div>
                </div>

                <div class="profile-counters">
                    <div class="followers">
                        <h4>👥 Seguidores</h4>
                        <span>${data.followers}</span>
                    </div>
                    <div class="following">
                        <h4>👥 Seguindo</h4>
                        <span>${data.following}</span>
                    </div>
                </div>
            `;

        } catch (error) {
            console.error('Erro ao buscar perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o usuário, tente novamente.');
            profileResults.innerHTML = '';
        }

    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = '';
    }
});
