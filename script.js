/* fidan */
const knivesContainer = document.getElementById("knives");

fetch("./knife-products.json")
    .then(response => response.json())
    .then(data => {
        const hits = data.slice(0, 4);
        knivesContainer.innerHTML = ""; 
        
        hits.forEach(knife => {
            knivesContainer.innerHTML += `
            <div class="knife-card">
                <div class="knife-img-wrapper">
                    <img src="${knife.image}" alt="${knife.name}">
                </div>
                
                <div class="knife-info">
                    <h2 class="knife-title">${knife.name}</h2>
                    
                    <div class="knife-meta">
                        <span class="knife-brand">${knife.brand}</span>
                        <span class="knife-desc-short">${knife.descriptionShort}</span>
                    </div>
                    
                    <div class="knife-rating-row">
                        <div class="knife-stars">★★★★★</div>
                        <span class="knife-reviews">${knife.reviewsCount} відгуків (демо)</span>
                    </div>
                    
                    <div class="knife-price-row">
                        <span class="knife-price">${knife.priceFormatted}</span>
                        <div class="knife-actions">
                            <button class="knife-icon-btn" aria-label="Порівняти">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                    <path d="M3 6h18M6 6l2 12h8l2-12M12 3v3M12 18v3M9 21h6"></path>
                                </svg>
                            </button>
                            <button class="knife-icon-btn" aria-label="В обране">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <button class="knife-buy-btn" onclick="handleAddToCart(${knife.id})">
                        До кошика 
                        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="display:inline; margin-left:5px; vertical-align:middle;">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </button>
                </div>
            </div> 
            `;
        });
    })
    .catch(err => console.error(err));

function handleAddToCart(id) {
    console.log(`Товар з ID ${id} додано до кошика`);
}


const newKnivesContainer = document.getElementById("new-knives");

fetch("./knife-products.json")
    .then(response => response.json())
    .then(data => {
        const targetIds = [24, 25, 23];
        const newProducts = data.filter(product => targetIds.includes(product.id));
        
        newKnivesContainer.innerHTML = "";
        
        newProducts.forEach(knife => {
            newKnivesContainer.innerHTML += `
            <div class="knife-card">
                <div class="knife-img-wrapper">
                    <img src="${knife.image}" alt="${knife.name}">
                </div>
                
                <div class="knife-info">
                    <h3 class="knife-title">${knife.name}</h3>
                    
                    <div class="knife-meta">
                        <span class="knife-brand">${knife.brand}</span>
                        <span class="knife-desc-short">${knife.descriptionShort}</span>
                    </div>
                    
                    <div class="knife-rating-row">
                        <div class="knife-stars">★★★★★</div>
                        <span class="knife-reviews">${knife.reviewsCount} відгуків (демо)</span>
                    </div>
                    
                    <div class="knife-price-row">
                        <span class="knife-price">${knife.priceFormatted}</span>
                        <div class="knife-actions">
                            <button class="knife-icon-btn" aria-label="Порівняти">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                    <path d="M3 6h18M6 6l2 12h8l2-12M12 3v3M12 18v3M9 21h6"></path>
                                </svg>
                            </button>
                            <button class="knife-icon-btn" aria-label="В обране">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <button class="knife-buy-btn" onclick="handleAddToCart(${knife.id})">
                        До кошика 
                        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="display:inline; margin-left:5px; vertical-align:middle;">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </button>
                </div>
            </div> 
            `;
        });
    })
    .catch(err => console.error(err));

function handleAddToCart(id) {
    console.log(`Товар #${id} додано до кошика`);
}

function renderCategory(containerId, targetIds) {
    const container = document.getElementById(containerId);
    if (!container) return;

    fetch("./knife-products.json")
        .then(response => response.json())
        .then(data => {
            const products = data.filter(product => targetIds.includes(product.id));
            container.innerHTML = "";
            
            products.forEach(knife => {
                container.innerHTML += `
                <div class="knife-card">
                    <div class="knife-img-wrapper">
                        <img src="${knife.image}" alt="${knife.name}">
                    </div>
                    
                    <div class="knife-info">
                        <h2 class="knife-title">${knife.name}</h2>
                        
                        <div class="knife-meta">
                            <span class="knife-brand">${knife.brand}</span>
                            <span class="knife-desc-short">${knife.descriptionShort}</span>
                        </div>
                        
                        <div class="knife-rating-row">
                            <div class="knife-stars">★★★★★</div>
                            <span class="knife-reviews">${knife.reviewsCount} відгуків (демо)</span>
                        </div>
                        
                        <div class="knife-price-row">
                            <span class="knife-price">${knife.priceFormatted}</span>
                            <div class="knife-actions">
                                <button class="knife-icon-btn" aria-label="Порівняти">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                        <path d="M3 6h18M6 6l2 12h8l2-12M12 3v3M12 18v3M9 21h6"></path>
                                    </svg>
                                </button>
                                <button class="knife-icon-btn" aria-label="В обране">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <button class="knife-buy-btn" onclick="handleAddToCart(${knife.id})">
                            До кошика 
                            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="display:inline; margin-left:5px; vertical-align:middle;">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div> 
                `;
            });
        })
        .catch(err => console.error(err));
}

function handleAddToCart(id) {
    console.log(`Товар з ID ${id} додано до кошика`);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategory("multitools-container", [27, 9, 10, 29]);

    renderCategory("classic-container", [12, 13, 14, 22]);
});
