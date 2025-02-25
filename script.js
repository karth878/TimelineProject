document.addEventListener("DOMContentLoaded", function() {
    const timelineContainer = document.querySelector('.timeline');
    
    // Create timeline entries from data
    timelineData.forEach((item, index) => {
        // Create timeline entry
        const entry = document.createElement('div');
        entry.className = `timeline-entry ${index % 2 === 0 ? 'left' : 'right'}`;
        
        // Create HTML for entry
        entry.innerHTML = `
            <div class="timeline-date">${item.year}</div>
            <div class="timeline-connector"></div>
            <div class="timeline-content">
                <div class="timeline-icon"><i class="${item.icon}"></i></div>
                <h3 class="timeline-title">${item.title}</h3>
                
                <div class="timeline-section">
                    <h4>Description</h4>
                    <p>${item.description}</p>
                </div>
                
                ${item.image ? `<img src="${item.image}" alt="${item.title}" class="timeline-image">` : ''}
                
                <div class="timeline-section">
                    <h4>Impact</h4>
                    <p>${item.impact}</p>
                </div>
                
                <div class="timeline-section">
                    <h4>Ethical & Societal Concerns</h4>
                    <p>${item.ethical}</p>
                </div>
            </div>
        `;
        
        // Add to timeline
        timelineContainer.appendChild(entry);
    });
    
    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = entry.target.classList.contains('left') 
                    ? 'translateX(0)' 
                    : 'translateX(0)';
            }
        });
    }, {threshold: 0.1});
    
    document.querySelectorAll('.timeline-entry').forEach(item => {
        // Set initial state for animation
        item.style.opacity = 0;
        item.style.transform = item.classList.contains('left') 
            ? 'translateX(-50px)' 
            : 'translateX(50px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Observe for scrolling
        observer.observe(item);
    });
});