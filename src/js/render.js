export function renderProfile(profileResults, data) {
    if (!data) {
        profileResults.innerHTML = '';
        return;
    }
    profileResults.innerHTML = `
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
}
