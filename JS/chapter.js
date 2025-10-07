// Estructura de datos 
const chapters = [
    {
        id: 1,
        title: "Introduction I",
        pages: [
            {
                id: 1,
                title: "Introduction I - 1",
                image: "CHAPTER 1/Aquarium 1-1.png", 
                alt: "Comic 1",
                text: [
                    "Bienvenido, tu nombre es Aura.<br><br>En el inicio de tu aventura, y con este personaje como tu primera elección, comienzas con esta sensación de que no existes: una mera nebulosa flotando en el espacio exterior, brillando entre innumerables seres inorgánicos e intangibles. Es solo una primera impresión, la cual no aplica a la totalidad de tu experiencia ni a lo que ella simboliza.<br><br>Estás adquiriendo consciencia, buscando tu cuerpo terrestre —el que sea—, el primero en el que tus piernas respondan y en el que el progreso alcanzado sea el más cercano al éxito. Los demás no te interesan: necesitas un mundo moldeable.<br><br>Un mundo donde puedas redirigir tu narrativa."
                ]
            },
            {
                id: 2,
                title: "Introduction I - 2", 
                image: "CHAPTER 1/Aquarium 1-2.png",
                alt: "Comic 2",
                text: [
                    "Eres una cazadora en el bosque.</bold>"
                ]
            },
            {
                id: 3,
                title: "Introduction I - 3",
                image: "CHAPTER 1/Aquarium 1-3.png",
                alt: "Comic Image 3",
                text: ["Tu narrativa va de la siguiente forma: eres una persona sin familia, una don nadie sin reconocimientos. En decir, un personaje cargado de trasfondos trágicos y lamentables que sólo te hundieron en la mediocridad. Vendes pieles y partes de animales del bosque para cubrir tu comida diaria y tus necesidades básicas."]
            },
            {
                id: 4,
                title: "Introduction I - 4",
                image: "CHAPTER 1/Aquarium 1-4.gif",
                alt: "Comic Image 4",
                text: ["Entonces, algo cambia.<br><br>Gritos. Miedo. Desesperación.<br><br>Las calles se llenan de pánico mientras preparas tu arma para enfrentarte a algo que nadie había visto nunca antes."],
            },
            {
                id: 5,
                title: "Introduction I - 5",
                image: "CHAPTER 1/Aquarium 1-5.gif",
                alt: "Comic Image 5",
                text: [""]
            },
            {
                id: 6,
                title: "Introduction I - 6",
                image: "CHAPTER 1/Aquarium 1-6.gif",
                alt: "Comic Image 6",
                text: ["“Monstruos.”"],
            },
            {
                id: 7,
                title: "Introduction I - 7",
                image: "CHAPTER 1/Aquarium 1-7.gif",
                alt: "Comic Image 7",
                text: ["Rápidos, impredecibles, hambrientos.<br><br>En un abrir y cerrar de ojos, estaban por todas partes.<br><br>Sin tiempo para reaccionar, ninguna espada de los guerreros presentes era capaz de alcanzarlos"]
            },
            {
                id: 8,
                title: "Introduction I - 8",
                image: "CHAPTER 1/Aquarium 1-8.gif",
                alt: "Comic Image 8",
                text: ["SPLAAASH!"]
            },
            {
                id: 9,
                title: "Introduction I - 9",
                image: "CHAPTER 1/Aquarium 1-9.gif",
                alt: "Comic Image 9",
                text: ["Podías sentir cómo la realidad se dispersaba, y se volvía inconcluso lo que pasaría a continuación.<br><br>Dudaste si podrías hacerles frente, si habría un cambio real en tu participación en la batalla.<br><br>¿Quién eras tú en comparación a éstas personas?"]
            },
            {
                id: 10,
                title: "Introduction I - 10",
                image: "CHAPTER 1/Aquarium 1-10.gif",
                alt: "Comic Image 10",
                text: [""]
            },
            {
                id: 11,
                title: "CIntroduction I - 11",
                image: "CHAPTER 1/Aquarium 1-11.gif",
                alt: "Comic Image 11",
                text: [""]
            },
            {
                id: 12,
                title: "Introduction I - 12",
                image: "CHAPTER 1/Aquarium 1-12.gif",
                alt: "Comic Image 12",
                text: [""]
            },
            {
                id: 13,
                title: "Introduction I - 13",
                image: "CHAPTER 1/Aquarium 1-13.png",
                alt: "Comic Image 13",
                text: ["En el momento en que tu flecha le atravesó, lo entendiste."]
            },
            {
                id: 14,
                title: "Introduction I - 14",
                image: "CHAPTER 1/Aquarium 1-14.png",
                alt: "Comic Image 14",
                text: ["Las alucinaciones no sólo funcionaban para inducir el terror en sus víctimas, sino también para hacer tu muerte más desesperante y agonizante de lo que estaba destinada a ser. Eran masas sin fuerza para atacar, pero sí con deseos de esparcir miseria.<br><br>Este arco y su flecha, bendecidos por un dios desconocido, te ayudaron a convertirte en el único cazador capaz de destruir esta amenaza.<br><br>Antes en las sombras, ahora te alzas como el salvador del reino.<br><br>Pero esa gloria no duró mucho.<br><br>En tu mundo de fantasía (el cual ahora contemplas como tu única realidad) la magia no es algo extraño."]
            },
            {
                id: 15,
                title: "Introduction I - 15",
                image: "CHAPTER 1/Aquarium 1-15.png",
                alt: "Comic Image 15",
                text: ["Sin embargo, eso no hacía que la aparición de los monstruos fuera menos extraña o preocupante. Todas las fuentes de magia son registradas y proporcionadas por las brujas, y solo ellas.<br><br>Después estaban sus familiares: animales con características humanas, otorgados por las brujas, que sirven de guía y consejo. Suelen trabajar bajo la sombra de sus amas, y los más sometidos a esta labor siempre fueron las aves.<br><br>Y, por último, los humanos. Realmente, nada destacable en ellos. Viven para el pueblo y dejan sus vidas y su seguridad en manos de los seres mágicos.<br><br>Eso deja la clasificación de la siguiente forma: brujas, sus familiares y humanos."]
            },
            {
                id: 16,
                title: "Introduction I - 16",
                image: "CHAPTER 1/Aquarium 1-16.gif",
                alt: "Comic Image 16",
                text: ["Pero- Bueno. En realidad las cosas son hm, diferentes, ahora.<br><br>Ehm, ¿Lo estás arreglando? Bien."]
            },
            {
                id: 17,
                title: "Introduction I - 17",
                image: "CHAPTER 1/Aquarium 1-17.gif",
                alt: "Comic Image 17",
                text: ["Desde que todo esto de los monstruos sucedió, los pájaros (los familiares más leales de las brujas) se separaron de sus amas.No importa el motivo. Probablemente algún drama estúpido del cual, para nada, tienes una opinión al respecto.<br><br>Lo importante es la situación en la que fuiste arrastrada."]
            },
            {
                id: 18,
                title: "Introduction I - 18",
                image: "CHAPTER 1/Aquarium 1-19.png",
                alt: "Comic Image 18",
                text: ["La líder de las brujas, Magnolia, vio tu asombroso éxito. Fue testigo de toda tu grandeza y, en vez de hacer lo obvio (premiarte por tus logros y tu gran hazaña), decidió mandarte a capturar y, al atraparte, encarcelarte como si fueras una criminal.<br><br>No tuviste realmente nada que ver con la amenaza real, pero, por supuesto, ser la única capaz de enfrentarlos y no poder responder a ninguna de sus preguntas te convertía en la culpable."]
            },
            {
                id: 19,
                title: "Introduction I - 19",
                image: "CHAPTER 1/Aquarium 1-20.png",
                alt: "Comic Image 19",
                text: ["“Magnolia: Su arma será confiscada para su investigación.”<br><br>¿DISCULPA?"
                ]
            },
            {
                id: 20,
                title: "Introduction I - 20",
                image: "CHAPTER 1/Aquarium 1-21.png",
                alt: "Comic Image 20",
                text: ["Nunca sentiste humillación más grande. Justo en el punto más decisivo de tu vida, el momento que lo cambiaría todo, te confiscaron tus posesiones más preciadas."]
            },
            {
                id: 21,
                title: "Introduction I - 21",
                image: "CHAPTER 1/Aquarium 1-22.gif",
                alt: "Comic Image 21",
                text: ["¡Y TE ECHARON COMO SÍ FUERAS UN MALDITO PERRO- oh bueno."]
            },
            {
                id: 22,
                title: "Introduction I - 22",
                image: "CHAPTER 1/Aquarium 1-23.gif",
                alt: "Comic Image 22",
                text: ["Ouch."]
            },
            {
                id: 23,
                title: "Introduction I - 23",
                image: "CHAPTER 1/Aquarium 1-25.png",
                alt: "Comic Image 23",
                text: [""]
            },
            {
                id: 24,
                title: "Introduction I - 24",
                image: "CHAPTER 1/Aquarium 1-26.png",
                alt: "Comic Image 24",
                text: ["TODOS ESTABAN EN TU CONTRA. Nunca merecieron un héroe. Esperabas que ese villano que trajo los monstruos los acabara a todos."]
            },
            {
                id: 25,
                title: "Introduction I - 25",
                image: "CHAPTER 1/Aquarium 1-27.png",
                alt: "Comic Image 25",
                text: ["(Otro día)<br><br>…No pasa nada.<br><br>Con el paso del tiempo, alcanzaste cierta calma. No sabes si fue por el propio transcurrir de los días o por la persecución a la que te sometieron para quitarte tu arco. Pero, por mucho sentimiento de venganza que tuvieras, no te sentías capaz de luchar.<br><br>De todas formas, estás acostumbrada a estar sola. Esto no es nuevo.<br><br>Pensar en una solución no es para ti, al menos no ahora mismo."]
            },
            {
                id: 26,
                title: "Introduction I - 26",
                image: "CHAPTER 1/Aquarium 1-28.png",
                alt: "Comic Image 26",
                text: [""]
            },
            {
                id: 27,
                title: "Introduction I - 27",
                image: "CHAPTER 1/Aquarium 1-29.png",
                alt: "Comic Image 27",
                text: ["Tienes mejores alternativas para atravesar este momento difícil."]
            },
            {
                id: 28,
                title: "Introduction I - 28",
                image: "CHAPTER 1/Aquarium 1-30.png",
                alt: "Comic Image 28",
                text: ["Díalogo.<br><br>Bartender: Identifícate<br>Aura: Oh, Aura. Jejeje... saludos.<br>Bartender: No por nombre. Rango.<br>Aura: Señora, le juro que no quiero problemas, sólo cerveza. ¿Quizás sólo una? ¿Acepta darme una para llevar?"]
            },
            {
                id: 29,
                title: "Introduction I - 29",
                image: "CHAPTER 1/Aquarium 1-31.png",
                alt: "Comic Image 29",
                text: ["Ah, claro. Su estúpido drama se desborda por el camino.<br><br>Justo cuando sólo quiero un respiro..."]
            },
            {
                id: 30,
                title: "Introduction I - 30",
                image: "CHAPTER 1/Aquarium 1-32.gif",
                alt: "Comic Image 30",
                text: [""]
            },
            {
                id: 31,
                title: "Introduction I - 31",
                image: "CHAPTER 1/Aquarium 1-33.png",
                alt: "Comic Image 31",
                text: ["Díalogo<br><br>Aura: ¿Ves? No hay ninguna bruja aquí. De hecho, jaja, ¡Las odio mucho! Igual que tú.<br>Bartender: ¿Lista de crímenes?<br>Aura: ... ¿Disculpa?<br>Aura: Estoy bastante segura de que me confundes con otra persona... Verás, solo pasaba por aquí y tengo muchísimas ganas de una cerveza, así que...<br>Bartender: Ahem."]
                /*AQUI VA UNA CONVERSACION (HABLAR CON VALLY)*/
            },
            {
                id: 32,
                title: "Introduction I - 32",
                image: "CHAPTER 1/Aquarium 1-34.png",
                alt: "Comic Image 32",
                text: ["Díalogo<br><br>Aura: ...<br>Aura: Oye, eso. Eso no estaba antes.<br>Bartender: Políticas del bar.<br><br>Quedas incrédulo."]
            },
            {
                id: 33,
                title: "Introduction I - 33",
                image: "CHAPTER 1/Aquarium 1-35.png",
                alt: "Comic Image 33",
                text: ["Escuchaste que los pájaros también estaban contra otros familiares, pero ¿en serio? ¿Tú? ¿Cuando ni siquiera encajas en los estándares normales de un familiar?<br><br>O... ¿Acaso ésta persona estaba en tu juicio?"]
            },
            {
                id: 34,
                title: "Introduction I - 34",
                image: "CHAPTER 1/Aquarium 1-36.png",
                alt: "Comic Image 34",
                text: ["Díalogo<br><br>Aura: Entonces... si “solo pájaros”, ¿ese qué?<br>Bartender: ¿Ese? Es “Glitch”.<br>Aura: Salud.<br>Bartender: Glitch. Un amigo humano de mi sobrina, Maple. Trabaja incansablemente y con dignidad en mi bar. No hay magia implícita.<br>Aura: No hago magia.<br>Bartender: ¿Qué hay de ese arco, niña? ¿Cómo lo creaste?<br>Aura: Señora, yo no lo creé.<br>Bartender: Claro.<br>Bartender: ¿Sabes qué? Ya oí suficiente de ti en ese juicio.<br>Bartender: Tu arma podría ser buena, pero dejar ese polvo a los ciudadanos de rango superior fue un error. Esa era una situación que se suponía debían regular únicamente las brujas. Qué irresponsabilidad."]
            },
            {
                id: 35,
                title: "Introduction I - 35",
                image: "CHAPTER 1/Aquarium 1-37.gif",
                alt: "Comic Image 35",
                text: ["¿Cómo es que esa persona puede concentrarse tanto? Debe de estar viviendo en su propio mundo. Ni siquiera parece interesado en nuestra conversación..."]
            },
            {
                id: 36,
                title: "Introduction I - 36",
                image: "CHAPTER 1/Aquarium 1-38.gif",
                alt: "Comic Image 36",
                text: ["Díalogo.<br><br>Maple: ¡TÍA, HE VUELTO! DISCULPA LA DEMORA.<br>Aura: Oh.<br>Bartender: Maple, ¿qué estas...? ¿QUÉ...?<br>Maple: ¿Eh? Oh... UHHH<br>Bartender: ¡¿Son partículas mágicas?! ¿Maple? ¡Jovencita, más vale que tengas una buena explicación para ésto!"]
            },
            {
                id: 37,
                title: "Introduction I - 37",
                image: "CHAPTER 1/Aquarium 1-39.png",
                alt: "Comic Image 37",
                text: ["Díalogo.<br><br>Maple: ¡CHICOS! ¡CHICOS! ¡LA CAGUÉ! ¡TÍA PINES SE ENTERÓ! ¡AGERA, APAGA EL HECHIZO!<br>Bartender: ¿Acabo de oír el nombre de esa bruja amiguita tuya? ¡De la que te dije que te alejaras!<br>Maple: AGERA, GLITCH. QUE ALGUIEN CONTESTE, POR FAVOR.<br>Bartender: ¡¿ESO TAMBIÉN ES UN DISPOSITIVO MÁGICO LO QUE ESTÁS USANDO AHORA MISMO?!"]
            },
            {
                id: 38,
                title: "Introduction I - 38",
                image: "CHAPTER 1/Aquarium 1-40.gif",
                alt: "Comic Image 38",
                text: ["<br>Maple: Tía, por favor. ¡Todo tiene una explicación! ¡Y fue idea mía! No los culpes, por favor.<br>Bartender: TU IDEA, SU IDEA... ¡No importa cuándo te dije específicamente que NO USARAS ninguna fuente de magia!<br>"]
            },
            {
                id: 39,
                title: "Introduction I - 39",
                image: "CHAPTER 1/Aquarium 1-41.gif",
                alt: "Comic Image 39",
                text: ["Maple: Glitch se sentía muy, muy mal, pero le dijiste que esta era su última oportunidad de conservar el trabajo, ya que las otras veces no pudo…<br>Bartender: Sabía que ese humano tampoco era un buen ejemplo para ti. Tantas segundas oportunidades. ¿para qué? ¡Cada vez que lo veía, estaba bien! ¡Solo excusas!<br>"]
            },
            {
                id: 40,
                title: "Introduction I - 40",
                image: "CHAPTER 1/Aquarium 1-42.gif",
                alt: "Comic Image 40",
                text: ["Maple: ¡GLITCH TENÍA MUCHAS GANAS DE TRABAJAR, TÍA!<br>Agera: ¿Hola...? Maple, ¿estás ahí? (a través del dispositivo)<br>Bartender: ¡VAMOS A DESTRUIR ESTO!<br>Maple: NOOO, AGERA LO HÍZO PARA MI ¡POR FAVOOOR!"]
            },
            {
                id: 41,
                title: "Introduction I - 41",
                image: "CHAPTER 1/Aquarium 1-43.gif",
                alt: "Comic Image 41",
                text: [""]
            },
            {
                id: 42,
                title: "Introduction I - 42",
                image: "CHAPTER 1/Aquarium 1-44.png",
                alt: "Comic Image 42",
                text: ["Por muy —o poco— interesante que sea la desdicha de una cazadora desarmada que busca vengarse de la sociedad, lo cierto es que la sociedad no está preparada para ella. No, realmente no están preparados para eso.<br><br>Y menos si no tienen un contexto previo de ciertos sucesos.<br><br>Pero, para pasar a ello, habría que ampliar nuestras perspectivas. Te sugeriría empezar con el sujeto del bar."]
            },
            {
                id: 43,
                title: "Introduction I - 43",
                image: "CHAPTER 1/Aquarium 1-45.gif",
                alt: "Comic Image 43",
                text: ["No, no ese sujeto. Eso es una mujer, y te recomendaría no acercarte mucho a ella ahora."]
            },
            {
                id: 44,
                title: "Introduction I - 44",
                image: "CHAPTER 1/Aquarium 1-46.gif",
                alt: "Comic Image 44",
                text: ["Este tampoco, parece  en aprietos."]
            },
            {
                id: 45,
                title: "Introduction I - 45",
                image: "CHAPTER 1/Aquarium 1-47.gif",
                alt: "Comic Image 44",
                text: ["No tan lejos. Era a este al que me refería, pero, si soy completamente honesto, me equivoqué en el enfoque. Él en realidad no está en el bar.<br><br>¿Sí se entendieron los sucesos anteriores? Eso espero. Apenas vamos con cosas simples y ya siento que no puedo narrar esto sin enredarme.<br><br>Pero bueno, esto es un holograma. Más que todo, uno mágico; no realmente permitido en este lugar por el dueño del bar.<br><br>Y para saber sobre el verdadero Glitch, te recomendaría meterte en sus zapatos."]
            },
            {
                id: 46,
                title: "Introduction I - 46",
                image: "CHAPTER 1/Aquarium 1-48.png",
                alt: "Comic Image 44",
                text: ["Bienvenido a tu hogar.<br><br>Vives en una modesta casa de estilo madriguera, con un extenso bosque como patio trasero. Muy similar a las de cierta propiedad intelectual que no podemos mencionar, tu hogar está rodeado de plantas de todo tipo y color. Sin mencionar tu extensa colección de hongos coloridos, todos expuestos a un lado de la casa, perfectamente colocados y cuidados.<br><br>Pero… ¿dónde estás?"]
            },
            {
                id: 47,
                title: "Introduction I - 47",
                image: "CHAPTER 1/Aquarium 1-46.gif",
                alt: "Comic Image 44",
                text: ["Este tampoco, parece  en aprietos."]
            },
            {
                id: 48,
                title: "Introduction I - 48",
                image: "CHAPTER 1/Aquarium 1-46.gif",
                alt: "Comic Image 44",
                text: ["Este tampoco, parece  en aprietos."]
            },
            {
                id: 49,
                title: "Introduction I - 49",
                image: "CHAPTER 1/Aquarium 1-46.gif",
                alt: "Comic Image 44",
                text: ["Este tampoco, parece  en aprietos."]
            },
            {
                id: 50,
                title: "Introduction I - 50",
                image: "CHAPTER 1/Aquarium 1-46.gif",
                alt: "Comic Image 44",
                text: ["Este tampoco, parece  en aprietos."]
            },
            {
                id: 51,
                title: "Introduction I - 51",
                image: "CHAPTER 1/Aquarium 1-46.gif",
                alt: "Comic Image 44",
                text: ["Este tampoco, parece  en aprietos."]
            },
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
