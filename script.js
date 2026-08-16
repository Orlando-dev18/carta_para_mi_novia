/* =========================
   ANIMACIONES GENERALES
========================= */

const elements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                }

            });

        },

        {
            threshold: 0.2
        }

    );


elements.forEach((element) => {

    observer.observe(element);

});



/* =========================
   100 COSAS QUE ME GUSTAN
========================= */

const razones = [

    "Tu sonrisa.",

    "La forma en que hablas.",

    "Tu manera de reír.",

    "La forma en que te emocionas cuando algo te gusta.",

    "Cómo puedes hacer especial un momento sencillo.",

    "Tu forma de ser.",

    "La manera en que miras las cosas.",

    "Cómo haces que una conversación se sienta diferente.",

    "Tu sentido del humor.",

    "La forma en que dices ciertas palabras.",

    "Que seas tú misma.",

    "La manera en que te emocionas por las cosas pequeñas.",

    "Tu forma de escuchar.",

    "La tranquilidad que transmites.",

    "Tu manera de sorprenderme.",

    "Cómo haces que el tiempo pase rápido.",

    "La forma en que sonríes cuando estás feliz.",

    "Tu personalidad.",

    "Cómo puedes hacerme sonreír sin intentarlo.",

    "La forma en que ves el mundo.",

    "Tus ocurrencias.",

    "Tu manera de expresarte.",

    "Cómo te preocupas por las personas que quieres.",

    "Tu forma de contar historias.",

    "La manera en que te emocionas.",

    "Cómo conviertes algo común en algo memorable.",

    "Tu espontaneidad.",

    "Tu paciencia.",

    "La manera en que haces sentir cómodos a los demás.",

    "Tus pequeñas manías.",

    "La forma en que reaccionas cuando algo te sorprende.",

    "Tu manera de pensar.",

    "Cómo siempre tienes algo interesante que compartirme.",

    "Tu risa.",

    "La forma en que te concentras.",

    "Tus gestos.",

    "La manera en que haces las cosas.",

    "Cómo puedes alegrar un día normal.",

    "Tu sinceridad.",

    "La forma en que expresas lo que sientes.",

    "Tus detalles.",

    "Cómo haces que una charla sencilla se vuelva especial.",

    "Tu forma de ver los problemas.",

    "La manera en que persigues lo que quieres.",

    "Tu curiosidad.",

    "Cómo te emocionas al hablar de tus intereses.",

    "Tu forma de aprender.",

    "La manera en que ayudas a los demás.",

    "Tu confianza.",

    "Cómo eres cuando estás feliz.",

    "Tu forma de celebrar las cosas.",

    "La manera en que haces que otros sonrían.",

    "Tus pequeñas ocurrencias.",

    "La forma en que recuerdas ciertos detalles.",

    "Cómo puedes hacerme olvidar el estrés.",

    "Tu forma de reaccionar ante las sorpresas.",

    "La manera en que expresas cariño.",

    "Tu creatividad.",

    "Cómo encuentras belleza en cosas sencillas.",

    "Tu manera de hablar de tus sueños.",

    "La forma en que te esfuerzas.",

    "Tu determinación.",

    "Cómo nunca dejas de ser tú.",

    "Tu forma de mirar cuando estás pensando.",

    "La manera en que te ríes de tus propias ocurrencias.",

    "Tu forma de hacer preguntas.",

    "Cómo puedes convertir una tarde cualquiera en un buen recuerdo.",

    "Tu espontaneidad.",

    "La manera en que celebras pequeños logros.",

    "Tu forma de escuchar música.",

    "Cómo disfrutas las cosas que te gustan.",

    "Tu manera de expresarte.",

    "La forma en que cuentas algo que te emociona.",

    "Cómo haces que una conversación nunca se sienta aburrida.",

    "Tu forma de ser diferente.",

    "La manera en que tratas a las personas.",

    "Tu forma de cuidar los detalles.",

    "Cómo haces que los momentos simples tengan significado.",

    "Tu manera de sonreír cuando intentas no hacerlo.",

    "Tu forma de reaccionar cuando estás nerviosa.",

    "Cómo te emocionas por cosas pequeñas.",

    "Tu manera de ver lo bueno en las personas.",

    "La forma en que haces sentir importante a alguien.",

    "Tu manera de disfrutar el presente.",

    "Cómo puedes hacer que una conversación dure horas.",

    "Tu forma de ser auténtica.",

    "La manera en que expresas tus ideas.",

    "Cómo haces que sea fácil querer conocerte más.",

    "Tu forma de sorprender.",

    "La manera en que haces que los recuerdos sean especiales.",

    "Tu personalidad única.",

    "Cómo haces que quiera saber más de ti.",

    "La forma en que conviertes momentos pequeños en recuerdos grandes.",

    "Tu manera de hacerme sonreír.",

    "Cómo simplemente siendo tú puedes alegrar un momento.",

    "La persona que eres.",

    "Tu linda manera de atraerme",

    "Simplemente todo lo que te hace ser tu",

    "Todo lo que todavía me falta conocer de ti.",

    "Y finalmente... simplemente tú. ❤️"

];



/* =========================
   CREAR TARJETAS
========================= */

const container =
    document.getElementById(
        "reasons-container"
    );


razones.forEach(
    (razon, index) => {

        const card =
            document.createElement("div");

        card.classList.add("reason");


        card.innerHTML = `

            <div class="reason-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="reason-text">
                ${razon}
            </div>

        `;


        container.appendChild(card);

    }
);



/* =========================
   ANIMAR LAS RAZONES
========================= */

const reasonObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


const reasonCards =
    document.querySelectorAll(
        ".reason"
    );


reasonCards.forEach(
    (card) => {

        reasonObserver.observe(card);

    }
);



/* =========================
   CORAZONES FLOTANTES
========================= */

const heartsContainer =
    document.querySelector(
        ".hearts"
    );


function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add(
        "heart-floating"
    );


    heart.innerHTML = "♥";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";


    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        10000
    );

}


setInterval(
    createHeart,
    700
);
