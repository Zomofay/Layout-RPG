// Catálogo de personagens com dados dinâmicos
const personagens = {
    Berserker: {
        poder: '88',
        defesa: '70',
        dificuldade: 'Média',
        velocidade: '65',
        especial: 'Fúria flamejante - aumenta o dano em 35% por 8s',
        descricao: 'Guerreiro brutal com ataque corpo a corpo e dano por incêndio. Ideal para confrontos diretos.',
        video: 'assets/berserker.mp4'
    },
    Necromante: {
        poder: '74',
        defesa: '56',
        dificuldade: 'Alta',
        velocidade: '50',
        especial: 'Exército de sombras - invoca esqueletos por 12s',
        descricao: 'Mestre das artes sombrias capaz de drenar vida e controlar o campo de batalha.',
        video: 'assets/necromante.mp4'
    },
    'Arco Celeste': {
        poder: '69',
        defesa: '48',
        dificuldade: 'Fácil',
        velocidade: '85',
        especial: 'Chuva estelar - rajada de flechas de longo alcance',
        descricao: 'Atiradora ágil com ataques à distância e alta precisão. Perfeita para suporte e DPS.',
        video: 'assets/arco-celeste.mp4'
    },
    Elemental: {
        poder: '82',
        defesa: '62',
        dificuldade: 'Média',
        velocidade: '60',
        especial: 'Tempestade Elemental - causa dano em área com fogo, gelo e raio',
        descricao: 'Controle de elementos com ataques versáteis e ataques de área devastadores.',
        video: 'assets/elemental.mp4'
    },
    'Magia Afiada': {
        poder: '76',
        defesa: '54',
        dificuldade: 'Alta',
        velocidade: '68',
        especial: 'Estilhaço Sombrio - projéteis perfurantes que ignoram defesa',
        descricao: 'Feiticeira sombria especializada em danos críticos e roubos de energia.',
        video: 'assets/magia-afiada.mp4'
    },
    Cestus: {
        poder: '80',
        defesa: '74',
        dificuldade: 'Média',
        velocidade: '72',
        especial: 'Golpe Explosivo - impacto com resistência e distância curtíssima',
        descricao: 'Guerreiro corpo a corpo com socos arrasadores e excelente capacidade de sobrevivência.',
        video: 'assets/cestus.mp4'
    }
};

function mostrarDetalhes(nome) {
    const info = personagens[nome];
    const container = document.getElementById('perfil-descricao');

    if (!info || !container) return;

    document.getElementById('perfil-titulo').textContent = nome;
    document.getElementById('perfil-desc').textContent = info.descricao;
    const video = document.getElementById('perfil-video');
    const videoSrc = document.getElementById('perfil-video-src');

    document.getElementById('perfil-poder').textContent = info.poder;
    document.getElementById('perfil-defesa').textContent = info.defesa;
    document.getElementById('perfil-dificuldade').textContent = info.dificuldade;
    document.getElementById('perfil-velocidade').textContent = info.velocidade;
    document.getElementById('perfil-especial').textContent = info.especial;

    if (info.video) {
        videoSrc.src = info.video;
        video.load();
        video.hidden = false;
    } else {
        video.hidden = true;
    }

    container.classList.remove('hidden');
}

function initPerfis() {
    const cards = document.querySelectorAll('article.perfil');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const nome = card.querySelector('h2').textContent.trim();
            mostrarDetalhes(nome);
        });

        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const nome = card.querySelector('h2').textContent.trim();
                mostrarDetalhes(nome);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initPerfis);