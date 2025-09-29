document.addEventListener('DOMContentLoaded', () => {

    const conquistasData = [
        {
            title: '3 Vendas em 1 dia',
            progress: 100,
            icon: 'fa-trophy',
            background: 'linear-gradient(135deg, #f39c12, #e67e22)'
        },
        {
            title: 'Vendedor do mês',
            progress: 100,
            icon: 'fa-medal',
            background: 'linear-gradient(135deg, #3498db, #2980b9)'
        },
        {
            title: 'Orgulho da loja',
            progress: 60,
            icon: 'fa-star',
            background: 'linear-gradient(135deg, #1abc9c, #16a085)'
        },
        {
            title: 'Meta do dia',
            progress: 30,
            icon: 'fa-dollar-sign',
            background: 'linear-gradient(135deg, #9b59b6, #8e44ad)'
        },
        
        {
            title: 'Meta do dia',
            progress: 30,
            icon: 'fa-dollar-sign',
            background: 'linear-gradient(135deg, #9b59b6, #8e44ad)'
        },
        {
            title: 'Meta do dia',
            progress: 30,
            icon: 'fa-dollar-sign',
            background: 'linear-gradient(135deg, #9b59b6, #8e44ad)'
        },
        {
            title: 'Meta do dia',
            progress: 30,
            icon: 'fa-dollar-sign',
            background: 'linear-gradient(135deg, #9b59b6, #8e44ad)'
        },
        {
            title: 'Meta do dia',
            progress: 30,
            icon: 'fa-dollar-sign',
            background: 'linear-gradient(135deg, #9b59b6, #8e44ad)'
        },
    
    ];

    const targetElement = document.getElementById('conquistasLoader');

    if (targetElement) {
        let allConquistasHTML = '';

        conquistasData.forEach(conquista => {
            allConquistasHTML += `
                <div class="conquista-card">
                    <div class="conquista-icon-container" style="background: ${conquista.background};">
                        <i class="fa-solid ${conquista.icon}"></i>
                    </div>
                    <div class="conquista-content">
                        <div class="conquista-info">
                            <span class="conquista-title">${conquista.title}</span>
                            <span class="conquista-progress-text">${conquista.progress}%</span>
                        </div>
                        <div class="conquista-progress-bar-container">
                            <div class="conquista-progress-bar" style="width: ${conquista.progress}%;"></div>
                        </div>
                    </div>
                </div>
            `;
        });

        targetElement.innerHTML = allConquistasHTML;
    }
});