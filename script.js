document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');

    window.addEventListener('scroll', () => {
        // Si l'utilisateur est proche du bas de la page
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            // Clone les éléments du container
            const clone = gridContainer.cloneNode(true);
            gridContainer.parentNode.appendChild(clone);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const pieCharts = document.querySelectorAll('.pie-chart');

    pieCharts.forEach(chart => {
        const percent = chart.getAttribute('data-percent');
        chart.style.setProperty('--percent', percent);
    });
});

function showTable(tableNumber) {
    // Cache toutes les tables
    for (let i = 1; i <= 6; i++) {
        document.getElementById('table-' + i).style.display = 'none';
    }

    // Affiche la table sélectionnée
    document.getElementById('table-' + tableNumber).style.display = 'table';
}
