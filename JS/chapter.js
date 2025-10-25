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
                text: ["¿DISCULPA?"],
                dialog: ["<figcaption style='text-align:left; color: RED'> Magnolia: <span style='color: BLACK'>Tu arco será confiscado para su investigación."]
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
                dialog: ["<figcaption style='text-align:left; color: #7e3215'> Bartender: <span style='color: BLACK'>Identifícate</span></figcaption><figcaption style='text-align:left; color: #d1be11'> Aura: <span style='color: BLACK'>Oh, Aura. Jejeje... saludos.</span></figcaption><figcaption style='text-align:left; color: #7e3215'> Bartender: <span style='color: BLACK'>No por nombre. Rango.</span></figcaption><figcaption style='text-align:left; color: #d1be11'> Aura: <span style='color: BLACK'>Señora, le juro que no quiero problemas, sólo cerveza. ¿Quizás sólo una? ¿Acepta darme una para llevar?</span></figcaption>"]},
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
                dialog: ["<figcaption style='text-align:left; color: #d1be11'> Aura: <span style='color: BLACK'> ¿Ves? No hay ninguna bruja aquí. De hecho, jaja, ¡Las odio mucho! Igual que tú.</span></figcaption><figcaption style='text-align:left; color: #7e3215'> Bartender: <span style='color: BLACK'> ¿Lista de crímenes? </span></figcaption><figcaption style='text-align:left; color: #d1be11'> Aura: <span style='color: BLACK'> ... ¿Disculpa? Estoy bastante segura de que me confundes con otra persona... Verás, solo pasaba por aquí y tengo muchísimas ganas de una cerveza, así que...</span></figcaption><figcaption style='text-align:left; color: #7e3215'> Bartender: <span style='color: BLACK'> Ahem.</span></figcaption>"]
                
            },
            {
                id: 32,
                title: "Introduction I - 32",
                image: "CHAPTER 1/Aquarium 1-34.png",
                alt: "Comic Image 32",
                text: ["Quedas incrédulo."],
                dialog: ["<figcaption style='text-align:left; color: #d1be11'> Aura: <span style='color: BLACK'> ... Oye, eso. Eso no estaba antes.</span></figcaption><figcaption style='text-align:left; color: #7e3215'> Bartender: <span style='color: BLACK'>Políticas del bar.</span></figcaption><figcaption style='text-align:center'>"]
            },
            {
                id: 33,
                title: "Introduction I - 33",
                image: "CHAPTER 1/Aquarium 1-35.png",
                alt: "Comic Image 33",
                text: ["Escuchaste que los pájaros también estaban contra otros familiares, pero ¿en serio? ¿Tú? ¿Cuando ni siquiera encajas en los estándares normales de un familiar?<br><br>O... ¿Acaso ésta persona estuvo en tu juicio?"]
            },
            {
                id: 34,
                title: "Introduction I - 34",
                image: "CHAPTER 1/Aquarium 1-36.png",
                alt: "Comic Image 34",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Aura: Entonces... si “solo pájaros”, ¿ese qué?<br>Bartender: ¿Ese? Es “Glitch”.<br>Aura: Salud.<br>Bartender: Glitch. Un amigo humano de mi sobrina, Maple. Trabaja incansablemente y con dignidad en mi bar. No hay magia implícita.<br>Aura: No hago magia.<br>Bartender: ¿Qué hay de ese arco, niña? ¿Cómo lo creaste?<br>Aura: Señora, yo no lo creé.<br>Bartender: Claro.<br>Bartender: ¿Sabes qué? Ya oí suficiente de ti en ese juicio.<br>Bartender: Tu arma podría ser buena, pero dejar ese polvo a los ciudadanos de rango superior fue un error. Esa era una situación que se suponía debían regular únicamente las brujas. Qué irresponsabilidad."]
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
                text: ["Díalogo.<br><br><figcaption style=text-align:left>Maple: ¡TÍA, HE VUELTO! DISCULPA LA DEMORA.<br>Aura: Oh.<br>Bartender: Maple, ¿qué estas...? ¿QUÉ...?<br>Maple: ¿Eh? Oh... UHHH<br>Bartender: ¡¿Son partículas mágicas?! ¿Maple? ¡Jovencita, más vale que tengas una buena explicación para ésto!"]
            },
            {
                id: 37,
                title: "Introduction I - 37",
                image: "CHAPTER 1/Aquarium 1-39.png",
                alt: "Comic Image 37",
                text: ["Díalogo.<br><br><figcaption style=text-align:left>Maple: ¡CHICOS! ¡CHICOS! ¡LA CAGUÉ! ¡TÍA PINES SE ENTERÓ! ¡AGERA, APAGA EL HECHIZO!<br>Bartender: ¿Acabo de oír el nombre de esa bruja amiguita tuya? ¡De la que te dije que te alejaras!<br>Maple: AGERA, GLITCH. QUE ALGUIEN CONTESTE, POR FAVOR.<br>Bartender: ¡¿ESO TAMBIÉN ES UN DISPOSITIVO MÁGICO LO QUE ESTÁS USANDO AHORA MISMO?!"]
            },
            {
                id: 38,
                title: "Introduction I - 38",
                image: "CHAPTER 1/Aquarium 1-40.gif",
                alt: "Comic Image 38",
                text: ["<br><figcaption style=text-align:left>Maple: Tía, por favor. ¡Todo tiene una explicación! ¡Y fue idea mía! No los culpes, por favor.<br>Bartender: TU IDEA, SU IDEA... ¡No importa cuándo te dije específicamente que NO USARAS ninguna fuente de magia!<br>"]
            },
            {
                id: 39,
                title: "Introduction I - 39",
                image: "CHAPTER 1/Aquarium 1-41.gif",
                alt: "Comic Image 39",
                text: ["<figcaption style=text-align:left>Maple: Glitch se sentía muy, muy mal, pero le dijiste que esta era su última oportunidad de conservar el trabajo, ya que las otras veces no pudo…<br>Bartender: Sabía que ese humano tampoco era un buen ejemplo para ti. Tantas segundas oportunidades. ¿para qué? ¡Cada vez que lo veía, estaba bien! ¡Solo excusas!<br>"]
            },
            {
                id: 40,
                title: "Introduction I - 40",
                image: "CHAPTER 1/Aquarium 1-42.gif",
                alt: "Comic Image 40",
                text: ["<figcaption style=text-align:left>Maple: ¡GLITCH TENÍA MUCHAS GANAS DE TRABAJAR, TÍA!<br>Agera: ¿Hola...? Maple, ¿estás ahí? (a través del dispositivo)<br>Bartender: ¡VAMOS A DESTRUIR ESTO!<br>Maple: NOOO, AGERA LO HÍZO PARA MI ¡POR FAVOOOR!"]
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
                alt: "Comic Image 45",
                text: ["No tan lejos. Era a este al que me refería, pero, si soy completamente honesto, me equivoqué en el enfoque. Él en realidad no está en el bar.<br><br>¿Sí se entendieron los sucesos anteriores? Eso espero. Apenas vamos con cosas simples y ya siento que no puedo narrar esto sin enredarme.<br><br>Pero bueno, esto es un holograma. Más que todo, uno mágico; no realmente permitido en este lugar por el dueño del bar.<br><br>Y para saber sobre el verdadero Glitch, te recomendaría meterte en sus zapatos."]
            },
            {
                id: 46,
                title: "Introduction I - 46",
                image: "CHAPTER 1/Aquarium 1-48.png",
                alt: "Comic Image 46",
                text: ["Bienvenido a tu hogar.<br><br>Vives en una modesta casa de estilo madriguera, con un extenso bosque como patio trasero. Muy similar a las de cierta propiedad intelectual que no podemos mencionar, tu hogar está rodeado de plantas de todo tipo y color. Sin mencionar tu extensa colección de hongos coloridos, todos expuestos a un lado de la casa, perfectamente colocados y cuidados.<br><br>Pero… ¿dónde estás?"]
            },
            {
                id: 47,
                title: "Introduction I - 47",
                image: "CHAPTER 1/Aquarium 1-49.png",
                alt: "Comic Image 47",
                text: ["Oh, ahí estás.<br><br>Aparte del hecho de que estás hecho pedazos por el día anterior, pues… no hay mucho que admirar. Más aún si NO ESTÁS LEVANTANDO TU TRASERO DE LA CAMA. ¿Eso podría contar realmente como “estar acostado”? Parece que vas a romperte el cuello en cualquier momento.<br><br>Tomaría parte de mi tiempo para analizar tu habitación, pero lo único evidente es que eres un entusiasta del reino Fungi y de otras plantas."]
            },
            {
                id: 48,
                title: "Introduction I - 48",
                image: "CHAPTER 1/Aquarium 1-50.gif",
                alt: "Comic Image 48",
                text: [""]
            },
            {
                id: 49,
                title: "Introduction I - 49",
                image: "CHAPTER 1/Aquarium 1-51.gif",
                alt: "Comic Image 49",
                text: ["Mucho mejor. Por mucha ayuda mágica que haya en este mundo, tú no eres un brujo y no dominas ni un poco de la técnica, y viviendo solo probablemente pasarían días antes de que alguien viniera a revisar si sigues vivo."]
            },
            {
                id: 50,
                title: "Introduction I - 50",
                image: "CHAPTER 1/Aquarium 1-52.png",
                alt: "Comic Image 50",
                text: ["Aunque no sepas nada de magia, al menos esperas haber sido confundido con uno en algún momento. Eso sería cool. Por mucho que hayas querido estudiarla, y teniendo a una de tus mejores amigas como mentora, era imposible para ti.<br><br>Puedes recordar vagamente los intentos fallidos, las explosiones y la decepción. Más que nada, recuerdas haber invertido horas de estudio y noches sin dormir, solo para que después todo eso resultara en nada, porque de tu mano no emergía ni un rayito de luz."]
            },
            {
                id: 51,
                title: "Introduction I - 51",
                image: "CHAPTER 1/Aquarium 1-53.png",
                alt: "Comic Image 51",
                text: ["Si no eres un brujo, ¿Entonces que eras? ¿De dónde provenias? Has intentado de todo. Ser un brujo, ser un familiar, ser un fantasma, ser un vampiro y hasta incluido una planta. Ese último casi hacía click contigo, pero por muy buena que sonara la fotosintesis, también te gustaba mucho la ensalada. Y ser un caníbal no resonaba contigo."]
            },
        {
                id: 52,
                title: "Introduction I - 52",
                image: "CHAPTER 1/Aquarium 1-54.png",
                alt: "Comic Image 52",
                text: ["Ah, ¿Qué no es un buen día sin una crisis existencial mañanera?"]
            },
        {
                id: 53,
                title: "Introduction I - 53",
                image: "CHAPTER 1/Aquarium 1-55.gif",
                alt: "Comic Image 53",
                text: ["Desaparece tu interés por observar meláncolicamente tu reflejo y decides meditar por otras cosas diferentes y en un tono un poco más positivo.<br><br>Hasta que tu comunicador empieza a sonar de forma estruendosa."]
            },
        {
                id: 54,
                title: "Introduction I - 54",
                image: "CHAPTER 1/Aquarium 1-56.gif",
                alt: "Comic Image 54",
                text: ["“¡GLIIIITCH!” Parece ser la voz de una de tus amigas. Lo sacas del bolsillo lo más rápido posible, pero tu dispositivo parece no funcionar en ese momento, sin importar cuánto intentes responder.<br><br>Oh- ¿Podrá ser que en tu aventura de ayer-?<br><br>Comunicador<br><br><figcaption style=text-align:left>Maple: ¡Estoy sosteniendo la puerta como puedo! ¿No puedes teletransportarte hacia mí o algo así?<br>Agera: Las teletransportaciones son peligrosas, y estoy con Magnolia en la otra habitación.<br>Maple: ¿No está Glitch conectado? ¿¡DÓNDE ESTÁ ÉL!?<br>Agera: No sé. Maple, yo fui quien invocó al señuelo. No te enojes con él por eso.<br>Maple: ¡NO SOY YO QUIEN ESTÁ ENOJADA, SI ES QUE NO ESCUCHAS LOS GOLPES!<br>Maple: Oh.<br>Agera: ????<br>Maple: Cesaron. Se fue. Phew…<br>Agera: ¿Cómo te encuentras?<br>Maple: Asustada. Pero creo que temo más por el alboroto que pueda armar en el aquelarre. No te recomiendo salir de tu oficina.<br>Agera: *sigh*<br>Maple: ¿Cómo ha ido la investigación?<br>Agera: Ha sido algo reciente, Maple. Encontrar el origen nos ha mantenido despiertas a la mayoría.<br>Agera: Ese arco parece tener un sello. Esto es confidencial, pero no creo que sea magia común…<br>Maple: ¿Y qué pasó con el familiar que detuvieron? ¿El perrito?<br>Agera: Fue descartada por Magnolia como amenaza. Además, dice que solo se topó con él, así que la liberamos por el momento.<br>Maple: ¿Y no es eso sospechoso?<br>Agera: En cualquier caso, parece tener el poder para purgarlos, lo que la haría más una herramienta aliada que una enemiga.<br>Agera: Quisiera hacerle preguntas por mi cuenta, pero se veía algo… muy enojada.<br>Maple: JAJA ¡Me imagino!<br>Maple: Tal vez te partiría la cara si te ve.<br>Maple: Pero oh, no, no, no. No permitiría eso.<br>Agera: Quisiera poder explicarle que nuestra intención no fue mala.<br>Maple: ¡Seguramente se lo harías entender muy bien! Ojalá mi tía fuera otro caso… seguramente se las agarre con Glitch también. Ouch.<br>Agera: Es mi culpa- yo permití.<br>Maple: Tonterías. Cualquier cosa, Glitch y yo podemos cargar con la responsabilidad.<br>Maple: Solo la convenceré que fue mi culpa.<br>Agera: Eso no suena mucho a que ambos carguen con la responsabilidad, que digamos.<br>Maple: ¿Y qué? ¿Que mi tía le rompa la cara? Además, fue mi idea para que mantuviera su trabajo; me gustaba repartirme las tareas con él.<br>Maple: Uhh, quién sabe.<br>Agera: No es la primera vez que desaparece sin avisar, me preocupa.<br>Maple: Yo también lo extraño. Snif.<br>Maple: Cuando lo veas dile que no se acerque al pueblo, Eso sí.<br>Agera: Debo irme. Suerte con eso.<br>Maple: Bye-byeee!"]
            },
        {
                id: 55,
                title: "Introduction I - 55",
                image: "CHAPTER 1/Aquarium 1-57.png",
                alt: "Comic Image 55",
                text: ["Oh, eso no se sintió muy bien, ¿verdad? La responsabilidad, el remordimiento y la culpa caen sobre ti. Si ya estabas preparando una excusa por haber faltado al trabajo, ahora tendrías que posponer tus compras en el mercado por miedo a encontrarte cara a cara con una señora furiosa."]
            },
            {
                id: 56,
                title: "Introduction I - 56",
                image: "CHAPTER 1/Aquarium 1-58.png",
                alt: "Comic Image 56",
                text: ["Ya te estabas preparando para volver a la cama otro rato, tal vez de esa forma podrías posponer las consecuencias de tus actos. Igualmente, seguías agotado de ayer y preferirías un laaargo descanso, lejos de causar cualquier caos alrededor."]
            },
        {
                id: 57,
                title: "Introduction I - 57",
                image: "CHAPTER 1/Aquarium 1-59.png",
                alt: "Comic Image 57",
                text: ["¡¿EH?!<br><br>¿UN OBJETO DURO EN TU CAMA?<br><br>¡Casi te perfora!"]
            },
            {
                id: 58,
                title: "Introduction I - 58",
                image: "CHAPTER 1/Aquarium 1-60.png",
                alt: "Comic Image 57",
                text: ["Te sobas la espalda de dolor. ¿Cuándo habrá llegado esto aquí? Podría haber sido en cualquier momento. Estás dispuesto a olvidar el tema y aventar esta piedra a una esquina de la habitación… hasta que la realización también termina golpeándote. (Demasiados golpes mencionados.)"]
            },
            {
                id: 59,
                title: "Introduction I - 59",
                image: "CHAPTER 1/Aquarium 1-61.png",
                alt: "Comic Image 59",
                text: ["¡¡¡CHIAPAS!!!"]
            },
            {
                id: 60,
                title: "Introduction I - 60",
                image: "CHAPTER 1/Aquarium 1-62.gif",
                alt: "Comic Image 60",
                text: ["Con la piedra en mano, buscas fuera de tu habitación a tu pequeño jarrón de agua, que utilizas como su tanque. Habías adquirido esta piedra con la intención de filtrar el agua del hogar de tu ajolote, Chiapas.<br><br>El tarro de cristal que le conseguiste era deprimente, y él merecía lo mejor. Pero si se te había olvidado darle la piedra, ¿qué tal la comida? ¿Ha estado solo? ¡No puede ser!"]
            },
            {
                id: 61,
                title: "Introduction I - 61",
                image: "CHAPTER 1/Aquarium 1-63.gif",
                alt: "Comic Image 61",
                text: ["En el jarrón que descansaba en la ventana no había, ¡NADA! Toda el agua en su interior estaba vertida por todas partes y la ventana estaba abierta. ¿Habia escapado? ¡No! ¿Por qué Chiapas haría eso? ¡Él nunca haría eso! Lo rescataste de las cuevas y sólo deseas lo mejor para él. ¿Habrá sido un depredador que asaltó su jarrón? TONTO TÚ QUE DEJASTE LA VENTANA ABIERTA!"]
            },
            {
                id: 62,
                title: "Introduction I - 62",
                image: "CHAPTER 1/Aquarium 1-64.gif",
                alt: "Comic Image 62",
                text: ["Vas afuera y pegas un grito al cielo: “¡CHIAAAPAS!” Todo es seguro mientras no vayas al pueblo, que está bastante lejos. Pero, diablos, ¿qué tanto y qué tan rápido podría caminar un ajolote?"]
            },
            {
                id: 63,
                title: "Introduction I - 63",
                image: "CHAPTER 1/Aquarium 1-65.png",
                alt: "Comic Image 63",
                text: [""]
            },
            {
                id: 64,
                title: "Introduction I - 64",
                image: "CHAPTER 1/Aquarium 1-66.png",
                alt: "Comic Image 64",
                text: [""]
            },
            {
                id: 65,
                title: "Introduction I - 65",
                image: "CHAPTER 1/Aquarium 1-67.gif",
                alt: "Comic Image 65",
                text: ["“¡TUUU!”"]
            },
            {
                id: 66,
                title: "Introduction I - 66",
                image: "CHAPTER 1/Aquarium 1-67.png",
                alt: "Comic Image 66",
                text: ["¿Qué haces aquí, Chiapas? ¿En este enorme lago lleno de posibles depredadores? ¡Qué peligro es la vida exterior! Le ofreces el jarrón de vuelta, esperando que salte nuevamente a la seguridad del refugio que tenías para él. Pero nada: ni una mínima intención de moverse. Te sientes ofendido, atacado, destrozado.<br><br>Su cara indica cero intenciones de hacerte caso."]
            },
            {
                id: 67,
                title: "Introduction I - 67",
                image: "CHAPTER 1/Aquarium 1-68.gif",
                alt: "Comic Image 67",
                text: ["!!!!"]
            },
            {
                id: 68,
                title: "Introduction I - 68",
                image: "CHAPTER 1/Aquarium 1-69.png",
                alt: "Comic Image 68",
                text: ["Un estruendo te hace voltear: el sonido de un árbol cayendo con fuerza agitó la tranquilidad del lugar, asustando a Chiapas de vuelta a su jarrón.<br><br>Te encuentras con tu vecina, quien parece haber tirado ya varios árboles en lo que lleva del día. Querías sentirte feliz de verla, pero, por cómo sujetaba su hacha con molestia, casi temblando de la rabia, no tuviste el coraje para hacerlo."]
            },
            {
                id: 69,
                title: "Introduction I - 69",
                image: "CHAPTER 1/Aquarium 1-70.png",
                alt: "Comic Image 69",
                text: ["Crees que no podrías volver a darle la cara después de lo que pasó."]
            },
            {
                id: 70,
                title: "Introduction I - 70",
                image: "CHAPTER 1/Aquarium 1-71.png",
                alt: "Comic Image 70",
                text: ["¿Qué pasó?<br><br>Bueno, fue unos días atrás."]
            },
            {
                id: 70,
                title: "Introduction I - 70",
                image: "CHAPTER 1/Aquarium 1-72.png",
                alt: "Comic Image 70",
                text: ["(Hace unos días)<br><br>Estabas saliendo de tu casa para una aventura corta en busca de una piedra de tu libro; no era la primera vez que ibas por piedras raras para tu colección. Pero esta vez te sentías presionado a encontrarla pronto."]
            },
            {
                id: 71,
                title: "Introduction I - 71",
                image: "CHAPTER 1/Aquarium 1-73.png",
                alt: "Comic Image 71",
                text: ["Pasaste un rato deambulando por el bosque; tu objetivo eran sitios con cascadas y rocas grandes, que es donde normalmente se ubican ese tipo de artefactos."]
            },
            {
                id: 72,
                title: "Introduction I - 72",
                image: "CHAPTER 1/Aquarium 1-74.png",
                alt: "Comic Image 72",
                text: ["El ambiente era tranquilo, sereno, hasta que poco a poco se vio apagarse."]
            },
            {
                id: 73,
                title: "Introduction I - 73",
                image: "CHAPTER 1/Aquarium 1-75.png",
                alt: "Comic Image 73",
                text: ["Tu ojo, el que siempre te juzga, parece manifestarse. Observandote con cansancio, como si supiera bien lo que se aproximaba, pero expectante a tu reacción. Siempre te molestaba que hiciera eso, era como si se burlara de ti de antemano, el miedo recorre tu espina dorsal. ¿Por qué no dice nada? ¿De verdad esto es divertido para él?<br><br>Otros ojos siniestros se manifiestan a tu alrededor. No estás seguro si los estás soñando o de verdad están ahí.<br><br>¿Qué significan? ¿Qué quieren de ti?<br><br>No lo puedes tener por seguro."]
            },
            {
                id: 74,
                title: "Chapter 2 - Page 74",
                video: "CHAPTER 1/ANIMATIC-TEST-1.mp4",
                hasVideo: true,
                alt: "Comic Image 74",
                text: [""]
            },
            {
                id: 75,
                title: "Introduction I - 75",
                image: "CHAPTER 1/Aquarium 1-76.png",
                alt: "Comic Image 75",
                text: ["La cueva donde se encuentran es extensa, rocosa y húmeda. Piensas que sigue fuera de las especificaciones de tu libro, pero el sutil sonido de agua cayendo te hace pensar lo contrario. Te imaginas la posibilidad de que más allá de esta cueva pueda estar lo que buscas."]
            },
            {
                id: 76,
                title: "Introduction I - 76",
                image: "CHAPTER 1/Aquarium 1-78.png",
                alt: "Comic Image 76",
                text: ["Eso parece distraerte de la chica a tu lado. ¡Oh, diablos! ¿Qué deberías hacer? Hablarle, por supuesto. No, por supuesto que no. ¡Eres su rehén! Eso es un poco sexy… ¡NO! ¿Qué estás pensando?<br><br>Habías tardado en caer en cuenta, pero esta chica vivía sobre el lago frente a tu casa. Pensarías que eso haría su primera conversación a solas, en un lugar cerrado y escapando de la justicia, mucho más cómoda. Pero no."]
            },
            {
                id: 77,
                title: "Introduction I - 77",
                image: "CHAPTER 1/Aquarium 1-79.png",
                alt: "Comic Image 76",
                text: ["“Perdón.” se disculpa y camina hacia el frente. Parece estar analizando la zona.<br><br>Díalogo<br><br><figcaption style=text-align:left>Glitch: ¿Perdón por…? M-Me salvaste de unos demonios. Eh… ¿De dónde son esas cosas?<br>Aura: Uhm.<br>Aura: No lo sé. Ni las brujas parecen saber qué son; causan discordia y alucinaciones. Gente ha muerto.<br>Glitch: Vaya…<br>Aura: Y las perras quieren mi arma. ¿No podría ser mejor, no sé… pagarme para acabar con esas pulgas? Tsk. Expropiadores.<br>Glitch: ¿No pueden acabarlas de otra forma?<br>Aura: Al parecer, sólo yo puedo. Pensé que eso era algo genial… hasta que ya no lo fue mucho.<br>Aura: Pedía perdón por arrastrarte a mi persecución y encerrarnos en esta cueva.<br>Glitch: ¡Oh! No pasa nada, jajaja. Yo… más bien me agilizaste la búsqueda. Creo que por aquí hay un objeto que ando buscando.<br>Glitch: Es una piedra que mantiene limpia el agua. Mira… en este libro hay un ejemplo."]
            },
            {
                id: 78,
                title: "Introduction I - 78",
                image: "CHAPTER 1/Aquarium 1-80.png",
                alt: "Comic Image 78",
                text: ["<figcaption style=text-align:left>Glitch: Lo necesito para la pecera de mi ajolote, ¿Ves?<br>Glitch: Anda deprimido desde hace unos días, y pensé que un agua más cristalina en su pecera lo haría más feliz.<br>Aura: Eso suena peligroso.<br>Glitch: ¿EeH? ¿Por qué?<br>Aura: Será más fácil de detectar para un depredador si el agua está limpia.<br>Glitch: No vive en un estanque fuera como para eso…<br>Aura:  Ya. ¿Entonces está deprimido por nadar en un frasco de popó?<br>Glitch: ¡No nada en popó! Siempre estoy limpiando su pecera. Es más por sustancias tóxicas que se acumulan debido a cosas biológicas. Las peceras son como agua estancada; por lo tanto, la piedra sería quien filtra para eliminar los desechos. Pero cambiar su agua tan seguido…<br>Aura: Seguro. Está bien. La forma sin embargo es igual a las otras rocas.<br>Glitch: Es más característico por el color; la mayoría de piedras con propiedades mágicas brillan de colores.<br>Aura: … Claro.<br>Glitch: ¿Qué es esa expresión?<br>Aura: No es nada. Busca tu piedra, yo vigilo que no aparezcan más de esos.<br>Glitch: ¿Cómo sabes que están cerca? Aparte de esa aura malvada…<br>Aura: Eh- No más que eso. Por lo menos si están cerca puedes sentirlos, así que no te preocupes."]
            },
            {
                id: 79,
                title: "Introduction I - 79",
                image: "CHAPTER 1/Aquarium 1-81.png",
                alt: "Comic Image 79",
                text: ["Exploras todo el río dentro de la cueva junto a la chica cazadora. Sientes que hablaste demasiado como un nerd y te sientes un perdedor. Pero, ¿qué más daba? Al menos no había salido corriendo, y al parecer iba a cuidar de tu pellejo hasta que volvieras a tu hogar.<br><br>(O al menos eso deseabas... no querías volver a repetir esa aterradora experiencia). "]
            },
            {
                id: 80,
                title: "Introduction I - 80",
                image: "CHAPTER 1/Aquarium 1-82.png",
                alt: "Comic Image 80",
                text: ["Pasó un rato de encontrar absolutamente nada hasta que un brillo desde un agujero en la pared te llamó la atención. ¡Era del mismo color que del libro!"]
            },
            {
                id: 81,
                title: "Introduction I - 81",
                image: "CHAPTER 1/Aquarium 1-83.png",
                alt: "Comic Image 81",
                text: [""]
            },
            {
                id: 82,
                title: "Introduction I - 82",
                image: "CHAPTER 1/Aquarium 1-84.png",
                alt: "Comic Image 82",
                text: ["Al asomar la vista, ahí estaba. Descansando en una buena cantidad de vegetación al otro lado de la pared se encontraba la piedra. "]
            },
            {
                id: 83,
                title: "Introduction I - 83",
                image: "CHAPTER 1/Aquarium 1-85.gif",
                alt: "Comic Image 83",
                text: ["El primer paso fue pasar tu mano, algo temeroso, pero la seguridad era esencial si tu intención era impresionar a una chica. "]
            },
            {
                id: 84,
                title: "Introduction I - 84",
                image: "CHAPTER 1/Aquarium 1-86.png",
                alt: "Comic Image 84",
                text: ["<figcaption style=text-align:left>Aura: ¿Necesitas ayuda?<br>Glitch: No- Sólo me quitaré esto."]
            },
            {
                id: 85,
                title: "Introduction I - 85",
                image: "CHAPTER 1/Aquarium 1-87.png",
                alt: "Comic Image 85",
                text: [""]
            },
            {
                id: 86,
                title: "Introduction I - 86",
                image: "CHAPTER 1/Aquarium 1-88.gif",
                alt: "Comic Image 86",
                text: ["Decides acabar con la humillación y te quitas la mochila para pasarla al otro lado, seguido de ti mismo. Sientes un alivio inmediato al no tener sus ojotes sobre ti."]
            },
            {
                id: 87,
                title: "Introduction I - 87",
                image: "CHAPTER 1/Aquarium 1-89.gif",
                alt: "Comic Image 87",
                text: ["Consigues la piedra. Oh, Chiapas va a estar muy feliz al saber que hiciste todo este esfuerzo por su bienestar. ¡Piensas que su brillo es incomparable!"]
            },
            {
                id: 88,
                title: "Introduction I - 88",
                image: "CHAPTER 1/Aquarium 1-90.png",
                alt: "Comic Image 88",
                text: ["“¡Detectamos el arco cerca!”<br><br>Voces se escuchan a lo lejos, ambos observan con miedo a los alrededores, parece que las brujas los habían localizado."]
            },
            {
                id: 89,
                title: "Introduction I - 89",
                image: "CHAPTER 1/Aquarium 1-91.png",
                alt: "Comic Image 89",
                text: ["Glitch: ¡Pasa a este lado!"]
            },
            {
                id: 90,
                title: "Introduction I - 90",
                image: "CHAPTER 1/Aquarium 1-92.png",
                alt: "Comic Image 90",
                text: ["Ella intenta pasar, pero parece experimentar el mismo problema que tú cuando te insertaste en ese hoyo. Lo que traías en la espalda. Sólo que ella parecía más necia al respecto.<br><br>Díalogo<br><br><figcaption style=text-align:left>Glitch: ¡Quítatelo y pásamelo!<br>Aura: ¡NO!<br>Glitch: ¡Shh! Están cerca. Sólo dámelo, ¡te lo devolveré!<br>Aura: ¡GRRRRRRR!"]
            },
            {
                id: 91,
                title: "Introduction I - 91",
                image: "CHAPTER 1/Aquarium 1-93.gif",
                alt: "Comic Image 91",
                text: [""]
            },
            {
                id: 93,
                title: "Introduction I - 93",
                image: "CHAPTER 1/Aquarium 1-94.png",
                alt: "Comic Image 93",
                text: [""]
            },
            {
                id: 94,
                title: "Introduction I - 94",
                image: "CHAPTER 1/Aquarium 1-95.gif",
                alt: "Comic Image 94",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Bruja 1: ¿Es normal que los perros dejen este olor tan apestoso?<br>Bruja 2: ¡Recuerda el hechizo de ubicación! Mientras más apestoso sea, más cerca estamos.<br>Bruja 1: ¿Que tipo de lógica es esa? ¿No podria ser lavanda o fresas?<br>Bruja 3: Creo que secuestró a un civil a su paso.<br>Bruja 2: jeje. Eso solo agrega OTRO cargo más. En adición a las horas escapando de la justicia.<br>Brujas 1: ¿Magnolia te solicitó llevar esas cuentas?<br>Brujas 2: No. Sólo que se verá mejor cuando la publiquemos en la lista negra. Evasión de la justicia, posesión de magia no autorizada, secuestro, atentado contra la guardia de magia, uso indebido de artefactos encantados, invocación no registrada de entidades, uso de magia en zonas de baja contención, cruzar límites de civiles y cualquier otra cosa que se pueda incrustar a la marcha.<br>Bruja 1: Suena bien."]
            },
            {
                id: 95,
                title: "Introduction I - 95",
                image: "CHAPTER 1/Aquarium 1-96.gif",
                alt: "Comic Image 95",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Bruja 1: No es como si estuvieramos mintiendo de todas formas. Y quién sabe que otras fechorías haya cometido fuera del radar de la ley. Éstos familiares no empezaron a revelarse recién, ¿Sabes?<br>Bruja 2: No lo sé. Lo entendería con las aves, por culpa de la ex-consejera principal de Magnolia. Pero los demás familiares están bastante cómodos con nosotros, no entiendo el enojo.<br>Bruja 3: Les dimos cuerpos más humanos y un hogar para vivir, ¡quién los entiende! No sé por qué querrían la razón en todo siempre. Están para aconsejar, no demandar.<br>Bruja 1: Bueno, suficiente. Hay que movernos rápido. Hoy debe enfrentar justicia."]
            },
            {
                id: 96,
                title: "Introduction I - 96",
                image: "CHAPTER 1/Aquarium 1-97.gif",
                alt: "Comic Image 96",
                text: ["Aura: ¡Qué basura!"]
            },
            {
                id: 97,
                title: "Introduction I - 97",
                image: "CHAPTER 1/Aquarium 1-98.png",
                alt: "Comic Image 97",
                text: ["???<br><br>¿Qué hace?<br><br>¿Dónde va?"]
            },
            {
                id: 98,
                title: "Introduction I - 98",
                image: "CHAPTER 1/Aquarium 1-99.gif",
                alt: "Comic Image 98",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Glitch: Ehm… ¿Te lo doy de vuelta?<br>Aura: ¿No crees que es ridículo? ¿Absurdo? ¡Sabía bien que tenía que huir de esas locas! Cero intención de trabajar conmigo… con razón las aves no las soportan. Cuánto a que esto solo ocasiona una ruptura total.<br>Glitch:Bueno, sí, aves cercanas me han comentado al respecto…<br>Aura:¿No pueden solo llegar a un acuerdo? Vamos, no es como si fuéramos tantos en la comunidad. Algo se podría discutir si se lo propusieran. Todo ese control a las brujas se les subió a la cabeza.<br>Aura: De paso ahora es mi culpa. Tsk. Agarran al más tonto como carnada.<br>Glitch: ¿Por qué te culparían?<br>Aura: ¿Por… tener la solución? Pero no sé de dónde la saqué. No importa. NO creo que importe. Estoy ayudando, estuve ayudando. ¿¡Merezco ser perseguida como un criminal por eso!? Que suerte más de mierda.<br>Aura: ¡Las aves tampoco se salvan! Tan tercas con que pueden resolver el asunto con ellas hablando y con argumentos. Nah, nah… eso solo va—"]
            },
            {
                id: 99,
                title: "Introduction I - 99",
                image: "CHAPTER 1/Aquarium 1-100.png",
                alt: "Comic Image 99",
                text: ["THUMP!!!<br><br>La oscuridad no te permitió ver más que a la chica caer. A lo que te detuviste de inmediato, intentando analizar hacía dónde fue."]
            },
            {
                id: 100,
                title: "Introduction I - 100",
                image: "CHAPTER 1/Aquarium 1-101.gif",
                alt: "Comic Image 100",
                text: ["Como si escuchara tus necesidades, el arco brilló con fuerza. Mostrándola desplomada en medio de un charco de barro, completamente inmóvil.<br><br>Aura: (Quejido)"]
            },
            {
                id: 101,
                title: "Introduction I - 101",
                image: "CHAPTER 1/Aquarium 1-102.png",
                alt: "Comic Image 101",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Glitch: ¡¿Estás bien?!<br>Glitch: Deberías ver dónde caminas, sabes…<br>Aura: ¿TÚ-?! ugh…"]
            },
            {
                id: 102,
                title: "Introduction I - 102",
                image: "CHAPTER 1/Aquarium 1-103.png",
                alt: "Comic Image 102",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Aura: Quedatelo.<br>Glitch: No lo quiero, es tuyo.<br>Aura: Quien sabe. Tal vez ese dios sólo quería deshacerse de chatarra vieja o algo. Lo único de mi propiedad es mi mediocridad, oh.. jaja.<br>Aura: El barro no es malo de todas formas. Es… Cómodo. Podría vivir aquí para siempre. Jejeje.<br>Glitch: ¡Ahí voy!<br>Aura: ¿Eh? NONO-"]
            },
            {
                id: 103,
                title: "Introduction I - 103",
                image: "CHAPTER 1/Aquarium 1-104.gif",
                alt: "Comic Image 103",
                text: [""]
            },
            {
                id: 104,
                title: "Introduction I - 104",
                image: "CHAPTER 1/Aquarium 1-105.gif",
                alt: "Comic Image 104",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Aura: … Uh.<br>Glitch: ESTOY TAN ASUSTADO COMO TÚ.<br>Aura: ¿No te rompiste algo?<br>Glitch: NO LO SÉ.<br>Glitch: Ahem."]
            },
            {
                id: 104,
                title: "Introduction I - 104",
                image: "CHAPTER 1/Aquarium 1-106.png",
                alt: "Comic Image 104",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Glitch: ¿Dices que un dios te lo dio?<br>Aura: …<br>Aura: Siempre he tenido mala suerte toda mi vida. Ese arco fue como un rayo de luz.<br>Aura: No recuerdo su rostro ni nada de él. Solo recuerdo sus palabras.<br>Glitch: ¿Qué te dijo?<br>Aura: “No te pierdas”.<br>Aura: Y aquí estamos… perdidos y sin salida.<br>Aura: Hubiera sido amable que me dijera qué camino seguir en primer lugar…<br>Glitch: He llegado a pensar eso de mí mismo. Así que no creo que sea algo que deba hacerte sentir anormal.<br>Glitch: Sentir que solo quieres vivir sin que tantas cosas pasen a tu alrededor… ninguna de las que puedes controlar.<br>Glitch: Sentirte perdido.<br>Glitch: Tal vez… tal vez no hablaba de caminos como tal, sino de no perderte a ti misma.<br>Aura: ¿Te sientes perdido?<br>Glitch: Desde siempre.<br>Aura: Yo quiero encontrar mi propósito. Pensé que lo tenía.<br>Aura: Pero… si esto es por lo que tengo que pasar, ya no sé si lo quiero.<br>Aura: Debería conformarme con la mísera paga de mi trabajo, jaja. No aspirar estupideces.<br>Aura: Pero no me escuches. No quisiera deprimirte con mi forma de pensar.<br>Aura: Gulp.<br>Glitch: Tienes muy buena puntería con esta cosa, y eres muy ágil.<br>Glitch: No creo que estés haciendo las cosas mal… sino que vivimos en una sociedad de mierda.<br>Glitch: Podrías seguir siendo tú. Y al diablo con ellos.<br>Glitch: Nadie podría manejar esto mejor que tú."]
            },
            {
                id: 105,
                title: "Introduction I - 105",
                image: "CHAPTER 1/Aquarium 1-107.png",
                alt: "Comic Image 105",
                text: ["(...)"]
            },
            {
                id: 106,
                title: "Introduction I - 106",
                image: "CHAPTER 1/Aquarium 1-108.gif",
                alt: "Comic Image 106",
                text: ["(...?)"]
            },
            {
                id: 107,
                title: "Introduction I - 107",
                image: "CHAPTER 1/Aquarium 1-109.gif",
                alt: "Comic Image 107",
                text: [""]
            },
            {
                id: 108,
                title: "Introduction I - 108",
                image: "CHAPTER 1/Aquarium 1-110.gif",
                alt: "Comic Image 108",
                text: ["!!!"]
            },
            {
                id: 109,
                title: "Introduction I - 109",
                image: "CHAPTER 1/Aquarium 1-111.gif",
                alt: "Comic Image 109",
                text: ["Ella toma el arco de regreso, disparandole a la bestia en un parpadeo. Lo que causa que se distorsione su materia. Tus oídos son víctimas de un ruido agudo."]
            },
            {
                id: 110,
                title: "Introduction I - 110",
                image: "CHAPTER 1/Aquarium 1-112.png",
                alt: "Comic Image 110",
                text: ["(PARED EXPLOTAR)"]
            },
            {
                id: 111,
                title: "Introduction I - 111",
                image: "CHAPTER 1/Aquarium 1-113.png",
                alt: "Comic Image 111",
                text: ["Aura: Bien."]
            },
            {
                id: 112,
                title: "Introduction I - 112",
                image: "CHAPTER 1/Aquarium 1-114.gif",
                alt: "Comic Image 112",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Glitch: ¿No fue eso demasiado ruidoso? Ehm,,, ¿No habrán escuchado la explosión? ¡Se estarán acercando acá!<br>Glitch: Sabes, podría pedir ayuda a unas amigas, una es una bruja otra un pato pero son de confiar, s-sólo con marcarles desde aquí vendrían a ayudar..."]
            },
            {
                id: 113,
                title: "Introduction I - 113",
                image: "CHAPTER 1/Aquarium 1-115.png",
                alt: "Comic Image 113",
                text: ["(...)<br><br>Ah.<br><br>Se ha ido."]
            },
            {
                id: 114,
                title: "Introduction I - 114",
                image: "CHAPTER 1/Aquarium 1-116.gif",
                alt: "Comic Image 114",
                text: ["¡Espero que ese haya sido un flashback recreativo y significativo que definitivamente no te hizo sentir como un idiota! Ahh… claro que te partiría en dos si te viera, por portarte como un rarito intentando generar lazos de confianza con ella en su primera interacción real. ¡Nunca más!<br><br>Te sientes pesado. De nuevo, esa sensación de que han pasado más días de los que recuerdas con claridad. Detalles pequeños te atormentan y alimentan esa idea. Fuera de eso, te centras nuevamente en el bribón de Chiapas, quien por suerte había regresado a su pecera, así que tomas la oportunidad para volver a ingresar a tu hogar con rapidez."]
            },
            {
                id: 115,
                title: "Introduction I - 115",
                image: "CHAPTER 1/Aquarium 1-117.png",
                alt: "Comic Image 115",
                text: ["Antes de que puedas hacer eso, notas tu buzón lleno."]
            },
            {
                id: 116,
                title: "Introduction I - 116",
                image: "CHAPTER 1/Aquarium 1-118.png",
                alt: "Comic Image 116",
                text: ["Lo llevas a tu sala y lo lees con detenimiento. Estás inscrito a varias revistas singulares que se enfocan en tus gustos más recientes. Como se mencionó antes, siempre buscas algo nuevo que hacer. Pero tu investigación sobre lo que te gusta no tiene final; no, mientras más datos puedas adquirir de una obsesión específica, mejor. Una vez que te sumerges en un tema, es difícil que salgas de ahí. Ojalá te enfocaras de esa forma en las tareas en las que quieres enfocarte. Pero bueno… tú no controlas tus acciones ni el curso de estas; quién sabe si alguna vez lo hiciste.<br><br>Pero, ehem, lo que encuentras en tu correo es de tu interés acuático..."]
            },
            {
                id: 117,
                title: "Introduction I - 117",
                image: "CHAPTER 1/Aquarium 1-119.png",
                alt: "Comic Image 117",
                text: ["De tú interés en hongos, oh ese es muy bueno."]
            },
            {
                id: 118,
                title: "Introduction I - 118",
                image: "CHAPTER 1/Aquarium 1-120.png",
                alt: "Comic Image 118",
                text: ["(...)"]
            },
            {
                id: 119,
                title: "Introduction I - 119",
                image: "CHAPTER 1/Aquarium 1-121.png",
                alt: "Comic Image 119",
                text: ["Abres lo siguiente de inmediato. Resulta ser una carta de parte de Agera. Parece haber estado intentando contactarte por días desde su oficina, contándote sobre su trabajo y lo mucho que quisiera que los tres salieran juntos a una aventura.<br><br>Tú también lo deseas. Pero, al mismo tiempo, tu cabeza no te ha permitido acercarte demasiado.<br><br>No crees estar preparado para ese tipo de interacciones emocionales<br><br>Ya ves cómo lo intentaste con tu vecina, y no resultó para nada bien.<br><br>"]
            },
            {
                id: 120,
                title: "Introduction I - 120",
                image: "CHAPTER 1/Aquarium 1-122.png",
                alt: "Comic Image 120",
                text: ["Díalogo<br><br><figcaption style=text-align:left>(Vaya idiota)<br>Glitch: Tú no te metas. <br>Glitch: ¿Puedes dejarme solo?<br>(No creo que quieras estarlo, más bien, sé que no)<br>Glitch: Estoy ocupado ahora mismo.<br>(¿Ocupado evitandome?)<br>Glitch: Eso mismo.<br>(Añade ocupado evitandote)<br>Glitch: …<br>(Eh, cambia esa cara.)<br>(Sabes que sólo estoy para aclarar tu mente)<br>(Soy tu único aliado, Glitch)<br>Glitch: Claro."]
            },
            {
                id: 121,
                title: "Introduction I - 121",
                image: "CHAPTER 1/Aquarium 1-123.gif",
                alt: "Comic Image 121",
                text: ["(...)"]
            },
            {
                id: 122,
                title: "Introduction I - 122",
                image: "CHAPTER 1/Aquarium 1-124.gif",
                alt: "Comic Image 122",
                text: ["INTRODUCCIÓN PARTE 1 - INTERLUDIO.<br><br>Ya tuviste suficiente de ese sujeto malagradecido. Has estado cuidándolo desde hace días, y te mereces un breve descanso.<br><br>Qué mejor descanso que admirar tu fondo de pantalla (el cual sigue siendo bastante disfrutable, a pesar de la enorme ventana del título de esta parte del cómic). Una belleza digna de admiración… ojalá pudieras saltar a la pantalla y abrazarla, sientes que eso sería lo único capaz de curar a tu frío corazón.<br><br>Pero no hay mucho tiempo para distraerte de tu misión. Tienes cálculos y estrategias que armar. Unas muy importantes."]
            },
            {
                id: 123,
                title: "Introduction I - 123",
                image: "CHAPTER 1/Aquarium 1-125.gif",
                alt: "Comic Image 123",
                text: [""]
            },
            {
                id: 124,
                title: "Introduction I - 124",
                image: "CHAPTER 1/Aquarium 1-126.png",
                alt: "Comic Image 124",
                text: ["Ugh, esta cosa siempre toma su tiempo en cargar. ¿Eh?<br><br>Que chatarra de porquería.<br><br>Aprovechas para respirar el aire fresco alrededor.<br><br>¿No es hermoso estar vivo? Por supuesto. Claro que lo es. Y seguirás vivo por un largo tiempo más."]
            },
            {
                id: 125,
                title: "Introduction I - 125",
                image: "CHAPTER 1/Aquarium 1-127.png",
                alt: "Comic Image 125",
                text: ["Oh, perfecto.<br><br>La partida parece ir bastante bien"]
            },
            {
                id: 126,
                title: "Introduction I - 126",
                image: "CHAPTER 1/Aquarium 1-128.gif",
                alt: "Comic Image 126",
                text: ["(...)<br><br>¿Qué regla estúpida se inventó éste ahora?<br><br>Sigh.<br><br>De verdad que nunca podrías seguirle la pista.<br><br>Un juego incluso tan ìmbecil como sus creadores, cargado de reglas invisibles y a conveniencia. ¿Para qué tenerlos aquí en primer lugar? Casí como si fueran sólo jueguetes.<br><br>Bueno, esa es la realidad. Pero estás dispuesto a aprender."]
            },
            {
                id: 127,
                title: "Introduction I - 127",
                image: "CHAPTER 1/Aquarium 1-129.gif",
                alt: "Comic Image 127",
                text: ["Estás ansioso por unirte al juego.<br><br>FIN DEL INTERLUDIO."]
            },
            {
                id: 128,
                title: "Introduction I - 128",
                image: "CHAPTER 1/Aquarium 1-130.png",
                alt: "Comic Image 128",
                text: ["¡BIENVENIDO A TU NUEVA AVENTURA!<br><br>¿¿Emocionado?? Ahora eres esta épica ave emplumada de aquí, ¿tú misión, te preguntarás?"]
            },
            {
                id: 129,
                title: "Introduction I - 129",
                image: "CHAPTER 1/Aquarium 1-131.png",
                alt: "Comic Image 129",
                text: ["¡Volar!<br><br>Claro, eres un ave. ¿Por qué tu misión sería volar, y más que nada, volar siendo disparada de un cañón?"]
            },
            {
                id: 130,
                title: "Introduction I - 130",
                image: "CHAPTER 1/Aquarium 1-132.gif",
                alt: "Comic Image 130", 
                text: ["Bueno, lo segundo se debe a ¡Improvisación!"]     
            },
            {
                id: 131,
                title: "Introduction I - 131",
                image: "CHAPTER 1/Aquarium 1-133.png",
                alt: "Comic Image 131",
                text: ["Lo primero... Pues situación de tensión entre las brujas y las aves ha llegado al punto exagerado dónde están baneadas de forma permanente del castillo principal.<br><br>Por lo que con un hechizo simple alrededor de los muros, no se les es posible volar dentro de ninguna forma.<br>¡Pero todo en esta vida tiene solución!"]
            },
            {
                id: 132,
                title: "Introduction I - 132",
                image: "CHAPTER 1/Aquarium 1-134.png",
                alt: "Comic Image 132",
                text: ["NYOOOOOOOOOM"]
            },
            {
                id: 133,
                title: "Introduction I - 133",
                image: "CHAPTER 1/Aquarium 1-136.gif",
                alt: "Comic Image 133",
                text: ["THUUUMP!!!"]
            },
            {
                id: 134,
                title: "Introduction I - 134",
                image: "CHAPTER 1/Aquarium 1-137.png",
                alt: "Comic Image 134",
                text: ["¡OH! Parece que has aplastado a tu amigo desaparecido de forma hiper mega accidental. Esperas que se encuentre bien después de tal impacto."]
            },
            {
                id: 135,
                title: "Introduction I - 135",
                image: "CHAPTER 1/Aquarium 1-138.gif",
                alt: "Comic Image 135",
                text: ["Su primera acción es quejarse y maldecir."]
            },
            {
                id: 136,
                title: "Introduction I - 136",
                image: "CHAPTER 1/Aquarium 1-139.gif",
                alt: "Comic Image 136",
                text: ["Su segunda acción es intentar quitarte de encima."]
            },
            {
                id: 137,
                title: "Introduction I - 137",
                image: "CHAPTER 1/Aquarium 1-140.gif",
                alt: "Comic Image 137",
                text: ["Su tercera acción es gritar por ayuda- ¡¡NO!!"]
            },
            {
                id: 138,
                title: "Introduction I - 138",
                image: "CHAPTER 1/Aquarium 1-141.png",
                alt: "Comic Image 138",
                text: ["¡Mira Glitch! ¡Mira! Le ayudas a levantarse y anuncias tu presencia. Todo está bien y eres tú, ¡su amistad!<br><br>No entiendes por qué su expresión de confusión no ha cambiado si confirmaste tu identidad…"]
            },
            {
                id: 139,
                title: "Introduction I - 139",
                image: "CHAPTER 1/Aquarium 1-142.gif",
                alt: "Comic Image 139",
                text: ["¡Abrazooo!"]
            },
            {
                id: 140,
                title: "Introduction I - 140",
                image: "CHAPTER 1/Aquarium 1-143.png",
                alt: "Comic Image 140",
                text: ["(...)"]
            },
            {
                id: 141,
                title: "Introduction I - 141",
                image: "CHAPTER 1/Aquarium 1-144.gif",
                alt: "Comic Image 141",
                text: ["Maple: ¡Hooola, Agera!"]
            },
            {
                id: 142,
                title: "Introduction I - 142",
                image: "CHAPTER 1/Aquarium 1-145.png",
                alt: "Comic Image 142",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Agera: Aún no he salido de mi turno… ¿Por qué no me avisaron?<br>Maple: ¡Sólo venia a visitar como siempre! ¿No te alegras que Glitch esté vivo?"]
            },
            {
                id: 143,
                title: "Introduction I - 143",
                image: "CHAPTER 1/Aquarium 1-146.png",
                alt: "Comic Image 143",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Agera: Pues claro que si. Glicho. ¿Dónde habías estado?<br>Glitch: Heheh… un poco aquí. Un poco allá.<br>Maple: Pudiste haber estado un poco en el bar-<br>Agera: SH- Maple!<br>Glitch: Está bien, tiene razón. Siento mi imprudencia con eso… No quería meterlas en problemas.<br>Agera: Lo importante es que estás bien. ¿Los has visto? ¿A los monstruos?<br>Glitch: Oh- pues… Si. Lamentablemente.<br>Agera: Woah. ¿C-Cómo escapaste?<br>Glitch: -SIIIGHH-...<br>Maple: Seguramente les dió su merecido. ¿Ves Agera? Que te dije yo. Que no les habían trancado los golpes necesarios. <br>Maple: Eso segurito lo aprendió de mi. ¿A qué siiii?<br>Glitch: Yo… No recuerdo bien que pasó. Ni hace cuántos días fué. <br>Glitch: Lo lamento.<br>Agera: No no, no hay de qué. Iré a seguir las clases, NO salgan de esta torre en lo que vuelvo. ¿Entendido?<br>Maple: Roger that!"]
            },
            {
                id: 144,
                title: "Introduction I - 144",
                image: "CHAPTER 1/Aquarium 1-147.gif",
                alt: "Comic Image 144",
                text: ["Agera hizo una expresión divertida, antes de que decidiera salirse del cuarto. ¿Por qué habrá sido? :P<br><br>Vaya que olía apestoso al otro lado de la habitación, un sentimiento de miseria que lograba intoxicar los alrededores. Te preguntas ¿Qué podrías hacer por esta alma en pena?"]
            },
            {
                id: 145,
                title: "Introduction I - 145",
                image: "CHAPTER 1/Aquarium 1-148.png",
                alt: "Comic Image 145",
                text: ["(Hold)"]
            },
            {
                id: 146,
                title: "Introduction I - 146",
                image: "CHAPTER 1/Aquarium 1-149.gif",
                alt: "Comic Image 146",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Maple: Hablemos de nuestros sentimientos.<br>Glitch: . . . Uh.<br>Maple: O, en cambio. Vayámonos de aquí<br>Maple: Conozco un puesto de varitas de pescado. ¿No se te hace apetitoso?<br>Glitch: Vamos."]
            },
            {
                id: 147,
                title: "Introduction I - 147",
                image: "CHAPTER 1/Aquarium 1-150.gif",
                alt: "Comic Image 147",
                text: ["Tú y tu amigo escapan por la ventana, ninguna consecuencia posterior ocurrirá por este acto."]
            },
            {
                id: 148,
                title: "Introduction I - 148",
                image: "CHAPTER 1/Aquarium 1-151.png",
                alt: "Comic Image 148",
                text: ["(Con Agera)"]
            },
            {
                id: 149,
                title: "Introduction I - 149",
                image: "CHAPTER 1/Aquarium 1-152.gif",
                alt: "Comic Image 149",
                text: [""]
            },
            {
                id: 150,
                title: "Introduction I - 150",
                image: "CHAPTER 1/Aquarium 1-153.png",
                alt: "Comic Image 150",
                text: ["Siendo esta bruja, te ves rodeado de un cansancio abrumador y una presión inmensa.<br><br>"]
            },
            {
                id: 151,
                title: "Introduction I - 151",
                image: "CHAPTER 1/Aquarium 1-154.png",
                alt: "Comic Image 151",
                text: ["Pero tomas fuerza para hacer un experimento más, no puedes rendirte, mucho menos ahora."]
            },
            {
                id: 152,
                title: "Introduction I - 152",
                image: "CHAPTER 1/Aquarium 1-155.png",
                alt: "Comic Image 152",
                text: [""]
            },
            {
                id: 153,
                title: "Introduction I - 153",
                image: "CHAPTER 1/Aquarium 1-156.gif",
                alt: "Comic Image 153",
                text: ["(Pulverizar)"]
            },
            {
                id: 154,
                title: "Introduction I - 154",
                image: "CHAPTER 1/Aquarium 1-157.gif",
                alt: "Comic Image 154",
                text: ["Aún al ser eliminados por el arco mágino y parecer que no quedén restos. Con el pasar del tiempo las criaturas se regeneran, y no solamente regeneración, sino que se multiplican. Como si se alimentaran del propio hecho trágico de su muerte para crear más de ellos."]
            },
            {
                id: 155,
                title: "Introduction I - 155",
                image: "CHAPTER 1/Aquarium 1-158.png",
                alt: "Comic Image 155",
                text: ["Una completa pesadilla con la que lidiar."]
            },
            {
                id: 155,
                title: "Introduction I - 155",
                image: "CHAPTER 1/Aquarium 1-159.png",
                alt: "Comic Image 155",
                text: ["(Sigh)<br><br>Agera: Vaya basura de segunda oportunidad<br><br>Agera: Les fallé."]
            },
            {
                id: 156,
                title: "Introduction I - 156",
                image: "CHAPTER 1/Aquarium 1-160.png",
                alt: "Comic Image 156",
                text: ["(Mientras tanto con éstos dos)<br><br>¡El puesto está justo ahí! Debieron ser rápidos para evitar a las brujas de mayor rango, pero valía la pena, eran las más sabrosas varitas de pescado de todo el reino. Una marca bastante popular.<br><br>No paras de comentarle a tu amigo sobre tus experiencias en éste puesto, y lo agradable y amable que es la dueña. Definitivamente un lugar al que visitas una y otra vez cada vez que estás pasando por un momento difícil."]
            },
            {
                id: 157,
                title: "Introduction I - 157",
                image: "CHAPTER 1/Aquarium 1-161.gif",
                alt: "Comic Image 157",
                text: ["¿Uh?<br><br>¿UUUHHH?<br><br>Parecían no sólo haber despedido al dueño del puesto, una golondrina, ¡sino que también se habían apropiado de su negocio! Claro, debiste habértelo imaginado. Pero aún así te parecía una locura, ¡¡¡una injusticia!!!<br><br>¡Ésto tendría que resolverse aquí y ahora!"]
            },
            {
                id: 158,
                title: "Introduction I - 158",
                image: "CHAPTER 1/Aquarium 1-162.gif",
                alt: "Comic Image 158",
                text: [""]
            },
            
            {
                id: 159,
                title: "Introduction I - 159",
                image: "CHAPTER 1/Aquarium 1-163.gif",
                alt: "Comic Image 159",
                text: [""]
            },
            
            {
                id: 160,
                title: "Introduction I - 160",
                image: "CHAPTER 1/Aquarium 1-164.gif",
                alt: "Comic Image 160",
                text: ["Vas muy bien."]
            },
            
            {
                id: 161,
                title: "Introduction I - 161",
                image: "CHAPTER 1/Aquarium 1-165.gif",
                alt: "Comic Image 161",
                text: ["(...)<br><br>Uh."]
            },
            
            {
                id: 162,
                title: "Introduction I - 162",
                image: "CHAPTER 1/Aquarium 1-166.png",
                alt: "Comic Image 162",
                text: ["(Glitch: ¿Y yo qué hice?)"]
            },
            

            {
                id: 163,
                title: "Introduction I - 163",
                image: "CHAPTER 1/Aquarium 1-167.png",
                alt: "Comic Image 163",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Magnolia: Maple.<br>Maple: <br>Magnolia: ¿Y tú tía?<br>Maple: En casa<br>Magnolia: Me refiero a cómo está.<br>Maple: ¿Tú qué crees?<br>Magnolia: Tengo una idea. Pero pensé que sería más cortés preguntar antes que asumir. Algo que tal vez ella debería aprender.<br>Maple: (Alzar hombros)<br>Magnolia: Sigh<br>Glitch: ¿Ha considerado colocar alarmas contra incendios?<br>Magnolia: ¿Eso se debe a…?<br>Glitch: Hay fuego saliendo de esa planta."]
            },
            {
                id: 164,
                title: "Introduction I - 164",
                image: "CHAPTER 1/Aquarium 1-168.gif",
                alt: "Comic Image 164",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Magnolia: Este castillo se mueve por las emociones de su creador, sólo revela lo malo que es tener aves cerca de aquí si todas van a tener esa actitud.<br>Magnolia: Me retiraré por el momento, mientras reflexionarán aquí unas horas."]
            },
            
            {
                id: 165,
                title: "Introduction I - 165",
                image: "CHAPTER 1/Aquarium 1-169.gif",
                alt: "Comic Image 165",
                text: [""]
            },
            {
                id: 166,
                title: "Introduction I - 166",
                image: "CHAPTER 1/Aquarium 1-170.gif",
                alt: "Comic Image 166",
                text: ["Corres a la puerta para abrirla tras ella. Pero parece haber bloqueado toda salida con magia.<br><br> ¡¡Pero no terminaste tu asunto con las varitas de pescado!! ¡¡Inaudito!!"]
            },
            {
                id: 167,
                title: "Introduction I - 167",
                image: "CHAPTER 1/Aquarium 1-171.png",
                alt: "Comic Image 167",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Maple: Ohh, ¡lo siento!!<br>Glitch: Está bien, he estado encerrado en peores lugares.<br>Maple: Ni siquiera pudiste probar las varitas de pescado…<br>Glitch: Está bien, puede ser luego. No creo que el vendedor esté muerto.<br>Maple:<br>Glitch:<br>Maple:<br>Glitch: o…<br>Maple: AGHHH!!<br>Maple: ¡El mundo supone ponerme desafios emocionantes, no esto!"]
            },
            {
                id: 168,
                title: "Introduction I - 168",
                image: "CHAPTER 1/Aquarium 1-172.png",
                alt: "Comic Image 168",
                text: ["Díalogo<br><br><figcaption style=text-align:left>Glitch: Está bien Maple, podríamos leer un libro…<br>Maple: OH- (Sonreir)<br>Maple: Pero hazles vocecitas a los personajes cuando lo leas.<br>Glitch: Sólo hay libros de herbologia…<br>Maple: ¿Y?<br>(Maple agarra un libro)<br>Maple: Cada planta puede tener una voz diferente al ser descritas.<br>Glitch: …<br>Glitch: Claro."]
            },
            {
                id: 169,
                title: "Introduction I - 169",
                image: "CHAPTER 1/baka.png",
                alt: "Comic Image 169",
                text: ["To be continued (really soon tbh)<br><br>Hola estoy muriendo gracias por leer bye"]
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
                video: "fUNNY/medusa.mp4",
                hasVideo: true,
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
let preloadedImages = new Map(); 

function preloadMultiplePages() {
    const currentChapter = chapters[currentChapterIndex];
    const pagesToPreload = 15;
    
    for (let i = -pagesToPreload; i <= pagesToPreload; i++) {
        const targetPageIndex = currentPageIndex + i;
        
        // Verificar que la página existe
        if (targetPageIndex >= 0 && targetPageIndex < currentChapter.pages.length) {
            const targetPage = currentChapter.pages[targetPageIndex];
            
            if (targetPage.image && !targetPage.video) {
                if (!preloadedImages.has(targetPage.image)) {
                    const img = new Image();
                    img.src = targetPage.image;
                    preloadedImages.set(targetPage.image, img);
                }
            }
        }
    }
    
    if (currentChapterIndex < chapters.length - 1) {
        const nextChapter = chapters[currentChapterIndex + 1];
        if (nextChapter.pages.length > 0) {
            const firstPage = nextChapter.pages[0];
            if (firstPage.image && !firstPage.video && !preloadedImages.has(firstPage.image)) {
                const img = new Image();
                img.src = firstPage.image;
                preloadedImages.set(firstPage.image, img);
            }
        }
    }
}

function preloadChapter(chapterIndex) {
    if (chapterIndex >= 0 && chapterIndex < chapters.length) {
        const chapter = chapters[chapterIndex];
        
        chapter.pages.forEach((page, index) => {
            if (page.image && !page.video && !preloadedImages.has(page.image)) {
                const img = new Image();
                img.src = page.image;
                preloadedImages.set(page.image, img);
            }
        });
    }
}

function showLoader() {
    let loader = document.getElementById('comic-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'comic-loader';
        loader.className = 'comic-loader';
        loader.innerHTML = '<div class="loader-spinner"></div><p>Cargando...</p>';
        document.querySelector('.comic-panel').appendChild(loader);
    }
    loader.style.display = 'flex';
}

function hideLoader() {
    const loader = document.getElementById('comic-loader');
    if (loader) {
        loader.style.display = 'none';
    }
}

function renderCurrentPage() {
    const chapter = chapters[currentChapterIndex];
    const page = chapter.pages[currentPageIndex];
    
    const comicImg = document.getElementById("comic-img");
    const comicVideo = document.getElementById("comic-video");
    const comicText = document.getElementById("comic-text");
    const comicDialog = document.getElementById("comic-dialog");
    const pageTitle = document.getElementById("page-title"); 
    const expandBtn = document.getElementById("expand-btn");
    const dialogBox = document.querySelector(".dialog-box");
    
    comicImg.style.display = 'none';
    comicVideo.style.display = 'none';
    
    showLoader();
    
    if (pageTitle) {
        pageTitle.textContent = page.title;
    }
    
    const preloadedImage = preloadedImages.get(page.image);
    
    if (preloadedImage && preloadedImage.complete) {
        comicImg.src = page.image;
        comicImg.style.display = 'block';
        hideLoader();
    } else {
        comicImg.onload = function() {
            comicImg.style.display = 'block';
            hideLoader();
        };
        
        comicImg.onerror = function() {
            hideLoader();
            comicImg.alt = "Error cargando imagen";
            comicImg.style.display = 'block';
        };
        
        comicImg.src = page.image;
    }
    
    comicImg.alt = page.alt;
    
    if (page.video) {
        comicImg.style.display = 'none';
        comicVideo.style.display = 'block';
        comicVideo.src = page.video;
        comicVideo.poster = page.image;

        comicVideo.loop = true;
        comicVideo.muted = false;
        comicVideo.playsInline = true;

        const playPromise = comicVideo.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video playing in loop');
                hideLoader();
            }).catch(error => {
                console.log('Auto-play prevented, showing controls');
                comicVideo.controls = true;
                hideLoader();
            });
        }
    } else {
        if (!comicVideo.paused) {
            comicVideo.pause();
        }
        comicVideo.currentTime = 0;
        comicVideo.style.display = 'none';
    }
    
    comicText.innerHTML = page.text;
    document.title = page.title;
    
const hasText = page.text && page.text.length > 0;
    
    if (hasText) {
        comicText.style.display = 'block';
    } else {
        comicText.style.display = 'none';
    }

const hasDialog = page.dialog && page.dialog.length > 0;
    
    if (hasDialog) {
        // Si hay diálogo
        comicDialog.innerHTML = page.dialog;
        expandBtn.style.display = 'block';
        dialogBox.style.display = 'block';
        dialogBox.classList.remove('expanded');
        expandBtn.textContent = 'Abrir Conversación';
    } else {
        // Si no hay diálogo
        comicDialog.innerHTML = '';
        expandBtn.style.display = 'none';
        dialogBox.style.display = 'none';
    }
    
    setTimeout(preloadMultiplePages, 100);
    
    updateNavigationButtons();
}

document.getElementById('expand-btn').addEventListener('click', function() {
    const dialogBox = document.querySelector('.dialog-box');
    dialogBox.classList.toggle('expanded');
            
    // Cambiar el texto del botón
    if (dialogBox.classList.contains('expanded')) {
        this.textContent = 'Cerrar';
    } else {
        this.textContent = 'Abrir Conversación';
    }
});

function nextPage() {
    const currentChapter = chapters[currentChapterIndex];
    
    if (currentPageIndex < currentChapter.pages.length - 1) {
        currentPageIndex++;
    } else if (currentChapterIndex < chapters.length - 1) {
        currentChapterIndex++;
        currentPageIndex = 0;
        preloadedImages.clear();
    }
    
    renderCurrentPage();
    saveProgress();
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
    } else if (currentChapterIndex > 0) {
        currentChapterIndex--;
        currentPageIndex = chapters[currentChapterIndex].pages.length - 1;
        preloadedImages.clear();
    }
    renderCurrentPage();
    saveProgress();
}

function goToChapter(chapterIndex) {
    if (chapterIndex >= 0 && chapterIndex < chapters.length) {
        currentChapterIndex = chapterIndex;
        currentPageIndex = 0;
        preloadedImages.clear();
        renderCurrentPage();
        saveProgress();
    }
}

function nextChapter() {
    if (currentChapterIndex < chapters.length - 1) {
        currentChapterIndex++;
        currentPageIndex = 0;
        preloadedImages.clear();
        renderCurrentPage();
        saveProgress();
    }
}

function prevChapter() {
    if (currentChapterIndex > 0) {
        currentChapterIndex--;
        currentPageIndex = 0;
        preloadedImages.clear();
        renderCurrentPage();
        saveProgress();
    }
}

function updateNavigationButtons() {
    const currentChapter = chapters[currentChapterIndex];
    const prevButtons = document.querySelectorAll('.fa-arrow-left');
    const nextButtons = document.querySelectorAll('.fa-arrow-right');
    
    const hasPrevPage = currentPageIndex > 0 || currentChapterIndex > 0;
    const hasNextPage = currentPageIndex < currentChapter.pages.length - 1 || 
                       currentChapterIndex < chapters.length - 1;
    
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
            if (progress.chapterIndex !== undefined && 
                progress.pageIndex !== undefined &&
                progress.chapterIndex < chapters.length && 
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
    preloadedImages.clear();
    renderCurrentPage();
}

function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
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
                preloadedImages.clear();
                renderCurrentPage();
                break;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    
    renderCurrentPage();
    
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
    
    setupKeyboardNavigation();
    
    setTimeout(() => {
        if (currentChapterIndex < chapters.length - 1) {
            preloadChapter(currentChapterIndex + 1);
        }
    }, 2000);
    
    window.addEventListener('beforeunload', saveProgress);
    
    if (currentChapterIndex > 0) {
        setTimeout(() => {
            preloadChapter(currentChapterIndex - 1);
        }, 3000);
    }
});

function preloadAllChapters() {
    chapters.forEach((chapter, index) => {
        setTimeout(() => {
            preloadChapter(index);
        }, index * 1000); 
    });
}

function clearImageCache() {
    preloadedImages.clear();
    console.log('Cache de imágenes limpiado');
}

