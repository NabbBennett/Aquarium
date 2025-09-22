// Estructura de datos CORREGIDA - chapters en lugar de pages
const chapters = [
    {
        id: 1,
        title: "Chapter 1",
        pages: [
            {
                id: 1,
                title: "Chapter 1 - Page 1",
                image: "CHAPTER 1/Aquarium 1-1.png", 
                alt: "Comic 1",
                text: [
                    "“My name is Aura.”<br><br>“I always thought I didn't actually exist — that I was a nebula drifting through outer space, glowing among countless other non-organic and intangible beings.”<br><br>But that's a lie. A lie I tell myself to escape reality. I'm fully aware I have work tomorrow, and my stomach aches from the dinner I couldn't afford last night. My real body is asleep and noway found, and I'm about to wake up in my other world.”"
                ]
            },
            {
                id: 2,
                title: "Chapter 1 - Page 2", 
                image: "CHAPTER 1/Aquarium 1-2.png",
                alt: "Comic 2",
                text: [
                    "“The fantasy world where I create my own narrative.”<br><br>“The place where I am a <bold>wild hunter.</bold>”"
                ]
            },
            {
                id: 3,
                title: "Chapter 1 - Page 3",
                image: "CHAPTER 1/Aquarium 1-3.png",
                alt: "Comic Image 3",
                text: ["Texto de la página 3..."]
            },
            {
                id: 4,
                title: "Chapter 1 - Page 4",
                image: "CHAPTER 1/Aquarium 1-4.gif",
                alt: "Comic Image 4",
                text: ["Texto de la página 4..."]
            },
            {
                id: 5,
                title: "Chapter 1 - Page 5",
                image: "CHAPTER 1/Aquarium 1-5.gif",
                alt: "Comic Image 5",
                text: ["Texto de la página 5..."]
            },
            {
                id: 6,
                title: "Chapter 1 - Page 6",
                image: "CHAPTER 1/Aquarium 1-6.gif",
                alt: "Comic Image 6",
                text: ["Texto de la página 6..."]
            },
            {
                id: 7,
                title: "Chapter 1 - Page 7",
                image: "CHAPTER 1/Aquarium 1-7.gif",
                alt: "Comic Image 7",
                text: ["Texto de la página 7..."]
            },
            {
                id: 8,
                title: "Chapter 1 - Page 8",
                image: "CHAPTER 1/Aquarium 1-8.gif",
                alt: "Comic Image 8",
                text: ["Texto de la página 8..."]
            },
            {
                id: 9,
                title: "Chapter 1 - Page 9",
                image: "CHAPTER 1/Aquarium 1-9.gif",
                alt: "Comic Image 9",
                text: ["Texto de la página 9..."]
            },
            {
                id: 10,
                title: "Chapter 1 - Page 10",
                image: "CHAPTER 1/Aquarium 1-10.gif",
                alt: "Comic Image 10",
                text: ["Texto de la página 10..."]
            },
            {
                id: 11,
                title: "Chapter 1 - Page 11",
                image: "CHAPTER 1/Aquarium 1-11.gif",
                alt: "Comic Image 11",
                text: ["Texto de la página 11..."]
            },
            {
                id: 12,
                title: "Chapter 1 - Page 12",
                image: "CHAPTER 1/Aquarium 1-12.gif",
                alt: "Comic Image 12",
                text: ["Texto de la página 12..."]
            },
            {
                id: 13,
                title: "Chapter 1 - Page 13",
                image: "CHAPTER 1/Aquarium 1-13.png",
                alt: "Comic Image 13",
                text: ["Texto de la página 13..."]
            },
            {
                id: 14,
                title: "Chapter 1 - Page 14",
                image: "CHAPTER 1/Aquarium 1-14.png",
                alt: "Comic Image 14",
                text: ["Texto de la página 14..."]
            },
            {
                id: 15,
                title: "Chapter 1 - Page 15",
                image: "CHAPTER 1/Aquarium 1-15.gif",
                alt: "Comic Image 15",
                text: ["Texto de la página 15..."]
            },
            {
                id: 16,
                title: "Chapter 1 - Page 16",
                image: "CHAPTER 1/Aquarium 1-16.png",
                alt: "Comic Image 16",
                text: ["Texto de la página 16..."]
            },
            {
                id: 17,
                title: "Chapter 1 - Page 17",
                image: "CHAPTER 1/Aquarium 1-17.png",
                alt: "Comic Image 17",
                text: ["Texto de la página 17..."]
            },
            {
                id: 18,
                title: "Chapter 1 - Page 18",
                image: "CHAPTER 1/Aquarium 1-18.gif",
                alt: "Comic Image 18",
                text: ["Texto de la página 18..."]
            },
            {
                id: 19,
                title: "Chapter 1 - Page 19",
                image: "CHAPTER 1/Aquarium 1-19.gif",
                alt: "Comic Image 19",
                text: ["Texto de la página 19..."]
            },
            {
                id: 20,
                title: "Chapter 1 - Page 20",
                image: "CHAPTER 1/Aquarium 1-20.png",
                alt: "Comic Image 20",
                text: ["Texto de la página 20..."]
            },
            {
                id: 21,
                title: "Chapter 1 - Page 21",
                image: "CHAPTER 1/Aquarium 1-21.png",
                alt: "Comic Image 21",
                text: ["Texto de la página 21..."]
            },
            {
                id: 22,
                title: "Chapter 1 - Page 22",
                image: "CHAPTER 1/Aquarium 1-22.png",
                alt: "Comic Image 22",
                text: ["Texto de la página 22..."]
            },
            {
                id: 23,
                title: "Chapter 1 - Page 23",
                image: "CHAPTER 1/Aquarium 1-23.gif",
                alt: "Comic Image 23",
                text: ["Texto de la página 23..."]
            },
            {
                id: 24,
                title: "Chapter 1 - Page 24",
                image: "CHAPTER 1/Aquarium 1-24.gif",
                alt: "Comic Image 24",
                text: ["Texto de la página 24..."]
            },
            {
                id: 25,
                title: "Chapter 1 - Page 25",
                image: "CHAPTER 1/Aquarium 1-25.png",
                alt: "Comic Image 25",
                text: ["Texto de la página 25..."]
            },
            {
                id: 26,
                title: "Chapter 1 - Page 26",
                image: "CHAPTER 1/Aquarium 1-26.gif",
                alt: "Comic Image 26",
                text: ["Texto de la página 26..."]
            },
            {
                id: 27,
                title: "Chapter 1 - Page 27",
                image: "CHAPTER 1/Aquarium 1-27.png",
                alt: "Comic Image 27",
                text: ["Texto de la página 27..."]
            },
            {
                id: 28,
                title: "Chapter 1 - Page 28",
                image: "CHAPTER 1/Aquarium 1-28.png",
                alt: "Comic Image 28",
                text: ["Texto de la página 28..."]
            },
            {
                id: 29,
                title: "Chapter 1 - Page 29",
                image: "CHAPTER 1/Aquarium 1-29.png",
                alt: "Comic Image 29",
                text: ["Texto de la página 29..."]
            },
            {
                id: 30,
                title: "Chapter 1 - Page 30",
                image: "CHAPTER 1/Aquarium 1-30.png",
                alt: "Comic Image 30",
                text: ["Texto de la página 30..."]
            },
            {
                id: 31,
                title: "Chapter 1 - Page 31",
                image: "CHAPTER 1/Aquarium 1-31.png",
                alt: "Comic Image 31",
                text: ["Texto de la página 31..."]
            },
            {
                id: 32,
                title: "Chapter 1 - Page 32",
                image: "CHAPTER 1/Aquarium 1-32.png",
                alt: "Comic Image 32",
                text: ["Texto de la página 32..."]
            },
            {
                id: 33,
                title: "Chapter 1 - Page 33",
                image: "CHAPTER 1/Aquarium 1-33.gif",
                alt: "Comic Image 33",
                text: ["Texto de la página 33..."]
            },
            {
                id: 34,
                title: "Chapter 1 - Page 34",
                image: "CHAPTER 1/Aquarium 1-34.png",
                alt: "Comic Image 34",
                text: ["Texto de la página 34..."]
            },
            {
                id: 35,
                title: "Chapter 1 - Page 35",
                image: "CHAPTER 1/Aquarium 1-35.png",
                alt: "Comic Image 35",
                text: ["Texto de la página 35..."]
            },
            {
                id: 36,
                title: "Chapter 1 - Page 36",
                image: "CHAPTER 1/Aquarium 1-36.png",
                alt: "Comic Image 36",
                text: ["Texto de la página 36..."]
            },
            {
                id: 37,
                title: "Chapter 1 - Page 37",
                image: "CHAPTER 1/Aquarium 1-37.png",
                alt: "Comic Image 37",
                text: ["Texto de la página 37..."]
            },
            {
                id: 38,
                title: "Chapter 1 - Page 38",
                image: "CHAPTER 1/Aquarium 1-38.gif",
                alt: "Comic Image 38",
                text: ["Texto de la página 38..."]
            },
            {
                id: 39,
                title: "Chapter 1 - Page 39",
                image: "CHAPTER 1/Aquarium 1-39.gif",
                alt: "Comic Image 39",
                text: ["Texto de la página 39..."]
            },
            {
                id: 40,
                title: "Chapter 1 - Page 40",
                image: "CHAPTER 1/Aquarium 1-40.png",
                alt: "Comic Image 40",
                text: ["Texto de la página 40..."]
            },
            {
                id: 41,
                title: "Chapter 1 - Page 41",
                image: "CHAPTER 1/Aquarium 1-41.gif",
                alt: "Comic Image 41",
                text: ["Texto de la página 41..."]
            },
            {
                id: 42,
                title: "Chapter 1 - Page 42",
                image: "CHAPTER 1/Aquarium 1-42.gif",
                alt: "Comic Image 42",
                text: ["Texto de la página 42..."]
            },
            {
                id: 43,
                title: "Chapter 1 - Page 43",
                image: "CHAPTER 1/Aquarium 1-43.gif",
                alt: "Comic Image 43",
                text: ["Texto de la página 43..."]
            },
            {
                id: 44,
                title: "Chapter 1 - Page 44",
                image: "CHAPTER 1/Aquarium 1-44.gif",
                alt: "Comic Image 44",
                text: ["Texto de la página 44..."]
            }
        ]
    },
    {
        id: 2,
        title: "Chapter 2",
        pages: [
            {
                id: 1,
                title: "Chapter 2 - Page 1",
                image: "CHAPTER 2/Aquarium 2-1.png", 
                alt: "Comic 2-1",
                text: [
                    "“Texto del capítulo 2 página 1...”"
                ]
            },
            {
                id: 2,
                title: "Chapter 2 - Page 2", 
                image: "CHAPTER 2/Aquarium 2-2.png",
                alt: "Comic Image 2-2",
                text: ["Texto de la página 2..."]
            }
        ]
    }
];

// Variables 
let currentChapterIndex = 0;
let currentPageIndex = 0;

function renderCurrentPage() {
    const chapter = chapters[currentChapterIndex];
    const page = chapter.pages[currentPageIndex];
    
    document.getElementById("chapter").textContent = page.title;
    document.getElementById("comic-img").src = page.image;
    document.getElementById("comic-img").alt = page.alt;
    
    document.getElementById("comic-text").innerHTML = page.text;

    document.querySelector('.page-name').textContent = chapter.title;
    document.title = page.title;
    
    updateNavigationButtons();
    
    updateProgressIndicators();
}

// Navegación entre páginas
function nextPage() {
    const currentChapter = chapters[currentChapterIndex];
    
    if (currentPageIndex < currentChapter.pages.length - 1) {
        // Hay más páginas en este capítulo
        currentPageIndex++;
    } else if (currentChapterIndex < chapters.length - 1) {
        // sisno pues pasa al siguiente capítulo
        currentChapterIndex++;
        currentPageIndex = 0;
    }
    // Si no hay más contenido, no hace nada xD
    
    renderCurrentPage();
    saveProgress();
}

function prevPage() {
    if (currentPageIndex > 0) {
        // Página anterior
        currentPageIndex--;
    } else if (currentChapterIndex > 0) {
        // Capítulo anterior
        currentChapterIndex--;
        currentPageIndex = chapters[currentChapterIndex].pages.length - 1;
    }
    // Si es el primer capítulo y primera página, no hace nadaXD
    
    renderCurrentPage();
    saveProgress();
}

// Navegación a capítulos
function goToChapter(chapterIndex) {
    if (chapterIndex >= 0 && chapterIndex < chapters.length) {
        currentChapterIndex = chapterIndex;
        currentPageIndex = 0;
        renderCurrentPage();
        saveProgress();
    }
}

function nextChapter() {
    if (currentChapterIndex < chapters.length - 1) {
        currentChapterIndex++;
        currentPageIndex = 0;
        renderCurrentPage();
        saveProgress();
    }
}

function prevChapter() {
    if (currentChapterIndex > 0) {
        currentChapterIndex--;
        currentPageIndex = 0;
        renderCurrentPage();
        saveProgress();
    }
}

// Actualizar botones de navegación
function updateNavigationButtons() {
    const currentChapter = chapters[currentChapterIndex];
    const prevButtons = document.querySelectorAll('.fa-arrow-left');
    const nextButtons = document.querySelectorAll('.fa-arrow-right');
    
    // Verificar si hay contenido anterior/siguiente
    const hasPrevPage = currentPageIndex > 0 || currentChapterIndex > 0;
    const hasNextPage = currentPageIndex < currentChapter.pages.length - 1 || 
                       currentChapterIndex < chapters.length - 1;
    
    // Actualizar botones de flecha izquierda
    prevButtons.forEach(icon => {
        const button = icon.closest('.nav-btn');
        if (hasPrevPage) {
            button.classList.remove('disabled');
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        } else {
            button.classList.add('disabled');
            button.style.opacity = '0.3';
            button.style.cursor = 'not-allowed';
        }
    });
    
    // Actualizar botones de flecha derecha
    nextButtons.forEach(icon => {
        const button = icon.closest('.nav-btn');
        if (hasNextPage) {
            button.classList.remove('disabled');
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        } else {
            button.classList.add('disabled');
            button.style.opacity = '0.3';
            button.style.cursor = 'not-allowed';
        }
    });
}

// Actualizar indicadores de progreso
function updateProgressIndicators() {
    const currentChapter = chapters[currentChapterIndex];
    
    // Crear indicador de progreso si no existe
    let progressIndicator = document.querySelector('.progress-indicator');
    if (!progressIndicator) {
        progressIndicator = document.createElement('div');
        progressIndicator.className = 'progress-indicator';
        document.querySelector('.comic-panel').appendChild(progressIndicator);
    }
}

// Sistema de guardado de progreso
function saveProgress() {
    const progress = {
        chapterIndex: currentChapterIndex,
        pageIndex: currentPageIndex,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('comicProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('comicProgress');
    if (saved) {
        try {
            const progress = JSON.parse(saved);
            // Validar que los índices existen
            if (progress.chapterIndex < chapters.length && 
                progress.pageIndex < chapters[progress.chapterIndex].pages.length) {
                currentChapterIndex = progress.chapterIndex;
                currentPageIndex = progress.pageIndex;
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
    }
}

function resetProgress() {
    localStorage.removeItem('comicProgress');
    currentChapterIndex = 0;
    currentPageIndex = 0;
    renderCurrentPage();
}

// Navegación con teclado
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Ignorar si se está escribiendo en un input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                prevPage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextPage();
                break;
            case 'Home':
                e.preventDefault();
                goToChapter(0);
                break;
            case 'End':
                e.preventDefault();
                currentChapterIndex = chapters.length - 1;
                currentPageIndex = chapters[currentChapterIndex].pages.length - 1;
                renderCurrentPage();
                break;
        }
    });
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Cargar progreso guardado
    loadProgress();
    
    // Renderizar página actual
    renderCurrentPage();
    
    // Configurar event listeners para navegación
    document.querySelectorAll('.fa-arrow-left').forEach(icon => {
        icon.closest('.nav-btn').addEventListener('click', function(e) {
            e.preventDefault();
            if (!this.classList.contains('disabled')) {
                prevPage();
            }
        });
    });
    
    document.querySelectorAll('.fa-arrow-right').forEach(icon => {
        icon.closest('.nav-btn').addEventListener('click', function(e) {
            e.preventDefault();
            if (!this.classList.contains('disabled')) {
                nextPage();
            }
        });
    });
    
    // Botón home
    document.querySelector('.home-btn').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'main.html';
    });
    
    // Botón cerrar
    document.querySelector('.nav-btn-close').addEventListener('click', function(e) {
        e.preventDefault();
        window.close() || window.history.back();
    });
    
    // Botones de gestión de progreso
    document.querySelector('.save-btn')?.addEventListener('click', saveProgress);
    document.querySelector('.load-btn')?.addEventListener('click', loadProgress);
    document.querySelector('.reset-btn')?.addEventListener('click', resetProgress);
    
    // Auto-save
    const autoSaveCheckbox = document.querySelector('.auto-save');
    if (autoSaveCheckbox) {
        autoSaveCheckbox.addEventListener('change', function(e) {
            if (e.target.checked) {
                // Activar auto-guardado cada 3 segundos
                setInterval(saveProgress, 3000);
            }
        });
    }
    
    // Configurar navegación por teclado
    setupKeyboardNavigation();
    
    // Guardar progreso al cerrar la página
    window.addEventListener('beforeunload', saveProgress);
});
