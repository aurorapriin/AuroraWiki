const pluginsData = [
  {
    id: "aurorautils",
    name: "AuroraUtils",
    version: "1.1.9",
    logo: "assets/logo_aurorautils.jpg",
    icon: "shield",
    color: "#ff8fa3", // Pastel Pink Accent
    tagline_pt: "O núcleo essencial para servidores Paper/Spigot 1.21.x",
    tagline_en: "The essential core for Paper/Spigot 1.21.x servers",
    description_pt: "Comandos essenciais, utilitários virtuais e segurança contra duplicação de alto desempenho.",
    description_en: "Essential commands, virtual utilities, and high-performance anti-duplication security.",
    features_pt: [
      "Comandos utilitários virtuais: /craft, /bigorna, /lixo, /ec e /bau.",
      "Segurança Dupe-Proof avançada: bloqueio contra perda de itens e fechamento rápido de menus, travamento do slot de paginação e salvamento assíncrono seguro com isSaving lock.",
      "Ender Chest de terceiros (/ec <jogador>) com permissões específicas para administradores.",
      "Baú virtual persistente com paginação automática inteligente pelo slot 53 (até 9 páginas).",
      "Vanish físico completo com invisibilidade total, remoção da lista de TAB, e ActionBar de status contínua.",
      "Cores personalizadas na Bigorna com permissões e suporte a códigos de cores '&'.",
      "Mensagens de morte PvP interativas: exibem encantamentos e itens em hover no chat.",
      "Sistema de spawn com cooldown e alertas sonoros/visuais configuráveis via chat, title e actionbar.",
      "Banco de dados híbrido assíncrono (SQLite/MySQL) rodando fora da thread principal para TPS estável.",
      "Reinicialização automática flexível (diária ou semanal) com contagem regressiva e avisos.",
      "Suporte para Bedrock (Geyser/Floodgate) e PlaceholderAPI (%aurorautils_nickname%, %aurorautils_displayname%)."
    ],
    features_en: [
      "Virtual utility commands: /craft, /bigorna, /lixo, /ec and /bau.",
      "Advanced Dupe-Proof security: prevents item loss on quick menu closures, locks navigation slots, and performs asynchronous saves with isSaving lock.",
      "Inspect other players' Ender Chests (/ec <player>) with administrative permissions.",
      "Persistent virtual chest with smart automatic pagination through slot 53 (up to 9 pages).",
      "Complete physical Vanish: total invisibility, tab list removal, and continuous status ActionBar.",
      "Custom anvil coloring with permission and legacy '&' color code support.",
      "Interactive PvP death messages: show item details and enchantments on chat hover.",
      "Spawn system with cooldown and sound/visual alerts via chat, title, and actionbar.",
      "Asynchronous hybrid database (SQLite/MySQL) running off the main thread for stable TPS.",
      "Flexible automatic restart scheduling (daily or weekly) with warnings and countdown.",
      "Bedrock player compatibility (Geyser/Floodgate) and PlaceholderAPI support."
    ],
    commands: [
      { cmd: "/craft", desc_pt: "Abre uma bancada de trabalho portátil de qualquer lugar.", desc_en: "Opens a portable crafting table from anywhere.", perm: "aurorautils.comando.craft" },
      { cmd: "/bigorna", desc_pt: "Abre uma bigorna portátil. Permite nomes coloridos caso tenha permissão.", desc_en: "Opens a portable anvil. Allows colored names if permitted.", perm: "aurorautils.comando.bigorna" },
      { cmd: "/lixo", desc_pt: "Abre uma lixeira virtual permanente para descarte seguro de itens.", desc_en: "Opens a virtual trash menu for safe item disposal.", perm: "aurorautils.comando.lixo" },
      { cmd: "/ec [player]", desc_pt: "Abre o seu baú do fim ou o de outro jogador online (com permissão others).", desc_en: "Opens your ender chest or another online player's chest.", perm: "aurorautils.comando.ec" },
      { cmd: "/bau [page]", desc_pt: "Abre um baú virtual persistente. Permite navegar pelas páginas dinamicamente.", desc_en: "Opens a persistent virtual chest. Navigate pages dynamically.", perm: "aurorautils.comando.bau" },
      { cmd: "/back", desc_pt: "Teleporta o jogador de volta ao local de sua última morte.", desc_en: "Teleports the player back to their last death location.", perm: "aurorautils.comando.back" },
      { cmd: "/reparar", desc_pt: "Repara o item na mão usando XP proporcionalmente (consome XP em itens com Remendo e escavação 3x3).", desc_en: "Repairs the item in hand using XP proportionally (costs XP for Mending & 3x3 Excavation tools).", perm: "aurorautils.comando.reparar" },
      { cmd: "/esquentar", desc_pt: "Derrete minérios segurados diretamente em suas formas processadas.", desc_en: "Smelts the held ore item directly into its processed form.", perm: "aurorautils.comando.esquentar" },
      { cmd: "/luz", desc_pt: "Ativa ou desativa visão noturna infinita com alerta na ActionBar.", desc_en: "Toggles infinite night vision with an ActionBar alert.", perm: "aurorautils.comando.luz" },
      { cmd: "/vanish", desc_pt: "Fica invisível para outros jogadores, remove do TAB e oculta sons de blocos/baús.", desc_en: "Becomes invisible, hides from TAB, and silences chest/block interactions.", perm: "aurorautils.comando.vanish" },
      { cmd: "/gm <modo> [player]", desc_pt: "Altera o modo de jogo (sobrevivência, criativo, aventura, espectador).", desc_en: "Changes game mode (survival, creative, adventure, spectator).", perm: "aurorautils.comando.gm" },
      { cmd: "/speed [speed]", desc_pt: "Ajusta a velocidade de caminhada ou voo.", desc_en: "Adjusts walking or flying speed.", perm: "aurorautils.comando.speed" },
      { cmd: "/efeito", desc_pt: "Exibe, adiciona ou remove efeitos de poção ativos no jogador.", desc_en: "Displays, adds, or removes active potion effects.", perm: "aurorautils.comando.efeito" },
      { cmd: "/itemedit", desc_pt: "Abre menu ou editor para modificar nome, lore e encantamentos do item na mão.", desc_en: "Opens an editor to modify the name, lore, and enchantments of the held item.", perm: "aurorautils.comando.itemedit" },
      { cmd: "/spawn [player|all]", desc_pt: "Teleporta para o spawn do servidor com delay e cancelamento por movimento.", desc_en: "Teleports you, a player, or everyone to spawn with a delay.", perm: "aurorautils.comando.spawn" },
      { cmd: "/puxar <player|all>", desc_pt: "Teleporta um jogador ou todos os jogadores do servidor até você.", desc_en: "Teleports a specific player or all players to your location.", perm: "aurorautils.comando.puxar" },
      { cmd: "/nick <nick|off|reset>", desc_pt: "Define um apelido formatado usando MiniMessage, Hex ou Legacy.", desc_en: "Sets a custom nickname formatted using MiniMessage, Hex, or Legacy colors.", perm: "aurorautils.comando.nick" },
      { cmd: "/nick admin <set|reset> <player> <nick>", desc_pt: "Altera ou remove o apelido de outros jogadores.", desc_en: "Modifies or resets nicknames for other players.", perm: "aurorautils.comando.nick.others" },
      { cmd: "/enchant [player] <enchantment> <level>", desc_pt: "Aplica encantamentos normais ou inseguros (acima do limite do jogo) em itens.", desc_en: "Applies standard or unsafe enchantments to the item.", perm: "aurorautils.comando.enchant" },
      { cmd: "/aurorautils reload", desc_pt: "Recarrega as configurações do plugin (config.yml, messages.yml, etc.).", desc_en: "Reloads the configuration files (config.yml, messages.yml, etc.).", perm: "aurorautils.admin" }
    ],
    permissions: [
      { node: "aurorautils.admin", desc_pt: "Permissão de administrador. Concede acesso total a comandos de reload e configurações.", desc_en: "Administrator permission. Grants total access to config reloads and setups." },
      { node: "aurorautils.anvil.color", desc_pt: "Permite colorir e formatar nomes na bigorna virtual (/bigorna) usando o caractere &.", desc_en: "Allows legacy '&' color codes when renaming items in the anvil." },
      { node: "aurorautils.bau.N", desc_pt: "Define a quantidade máxima de páginas que o jogador pode acessar no baú virtual (N de 1 a 9).", desc_en: "Defines the maximum chest pages accessible by the player (N from 1 to 9)." },
      { node: "aurorautils.vanish", desc_pt: "Permite ver jogadores no vanish e não ser removido da lista TAB deles.", desc_en: "Allows seeing vanished players and prevents being hidden from their TAB list." },
      { node: "aurorautils.spawn.cooldown.bypass", desc_pt: "Ignora o tempo de espera (countdown) ao usar o comando /spawn.", desc_en: "Bypasses the countdown timer when teleporting to spawn." },
      { node: "aurorautils.comando.ec.others", desc_pt: "Permite abrir o Ender Chest de outros jogadores com o comando /ec <jogador>.", desc_en: "Allows viewing other players' Ender Chests with /ec <player>." },
      { node: "aurorautils.comando.gamemode.others", desc_pt: "Permite alterar o modo de jogo de outros jogadores com /gm.", desc_en: "Allows altering game modes for other players with /gm." },
      { node: "aurorautils.comando.spawn.others", desc_pt: "Permite enviar outros jogadores para o spawn.", desc_en: "Allows sending other players to spawn." },
      { node: "aurorautils.comando.spawn.all", desc_pt: "Permite enviar todos os jogadores online para o spawn de uma vez.", desc_en: "Allows sending all online players to spawn simultaneously." },
      { node: "aurorautils.comando.puxar.all", desc_pt: "Permite teleportar todos os jogadores do servidor para a sua posição.", desc_en: "Allows teleporting all players on the server to your position." }
    ],
    mechanics_pt: `
      <h3>Reparo de Itens (XP & Remendo)</h3>
      <p>O comando <code>/reparar</code> possui regras dinâmicas integradas:</p>
      <ul>
        <li>Por padrão, reparos normais não custam XP.</li>
        <li>Itens que possuem o encantamento <strong>Mending (Remendo)</strong> ou o encantamento customizado <strong>Excavação 3x3</strong> cobram XP proporcional ao dano do item (por padrão, 1 XP repara 2 pontos de durabilidade, ou cobra 5 níveis de XP fixos se configurado).</li>
        <li>O plugin suporta reparos parciais se o jogador não tiver XP suficiente para consertar o item inteiro.</li>
      </ul>
      
      <h3>Baú Virtual Paginado</h3>
      <p>Ao usar <code>/bau</code>, o jogador acessa uma interface gráfica persistente. Se possuir permissões para múltiplas páginas (ex: <code>aurorautils.bau.5</code>), uma flecha de navegação aparecerá no <strong>slot 53</strong>. Clicar nela salva os dados da página atual de forma assíncrona no SQLite/MySQL e abre a próxima página instantaneamente, sem precisar digitar comandos adicionais.</p>
    `,
    mechanics_en: `
      <h3>Item Repair Mechanic (XP & Mending)</h3>
      <p>The <code>/reparar</code> command runs custom dynamic criteria:</p>
      <ul>
        <li>By default, standard repairs are completely free of cost.</li>
        <li>Tools with the <strong>Mending</strong> enchantment or the custom <strong>Excavação 3x3</strong> enchantment consume player XP based on damage ratio (1 XP points repair 2 damage points, or 5 XP levels flat if configured).</li>
        <li>Supports partial repair logic if the player lacks enough XP to repair the tool to full durability.</li>
      </ul>
      
      <h3>Paginated Virtual Chests</h3>
      <p>Using <code>/bau</code> displays a persistent inventory interface. If the player has permissions for multiple pages (e.g. <code>aurorautils.bau.5</code>), a navigation arrow appears in <strong>slot 53</strong>. Clicking it saves the active page asynchronously to SQLite/MySQL and opens the next page without further command arguments.</p>
    `,
    config: `# Configurações gerais de banco de dados
database:
  type: SQLITE
  sqlite:
    file: database.db
  mysql:
    host: localhost
    port: 3306
    database: aurorautils
    username: root
    password: ""
    pool-size: 10

# Configurações do /spawn
spawn:
  cooldown: 5 # em segundos
  cancel-on-move: true
  effects:
    sound: ENTITY_ENDERMAN_TELEPORT
    particles: true

# Configurações de Reinicialização Automática
restart:
  enabled: true
  schedule: "todos - 03:00" # Rodar todos os dias às 3 da manhã
  warning-times: [600, 300, 60, 10, 5, 4, 3, 2, 1]`
  },
  {
    id: "auroraencantamentos",
    name: "AuroraEncantamentos",
    version: "1.0.0",
    logo: "assets/logo_auroraencantamentos.png",
    icon: "zap",
    color: "#c299ff", // Pastel Purple Accent
    tagline_pt: "Superpoderes temporários para as ferramentas dos jogadores",
    tagline_en: "Temporary superpowers applied to player tools",
    description_pt: "Encantamentos customizados temporários (Excavação 3x3, Minerar em veia, Lenhador) com controle de tempo.",
    description_en: "Temporary custom enchantments (3x3 Excavation, Vein Miner, Timber) featuring time expiration controls.",
    features_pt: [
      "Três encantamentos exclusivos: Excavação 3x3, Minerar em veia e Lenhador.",
      "Durabilidade temporária: os encantamentos têm um tempo de validade em segundos que é atualizado dinamicamente no lore do item.",
      "Remoção automática: quando o tempo expira, o encantamento desaparece do item com um alerta no chat para o jogador.",
      "Sincronização com o AuroraUtils: reparo de ferramentas com Excavação 3x3 consome XP.",
      "Comando de permanência (/ae perm) para tornar os encantamentos permanentes (removendo a contagem regressiva).",
      "Permite dar livros de encantamentos com quantidades específicas para distribuição em caixas misteriosas ou lojas."
    ],
    features_en: [
      "Three unique custom enchantments: 3x3 Excavation, Vein Miner (Minerar em veia), and Timber (Lenhador).",
      "Temporal durability: Custom enchantments have an expiration timer displayed directly in the tool lore.",
      "Automatic cleanup: Expired enchantments are automatically removed from items and alert players in chat.",
      "AuroraUtils integration: Repairing items with 3x3 Excavation costs XP in the /reparar command.",
      "Permanence upgrade (/ae perm): Allows administrators to make a tool's custom enchantments permanent.",
      "Enchanted books distribution: Admin command to grant custom enchantment books with specific amounts."
    ],
    commands: [
      { cmd: "/ae give <player> <encantamento> <quantidade>", desc_pt: "Entrega livros de encantamentos personalizados para um jogador.", desc_en: "Grants custom enchantment books to a specific player.", perm: "auroraencantamentos.admin" },
      { cmd: "/ae perm", desc_pt: "Torna permanentes os encantamentos personalizados da ferramenta na sua mão.", desc_en: "Makes the custom enchantments on the held tool permanent.", perm: "auroraencantamentos.admin" },
      { cmd: "/ae reload", desc_pt: "Recarrega as configurações e mensagens do arquivo config.yml.", desc_en: "Reloads the configuration keys and messages from config.yml.", perm: "auroraencantamentos.admin" }
    ],
    permissions: [
      { node: "auroraencantamentos.admin", desc_pt: "Acesso administrativo aos comandos /ae, permitindo conceder livros e alterar permanência.", desc_en: "Administrative access to command /ae. Allows giving books and making enchantments permanent." }
    ],
    mechanics_pt: `
      <h3>Os Três Grandes Encantamentos</h3>
      <ul>
        <li><strong>Excavação 3x3:</strong> Ao quebrar um bloco de terra, pedra, areia ou cascalho com uma pá/picareta, quebra instantaneamente uma grade de 3x3 blocos centralizada no bloco minerado.</li>
        <li><strong>Minerar em Veia (Veinminer):</strong> Ao quebrar um minério (carvão, ferro, ouro, diamante, etc.), quebra toda a veia de minérios conectados até um limite configurável (padrão: 64 blocos).</li>
        <li><strong>Lenhador (Timber):</strong> Ao quebrar o tronco de uma árvore com um machado, derruba toda a árvore (troncos e folhas conectadas) até um limite configurável (padrão: 80 blocos).</li>
      </ul>
      
      <h3>Sistema de Lore e Expiração</h3>
      <p>Quando um encantamento personalizado é aplicado a um item, uma linha é adicionada ao lore: <code>» Duração: 59m 30s</code>. O plugin reduz esse tempo em tempo real baseado no uso ou tempo ativo de jogo e, ao expirar, o encantamento é removido e um som de quebra é emitido.</p>
    `,
    mechanics_en: `
      <h3>The Three Custom Enchantments</h3>
      <ul>
        <li><strong>Excavação 3x3:</strong> When mining dirt, stone, sand, or gravel, automatically breaks a 3x3 block grid centered on the targeted block.</li>
        <li><strong>Minerar em Veia (Vein Miner):</strong> When breaking an ore block, automatically harvests the entire adjacent ore vein up to a configurable block limit (default: 64).</li>
        <li><strong>Lenhador (Timber):</strong> When cutting down a tree trunk with an axe, automatically harvests all log and leaf blocks up to a limit (default: 80).</li>
      </ul>
      
      <h3>Lore and Expiration System</h3>
      <p>Applying a custom enchantment inserts a countdown line in the item lore: <code>» Duração: 59m 30s</code>. The plugin ticks down the duration based on play-time/activity. Upon expiration, the enchantment is removed, playing a break sound.</p>
    `,
    config: `# Detalhes dos encantamentos
enchantments:
  excavacao_3x3:
    enabled: true
    name: "&aExcavação 3x3"
    xp_cost: 10
    duration: 3600 # 1 hora
    whitelist:
      - STONE
      - DEEPSLATE
      - DIRT
      - SAND
      - GRAVEL
  
  minerar_em_veia:
    enabled: true
    name: "&bMinerar em veia"
    xp_cost: 15
    duration: 1800 # 30 minutos
    max_blocks: 64

  lenhador:
    enabled: true
    name: "&eLenhador"
    xp_cost: 12
    duration: 1800 # 30 minutos
    max_blocks: 80`
  },
  {
    id: "auroracombat",
    name: "AuroraCombat",
    version: "1.0.1",
    logo: "assets/logo_auroracombat.png",
    icon: "alert-triangle",
    color: "#ff9999", // Pastel Red Accent
    tagline_pt: "Fugir de uma batalha agora significa morte instantânea",
    tagline_en: "Fleeing from a battle now triggers instant death",
    description_pt: "Plugin anti-combatlog de alto desempenho para inibir fugas em batalhas PvP com punição severa.",
    description_en: "High-performance anti-combatlog system designed to penalize players logging out in active PvP battles.",
    features_pt: [
      "BossBar dinâmica e contínua: exibe a porcentagem do tempo restante com contagem regressiva visual.",
      "Task síncrona centralizada: atualiza a BossBar de todos os combatentes de uma única vez para máxima performance.",
      "Detecção abrangente: detecta ataques corpo a corpo e projéteis (arco, besta, tridente).",
      "Punição severa: dropa todos os itens (armadura, offhand e inventário) no chão e mata o jogador ao deslogar.",
      "Anti-duplicação Bukkit: limpa o inventário e salva os dados em disco antes de o jogador desconectar completamente.",
      "Bloqueio de comandos em combate: permite apenas comandos listados em uma whitelist configurável.",
      "Permissões de Bypass: permite que administradores ou VIPs ignorem a mecânica de combate ou utilizem comandos livres."
    ],
    features_en: [
      "Dynamic BossBar count: Visual countdown showing the combat percentage and seconds left.",
      "Highly optimized task: Single synchronous task handles active players' BossBar ticks for minimal performance impact.",
      "Projectile-aware detection: Catches physical attacks as well as arrows, cross-bows, or thrown trident hits.",
      "Severe penalty: Instantly drops inventory, offhand, and armor contents on the floor, killing the player.",
      "Exploit-proof saving: Clears items and invokes player.saveData() before connection wraps up, blocking dupe methods.",
      "Whitelisted command blocking: Blocks standard commands in combat, permitting only defined ones (e.g., /msg).",
      "Bypass access: Grants administrators or VIPs bypass nodes for combat tags or command limitations."
    ],
    commands: [
      { cmd: "/auroracombat reload", desc_pt: "Recarrega as configurações de tempo, BossBar e mensagens de combate.", desc_en: "Reloads active configurations, messages, and BossBar setups.", perm: "auroracombat.admin" }
    ],
    permissions: [
      { node: "auroracombat.admin", desc_pt: "Acesso administrativo para recarregar as configurações do plugin.", desc_en: "Administrative access to reload plugin config values." },
      { node: "auroracombat.bypass", desc_pt: "Ignora completamente a entrada de combate (o jogador nunca fica em combate).", desc_en: "Bypasses combat tags (never marked as tag-active)." },
      { node: "auroracombat.bypass.commands", desc_pt: "Permite usar qualquer comando do servidor mesmo em combate ativo.", desc_en: "Bypasses whitelisted commands check, allowing any command." }
    ],
    mechanics_pt: `
      <h3>O Fluxo de Punição de Loggers</h3>
      <p>Para contornar falhas comuns de plugins de combate tradicionais que causam duplicação de itens, o AuroraCombat utiliza o seguinte método:</p>
      <ol>
        <li>Ao deslogar em combate, os itens do jogador são gerados fisicamente como entidades de drop no chão de sua localização exata.</li>
        <li>O inventário do jogador é totalmente limpo nas variáveis internas do servidor.</li>
        <li>O plugin executa <code>player.saveData()</code> imediatamente para atualizar o arquivo do jogador no disco do servidor.</li>
        <li>Registra a pendência em <code>data/punished.yml</code>.</li>
        <li>Quando o jogador reconecta, ele tem sua vida setada para <code>0.0</code> (Morte oficial) e perde o inventário redundante, disparando um anúncio global de vergonha no chat para todo o servidor.</li>
      </ol>
    `,
    mechanics_en: `
      <h3>Combat Logger Penalty Flow</h3>
      <p>To eliminate Bukkit connection timing exploits and item duplication, AuroraCombat implements this execution path:</p>
      <ol>
        <li>When a player disconnects in combat, all inventory, offhand, and armor slots drop as physical item entities.</li>
        <li>The player inventory registry is completely wiped inside the memory.</li>
        <li>The plugin immediately executes <code>player.saveData()</code> to commit changes to the player NBT file on disk.</li>
        <li>Saves a pending death record to <code>data/punished.yml</code>.</li>
        <li>Upon reconnecting, the logger's health resets to <code>0.0</code> (Official Bukkit Death) and the redundant inventory is cleared, broadcasting a global shaming alert to the server chat.</li>
      </ol>
    `,
    config: `# Configurações da BossBar e Combate
settings:
  combat-duration: 15 # Tempo de combate em segundos
  bossbar:
    color: RED
    style: SOLID
    title: "&c&lEm Combate &7- &f%time%s restantes"

# Comandos liberados em combate
whitelisted-commands:
  - "/tell"
  - "/msg"
  - "/r"
  - "/g"
  - "/ch"
  - "/f chat"`
  },
  {
    id: "auroraeventos",
    name: "AuroraEventos",
    version: "1.0.0",
    logo: "assets/logo_auroraeventos.png",
    icon: "calendar",
    color: "#d4ffb3", // Pastel Light Green
    tagline_pt: "Central de eventos e controle de regras para moderadores",
    tagline_en: "Events headquarters and rule toggles for moderators",
    description_pt: "Painel administrativo de controle de regras do servidor e minigame Esconde-Esconde integrado.",
    description_en: "Administrative dashboard GUI to alter server rules and host an integrated Hide-and-Seek minigame.",
    features_pt: [
      "Menu administrativo em GUI (basta usar /evento) para ativar/desativar regras instantaneamente.",
      "Controle global de ações: PvP, quebra/colocação de blocos, dano de queda, regeneração, fome e spawn de monstros.",
      "Controle de chat e movimentação: silenciar chat global ou congelar todos os jogadores do servidor.",
      "Minigame integrado de Esconde-Esconde (Hide and Seek) completo.",
      "Sistema de seleção por região tridimensional via varinha de marcação.",
      "Controle de espectadores: jogadores eliminados tornam-se espectadores e são travados dentro da arena do evento."
    ],
    features_en: [
      "Admin Dashboard GUI: Open the interactive rules control panel using /evento.",
      "Rule controls: Toggle global PvP, block modifications, fall damage, hunger, health regeneration, or mob spawns.",
      "Staff utilities: Global mute chat switch and freeze movement toggle for all players.",
      "Hide and Seek (Esconde-Esconde) minigame: Fully coded minigame with roles, boundaries, and automatons.",
      "Area selection tools: Integrated selection wand to define event arenas and borders.",
      "Spectator control: Automatically locks eliminated hiders as spectators limited within the region bounds."
    ],
    commands: [
      { cmd: "/evento", desc_pt: "Abre o painel gráfico de controle de regras e minigames.", desc_en: "Opens the admin rules control and minigames dashboard GUI.", perm: "auroraeventos.admin" },
      { cmd: "/evento reload", desc_pt: "Recarrega as configurações e regiões salvas de eventos.", desc_en: "Reloads event configuration files and region records.", perm: "auroraeventos.admin" }
    ],
    permissions: [
      { node: "auroraeventos.admin", desc_pt: "Permissão de operador para abrir o menu de controle de eventos e coordenar partidas.", desc_en: "Operator permission to open control panel and coordinate event games." }
    ],
    mechanics_pt: `
      <h3>O Menu de Regras (Dashboard GUI)</h3>
      <p>O painel administrativo possui botões rápidos que alternam as seguintes variáveis globais no servidor:</p>
      <ul>
        <li><strong>PvP, Quebra e Colocação:</strong> Protege o mapa durante explicações de eventos.</li>
        <li><strong>Fome, Dano de Queda e Regeneração:</strong> Ajusta a dificuldade de labirintos e parkours.</li>
        <li><strong>Congelar e Mudar Clima:</strong> Organiza os jogadores em linhas de largada de corridas.</li>
      </ul>

      <h3>Minigame: Esconde-Esconde (Hide and Seek)</h3>
      <p>Coordenado diretamente pelo painel administrativo:</p>
      <ol>
        <li>Um administrador seleciona a área usando a varinha de marcação e cria uma região.</li>
        <li>Inicia o minigame: um jogador é sorteado como <strong>Caçador (Seeker)</strong> e os outros são <strong>Escondidos (Hiders)</strong>.</li>
        <li>Os hiders têm um tempo para se esconder enquanto o caçador é congelado no spawnpoint.</li>
        <li>Quando o caçador toca (bate) em um hider, ele é eliminado, recebe avisos sonoros e vira espectador.</li>
        <li>O jogo monitora a BossBar de hiders restantes e termina quando o caçador acha todos ou o tempo expira.</li>
      </ol>
    `,
    mechanics_en: `
      <h3>Rules Panel (Dashboard GUI)</h3>
      <p>The admin panel contains toggle buttons to quickly set global server properties:</p>
      <ul>
        <li><strong>PvP, Build, and Break:</strong> Prevents griefing or fighting during rules explanations.</li>
        <li><strong>Hunger, Fall Damage, and Regen:</strong> Fine-tune difficulty ratios for parkours and mazes.</li>
        <li><strong>Player Freeze & Weather control:</strong> Groups players at start lines or cleans visual environments.</li>
      </ul>

      <h3>Minigame: Hide and Seek (Esconde-Esconde)</h3>
      <p>Managed directly via the /evento panel:</p>
      <ol>
        <li>An admin selects a region using the selector wand and registers the arena.</li>
        <li>Starts game: One player is chosen as the **Seeker** and the rest are marked as **Hiders**.</li>
        <li>Hiders have a time buffer to hide while the Seeker is locked in place.</li>
        <li>When the Seeker hits a Hider, the hider is eliminated, hears sound cues, and turns into a spectator.</li>
        <li>A BossBar tracks remaining players. The game concludes when all hiders are found or the time runs out.</li>
      </ol>
    `,
    config: `# Configurações de slots do Painel Administrativo GUI
menu-slots:
  pvp: 10
  block-place: 11
  block-break: 12
  fall-damage: 13
  explosions: 14
  collision: 15
  health-regen: 16
  food-consumption: 28
  mob-spawning: 29
  freeze: 31
  chat-mute: 32
  copy-inventory: 33
  clear-items: 34
  toggle-time: 35
  clear-weather: 43
  redirection: 44
  death-bypass: 52
  hide-and-seek: 49`
  }
];
