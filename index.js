// ==========================================
// AuroraWiki - Application Logic (Vanilla JS)
// ==========================================

// UI Translation Dictionary
const uiTranslations = {
    pt: {
        navHome: "Início",
        navSetup: "Instalação & Setup",
        sectionPlugins: "Plugins Aurora",
        authorInfo: "Criado por <a href='https://github.com/aurorapriin' target='_blank' rel='noopener noreferrer'><strong>Aurorapriin</strong></a>",
        loading: "Carregando documentação...",
        toastSuccess: "Copiado para a área de transferência!",
        searchPlaceholder: "Buscar comando, permissão...",
        toastConfigSuccess: "Configuração copiada com sucesso!",
        toastCmdSuccess: "Copiado: ",
        
        // Setup Page
        setupTitle: "Instalação & Setup",
        setupSubtitle: "Aprenda a instalar e gerenciar os plugins da família Aurora no seu servidor Minecraft.",
        setupStep1Title: "1. Verifique os Pré-requisitos",
        setupStep1Text: "Todos os plugins Aurora são desenvolvidos para servidores Minecraft modernos de alta performance:",
        setupStep1Bullet1: "<strong>Plataforma:</strong> PaperMC, Purpur ou Spigot (Minecraft 1.21.x).",
        setupStep1Bullet2: "<strong>Ambiente de Execução:</strong> Java 21 ou superior instalado na máquina/hospedagem.",
        setupStep1Bullet3: "<strong>Dependência de Banco:</strong> MySQL/MariaDB (opcional para AuroraUtils e AuroraLogin) ou SQLite local automático.",
        setupStep3Title: "2. Instalação no Servidor",
        setupStep3Text: "Transfira o arquivo <code>.jar</code> gerado para a pasta <code>plugins/</code> do diretório raiz do seu servidor Minecraft.",
        setupStep4Title: "3. Inicialização e Configuração",
        setupStep4Text: "Ligue ou reinicie o servidor. Os plugins criarão automaticamente suas respectivas pastas contendo arquivos padrão de tradução e controle (<code>config.yml</code>, <code>messages.yml</code>, etc.).",
        setupStep4Warning: "<strong>Dica importante:</strong> Não apague os arquivos de configuração originais em futuras atualizações. O sistema inteligente de merge dos plugins adicionará novas chaves sem sobrescrever suas edições customizadas!",
        
        // Home Page
        heroBadge: "Coleção Completa de Plugins Aurora",
        heroDescription: "Seja bem-vindo à central de documentação e informações técnicas da suíte de plugins Aurora. Encontre comandos, permissões, mecânicas de jogo e arquivos de configuração detalhados.",
        sectionHeaderPlugins: "Nossos Plugins",
        viewDocBtn: "Ver Documentação",
        
        // Plugin Page Tabs
        tabOverview: "Visão Geral",
        tabCommands: "Comandos & Permissões",
        tabConfig: "Mecânicas & Configuração",
        
        // Plugin Page Contents
        featuresHeader: "Funcionalidades",
        tblCommand: "Comando",
        tblDescription: "Descrição",
        tblPermission: "Permissão",
        tblAction: "Ação",
        btnCopy: "Copiar",
        btnCopied: "Copiado!",
        additionalPermsHeader: "Nós de Permissão Adicionais",
        tblPermNode: "Nó de Permissão",
        tblPermEffect: "Descrição / Efeito",
        configHeader: "Arquivo config.yml",
        copyCodeBtn: "Copiar Código",
        copyCodeBtnSuccess: "Código Copiado!",
        
        // Search Page
        searchTitle: "Resultados da busca por:",
        searchSubtitle: "Exibindo comandos e permissões correspondentes em todas as documentações.",
        searchMetaFound: "Encontrados <strong>{count}</strong> plugins correspondentes para sua busca.",
        searchNoResults: "Nenhum resultado encontrado para",
        searchNoResultsHelp: "Experimente buscar termos como 'spawn', 'reparar', 'combate', 'evento' ou 'admin'.",
        searchGeneralMatch: "Coincidência no nome ou descrição geral do plugin:",
        searchGoToWiki: "Acessar Wiki",
        searchCmdsCount: "Comandos encontrados ({count}):",
        searchPermsCount: "Permissões encontradas ({count}):"
    },
    en: {
        navHome: "Home",
        navSetup: "Installation & Setup",
        sectionPlugins: "Aurora Plugins",
        authorInfo: "Created by <a href='https://github.com/aurorapriin' target='_blank' rel='noopener noreferrer'><strong>Aurorapriin</strong></a>",
        loading: "Loading documentation...",
        toastSuccess: "Copied to clipboard!",
        searchPlaceholder: "Search command, permission...",
        toastConfigSuccess: "Configuration copied successfully!",
        toastCmdSuccess: "Copied: ",
        
        // Setup Page
        setupTitle: "Installation & Setup",
        setupSubtitle: "Learn how to install and manage the Aurora suite plugins on your Minecraft server.",
        setupStep1Title: "1. Verify Prerequisites",
        setupStep1Text: "All Aurora plugins are custom-developed for modern high-performance Minecraft servers:",
        setupStep1Bullet1: "<strong>Platform:</strong> PaperMC, Purpur, or Spigot (Minecraft 1.21.x).",
        setupStep1Bullet2: "<strong>Runtime:</strong> Java 21 or higher installed on the machine/hosting.",
        setupStep1Bullet3: "<strong>Database:</strong> MySQL/MariaDB (optional for AuroraUtils & AuroraLogin) or automatic local SQLite.",
        setupStep3Title: "2. Installation on Server",
        setupStep3Text: "Transfer the generated <code>.jar</code> file into the <code>plugins/</code> folder of your Minecraft server root directory.",
        setupStep4Title: "3. Initialization & Configurations",
        setupStep4Text: "Start or restart the server. The plugins will automatically generate folders containing translation and control files (<code>config.yml</code>, <code>messages.yml</code>, etc.).",
        setupStep4Warning: "<strong>Important Tip:</strong> Do not delete configuration files on future updates. The smart configuration merger updates new keys while keeping your custom modifications safe!",
        
        // Home Page
        heroBadge: "Complete Aurora Plugin Collection",
        heroDescription: "Welcome to the official documentation and technical specifications center for the Aurora plugin suite. Find commands, permissions, mechanics, and detailed config files.",
        sectionHeaderPlugins: "Our Plugins",
        viewDocBtn: "View Documentation",
        
        // Plugin Page Tabs
        tabOverview: "Overview",
        tabCommands: "Commands & Permissions",
        tabConfig: "Mechanics & Config",
        
        // Plugin Page Contents
        featuresHeader: "Features",
        tblCommand: "Command",
        tblDescription: "Description",
        tblPermission: "Permission",
        tblAction: "Action",
        btnCopy: "Copy",
        btnCopied: "Copied!",
        additionalPermsHeader: "Additional Permission Nodes",
        tblPermNode: "Permission Node",
        tblPermEffect: "Description / Effect",
        configHeader: "config.yml file",
        copyCodeBtn: "Copy Code",
        copyCodeBtnSuccess: "Code Copied!",
        
        // Search Page
        searchTitle: "Search results for:",
        searchSubtitle: "Displaying matching commands and permissions in all plugin wikis.",
        searchMetaFound: "Found <strong>{count}</strong> matching plugins for your search.",
        searchNoResults: "No results found for",
        searchNoResultsHelp: "Try searching terms like 'spawn', 'repair', 'combat', 'event', or 'admin'.",
        searchGeneralMatch: "Matches plugin name or general description:",
        searchGoToWiki: "Access Wiki",
        searchCmdsCount: "Commands found ({count}):",
        searchPermsCount: "Permissions found ({count}):"
    }
};

// App State
const state = {
    theme: localStorage.getItem("theme") || "dark",
    language: localStorage.getItem("language") || "pt",
    currentRoute: "",
    searchQuery: "",
    activePluginId: "",
    activePluginTab: "overview"
};

// Map of lucide icons for plugins
const iconMap = {
    shield: "shield",
    zap: "zap",
    lock: "lock",
    swords: "swords",
    "alert-triangle": "alert-triangle",
    dice: "dice",
    calendar: "calendar"
};

// Safe Lucide helper to prevent script crash on CDN failure
function safeCreateIcons() {
    if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
        try {
            lucide.createIcons();
        } catch (e) {
            console.error("Lucide failed to build icons: ", e);
        }
    }
}

// Initialize Application on load
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    applyTheme(state.theme);
    updateUILabels();
    renderPluginsMenu();
    setupEventListeners();
    handleRouting();
    
    safeCreateIcons();
}

// Apply selected theme (light/dark)
function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem("theme", theme);
    
    const themeToggle = document.getElementById("theme-toggle");
    const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
    
    if (theme === "light") {
        document.body.classList.add("light-mode");
        if (themeToggle) {
            const darkIcon = themeToggle.querySelector(".theme-icon-dark");
            const lightIcon = themeToggle.querySelector(".theme-icon-light");
            if (darkIcon) darkIcon.style.display = "none";
            if (lightIcon) lightIcon.style.display = "block";
        }
        if (mobileThemeToggle) {
            mobileThemeToggle.innerHTML = `<i data-lucide="sun"></i>`;
        }
    } else {
        document.body.classList.remove("light-mode");
        if (themeToggle) {
            const darkIcon = themeToggle.querySelector(".theme-icon-dark");
            const lightIcon = themeToggle.querySelector(".theme-icon-light");
            if (darkIcon) darkIcon.style.display = "block";
            if (lightIcon) lightIcon.style.display = "none";
        }
        if (mobileThemeToggle) {
            mobileThemeToggle.innerHTML = `<i data-lucide="moon"></i>`;
        }
    }
    
    safeCreateIcons();
}

// Switch Language and trigger re-render
window.changeLanguage = function(lang) {
    state.language = lang;
    localStorage.setItem("language", lang);
    
    updateUILabels();
    renderPluginsMenu();
    handleRouting();
};

// Update UI Texts based on language selection
function updateUILabels() {
    const t = uiTranslations[state.language];
    
    document.documentElement.lang = state.language === "pt" ? "pt-BR" : "en-US";
    
    const labelHome = document.getElementById("label-nav-home");
    const labelSetup = document.getElementById("label-nav-setup");
    const labelSectionPlugins = document.getElementById("label-section-plugins");
    const labelAuthor = document.getElementById("label-author-info");
    const labelLoading = document.getElementById("label-loading");
    const labelToastSuccess = document.getElementById("label-toast-success");
    const searchInput = document.getElementById("global-search");
    
    if (labelHome) labelHome.textContent = t.navHome;
    if (labelSetup) labelSetup.textContent = t.navSetup;
    if (labelSectionPlugins) labelSectionPlugins.textContent = t.sectionPlugins;
    if (labelAuthor) labelAuthor.innerHTML = t.authorInfo;
    if (labelLoading) labelLoading.textContent = t.loading;
    if (labelToastSuccess) labelToastSuccess.textContent = t.toastSuccess;
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    
    // Sync active class on language selector buttons
    document.querySelectorAll(".lang-btn, .mobile-lang-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    const ptBtn = document.getElementById("lang-pt");
    const enBtn = document.getElementById("lang-en");
    const mobPtBtn = document.getElementById("mobile-lang-pt");
    const mobEnBtn = document.getElementById("mobile-lang-en");
    
    if (state.language === "pt") {
        if (ptBtn) ptBtn.classList.add("active");
        if (mobPtBtn) mobPtBtn.classList.add("active");
    } else {
        if (enBtn) enBtn.classList.add("active");
        if (mobEnBtn) mobEnBtn.classList.add("active");
    }
}

// Render the sidebar list of plugins
function renderPluginsMenu() {
    const listContainer = document.getElementById("plugins-menu-list");
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    pluginsData.forEach(plugin => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="#/plugin/${plugin.id}" class="nav-link" id="nav-${plugin.id}">
                <i data-lucide="package" style="color: ${plugin.color};"></i>
                <span>${plugin.name}</span>
                <span class="plugin-dot" style="background-color: ${plugin.color};"></span>
            </a>
        `;
        listContainer.appendChild(li);
    });
    safeCreateIcons();
}

// Setup Event Listeners
function setupEventListeners() {
    // Hash routing
    window.addEventListener("hashchange", handleRouting);
    
    // Theme Switch
    const themeToggle = document.getElementById("theme-toggle");
    const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
    
    const toggleAction = () => {
        const nextTheme = state.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    };
    
    if (themeToggle) themeToggle.addEventListener("click", toggleAction);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleAction);
    
    // Mobile Drawer Controls
    const mobileToggle = document.getElementById("mobile-toggle");
    const sidebarClose = document.getElementById("sidebar-close");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const sidebar = document.getElementById("sidebar");
    
    const toggleSidebar = (show) => {
        if (sidebar) {
            if (show) {
                sidebar.classList.add("open");
                if (sidebarOverlay) sidebarOverlay.classList.add("active");
            } else {
                sidebar.classList.remove("open");
                if (sidebarOverlay) sidebarOverlay.classList.remove("active");
            }
        }
    };
    
    if (mobileToggle) mobileToggle.addEventListener("click", () => toggleSidebar(true));
    if (sidebarClose) sidebarClose.addEventListener("click", () => toggleSidebar(false));
    if (sidebarOverlay) sidebarOverlay.addEventListener("click", () => toggleSidebar(false));
    
    // Global search inputs
    const searchInput = document.getElementById("global-search");
    const searchClear = document.getElementById("search-clear");
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (val.length > 0) {
                if (searchClear) searchClear.style.display = "flex";
                window.location.hash = `#/search?q=${encodeURIComponent(val)}`;
            } else {
                if (searchClear) searchClear.style.display = "none";
                window.location.hash = "#/home";
            }
        });
    }
    
    if (searchClear) {
        searchClear.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            searchClear.style.display = "none";
            window.location.hash = "#/home";
            if (searchInput) searchInput.focus();
        });
    }
}

// Handle Routing and page changes
function handleRouting() {
    const hash = window.location.hash || "#/home";
    state.currentRoute = hash;
    
    // Close sidebar on mobile after navigating
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    if (sidebar) sidebar.classList.remove("open");
    if (sidebarOverlay) sidebarOverlay.classList.remove("active");
    
    // Sync Search Input visual if not on search page
    const searchInput = document.getElementById("global-search");
    const searchClear = document.getElementById("search-clear");
    if (!hash.startsWith("#/search") && searchInput) {
        searchInput.value = "";
        if (searchClear) searchClear.style.display = "none";
    }

    // Highlighting Active menu links
    document.querySelectorAll(".sidebar-nav .nav-link").forEach(link => {
        link.classList.remove("active");
    });
    
    if (hash === "#/home") {
        const homeLink = document.getElementById("nav-home");
        if (homeLink) homeLink.classList.add("active");
        renderHomePage();
    } else if (hash === "#/setup") {
        const setupLink = document.getElementById("nav-setup");
        if (setupLink) setupLink.classList.add("active");
        renderSetupPage();
    } else if (hash.startsWith("#/plugin/")) {
        const pluginId = hash.replace("#/plugin/", "");
        state.activePluginId = pluginId;
        const pluginLink = document.getElementById(`nav-${pluginId}`);
        if (pluginLink) pluginLink.classList.add("active");
        renderPluginPage(pluginId);
    } else if (hash.startsWith("#/search")) {
        const urlParams = new URLSearchParams(hash.substring(hash.indexOf("?")));
        const query = urlParams.get("q") || "";
        state.searchQuery = query;
        if (searchInput && searchInput.value !== query) {
            searchInput.value = query;
            if (searchClear && query) searchClear.style.display = "flex";
        }
        renderSearchPage(query);
    }
}

// Cache for transparent logos
const transparentLogosCache = {};

function processLogoTransparency(imgSrc, callback) {
    if (!imgSrc) {
        callback("");
        return;
    }
    if (transparentLogosCache[imgSrc]) {
        callback(transparentLogosCache[imgSrc]);
        return;
    }

    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        try {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imgData.data;

            // Make black/dark-grey pixels transparent
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // If pixel is very close to black (r, g, b all under 35)
                if (r < 35 && g < 35 && b < 35) {
                    data[i + 3] = 0; // set alpha to transparent
                }
            }

            ctx.putImageData(imgData, 0, 0);
            const dataUrl = canvas.toDataURL("image/png");
            transparentLogosCache[imgSrc] = dataUrl;
            callback(dataUrl);
        } catch (e) {
            console.error("Error transparency processing for logo:", imgSrc, e);
            callback(imgSrc); // Fallback to original
        }
    };
    img.onerror = () => {
        callback(imgSrc);
    };
}

function applyTransparencyToLogos() {
    const logoImgs = document.querySelectorAll(".plugin-logo-img, .plugin-detail-logo-img");
    logoImgs.forEach(img => {
        const originalSrc = img.getAttribute("src");
        if (originalSrc && !originalSrc.startsWith("data:")) {
            img.style.opacity = "0";
            processLogoTransparency(originalSrc, (transparentSrc) => {
                img.src = transparentSrc;
                img.style.opacity = "1";
            });
        }
    });
}

// GSAP Transition Helper
function animatePageIn() {
    applyTransparencyToLogos();
    if (typeof gsap !== "undefined") {
        gsap.fromTo("#main-content", 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
    } else {
        const main = document.getElementById("main-content");
        if (main) {
            main.style.opacity = "1";
            main.style.transform = "none";
        }
    }
}

// ==========================================
// Page Renderers (Bilingual Support)
// ==========================================

// 1. Home Page
function renderHomePage() {
    const main = document.getElementById("main-content");
    if (!main) return;
    
    const t = uiTranslations[state.language];
    let pluginCardsHtml = "";
    
    pluginsData.forEach(plugin => {
        const rgbColor = hexToRgb(plugin.color) || "255, 143, 163";
        const desc = state.language === "pt" ? plugin.description_pt : plugin.description_en;
        
        // Render either image logo or Lucide icon based on plugin data
        let logoHtml = "";
        if (plugin.logo) {
            logoHtml = `
                <div class="plugin-logo-wrapper">
                    <img src="${plugin.logo}" alt="Logo ${plugin.name}" class="plugin-logo-img">
                </div>
            `;
        } else {
            logoHtml = `
                <div class="plugin-logo-wrapper" style="display: flex; align-items: center; justify-content: center; background: var(--bg-hover); border: 1px solid rgba(255, 255, 255, 0.06);">
                    <i data-lucide="${iconMap[plugin.icon] || 'package'}" style="color: ${plugin.color}; width: 28px; height: 28px;"></i>
                </div>
            `;
        }
        
        pluginCardsHtml += `
            <div class="plugin-card" 
                 style="--card-color: ${plugin.color}; --card-rgb: ${rgbColor}; --card-accent-color: linear-gradient(135deg, ${plugin.color} 0%, var(--bg-card) 100%);">
                <div class="plugin-card-header">
                    ${logoHtml}
                    <span class="plugin-version-badge">v${plugin.version}</span>
                </div>
                <h3 class="plugin-card-title">${plugin.name}</h3>
                <p class="plugin-card-description">${desc}</p>
                <div class="plugin-card-footer">
                    <a href="#/plugin/${plugin.id}" class="plugin-card-link">
                        <span>${t.viewDocBtn}</span>
                        <i data-lucide="arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    });
    
    main.innerHTML = `
        <div class="hero-section">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-badge">
                    <i data-lucide="sparkles"></i>
                    <span>${t.heroBadge}</span>
                </div>
                <h1 class="hero-title">AuroraWiki</h1>
                <p class="hero-description">${t.heroDescription}</p>
            </div>
        </div>
        
        <div class="section-header">
            <h2>
                <i data-lucide="blocks"></i>
                <span>${t.sectionHeaderPlugins}</span>
            </h2>
        </div>
        
        <div class="plugin-grid">
            ${pluginCardsHtml}
        </div>
    `;
    
    safeCreateIcons();
    animatePageIn();
}

// 2. Setup Page
function renderSetupPage() {
    const main = document.getElementById("main-content");
    if (!main) return;
    
    const t = uiTranslations[state.language];
    
    main.innerHTML = `
        <div class="setup-container">
            <div class="plugin-header">
                <h1 style="font-size: 2.85rem; margin-bottom: 12px; background: var(--gradient-aurora); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${t.setupTitle}</h1>
                <p class="plugin-tagline">${t.setupSubtitle}</p>
            </div>
            
            <div class="setup-step">
                <div class="setup-step-badge">1</div>
                <h3>${t.setupStep1Title}</h3>
                <p style="color: var(--text-muted); margin-bottom: 12px;">${t.setupStep1Text}</p>
                <ul class="mechanics-container" style="list-style: disc; margin-left: 24px; margin-bottom: 24px;">
                    <li>${t.setupStep1Bullet1}</li>
                    <li>${t.setupStep1Bullet2}</li>
                    <li>${t.setupStep1Bullet3}</li>
                </ul>
            </div>
            
            <div class="setup-step">
                <div class="setup-step-badge">2</div>
                <h3>${t.setupStep3Title}</h3>
                <p style="color: var(--text-muted);">${t.setupStep3Text}</p>
            </div>
            
            <div class="setup-step">
                <div class="setup-step-badge">3</div>
                <h3>${t.setupStep4Title}</h3>
                <p style="color: var(--text-muted); margin-bottom: 12px;">${t.setupStep4Text}</p>
                <div class="feature-item" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);">
                    <i data-lucide="alert-circle" style="color: var(--color-primary);"></i>
                    <p style="font-size: 0.9rem;">${t.setupStep4Warning}</p>
                </div>
            </div>
        </div>
    `;
    
    safeCreateIcons();
    animatePageIn();
}

// 3. Plugin Detail Page
function renderPluginPage(pluginId) {
    const main = document.getElementById("main-content");
    const plugin = pluginsData.find(p => p.id === pluginId);
    
    if (!main || !plugin) {
        renderHomePage();
        return;
    }
    
    const t = uiTranslations[state.language];
    const activeTabRGB = hexToRgb(plugin.color) || "255, 143, 163";
    main.style.setProperty('--active-tab-color', plugin.color);
    main.style.setProperty('--active-tab-rgb', activeTabRGB);
    
    // Choose appropriate language variables
    const tagline = state.language === "pt" ? plugin.tagline_pt : plugin.tagline_en;
    const features = state.language === "pt" ? plugin.features_pt : plugin.features_en;
    const mechanics = state.language === "pt" ? plugin.mechanics_pt : plugin.mechanics_en;
    
    // Features HTML
    let featuresHtml = "";
    features.forEach(feat => {
        featuresHtml += `
            <div class="feature-item">
                <i data-lucide="check-circle-2"></i>
                <p>${feat}</p>
            </div>
        `;
    });
    
    // Commands Table HTML
    let commandsTableHtml = `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th style="width: 25%">${t.tblCommand}</th>
                        <th style="width: 40%">${t.tblDescription}</th>
                        <th style="width: 25%">${t.tblPermission}</th>
                        <th style="width: 10%">${t.tblAction}</th>
                    </tr>
                </thead>
                <tbody>
    `;
    plugin.commands.forEach(c => {
        const cmdDesc = state.language === "pt" ? c.desc_pt : c.desc_en;
        commandsTableHtml += `
            <tr>
                <td><code>${c.cmd}</code></td>
                <td>${cmdDesc}</td>
                <td><span style="font-size: 0.85rem; font-family: var(--font-code); color: var(--text-muted); word-break: break-all;">${c.perm}</span></td>
                <td>
                    <button class="copy-btn" onclick="triggerCopy('${c.perm}', this)" aria-label="Copiar permissão">
                        <i data-lucide="copy"></i>
                        <span>${t.btnCopy}</span>
                    </button>
                </td>
            </tr>
        `;
    });
    commandsTableHtml += `
                </tbody>
            </table>
        </div>
    `;
    
    // Permissions Table HTML (if any extra nodes exist)
    let permissionsTableHtml = "";
    if (plugin.permissions && plugin.permissions.length > 0) {
        permissionsTableHtml += `
            <div class="section-header" style="margin-top: 40px; margin-bottom: 16px;">
                <h3 style="font-size: 1.25rem;">${t.additionalPermsHeader}</h3>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th style="width: 45%">${t.tblPermNode}</th>
                            <th style="width: 45%">${t.tblPermEffect}</th>
                            <th style="width: 10%">${t.tblAction}</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        plugin.permissions.forEach(p => {
            const permDesc = state.language === "pt" ? p.desc_pt : p.desc_en;
            permissionsTableHtml += `
                <tr>
                    <td><code>${p.node}</code></td>
                    <td>${permDesc}</td>
                    <td>
                        <button class="copy-btn" onclick="triggerCopy('${p.node}', this)" aria-label="Copiar permissão">
                            <i data-lucide="copy"></i>
                            <span>${t.btnCopy}</span>
                        </button>
                    </td>
                </tr>
            `;
        });
        permissionsTableHtml += `
                    </tbody>
                </table>
            </div>
        `;
    }
    
    // Dynamic Header Logo logic
    let detailLogoHtml = "";
    if (plugin.logo) {
        detailLogoHtml = `
            <div class="plugin-detail-logo-wrapper">
                <img src="${plugin.logo}" alt="Logo ${plugin.name}" class="plugin-detail-logo-img">
            </div>
        `;
    } else {
        detailLogoHtml = `
            <div class="plugin-detail-logo-wrapper" style="display: flex; align-items: center; justify-content: center; background: var(--bg-hover); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
                <i data-lucide="${iconMap[plugin.icon] || 'package'}" style="color: ${plugin.color}; width: 42px; height: 42px;"></i>
            </div>
        `;
    }
    
    // Page template assembly
    main.innerHTML = `
        <div class="plugin-header">
            <div class="plugin-header-breadcrumbs">
                <a href="#/home">${t.navHome}</a>
                <i data-lucide="chevron-right" style="width:14px; height:14px;"></i>
                <span>${plugin.name}</span>
            </div>
            
            <div class="plugin-title-row">
                ${detailLogoHtml}
                <div>
                    <h1 style="color: ${plugin.color}; margin-bottom: 4px;">${plugin.name}</h1>
                    <span class="plugin-version-badge" style="background: rgba(${activeTabRGB}, 0.1); border-color: rgba(${activeTabRGB}, 0.2); color: ${plugin.color}; padding: 4px 12px; font-size: 0.8rem;">v${plugin.version}</span>
                </div>
            </div>
            <p class="plugin-tagline">${tagline}</p>
        </div>
        
        <div class="plugin-tabs">
            <button class="tab-btn active" id="tab-overview-btn" onclick="switchPluginTab('overview')">${t.tabOverview}</button>
            <button class="tab-btn" id="tab-commands-btn" onclick="switchPluginTab('commands')">${t.tabCommands}</button>
            <button class="tab-btn" id="tab-config-btn" onclick="switchPluginTab('config')">${t.tabConfig}</button>
        </div>
        
        <!-- Tab 1: Overview -->
        <div class="tab-content active" id="tab-overview">
            <div class="section-header">
                <h2>
                    <i data-lucide="sparkles"></i>
                    <span>${t.featuresHeader}</span>
                </h2>
            </div>
            <div class="feature-list">
                ${featuresHtml}
            </div>
        </div>
        
        <!-- Tab 2: Commands & Permissions -->
        <div class="tab-content" id="tab-commands">
            ${commandsTableHtml}
            ${permissionsTableHtml}
        </div>
        
        <!-- Tab 3: Mechanics & Configuration -->
        <div class="tab-content" id="tab-config">
            <div class="mechanics-container">
                ${mechanics}
            </div>
            
            <div class="section-header" style="margin-top: 40px; margin-bottom: 20px;">
                <h2>
                    <i data-lucide="file-code"></i>
                    <span>${t.configHeader}</span>
                </h2>
            </div>
            
            <div class="config-wrapper">
                <div class="config-header">
                    <span class="config-filename"><i data-lucide="file"></i> config.yml</span>
                    <button class="copy-btn" onclick="triggerCopyCode(this)" aria-label="Copiar código de configuração">
                        <i data-lucide="copy"></i>
                        <span>${t.copyCodeBtn}</span>
                    </button>
                </div>
                <pre class="config-pre"><code class="config-code" id="raw-config-code">${highlightYAML(plugin.config)}</code></pre>
            </div>
        </div>
    `;
    
    // Toggle correct tab based on memory
    switchPluginTab(state.activePluginTab);
    
    safeCreateIcons();
    animatePageIn();
}

// Tab navigation trigger
window.switchPluginTab = function(tabName) {
    state.activePluginTab = tabName;
    
    document.querySelectorAll(".plugin-tabs .tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    const activeBtn = document.getElementById(`tab-${tabName}-btn`);
    if (activeBtn) activeBtn.classList.add("active");
    
    document.querySelectorAll(".tab-content").forEach(panel => {
        panel.classList.remove("active");
        panel.style.display = "none";
    });
    
    const activePanel = document.getElementById(`tab-${tabName}`);
    if (activePanel) {
        activePanel.classList.add("active");
        activePanel.style.display = "block";
    }
};

// 4. Search Results Page
function renderSearchPage(query) {
    const main = document.getElementById("main-content");
    if (!main) return;
    
    const t = uiTranslations[state.language];
    
    if (!query) {
        renderHomePage();
        return;
    }
    
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    pluginsData.forEach(plugin => {
        const matchingCommands = plugin.commands.filter(c => {
            const cmdDesc = state.language === "pt" ? c.desc_pt : c.desc_en;
            return c.cmd.toLowerCase().includes(lowerQuery) || 
                   cmdDesc.toLowerCase().includes(lowerQuery) || 
                   c.perm.toLowerCase().includes(lowerQuery);
        });
        
        const matchingPermissions = (plugin.permissions || []).filter(p => {
            const permDesc = state.language === "pt" ? p.desc_pt : p.desc_en;
            return p.node.toLowerCase().includes(lowerQuery) || 
                   permDesc.toLowerCase().includes(lowerQuery);
        });
        
        const tagline = state.language === "pt" ? plugin.tagline_pt : plugin.tagline_en;
        const generalDesc = state.language === "pt" ? plugin.description_pt : plugin.description_en;
        const matchesGeneral = plugin.name.toLowerCase().includes(lowerQuery) || 
                               generalDesc.toLowerCase().includes(lowerQuery) ||
                               tagline.toLowerCase().includes(lowerQuery);
                               
        if (matchingCommands.length > 0 || matchingPermissions.length > 0 || matchesGeneral) {
            results.push({
                plugin,
                commands: matchingCommands,
                permissions: matchingPermissions,
                matchesGeneral
            });
        }
    });
    
    let resultsHtml = "";
    
    if (results.length === 0) {
        resultsHtml = `
            <div class="loading-container" style="min-height: 40vh;">
                <i data-lucide="frown" style="width: 48px; height: 48px; color: var(--text-muted);"></i>
                <p>${t.searchNoResults} "<strong>${escapeHtml(query)}</strong>"</p>
                <p style="font-size: 0.9rem; margin-top: -8px;">${t.searchNoResultsHelp}</p>
            </div>
        `;
    } else {
        resultsHtml += `<div class="search-results-page">`;
        resultsHtml += `<p class="search-results-meta">${t.searchMetaFound.replace("{count}", results.length)}</p>`;
        
        results.forEach(({ plugin, commands, permissions, matchesGeneral }) => {
            const tagline = state.language === "pt" ? plugin.tagline_pt : plugin.tagline_en;
            const generalDesc = state.language === "pt" ? plugin.description_pt : plugin.description_en;
            
            // Search result group header logo/icon
            let searchLogoHtml = "";
            if (plugin.logo) {
                searchLogoHtml = `<img src="${plugin.logo}" alt="Logo ${plugin.name}" class="plugin-logo-img" style="width: 42px; height: 42px; border-radius: var(--radius-sm); object-fit: cover;">`;
            } else {
                searchLogoHtml = `
                    <div style="width: 42px; height: 42px; border-radius: var(--radius-sm); background: var(--bg-hover); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.06);">
                        <i data-lucide="${iconMap[plugin.icon] || 'package'}" style="color: ${plugin.color}; width: 22px; height: 22px;"></i>
                    </div>
                `;
            }
            
            resultsHtml += `
                <div class="search-result-group" style="border-left: 4px solid ${plugin.color};">
                    <div class="search-group-header">
                        <div style="display: flex; align-items: center; gap: 14px;">
                            ${searchLogoHtml}
                            <div>
                                <h3 style="color: ${plugin.color};">${plugin.name}</h3>
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">${tagline}</p>
                            </div>
                        </div>
                        <a href="#/plugin/${plugin.id}">
                            <span>${t.searchGoToWiki}</span>
                            <i data-lucide="external-link" style="width:14px; height:14px;"></i>
                        </a>
                    </div>
            `;
            
            if (matchesGeneral && commands.length === 0 && permissions.length === 0) {
                resultsHtml += `
                    <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 12px;">${t.searchGeneralMatch}</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted); background: rgba(255,255,255,0.02); padding: 12px; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.04);">${generalDesc}</p>
                `;
            }
            
            if (commands.length > 0) {
                resultsHtml += `
                    <h4 style="font-size: 0.95rem; margin-bottom: 10px; color: var(--text-main); margin-top: 12px;">${t.searchCmdsCount.replace("{count}", commands.length)}</h4>
                    <div class="table-container">
                        <table>
                            <tbody>
                `;
                commands.forEach(c => {
                    const cmdDesc = state.language === "pt" ? c.desc_pt : c.desc_en;
                    resultsHtml += `
                        <tr>
                            <td style="width: 25%"><code>${highlightText(c.cmd, query)}</code></td>
                            <td style="width: 45%">${highlightText(cmdDesc, query)}</td>
                            <td style="width: 20%"><span style="font-size: 0.85rem; font-family: var(--font-code); color: var(--text-muted); word-break: break-all;">${highlightText(c.perm, query)}</span></td>
                            <td style="width: 10%">
                                <button class="copy-btn" onclick="triggerCopy('${c.perm}', this)">
                                    <i data-lucide="copy"></i>
                                    <span>${t.btnCopy}</span>
                                </button>
                            </td>
                        </tr>
                    `;
                });
                resultsHtml += `</tbody></table></div>`;
            }
            
            if (permissions.length > 0) {
                resultsHtml += `
                    <h4 style="font-size: 0.95rem; margin-bottom: 10px; color: var(--text-main); margin-top: 12px;">${t.searchPermsCount.replace("{count}", permissions.length)}</h4>
                    <div class="table-container">
                        <table>
                            <tbody>
                `;
                permissions.forEach(p => {
                    const permDesc = state.language === "pt" ? p.desc_pt : p.desc_en;
                    resultsHtml += `
                        <tr>
                            <td style="width: 45%"><code>${highlightText(p.node, query)}</code></td>
                            <td style="width: 45%">${highlightText(permDesc, query)}</td>
                            <td style="width: 10%">
                                <button class="copy-btn" onclick="triggerCopy('${p.node}', this)">
                                    <i data-lucide="copy"></i>
                                    <span>${t.btnCopy}</span>
                                </button>
                            </td>
                        </tr>
                    `;
                });
                resultsHtml += `</tbody></table></div>`;
            }
            
            resultsHtml += `</div>`;
        });
        resultsHtml += `</div>`;
    }
    
    main.innerHTML = `
        <div class="plugin-header">
            <h1>${t.searchTitle} "${escapeHtml(query)}"</h1>
            <p class="plugin-tagline">${t.searchSubtitle}</p>
        </div>
        ${resultsHtml}
    `;
    
    safeCreateIcons();
    animatePageIn();
}

// ==========================================
// Helper Utilities & Actions
// ==========================================

// Highlight matching search query text in output
function highlightText(text, search) {
    if (!search) return text;
    const pattern = new RegExp(`(${escapeRegExp(search)})`, "gi");
    return text.replace(pattern, "<mark style='background-color: rgba(255, 143, 163, 0.3); color: #fff; padding: 2px 0; border-radius: 2px;'>$1</mark>");
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Escape HTML tags to prevent XSS and code breakage
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Color Hex Converter to build translucent HSL/RGB glow shades
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
        : null;
}

// Copy Action for list permissions
window.triggerCopy = function(text, btnElement) {
    const t = uiTranslations[state.language];
    navigator.clipboard.writeText(text).then(() => {
        showToast(`${t.toastCmdSuccess} ${text}`);
        
        const span = btnElement.querySelector("span");
        const icon = btnElement.querySelector("i");
        if (span) span.textContent = t.btnCopied;
        if (icon) {
            icon.setAttribute("data-lucide", "check");
            safeCreateIcons();
        }
        
        btnElement.style.borderColor = "var(--color-success)";
        btnElement.style.color = "var(--color-success)";
        
        setTimeout(() => {
            if (span) span.textContent = t.btnCopy;
            if (icon) {
                icon.setAttribute("data-lucide", "copy");
                safeCreateIcons();
            }
            btnElement.style.borderColor = "";
            btnElement.style.color = "";
        }, 1500);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
};

// Copy Action for the full config panel code block
window.triggerCopyCode = function(btnElement) {
    const t = uiTranslations[state.language];
    const codeEl = document.getElementById("raw-config-code");
    if (!codeEl) return;
    
    const codeText = codeEl.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        showToast(t.toastConfigSuccess);
        
        const span = btnElement.querySelector("span");
        if (span) span.textContent = t.copyCodeBtnSuccess;
        btnElement.style.borderColor = "var(--color-success)";
        btnElement.style.color = "var(--color-success)";
        
        setTimeout(() => {
            if (span) span.textContent = t.copyCodeBtn;
            btnElement.style.borderColor = "";
            btnElement.style.color = "";
        }, 1500);
    }).catch(err => {
        console.error("Erro ao copiar código: ", err);
    });
};

// Global Toast Message Controller
function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMessage = toast.querySelector(".toast-message");
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// Light YAML Syntax Highlighting
function highlightYAML(yamlText) {
    if (!yamlText) return '';
    let escaped = escapeHtml(yamlText);
    
    let lines = escaped.split('\n');
    let highlightedLines = lines.map(line => {
        if (line.trim().startsWith('#')) {
            return `<span class="yml-comment">${line}</span>`;
        }
        let match = line.match(/^(\s*)([^#:]+):(.*)$/);
        if (match) {
            let indent = match[1];
            let key = match[2];
            let rest = match[3];
            
            let valuePart = rest;
            let commentPart = '';
            let hashIdx = rest.indexOf('#');
            if (hashIdx !== -1) {
                valuePart = rest.substring(0, hashIdx);
                commentPart = `<span class="yml-comment">${rest.substring(hashIdx)}</span>`;
            }
            
            let val = valuePart.trim();
            let newVal = valuePart;
            
            if (val === 'true' || val === 'false') {
                newVal = valuePart.replace(val, `<span class="yml-boolean">${val}</span>`);
            } else if (!isNaN(val) && val !== '') {
                newVal = valuePart.replace(val, `<span class="yml-number">${val}</span>`);
            } else if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                newVal = valuePart.replace(val, `<span class="yml-string">${val}</span>`);
            }
            
            return `${indent}<span class="yml-key">${key}</span>:${newVal}${commentPart}`;
        }
        return line;
    });
    return highlightedLines.join('\n');
}
