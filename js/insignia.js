document.addEventListener('DOMContentLoaded', () => {
    const insigniasData = [
        {
            title: 'Especialista em Vendas',
            level: 3,
            icon: 'fa-trophy',
            className: 'espec-vendas',
            background: 'linear-gradient(135deg, #3498db, #2980b9)'
        },
        {
            title: 'Mestre Negociador',
            level: 2,
            icon: 'fa-handshake',
            className: 'mestre-negociador',
            background: 'linear-gradient(135deg, #588058 0%, #3d6342 100%)'
        },
        {
            title: 'Guru do Produto',
            level: 1,
            icon: 'fa-lightbulb',
            className: 'guru-produto',
            background: 'linear-gradient(135deg, #e9b525 0%, #a7900e 100%)'
        },
        {
            title: 'Funcionário do Mês',
            level: 2,
            icon: 'fa-suitcase',
            className: 'func-mes',
            background: 'linear-gradient(135deg, #e92525 0%, #a70e0e 100%)'
        }
    ];

    const targetElement = document.getElementById('insigniaLoader');

    function generateStars(level) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= level) {
                starsHTML += '<i class="fa-solid fa-star filled"></i>';
            } else {
                starsHTML += '<i class="fa-solid fa-star"></i>';
            }
        }
        return starsHTML;
    }

    let allCardsHTML = '';
    insigniasData.forEach(insignia => {
        allCardsHTML += `
            <div class="insignia-card ${insignia.className}">
                <div class="insignia-title">${insignia.title}</div>
                <div class="progresso">
                    <div class="progresso-stars">
                        <div class="insignia-icon-container" style="background: ${insignia.background};">
                            <i class="fa-solid ${insignia.icon} fa-fw"></i>
                        </div>
                        ${generateStars(insignia.level)}
                    </div>
                </div>
                <span class="progresso-text">Nível ${insignia.level}</span>
            </div>
        `;
    });

    targetElement.innerHTML = allCardsHTML;
});