document.addEventListener('DOMContentLoaded', () => {

    const statsData = [
        { title: 'Vendas do Mês', value: '30' },
        { title: 'Meta Completa', value: '85%' },
        { title: 'Ranking', value: '#15' },
        { title: 'Total de Pontos', value: '560' }
    ];

    const activityData = [
        {
            description: 'Completou missão "Venda Cruzada"',
            timestamp: 'Ontem',
            points: '120 pts',
            icon: 'fa-check',
            background: 'linear-gradient(135deg, #28a745, #218838)'
        },
        {
            description: 'Ganhou uma insignia "Guru do Produto"',
            timestamp: 'Há 2 dias',
            points: '300 pts',
            icon: 'fa-lightbulb',
            background: 'linear-gradient(135deg, #ffc107, #e0a800)'
        },
        {
            description: 'Completou missão "Primeira Venda"',
            timestamp: 'Há uma semana',
            points: '250 pts',
            icon: 'fa-check',
            background: 'linear-gradient(135deg, #28a745, #218838)'
        }
    ];

    const targetElement = document.getElementById('estatisticasLoader');

    if (targetElement) {
        let statsHTML = '';

        // 1. Generate the top stat cards
        statsData.forEach(stat => {
            statsHTML += `
                <div class="stat-card">
                    <span class="stat-title">${stat.title}</span>
                    <span class="stat-value">${stat.value}</span>
                </div>
            `;
        });

        // 2. Generate the recent activity card and its list items
        let activityItemsHTML = '';
        activityData.forEach(activity => {
            activityItemsHTML += `
                <div class="activity-item">
                    <div class="activity-icon-container" style="background: ${activity.background};">
                        <i class="fa-solid ${activity.icon}"></i>
                    </div>
                    <div class="activity-text">
                        <div class="activity-description">${activity.description}</div>
                        <div class="activity-timestamp">${activity.timestamp}</div>
                    </div>
                    <div class="activity-points">+${activity.points}</div>
                </div>
            `;
        });

        const activityCardHTML = `
            <div class="stat-card activity-list-card">
                <h3 class="activity-list-title">Atividades recentes</h3>
                ${activityItemsHTML}
            </div>
        `;

        // 3. Combine everything and inject into the DOM
        targetElement.innerHTML = statsHTML + activityCardHTML;
    }
});