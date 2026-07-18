/**
 * Interactive Map Handler
 * Manages state clicks and modal display
 */

// Initialize map data with interactive state
simplemaps_usmap_mapdata.main_settings.popups = 'on_click';
simplemaps_usmap_mapdata.main_settings.auto_load = 'yes';

// Store state codes
const stateCodes = Object.keys(simplemaps_usmap_mapdata.state_specific);

// Initialize SimpleMap
simplemaps_usmap.load();

// Get modal elements
const modal = document.getElementById('packageModal');
const closeBtn = document.querySelector('.close');
const packagesContainer = document.getElementById('packagesContainer');
const stateNameElement = document.getElementById('stateName');

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Escape key closes modal
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

/**
 * Show packages for selected state
 * @param {string} stateCode - Two-letter state code
 */
function showStatePackages(stateCode) {
    const stateName = simplemaps_usmap_mapdata.state_specific[stateCode].name;
    
    // Get packages for state or use default
    const stateData = statePackages[stateCode] || { state: stateName, packages: statePackages.default.packages };
    
    // Update modal header
    stateNameElement.textContent = `Available Packages in ${stateName}`;
    
    // Clear packages container
    packagesContainer.innerHTML = '';
    
    // Check if packages exist
    if (!stateData.packages || stateData.packages.length === 0) {
        packagesContainer.innerHTML = `
            <div class="no-packages">
                <p>No packages available for ${stateName} yet.</p>
                <p>Please check back soon!</p>
            </div>
        `;
    } else {
        // Create package cards
        stateData.packages.forEach((pkg, index) => {
            const packageCard = createPackageCard(pkg, stateCode);
            packagesContainer.appendChild(packageCard);
            
            // Add staggered animation
            setTimeout(() => {
                packageCard.style.animation = `slideUp 0.4s ease-out ${index * 0.1}s forwards`;
                packageCard.style.opacity = '0';
                packageCard.style.animation = `slideUp 0.4s ease-out ${index * 0.1}s forwards`;
            }, 0);
        });
    }
    
    // Show modal
    modal.style.display = 'block';
}

/**
 * Create a package card element
 * @param {object} pkg - Package data
 * @param {string} stateCode - State code for tracking
 * @returns {HTMLElement} - Package card element
 */
function createPackageCard(pkg, stateCode) {
    const card = document.createElement('div');
    card.className = 'package-card';
    
    const featuresHTML = pkg.features
        .map(feature => `<li>${feature}</li>`)
        .join('');
    
    const priceHTML = typeof pkg.price === 'number'
        ? `$${pkg.price.toLocaleString()}`
        : pkg.price;
    
    card.innerHTML = `
        <div class="package-badge">${pkg.badge}</div>
        <h3>${pkg.name}</h3>
        <p class="description">${pkg.description}</p>
        <ul class="package-features">
            ${featuresHTML}
        </ul>
        <div class="price-section">
            <div class="starting-price">Starting at</div>
            <div class="price">${priceHTML}</div>
            <div class="price-period">${pkg.period}</div>
        </div>
        <button class="book-button" onclick="bookPackage('${stateCode}', '${pkg.name}', '${pkg.bookUrl}')">
            Book Now
        </button>
    `;
    
    return card;
}

/**
 * Handle book now button click
 * @param {string} stateCode - State code
 * @param {string} packageName - Package name
 * @param {string} bookUrl - URL to booking page
 */
function bookPackage(stateCode, packageName, bookUrl) {
    const stateName = simplemaps_usmap_mapdata.state_specific[stateCode].name;
    
    // Log the booking (you can replace this with actual tracking)
    console.log(`Booking: ${packageName} in ${stateName}`);
    
    // Track event (if using analytics)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'package_booked', {
            'state': stateCode,
            'state_name': stateName,
            'package': packageName
        });
    }
    
    // Redirect to booking page
    window.location.href = bookUrl;
}

/**
 * Override simplemaps click handler
 * This captures clicks on states and shows package modal
 */
function simplemaps_usmap_state_click(state) {
    const stateCode = state.id.toUpperCase();
    showStatePackages(stateCode);
    return false;
}

/**
 * Add hover effect to states
 */
function simplemaps_usmap_state_mouseover(state) {
    state.setAttribute('opacity', '0.8');
}

/**
 * Remove hover effect from states
 */
function simplemaps_usmap_state_mouseout(state) {
    state.setAttribute('opacity', '1');
}

// Optional: Programmatic state access
window.mapAPI = {
    /**
     * Show packages for a specific state
     * Usage: mapAPI.showPackages('CA')
     */
    showPackages: function(stateCode) {
        if (stateCodes.includes(stateCode)) {
            showStatePackages(stateCode);
        } else {
            console.error(`Invalid state code: ${stateCode}`);
        }
    },
    
    /**
     * Close the modal
     */
    closeModal: function() {
        modal.style.display = 'none';
    },
    
    /**
     * Get all available states
     */
    getStates: function() {
        return stateCodes;
    },
    
    /**
     * Get packages for a state
     */
    getPackages: function(stateCode) {
        return statePackages[stateCode] || statePackages.default;
    }
};
