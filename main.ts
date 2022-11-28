/* NIVEAU 1 */

let boule = document.querySelector('#boule') as HTMLDivElement ;

const min = 3;
const max = 20;

let position = Math.floor(Math.random() * (max - min)) + min; 

function haut() {
    boule.style.transform += `translate(${position}px, -${position}px)`;
};

function droite() {
    boule.style.transform += `translate(${position}px, -${position}px)`;
};

function gauche() {
    boule.style.transform += `translate(-${position}px, ${position}px)`;
};

function bas() {
    boule.style.transform += `translate(-${position}px, ${position}px)`;
};





setInterval(() => {
    const date = new Date();
    const heure = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    document.getElementById('time').innerText=
        [
            heure < 10 ? '0' + heure : heure,
            minutes < 10 ? '0' + minutes : minutes,
            seconds < 10 ? '0' + seconds : seconds,
    ].join(':');
}, 1000);

















/* NIVEAU 1 */
// Rien qui bouge



/* NIVEAU 2 */
// la boule va tourner sur elle même




/* NIVEAU 3 */
// la boule va tourner sur elle même et le finish de gauche à droite



/* Niveau 4 */
// la boule va tourner sur elle même et le finish de gauche à droite et la box qui tournera de gauche à droite



/* Niveau 5 */
// la boule va tourner sur elle même et le finish de gauche à droite et la box qui tournera de gauche à droite et de bas en haut



/* NIVEAU 6 */
// la boule va tourner sur elle même et le finish qui feras le tour de la box et la box qui tournera sur elle même en rond