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
                text: ["“The ‘narrative’ goes like this: I’m homeless — a nobody with no family. Lowkey a tragic individual. I sell the skins of forest animals to afford my daily food and basic needs.”"]
            },
            {
                id: 4,
                title: "Chapter 1 - Page 4",
                image: "CHAPTER 1/Aquarium 1-4.gif",
                alt: "Comic Image 4",
                text: ["“Then, “THEY” appear.”"],
            },
            {
                id: 5,
                title: "Chapter 1 - Page 5",
                image: "CHAPTER 1/Aquarium 1-5.gif",
                alt: "Comic Image 5",
                text: [""]
            },
            {
                id: 6,
                title: "Chapter 1 - Page 6",
                image: "CHAPTER 1/Aquarium 1-6.gif",
                alt: "Comic Image 6",
                text: ["“Monsters.”"],
            },
            {
                id: 7,
                title: "Chapter 1 - Page 7",
                image: "CHAPTER 1/Aquarium 1-7.gif",
                alt: "Comic Image 7",
                text: ["“Fast, unpredictable, hungry. In a split of the eye they were everywhere around. No time to react, no sword was capable to reach them.”"]
            },
            {
                id: 8,
                title: "Chapter 1 - Page 8",
                image: "CHAPTER 1/Aquarium 1-8.gif",
                alt: "Comic Image 8",
                text: ["SPLAAASH!"]
            },
            {
                id: 9,
                title: "Chapter 1 - Page 9",
                image: "CHAPTER 1/Aquarium 1-9.gif",
                alt: "Comic Image 9",
                text: ["“Something i've never seen before.”"]
            },
            {
                id: 10,
                title: "Chapter 1 - Page 10",
                image: "CHAPTER 1/Aquarium 1-10.gif",
                alt: "Comic Image 10",
                text: [""]
            },
            {
                id: 11,
                title: "Chapter 1 - Page 11",
                image: "CHAPTER 1/Aquarium 1-11.gif",
                alt: "Comic Image 11",
                text: [""]
            },
            {
                id: 12,
                title: "Chapter 1 - Page 12",
                image: "CHAPTER 1/Aquarium 1-12.gif",
                alt: "Comic Image 12",
                text: [""]
            },
            {
                id: 13,
                title: "Chapter 1 - Page 13",
                image: "CHAPTER 1/Aquarium 1-13.png",
                alt: "Comic Image 13",
                text: ["“It turns out they were capable of inducing horrible hallucinations in the citizens. It wasn’t until my arrow destroyed it that I was able to see clearly.”"]
            },
            {
                id: 14,
                title: "Chapter 1 - Page 14",
                image: "CHAPTER 1/Aquarium 1-14.png",
                alt: "Comic Image 14",
                text: ["“This bow and its arrow, blessed by an unknown god, helped me become the only hunter capable of destroying this menace. Once in the shadows, now I stood up as a savior for my town. But that glory really didn’t last long... Nothing would have prepared me for what came next.”"]
            },
            {
                id: 15,
                title: "Chapter 1 - Page 15",
                image: "CHAPTER 1/Aquarium 1-15.gif",
                alt: "Comic Image 15",
                text: ["“Not when something as valuable as income was involved.”<br><br>“Or that was just my theory. Since the monsters made appear these coins out of no where.”"]
            },
            {
                id: 16,
                title: "Chapter 1 - Page 16",
                image: "CHAPTER 1/Aquarium 1-16.png",
                alt: "Comic Image 16",
                text: ["“Like really. Coins? Not just any coins. Golden coins! What kind of evil magical force would do this? It felt like a gift from the sky. But that detail immediately froze me out.” <br><br> “Like i knew it would only cause me troubles.”"]
            },
            {
                id: 17,
                title: "Chapter 1 - Page 17",
                image: "CHAPTER 1/Aquarium 1-17.png",
                alt: "Comic Image 17",
                text: ["“In my fantasy world, the one I contemplate as my only reality, magic is not something odd. But that didn’t make the appearance of the ‘Golden Monsters’ any less strange or worrying.”<br><br>“All sources of magic are registered and provided by witches—and only them.That leaves the leaderboard like this: the witches followed by their animal familiars, and last, humans.(being the most useless from all)”"]
            },
            {
                id: 18,
                title: "Chapter 1 - Page 18",
                image: "CHAPTER 1/Aquarium 1-18.gif",
                alt: "Comic Image 18",
                text: ["“But, well, let’s strike these ones out. Yeah, like that.”<br><br>“Since all this happened, Birds:the witches’ most loyal familiars—separated themselves from their masters. Doesn’t matter why. Probably some stupid drama.”"]
            },
            {
                id: 19,
                title: "Chapter 1 - Page 19",
                image: "CHAPTER 1/Aquarium 1-19.gif",
                alt: "Comic Image 19",
                text: ["“the important matter is THE unfortune situation I was DRAGGED into by these people-”<br><br>“The witch leader. Magnolia, saw my amazing success, saw all my greatness, and decided to imprison me like I was some kind of CRIMINAL!”"]
            },
            {
                id: 20,
                title: "Chapter 1 - Page 20",
                image: "CHAPTER 1/Aquarium 1-20.png",
                alt: "Comic Image 20",
                text: ["“I didn’t have anything to do with the actual menace, but of course.<br> <br>“Being the only one who could stand up against them.”<br> <br>“And not being able to answer any of their questions convicted me as an implicated party.”"]
            },
            {
                id: 21,
                title: "Chapter 1 - Page 21",
                image: "CHAPTER 1/Aquarium 1-21.png",
                alt: "Comic Image 21",
                text: ["Magnolia: Your weapons will be confiscated until last decision.<br><br>“EXCUSE ME???”"]
            },
            {
                id: 22,
                title: "Chapter 1 - Page 22",
                image: "CHAPTER 1/Aquarium 1-22.png",
                alt: "Comic Image 22",
                text: ["“Never felt more humiliated in my life. Just at the peak of my plot, the moment that changed everything, I was confiscated from my most prized possessions—”"]
            },
            {
                id: 23,
                title: "Chapter 1 - Page 23",
                image: "CHAPTER 1/Aquarium 1-23.gif",
                alt: "Comic Image 23",
                text: ["“AND THEY THROWN ME OUT LIKE A GODDAMN DOG— oh well.”"]
            },
            {
                id: 24,
                title: "Chapter 1 - Page 24",
                image: "CHAPTER 1/Aquarium 1-24.gif",
                alt: "Comic Image 24",
                text: ["Ouch."]
            },
            {
                id: 25,
                title: "Chapter 1 - Page 25",
                image: "CHAPTER 1/Aquarium 1-25.png",
                alt: "Comic Image 25",
                text: [""]
            },
            {
                id: 26,
                title: "Chapter 1 - Page 26",
                image: "CHAPTER 1/Aquarium 1-26.gif",
                alt: "Comic Image 26",
                text: [""]
            },
            {
                id: 27,
                title: "Chapter 1 - Page 27",
                image: "CHAPTER 1/Aquarium 1-27.png",
                alt: "Comic Image 27",
                text: ["“At that moment, I knew. EVERYONE WERE AGAINST ME. They never deserved a hero. Hope that crazy-ass capitalist villain kills them all TO DEATH!!!.”"]
            },
            {
                id: 28,
                title: "Chapter 1 - Page 28",
                image: "CHAPTER 1/Aquarium 1-28.png",
                alt: "Comic Image 28",
                text: ["(Days later).<br><br>“…It’s okay.”<br>“I'm used to being alone. This is nothing new.”<br>“Just this time i ended up as the most suspicious culprit, like if i was a menace to society...”"]
            },
            {
                id: 29,
                title: "Chapter 1 - Page 29",
                image: "CHAPTER 1/Aquarium 1-29.png",
                alt: "Comic Image 29",
                text: ["“Thinking about a solution is not for me right now.”"]
            },
            {
                id: 30,
                title: "Chapter 1 - Page 30",
                image: "CHAPTER 1/Aquarium 1-30.png",
                alt: "Comic Image 30",
                text: ["“I have better plans to get through this.”"]
            },
            {
                id: 31,
                title: "Chapter 1 - Page 31",
                image: "CHAPTER 1/Aquarium 1-31.png",
                alt: "Comic Image 31",
                text: ["“Oh. A bird...”<br><br>Bartender: Identify yourself.<br>Aura: Oh, i'm Aura. Heheh... Greetings.<br>Bartender: No by name.<br>Aura: Madam, I swear I don’t want any problems, just some beer. Maybe just one? Would you by any chance accept giving me one to go?"]
                /*AQUI VA UNA CONVERSACION (HABLAR CON VALLY)*/
            },
            {
                id: 32,
                title: "Chapter 1 - Page 32",
                image: "CHAPTER 1/Aquarium 1-32.png",
                alt: "Comic Image 32",
                text: ["“Ah, of course. Their stupid drama spills out on my way.”<br>“Just when I wanted to catch my breath...”<br>“-sigh- i guess i have no other choice.”"]
            },
            {
                id: 33,
                title: "Chapter 1 - Page 33",
                image: "CHAPTER 1/Aquarium 1-33.gif",
                alt: "Comic Image 33",
                text: ["“”"]
            },
            {
                id: 34,
                title: "Chapter 1 - Page 34",
                image: "CHAPTER 1/Aquarium 1-34.png",
                alt: "Comic Image 34",
                text: ["*nervous laughs*<br>Aura: See? No witch here. I actually, haha, hate them a lot. Just like you.<br>Bartender: Crime list?<br>Aura: Ex—excuse me?<br>Aura: I’m pretty sure you’re confusing me with someone else... See, I was just passing by and I JUST really, really want a beer, so...<br>Bartender: Ahem..."]
            },
            {
                id: 35,
                title: "Chapter 1 - Page 35",
                image: "CHAPTER 1/Aquarium 1-35.png",
                alt: "Comic Image 35",
                text: ["“Uh.”<br>Aura: ...<br>Aura: Hey—that. That wasn’t there before.<br>Bartender: New bar policies."]
            },
            {
                id: 36,
                title: "Chapter 1 - Page 36",
                image: "CHAPTER 1/Aquarium 1-36.png",
                alt: "Comic Image 36",
                text: ["“UGHH I SERIOUSLY CAN’T TAKE THIS ANYMORE.”<br>“I heard birds were against other familiars too, but really, me? When I don’t even fit the normal familiar standards???”<br>“Or wait, was this person on my trial? Hmmmmm...”"]
            },
            {
                id: 37,
                title: "Chapter 1 - Page 37",
                image: "CHAPTER 1/Aquarium 1-37.png",
                alt: "Comic Image 37",
                text: ["???<br><br>Aura: So... if “Birds only,” what’s that?<br>Bartender: That over there? They’re “Glitch”<br>Aura: An “Snitch”?” did it sneaked in here or something?.<br>Bartender: Glitch. A human friend of my niece “Maple.” A new worker in my bar. No magic implied.<br>Aura: I don’t do magic.<br>Bartender: What about that bow, kid? Creating that was sure magic.<br>Aura: I didn’t create it.<br>Bartender: Sure.<br>Bartender: You know what? I heard enough from you in that trial.<br>Bartender: Your weapon could be good. But because of your actions, the situation only became more complicated. That was a situation meant to be regulated by the witches—what an irresponsibility..."]
            },
            {
                id: 38,
                title: "Chapter 1 - Page 38",
                image: "CHAPTER 1/Aquarium 1-38.gif",
                alt: "Comic Image 38",
                text: ["“How is that person able to concentrate that much? They must be living in their own world. Not even a peek at our conversation…”"]
            },
            {
                id: 39,
                title: "Chapter 1 - Page 39",
                image: "CHAPTER 1/Aquarium 1-39.gif",
                alt: "Comic Image 39",
                text: ["...<br><br>Maple: AUNTIE, I’M BACK!! SORRY FOR TAKING SO LONG.<br>Aura: Oh.<br>Bartender: Maple, what took you—WHAT THE—<br>Maple: Uh? Oh... UHHH.<br>Bartender: Maple? Are those magic particles?! Young lady, you better have a good explanation for this!"]
            },
            {
                id: 40,
                title: "Chapter 1 - Page 40",
                image: "CHAPTER 1/Aquarium 1-40.png",
                alt: "Comic Image 40",
                text: ["Maple: GUYS! GUYS! I SCREWED UP. UNCLE PINES FOUND OUT!<br>AGERA, TURN OFF THE SPELL!<br>Pines: did i just heard the name of that witch friend of yours? The one I TOLD YOU to STAY AWAY FROM!<br>Maple: AGERA, GLITCH. SOMEONE PICK UP, PLEASE.<br>Pines: IS THAT A MAGIC DEVICE WHAT YOU’RE USING RIGHT NOW?!"]
            },
            {
                id: 41,
                title: "Chapter 1 - Page 41",
                image: "CHAPTER 1/Aquarium 1-41.gif",
                alt: "Comic Image 41",
                text: ["Maple: Auntie, please. Everything has an explanation! And—and it was my idea! Don’t blame them, please.<br>Pines: YOUR IDEA, THEIR IDEA—It doesn’t matter when I specifically told you to NOT USE any source of magic!<br>Maple: Glitch was feeling really, really bad, but you told them this was their last chance to get the job since they couldn’t the other times…<br>Pines: I KNEW that human was also not a good example for you. So many second chances—for what? Every time I saw they were just fine! Bare excuses!"]
            },
            {
                id: 42,
                title: "Chapter 1 - Page 42",
                image: "CHAPTER 1/Aquarium 1-42.gif",
                alt: "Comic Image 42",
                text: ["Maple: GLITCH REALLY, REALLY WANTED TO WORK, AUNTIE! You... had to see them last night—it was…<br>Agera: Hello...? Maple—are you there?(through the device)."]
            },
            {
                id: 43,
                title: "Chapter 1 - Page 43",
                image: "CHAPTER 1/Aquarium 1-43.gif",
                alt: "Comic Image 43",
                text: ["Pines: OH WE ARE GOING TO DESTROY THIS THING!<br>Maple: N-NOOO, AGERA DID IT FOR ME. PLEASEEE!"]
            },
            {
                id: 44,
                title: "Chapter 1 - Page 44",
                image: "CHAPTER 1/Aquarium 1-44.gif",
                alt: "Comic Image 44",
                text: ["<br><br>To be continue... Some day."]
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
                text: ["“”"]
            },
            {
                id: 2,
                title: "Chapter 2 - Page 2", 
                image: "CHAPTER 2/Aquarium 2-2.png",
                alt: "Comic Image 2-2",
                text: ["“”"]
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
