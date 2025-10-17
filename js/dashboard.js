document.addEventListener('DOMContentLoaded', function() {
    // Fetch statistics from API
    fetch('/api/statistics', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // Update statistics on the dashboard
        document.getElementById('active-workers').textContent = data.activeWorkers;
        document.getElementById('inactive-workers').textContent = data.inactiveWorkers;
        document.getElementById('excluded-workers').textContent = data.excludedWorkers;
        document.getElementById('total-workers').textContent = data.totalWorkers;
        document.getElementById('security-personnel').textContent = data.securityPersonnel;
        document.getElementById('valid-permits').textContent = data.validPermits;
        document.getElementById('expired-permits').textContent = data.expiredPermits;
        
        // Initialize charts
        initializeCharts(data);
    })
    .catch(error => console.error('Error fetching statistics:', error));
});

function initializeCharts(data) {
    // Worker Status Chart
    const workerStatusOptions = {
        chart: {
            type: 'pie',
            height: 300
        },
        series: [data.activeWorkers, data.inactiveWorkers, data.excludedWorkers],
        labels: ['Active', 'Inactive', 'Excluded'],
        colors: ['#28c76f', '#ea5455', '#ff9f43']
    };
    
    const workerStatusChart = new ApexCharts(
        document.querySelector('#worker-status-chart'),
        workerStatusOptions
    );
    workerStatusChart.render();
    
    // Permit Status Chart
    const permitStatusOptions = {
        chart: {
            type: 'pie',
            height: 300
        },
        series: [data.validPermits, data.expiredPermits],
        labels: ['Valid', 'Expired'],
        colors: ['#28c76f', '#ea5455']
    };
    
    const permitStatusChart = new ApexCharts(
        document.querySelector('#permit-status-chart'),
        permitStatusOptions
    );
    permitStatusChart.render();
}