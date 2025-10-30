// Lovercraft Skindex - Main JavaScript File
// Comprehensive functionality for collection management, verification, trading, and community features

// Global state management
const AppState = {
    currentUser: {
        username: 'Collector_Kane',
        avatar: 'resources/user-avatar-1.jpg',
        verifiedSkins: 847,
        totalSkins: 1247,
        globalRank: 47,
        verificationStreak: 23,
        tradeCount: 156
    },
    
    filters: {
        category: 'all',
        status: 'all',
        rarity: 'all',
        search: ''
    },
    
    pagination: {
        currentPage: 1,
        itemsPerPage: 20,
        totalPages: 63
    },
    
    skins: [],
    filteredSkins: [],
    
    modals: {
        verification: false,
        upload: false
    }
};

// Comprehensive skin database with all items from the provided list
const SKIN_DATABASE = [
    // VIP Seasonal / Monthly Helmets & Tools
    { id: 'vip5_pickaxe', name: 'VIP5 Pickaxe', category: 'vip', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip5_axe', name: 'VIP5 Axe', category: 'vip', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip5_helmet', name: 'VIP5 Helmet', category: 'vip', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip5_wingsword', name: 'VIP5 Wingsword', category: 'vip', rarity: 'legendary', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_s7_phoenix_wings', name: 'VIP S7 Phoenix Wings', category: 'vip', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_s7_lavacrown', name: 'VIP S7 Lavacrown', category: 'vip', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_s7_phoenix_rising_helm', name: 'VIP S7 Phoenix Rising Helm', category: 'vip', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_s7_phoenix_master_helm', name: 'VIP S7 Phoenix Master Helm', category: 'vip', rarity: 'legendary', status: 'pending', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_s7_poor_man_beanie', name: 'VIP S7 Poor Man Beanie', category: 'vip', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_s7_trex_head', name: 'VIP S7 T-Rex Head', category: 'vip', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_s7_scoba_mask', name: 'VIP S7 Scuba Mask', category: 'vip', rarity: 'rare', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_monthly_helmet_blob', name: 'VIP Monthly Helmet Blob', category: 'vip', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_monthly_helmet_winter', name: 'VIP Monthly Helmet Winter', category: 'vip', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_monthly_helmet_dragon', name: 'VIP Monthly Helmet Dragon', category: 'vip', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_monthly_sword_inferno', name: 'VIP Monthly Sword Inferno', category: 'vip', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_monthly_sword_scepter', name: 'VIP Monthly Sword Scepter', category: 'vip', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_monthly_sword_sunken', name: 'VIP Monthly Sword Sunken', category: 'vip', rarity: 'rare', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: 'vip_monthly_axe_winter', name: 'VIP Monthly Axe Winter', category: 'vip', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    
    // Purge / Purge5 / Purge6 Masks & Weapons
    { id: 'purge_1', name: 'Purge Mask 1', category: 'purge', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge_2.1', name: 'Purge Mask 2.1', category: 'purge', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge_2.2', name: 'Purge Mask 2.2', category: 'purge', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge_2.3', name: 'Purge Mask 2.3', category: 'purge', rarity: 'rare', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge_3', name: 'Purge Mask 3', category: 'purge', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge_4', name: 'Purge Mask 4', category: 'purge', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge_5.1', name: 'Purge Mask 5.1', category: 'purge', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge_5.2', name: 'Purge Mask 5.2', category: 'purge', rarity: 'epic', status: 'pending', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge_5.3', name: 'Purge Mask 5.3', category: 'purge', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge5_pink', name: 'Purge5 Pink', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge5_black', name: 'Purge5 Black', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge5_red', name: 'Purge5 Red', category: 'purge', rarity: 'legendary', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge5_blue', name: 'Purge5 Blue', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge5_white', name: 'Purge5 White', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge5_cross', name: 'Purge5 Cross', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge6_mask_gas', name: 'Purge6 Gas Mask', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge6_mask_rabbit', name: 'Purge6 Rabbit Mask', category: 'purge', rarity: 'legendary', status: 'pending', image: 'resources/skin-placeholder.jpg' },
    { id: 'purge6_mask_bear', name: 'Purge6 Bear Mask', category: 'purge', rarity: 'legendary', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgemask1', name: '2024 Purge Mask 1', category: 'purge', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgemask2', name: '2024 Purge Mask 2', category: 'purge', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgemask3', name: '2024 Purge Mask 3', category: 'purge', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgebear', name: '2024 Purge Bear', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgegasmask', name: '2024 Purge Gas Mask', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgebunny', name: '2024 Purge Bunny', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgesword1', name: '2024 Purge Sword 1', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgesword2', name: '2024 Purge Sword 2', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: '2024purgesword3', name: '2024 Purge Sword 3', category: 'purge', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    
    // Season 5 Sets (Sample of the extensive collection)
    { id: 's5_tribalpickaxe1', name: 'S5 Tribal Pickaxe 1', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalpickaxe2', name: 'S5 Tribal Pickaxe 2', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalpickaxe3', name: 'S5 Tribal Pickaxe 3', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialpickaxe1', name: 'S5 Industrial Pickaxe 1', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialpickaxe2', name: 'S5 Industrial Pickaxe 2', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialpickaxe3', name: 'S5 Industrial Pickaxe 3', category: 'season5', rarity: 'epic', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futurepickaxe1', name: 'S5 Future Pickaxe 1', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futurepickaxe2', name: 'S5 Future Pickaxe 2', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futurepickaxe3', name: 'S5 Future Pickaxe 3', category: 'season5', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalsword1', name: 'S5 Tribal Sword 1', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalsword2', name: 'S5 Tribal Sword 2', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalsword3', name: 'S5 Tribal Sword 3', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialsword1', name: 'S5 Industrial Sword 1', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialsword2', name: 'S5 Industrial Sword 2', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialsword3', name: 'S5 Industrial Sword 3', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futuresword1', name: 'S5 Future Sword 1', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futuresword2', name: 'S5 Future Sword 2', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futuresword3', name: 'S5 Future Sword 3', category: 'season5', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalaxe1', name: 'S5 Tribal Axe 1', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalaxe2', name: 'S5 Tribal Axe 2', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalaxe3', name: 'S5 Tribal Axe 3', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialaxe1', name: 'S5 Industrial Axe 1', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialaxe2', name: 'S5 Industrial Axe 2', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialaxe3', name: 'S5 Industrial Axe 3', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futureaxe1', name: 'S5 Future Axe 1', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futureaxe2', name: 'S5 Future Axe 2', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futureaxe3', name: 'S5 Future Axe 3', category: 'season5', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalhelmet1', name: 'S5 Tribal Helmet 1', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalhelmet2', name: 'S5 Tribal Helmet 2', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_tribalhelmet3', name: 'S5 Tribal Helmet 3', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialhelmet1', name: 'S5 Industrial Helmet 1', category: 'season5', rarity: 'common', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialhelmet2', name: 'S5 Industrial Helmet 2', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_industrialhelmet3', name: 'S5 Industrial Helmet 3', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futurehelmet1', name: 'S5 Future Helmet 1', category: 'season5', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futurehelmet2', name: 'S5 Future Helmet 2', category: 'season5', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 's5_futurehelmet3', name: 'S5 Future Helmet 3', category: 'season5', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    
    // Mythic Sets
    { id: 'myth_halo', name: 'Mythic Halo', category: 'mythic', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'myth_capofdark', name: 'Mythic Cap of Darkness', category: 'mythic', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'myth_justiceblindfold', name: 'Mythic Justice Blindfold', category: 'mythic', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'myth_harpe', name: 'Mythic Harpe', category: 'mythic', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'myth_circestaff', name: 'Mythic Circe Staff', category: 'mythic', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'myth_bident', name: 'Mythic Bident', category: 'mythic', rarity: 'legendary', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: 'myth_excalibur', name: 'Mythic Excalibur', category: 'mythic', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'myth_hydrapickaxe', name: 'Mythic Hydra Pickaxe', category: 'mythic', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    
    // Crate Items (Sample)
    { id: 'crate_8bit_helmet', name: '8-Bit Helmet', category: 'crate', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'crate_cyberpunk_helmet', name: 'Cyberpunk Helmet', category: 'crate', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'crate_arcade_helmet', name: 'Arcade Helmet', category: 'crate', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'crate_spy_helmet', name: 'Spy Helmet', category: 'crate', rarity: 'epic', status: 'unverified', image: 'resources/skin-placeholder.jpg' },
    { id: 'crate_hacked_helmet', name: 'Hacked Helmet', category: 'crate', rarity: 'legendary', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'crate_8bit_sword', name: '8-Bit Sword', category: 'crate', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'crate_cyberpunk_sword', name: 'Cyberpunk Sword', category: 'crate', rarity: 'epic', status: 'verified', image: 'resources/skin-placeholder.jpg' },
    { id: 'crate_arcade_wheel', name: 'Arcade Wheel', category: 'crate', rarity: 'rare', status: 'verified', image: 'resources/skin-placeholder.jpg' }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    AppState.skins = [...SKIN_DATABASE];
    AppState.filteredSkins = [...SKIN_DATABASE];
    
    setupParticleBackground();
    setupScrollReveal();
    setupEventListeners();
    renderSkinGrid();
    updateStats();
    startCountdownTimer();
    
    // Initialize text splitting for animations
    if (typeof Splitting !== 'undefined') {
        Splitting();
    }
    
    console.log('Lovercraft Skindex initialized successfully');
}

// Particle background using p5.js
function setupParticleBackground() {
    new p5(function(p) {
        let particles = [];
        let numParticles = 50;
        
        p.setup = function() {
            let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particle-bg');
            canvas.style('position', 'fixed');
            canvas.style('top', '0');
            canvas.style('left', '0');
            canvas.style('z-index', '-1');
            
            // Create particles
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(1, 3),
                    opacity: p.random(0.1, 0.3)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            for (let particle of particles) {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(212, 175, 55, particle.opacity * 255);
                p.noStroke();
                p.circle(particle.x, particle.y, particle.size);
            }
            
            // Draw connections between nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dist = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                    if (dist < 100) {
                        let alpha = p.map(dist, 0, 100, 0.1, 0);
                        p.stroke(212, 175, 55, alpha * 255);
                        p.strokeWeight(0.5);
                        p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                    }
                }
            }
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

// Scroll reveal animations
function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Event listeners setup
function setupEventListeners() {
    // Global search
    const globalSearch = document.getElementById('global-search');
    if (globalSearch) {
        globalSearch.addEventListener('input', debounce(handleGlobalSearch, 300));
    }
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Sort dropdown
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSortChange);
    }
    
    // Pagination
    const prevPage = document.getElementById('prev-page');
    const nextPage = document.getElementById('next-page');
    if (prevPage) prevPage.addEventListener('click', () => changePage(-1));
    if (nextPage) nextPage.addEventListener('click', () => changePage(1));
    
    // File uploads
    const proofUpload = document.getElementById('proof-upload');
    if (proofUpload) {
        proofUpload.addEventListener('change', handleProofUpload);
    }
    
    const skinImageUpload = document.getElementById('skin-image-upload');
    if (skinImageUpload) {
        skinImageUpload.addEventListener('change', handleSkinImageUpload);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Search functionality
function handleGlobalSearch(event) {
    AppState.filters.search = event.target.value.toLowerCase();
    applyFilters();
}

function handleFilterClick(event) {
    const button = event.target;
    const category = button.dataset.category;
    const status = button.dataset.status;
    const rarity = button.dataset.rarity;
    
    // Remove active class from all buttons in the same group
    const group = category ? '[data-category]' : status ? '[data-status]' : '[data-rarity]';
    document.querySelectorAll(`.filter-btn${group}`).forEach(btn => {
        btn.classList.remove('filter-active');
    });
    
    // Add active class to clicked button
    button.classList.add('filter-active');
    
    // Update filter state
    if (category) AppState.filters.category = category;
    if (status) AppState.filters.status = status;
    if (rarity) AppState.filters.rarity = rarity;
    
    applyFilters();
}

function handleSortChange(event) {
    const sortBy = event.target.value;
    sortSkins(sortBy);
}

// Filter and sort functionality
function applyFilters() {
    let filtered = [...AppState.skins];
    
    // Apply category filter
    if (AppState.filters.category !== 'all') {
        filtered = filtered.filter(skin => skin.category === AppState.filters.category);
    }
    
    // Apply status filter
    if (AppState.filters.status !== 'all') {
        filtered = filtered.filter(skin => skin.status === AppState.filters.status);
    }
    
    // Apply rarity filter
    if (AppState.filters.rarity !== 'all') {
        filtered = filtered.filter(skin => skin.rarity === AppState.filters.rarity);
    }
    
    // Apply search filter
    if (AppState.filters.search) {
        filtered = filtered.filter(skin => 
            skin.name.toLowerCase().includes(AppState.filters.search) ||
            skin.id.toLowerCase().includes(AppState.filters.search)
        );
    }
    
    AppState.filteredSkins = filtered;
    AppState.pagination.currentPage = 1;
    renderSkinGrid();
    updatePagination();
}

function sortSkins(sortBy) {
    AppState.filteredSkins.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'id':
                return a.id.localeCompare(b.id);
            case 'rarity':
                const rarityOrder = { common: 0, rare: 1, epic: 2, legendary: 3 };
                return rarityOrder[b.rarity] - rarityOrder[a.rarity];
            case 'verification':
                const statusOrder = { verified: 0, pending: 1, unverified: 2 };
                return statusOrder[a.status] - statusOrder[b.status];
            default:
                return 0;
        }
    });
    
    renderSkinGrid();
}

// Skin grid rendering
function renderSkinGrid() {
    const grid = document.getElementById('skin-grid');
    if (!grid) return;
    
    const startIndex = (AppState.pagination.currentPage - 1) * AppState.pagination.itemsPerPage;
    const endIndex = startIndex + AppState.pagination.itemsPerPage;
    const skinsToShow = AppState.filteredSkins.slice(startIndex, endIndex);
    
    grid.innerHTML = '';
    
    skinsToShow.forEach((skin, index) => {
        const skinCard = createSkinCard(skin, index);
        grid.appendChild(skinCard);
    });
    
    // Animate cards
    anime({
        targets: '.skin-card',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(50),
        duration: 600,
        easing: 'easeOutQuart'
    });
    
    updateShowingCount();
}

function createSkinCard(skin, index) {
    const card = document.createElement('div');
    card.className = 'skin-card glass-card rounded-lg p-4 hover-lift cursor-pointer';
    card.onclick = () => openSkinDetails(skin);
    
    const statusClass = skin.status === 'verified' ? 'verified' : 
                       skin.status === 'pending' ? 'pending' : 'unverified';
    const statusIcon = skin.status === 'verified' ? '✅' : 
                      skin.status === 'pending' ? '⏳' : '❌';
    
    const rarityColor = {
        common: '#ffffff',
        rare: '#008b8b',
        epic: '#d4af37',
        legendary: '#8b0000'
    };
    
    card.innerHTML = `
        <div class="relative">
            <div class="verification-badge ${statusClass}">
                ${statusIcon}
            </div>
            <img src="${skin.image}" alt="${skin.name}" class="w-full h-24 object-cover rounded mb-3">
        </div>
        <div class="space-y-2">
            <h3 class="font-medium text-ghost-white text-sm leading-tight">${skin.name}</h3>
            <div class="flex items-center justify-between text-xs">
                <span class="text-mystic-silver">#${skin.id}</span>
                <span style="color: ${rarityColor[skin.rarity]}" class="font-medium">${skin.rarity.toUpperCase()}</span>
            </div>
            <div class="text-xs text-mystic-silver capitalize">${skin.category} Set</div>
        </div>
    `;
    
    return card;
}

// Pagination functionality
function updatePagination() {
    AppState.pagination.totalPages = Math.ceil(AppState.filteredSkins.length / AppState.pagination.itemsPerPage);
    
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');
    
    if (prevBtn) prevBtn.disabled = AppState.pagination.currentPage === 1;
    if (nextBtn) nextBtn.disabled = AppState.pagination.currentPage === AppState.pagination.totalPages;
    
    if (pageNumbers) {
        pageNumbers.innerHTML = '';
        const maxPages = Math.min(AppState.pagination.totalPages, 5);
        const startPage = Math.max(1, AppState.pagination.currentPage - 2);
        
        for (let i = 0; i < maxPages; i++) {
            const pageNum = startPage + i;
            if (pageNum <= AppState.pagination.totalPages) {
                const btn = document.createElement('button');
                btn.className = `px-3 py-2 rounded text-sm transition-colors ${
                    pageNum === AppState.pagination.currentPage 
                        ? 'bg-ancient-gold text-deep-void' 
                        : 'bg-shadow-gray hover:bg-mystic-silver/20 text-ghost-white'
                }`;
                btn.textContent = pageNum;
                btn.onclick = () => goToPage(pageNum);
                pageNumbers.appendChild(btn);
            }
        }
    }
}

function changePage(direction) {
    const newPage = AppState.pagination.currentPage + direction;
    if (newPage >= 1 && newPage <= AppState.pagination.totalPages) {
        AppState.pagination.currentPage = newPage;
        renderSkinGrid();
        updatePagination();
        
        // Scroll to top of grid
        document.getElementById('skin-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function goToPage(page) {
    AppState.pagination.currentPage = page;
    renderSkinGrid();
    updatePagination();
}

function updateShowingCount() {
    const showingCount = document.getElementById('showing-count');
    const totalCount = document.getElementById('total-count');
    
    if (showingCount) {
        const startIndex = (AppState.pagination.currentPage - 1) * AppState.pagination.itemsPerPage;
        const currentShowing = Math.min(startIndex + AppState.pagination.itemsPerPage, AppState.filteredSkins.length);
        showingCount.textContent = currentShowing;
    }
    
    if (totalCount) {
        totalCount.textContent = AppState.filteredSkins.length;
    }
}

// Modal functionality
function openVerificationModal() {
    const modal = document.getElementById('verification-modal');
    if (modal) {
        modal.classList.remove('hidden');
        AppState.modals.verification = true;
        populateVerificationSelect();
        
        // Animate modal
        anime({
            targets: modal.querySelector('.glass-card'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
    }
}

function closeVerificationModal() {
    const modal = document.getElementById('verification-modal');
    if (modal) {
        modal.classList.add('hidden');
        AppState.modals.verification = false;
    }
}

function openUploadModal() {
    const modal = document.getElementById('upload-modal');
    if (modal) {
        modal.classList.remove('hidden');
        AppState.modals.upload = true;
        
        anime({
            targets: modal.querySelector('.glass-card'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
    }
}

function closeUploadModal() {
    const modal = document.getElementById('upload-modal');
    if (modal) {
        modal.classList.add('hidden');
        AppState.modals.upload = false;
    }
}

function populateVerificationSelect() {
    const select = document.getElementById('verify-skin-select');
    if (!select) return;
    
    select.innerHTML = '<option value="">Choose a skin...</option>';
    
    AppState.skins.filter(skin => skin.status === 'unverified').forEach(skin => {
        const option = document.createElement('option');
        option.value = skin.id;
        option.textContent = `${skin.name} (${skin.id})`;
        select.appendChild(option);
    });
}

// Verification and upload functionality
function submitVerification() {
    const skinId = document.getElementById('verify-skin-select').value;
    const notes = document.getElementById('verification-notes').value;
    
    if (!skinId) {
        showNotification('Please select a skin to verify', 'error');
        return;
    }
    
    // Simulate verification submission
    const skin = AppState.skins.find(s => s.id === skinId);
    if (skin) {
        skin.status = 'pending';
        showNotification(`Verification submitted for ${skin.name}`, 'success');
        closeVerificationModal();
        renderSkinGrid();
        updateStats();
    }
}

function addNewSkin() {
    const name = document.getElementById('new-skin-name').value;
    const category = document.getElementById('new-skin-category').value;
    const rarity = document.getElementById('new-skin-rarity').value;
    
    if (!name) {
        showNotification('Please enter a skin name', 'error');
        return;
    }
    
    // Create new skin object
    const newSkin = {
        id: `custom_${Date.now()}`,
        name: name,
        category: category,
        rarity: rarity,
        status: 'unverified',
        image: 'resources/skin-placeholder.jpg'
    };
    
    // Add to database
    AppState.skins.push(newSkin);
    AppState.filteredSkins = [...AppState.skins];
    
    showNotification(`Added ${name} to collection`, 'success');
    closeUploadModal();
    renderSkinGrid();
    updateStats();
    
    // Clear form
    document.getElementById('new-skin-name').value = '';
}

function handleProofUpload(event) {
    const file = event.target.files[0];
    if (file) {
        showNotification(`Proof image uploaded: ${file.name}`, 'success');
    }
}

function handleSkinImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        showNotification(`Skin image uploaded: ${file.name}`, 'success');
    }
}

// Skin details modal (placeholder for future implementation)
function openSkinDetails(skin) {
    showNotification(`Viewing details for ${skin.name}`, 'info');
    // This would open a detailed view modal in a full implementation
}

// User profile toggle
function toggleUserProfile() {
    showNotification('User profile clicked - feature coming soon!', 'info');
}

// Notification system
function showNotification(message, type = 'info') {
    const toast = document.getElementById('notification-toast');
    const icon = document.getElementById('notification-icon');
    const title = document.getElementById('notification-title');
    const messageEl = document.getElementById('notification-message');
    
    if (!toast) return;
    
    const icons = {
        success: '🎉',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    const titles = {
        success: 'Success!',
        error: 'Error',
        warning: 'Warning',
        info: 'Information'
    };
    
    icon.textContent = icons[type] || icons.info;
    title.textContent = titles[type] || titles.info;
    messageEl.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Statistics updates
function updateStats() {
    const verifiedCount = AppState.skins.filter(skin => skin.status === 'verified').length;
    const totalCount = AppState.skins.length;
    const progressPercent = (verifiedCount / totalCount * 100).toFixed(1);
    
    // Update progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        anime({
            targets: bar,
            width: `${progressPercent}%`,
            duration: 1000,
            easing: 'easeOutQuart'
        });
    });
}

// Countdown timer
function startCountdownTimer() {
    const timerElement = document.getElementById('countdown-timer');
    if (!timerElement) return;
    
    // Set countdown to 7 days from now
    const countdownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        timerElement.textContent = `${days}d ${hours}h ${minutes}m`;
        
        if (distance < 0) {
            clearInterval(timer);
            timerElement.textContent = "EXPIRED";
        }
    }, 60000); // Update every minute
}

// Keyboard shortcuts
function handleKeyboardShortcuts(event) {
    // ESC to close modals
    if (event.key === 'Escape') {
        if (AppState.modals.verification) closeVerificationModal();
        if (AppState.modals.upload) closeUploadModal();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.getElementById('global-search');
        if (searchInput) searchInput.focus();
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for use in other pages
window.LovercraftSkindex = {
    AppState,
    showNotification,
    openVerificationModal,
    closeVerificationModal,
    openUploadModal,
    closeUploadModal,
    SKIN_DATABASE
};

console.log('Lovercraft Skindex JavaScript loaded successfully');