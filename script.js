"use strict";

/* =========================================================
   CASE №18
========================================================= */

const STORAGE_KEY = "case18_qr_progress";
const TOTAL_STAGES = 18;


/* =========================================================
   STAGES
========================================================= */


const stages = [

    {
        id: 1,
        title: "Начало расследования",
        location: "📍 ДОМА",
        label: "CASE / 01",
        text: `
            Добро пожаловать в
            <strong>Дело №18</strong>.
            Сегодня тебе предстоит пройти
            серию секретных испытаний.
        `,
        hint: `
            Первое доказательство находится
            там, где начинается твой день.
            <br><br>
            Иногда самое важное лежит
            там, куда редко заглядывают.
            <br><br>
            <strong>Ищи под своей кроватью.</strong>
        `
    },

    {
        id: 2,
        title: "Первый след",
        location: "📍 ТВОЯ КОМНАТА",
        label: "CASE / 02",
        text: `
            Отлично.
            Первый след найден.
            Но расследование только начинается.
        `,
        hint: `
            Следующий QR спрятан там,
            где хранятся твои личные вещи,
            маленькие секреты и всё важное.
            <br><br>
            <strong>Проверь свой стол.</strong>
        `
    },

    {
        id: 3,
        title: "Скрытое сообщение",
        location: "📍 ТВОЯ КОМНАТА",
        label: "CASE / 03",
        text: `
            Кто-то оставил для тебя
            следующее сообщение.
            Найди его раньше,
            чем система закроет доступ.
        `,
        hint: `
            Иногда следующий след
            находится среди вещей,
            которые мы выбираем каждый день.
            <br><br>
            <strong>Загляни в свой шкаф.</strong>
        `
    },

    {
        id: 4,
        title: "Секретный архив",
        location: "📍 ТВОЯ КОМНАТА",
        label: "CASE / 04",
        text: `
            Доступ к архиву получен.
            Следующий уровень требует
            внимательности.
        `,
        hint: `
            Не нужно искать далеко.
            Следующий след находится
            совсем рядом с тобой.
            <br><br>
            <strong>Проверь свою тумбочку.</strong>
        `
    },

    {
        id: 5,
        title: "Семейный след",
        location: "📍 КУХНЯ",
        label: "CASE / 05",
        text: `
            Теперь расследование
            касается самых близких людей.
            Следующий код находится
            в месте, где собирается семья.
        `,
        hint: `
            На этот раз придётся
            посмотреть немного ниже.
            <br><br>
            <strong>Ищи QR под кухонным столом.</strong>
        `
    },

    {
        id: 6,
        title: "Последний домашний след",
        location: "📍 КОРИДОР",
        label: "CASE / 06",
        text: `
            Последний домашний след
            перед сменой локации.
            Дальше расследование
            выйдет за пределы дома.
        `,
        hint: `
            Иногда нужный предмет
            находится выше уровня глаз.
            <br><br>
            <strong>
                Проверь верхний шкаф в коридоре.
            </strong>
        `
    },

    {
        id: 7,
        title: "Новая локация",
        location: "📍 РАБОТА",
        label: "CASE / 07",
        text: `
            Локация расследования изменена.
            <br><br>
            Теперь тебе понадобится
            помощь человека, который
            знает магазин очень хорошо.
        `,
        hint: `
            Первый рабочий след
            уже находится у человека,
            который сегодня тоже
            участвует в расследовании.
            <br><br>
            <strong>
                Забери следующий QR
                у старшего продавца.
            </strong>
        `
    },

    {
        id: 8,
        title: "Повышение доступа",
        location: "📍 РАБОТА",
        label: "CASE / 08",
        text: `
            Отлично.
            Первый рабочий след получен.
            Но теперь уровень доступа
            становится выше.
        `,
        hint: `
            Следующий человек
            имеет немного больше полномочий.
            <br><br>
            <strong>
                Забери следующий QR у начальства.
            </strong>
        `
    },

    {
        id: 9,
        title: "Зона отдыха",
        location: "📍 РАБОТА",
        label: "CASE / 09",
        text: `
            Расследование продолжается.
            Кажется, следующий след
            находится там, где всегда
            можно немного отдохнуть.
        `,
        hint: `
            Следующий участник дела
            уже знает, что происходит.
            <br><br>
            <strong>
                Забери QR у бармена.
            </strong>
        `
    },

    {
        id: 10,
        title: "Протокол №10",
        location: "📍 РАБОТА",
        label: "CASE / 10",
        text: `
            Десятый протокол активирован.
            Ошибок быть не должно.
        `,
        hint: `
            Следующий след находится
            там, где каждый день
            проходят покупки.
            <br><br>
            <strong>
                Забери следующий QR у кассира.
            </strong>
        `
    },

    {
        id: 11,
        title: "Мясной след",
        location: "📍 РАБОТА",
        label: "CASE / 11",
        text: `
            След становится всё горячее.
            Ты добралась до отдела,
            где находится следующий
            участник расследования.
        `,
        hint: `
            Теперь тебе нужен человек,
            который отвечает за мясную
            и колбасную продукцию.
            <br><br>
            <strong>
                Забери следующий QR
                у сотрудника мясного отдела.
            </strong>
        `
    },

    {
        id: 12,
        title: "Последний рабочий след",
        location: "📍 РАБОТА",
        label: "CASE / 12",
        text: `
            Последний рабочий протокол.
            После него расследование
            снова вернётся домой.
        `,
        hint: `
            Остался ещё один человек,
            который знает об этом деле.
            <br><br>
            <strong>
                Забери следующий QR у помощника.
            </strong>
        `
    },

    {
        id: 13,
        title: "Возвращение домой",
        location: "📍 ДОМА",
        label: "CASE / 13",
        text: `
            Ты снова дома.
            <br><br>
            Но теперь расследование
            стало гораздо более личным.
        `,
        hint: `
            Первый след этой части
            уже ждёт тебя.
            <br><br>
            <strong>
                Посмотри прямо у входа в квартиру.
            </strong>
        `
    },

    {
        id: 14,
        title: "Звонок",
        location: "📍 ДОМА",
        label: "CASE / 14",
        text: `
            Дальше самостоятельно
            ты не справишься.
            <br><br>
            Для получения следующей
            инструкции нужен человек,
            которому ты можешь доверять.
        `,
        hint: `
            <strong>
                Позвони маме.
            </strong>
            <br><br>
            Она знает, что делать дальше.
            Внимательно выслушай её.
        `
    },

    {
        id: 15,
        title: "Секрет под звёздами",
        location: "📍 ДОМА",
        label: "CASE / 15",
        text: `
            Если мама отправила тебя
            в правильное место —
            значит, ты на верном пути.
        `,
        hint: `
            Отправляйся в туалет.
            <br><br>
            Но не спеши смотреть вокруг.
            На этот раз ответ находится
            гораздо выше.
            <br><br>
            <strong>
                Посмотри на потолок.
                Ищи там свои «звёзды». ⭐
            </strong>
        `
    },

    {
        id: 16,
        title: "Семейный архив",
        location: "📍 ДОМА",
        label: "CASE / 16",
        text: `
            До финала осталось
            совсем немного.
            <br><br>
            Следующий след спрятан
            среди вещей твоей семьи.
        `,
        hint: `
            Теперь загляни туда,
            где хранятся вещи родителей.
            <br><br>
            <strong>
                Ищи QR в родительском шкафу.
            </strong>
        `
    },

    {
        id: 17,
        title: "Последний след",
        location: "📍 ДОМА",
        label: "CASE / 17",
        text: `
            Это последний обычный
            этап расследования.
            <br><br>
            После него тебя ждёт
            кое-что особенное.
        `,
        hint: `
            Остался последний след.
            <br><br>
            Теперь отправляйся
            на территорию самого
            пушистого участника дела. 🐾
            <br><br>
            <strong>
                Ищи QR под домом твоего питомца.
            </strong>
        `
    },

    {
        id: 18,
        title: "Дело закрыто",
        location: "📍 ПРАЗДНИЧНЫЙ СТОЛ",
        label: "CASE / 18",
        text: `
            Все испытания пройдены.
            <br><br>
            Система подтверждает:
            расследование завершено.
        `,
        hint: ``
    }

];



/* =========================================================
   FINAL CLUES
========================================================= */

const clues = [
    "Сегодня",
    "тебе",
    "исполняется",
    "18 лет",
    "С днём рождения,",
    "сестрёнка! ❤️"
];

let collectedClues = [];


/* =========================================================
   STATE
========================================================= */

let state = {

    currentStage: 1,

    started: false,

    soundEnabled: true,

    finalStarted: false

};


/* =========================================================
   DOM
========================================================= */

const $ = id =>
    document.getElementById(id);

const startScreen = $("startScreen");
const gameScreen = $("gameScreen");
const scannerScreen = $("scannerScreen");
const accessScreen = $("accessScreen");
const secretFinalScreen = $("secretFinalScreen");
const stage18Screen = $("stage18Screen");
const finalScreen = $("finalScreen");

const startButton = $("startButton");
const continueButton = $("continueButton");
const scanButton = $("scanButton");
const closeScanner = $("closeScanner");
const restartButton = $("restartButton");
const resetGameButton = $("resetGameButton");
const soundButton = $("soundButton");
const startFinalButton = $("startFinalButton");

const stageCounter = $("stageCounter");
const progressPercent = $("progressPercent");
const progressFill = $("progressFill");
const progressBlocks = $("progressBlocks");

const stageLabel = $("stageLabel");
const stageLocation = $("stageLocation");
const stageTitle = $("stageTitle");
const stageContent = $("stageContent");
const stageHint = $("stageHint");

const scannerStatus = $("scannerStatus");

const errorToast = $("errorToast");
const errorText = $("errorText");

const cluesContainer = $("cluesContainer");
const assembledText = $("assembledText");
const agentTitle = $("agentTitle");


/* =========================================================
   AUDIO
========================================================= */

let audioContext = null;

function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    return audioContext;
}


function beep(
    frequency = 500,
    duration = .08,
    type = "sine",
    volume = .035
) {

    if (!state.soundEnabled) {
        return;
    }

    try {

        const ctx = getAudioContext();

        const oscillator =
            ctx.createOscillator();

        const gain =
            ctx.createGain();

        oscillator.type = type;

        oscillator.frequency.value =
            frequency;

        gain.gain.setValueAtTime(
            volume,
            ctx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            .001,
            ctx.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start();

        oscillator.stop(
            ctx.currentTime + duration
        );

    } catch (_) {}

}


function playSuccessSound() {

    beep(500, .08);

    setTimeout(
        () => beep(700, .08),
        100
    );

    setTimeout(
        () => beep(1000, .18),
        200
    );

}


function playErrorSound() {

    beep(
        150,
        .16,
        "sawtooth",
        .025
    );

}


/* =========================================================
   STORAGE
========================================================= */

function loadState() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {
            return;
        }

        const parsed =
            JSON.parse(saved);

        if (
            parsed &&
            typeof parsed === "object"
        ) {

            state = {
                ...state,
                ...parsed
            };

        }

    } catch (error) {

        console.warn(
            "Не удалось загрузить прогресс",
            error
        );

    }

}


function saveState() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

    } catch (error) {

        console.warn(
            "Не удалось сохранить прогресс",
            error
        );

    }

}


/* =========================================================
   SCREEN
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(element => {

            element.classList.remove(
                "active"
            );

        });

    if (screen) {

        screen.classList.add(
            "active"
        );

    }

}


/* =========================================================
   PARTICLES
========================================================= */

function createParticles() {

    const container = $("particles");

    if (!container) {
        return;
    }

    const count =
        window.innerWidth < 600
            ? 35
            : 65;

    container.innerHTML = "";

    for (
        let i = 0;
        i < count;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 18}s`;

        particle.style.animationDelay =
            `${-Math.random() * 20}s`;

        particle.style.opacity =
            `${.1 + Math.random() * .45}`;

        container.appendChild(
            particle
        );

    }

}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

    const completed =
        Math.max(
            0,
            state.currentStage - 1
        );

    const percent =
        Math.round(
            (completed / TOTAL_STAGES) * 100
        );

    progressPercent.textContent =
        `${percent}%`;

    progressFill.style.width =
        `${percent}%`;

    progressBlocks.innerHTML = "";

    for (
        let i = 1;
        i <= TOTAL_STAGES;
        i++
    ) {

        const block =
            document.createElement("span");

        if (i <= completed) {

            block.classList.add(
                "done"
            );

        }

        progressBlocks.appendChild(
            block
        );

    }

}


/* =========================================================
   RENDER STAGE
========================================================= */

function renderStage() {

    if (
        state.currentStage >= TOTAL_STAGES
    ) {

        showStage18();

        return;

    }

    const stage =
        stages[
            state.currentStage - 1
        ];

    if (!stage) {
        return;
    }

    showScreen(gameScreen);

    stageCounter.textContent =
        `${String(stage.id).padStart(2, "0")} / ${TOTAL_STAGES}`;

    stageLabel.textContent =
        stage.label;

    stageLocation.textContent =
        stage.location;

    stageTitle.textContent =
        stage.title;

    stageContent.innerHTML =
        stage.text;

    stageHint.innerHTML =
        stage.hint;

    renderProgress();

    animateStageCard();

}


/* =========================================================
   NEON TRANSITION
========================================================= */

function animateStageCard() {

    const card = $("stageCard");

    if (!card) {
        return;
    }

    card.classList.remove(
        "stage-transition"
    );

    void card.offsetWidth;

    card.classList.add(
        "stage-transition"
    );

}


/* =========================================================
   START
========================================================= */

function startGame() {

    state.started = true;

    saveState();

    renderStage();

    beep(600, .08);

}


function restoreGame() {

    if (
        state.started &&
        state.currentStage > 1
    ) {

        continueButton.classList.remove(
            "hidden"
        );

        startButton.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   SCANNER
========================================================= */

let html5QrCode = null;
let scannerRunning = false;
let scannerLocked = false;


async function openScanner() {

    showScreen(scannerScreen);

    scannerStatus.textContent =
        "ЗАПУСК КАМЕРЫ...";

    scannerLocked = false;

    if (
        typeof Html5Qrcode ===
        "undefined"
    ) {

        scannerStatus.textContent =
            "СКАНЕР НЕ ЗАГРУЖЕН";

        showError(
            "Не удалось загрузить QR-сканер."
        );

        return;

    }

    try {

        if (!html5QrCode) {

            html5QrCode =
                new Html5Qrcode(
                    "qr-reader"
                );

        }

        await html5QrCode.start(

            {
                facingMode: "environment"
            },

            {
                fps: 10,

                qrbox: {
                    width: 230,
                    height: 230
                },

                aspectRatio: 1
            },

            decodedText => {

                handleQR(
                    decodedText
                );

            },

            () => {}

        );

        scannerRunning = true;

        scannerStatus.textContent =
            "КАМЕРА АКТИВНА";

    } catch (error) {

        console.error(
            "QR scanner error:",
            error
        );

        scannerStatus.textContent =
            "КАМЕРА НЕДОСТУПНА";

        showError(
            "Разреши доступ к камере."
        );

    }

}


async function stopScanner() {

    if (
        html5QrCode &&
        scannerRunning
    ) {

        try {

            await html5QrCode.stop();

        } catch (_) {}

        scannerRunning = false;

    }

}


async function closeScannerView() {

    await stopScanner();

    showScreen(gameScreen);

}


/* =========================================================
   QR
========================================================= */

function normalizeQR(value) {

    return String(value)
        .trim()
        .toUpperCase()
        .replace(/\s+/g, "");

}


function expectedQR() {

    return `CASE18-${state.currentStage}`;

}


async function handleQR(decodedText) {

    if (scannerLocked) {
        return;
    }

    scannerLocked = true;

    const scanned =
        normalizeQR(decodedText);

    const expected =
        expectedQR();

    if (scanned !== expected) {

        playErrorSound();

        showError(
            "Этот QR-код не относится к текущему этапу."
        );

        scannerStatus.textContent =
            "НЕВЕРНЫЙ QR-КОД";

        setTimeout(() => {

            scannerLocked = false;

            scannerStatus.textContent =
                "КАМЕРА АКТИВНА";

        }, 1200);

        return;

    }

    playSuccessSound();

    scannerStatus.textContent =
        "ДОСТУП ПОДТВЕРЖДЁН";

    await stopScanner();

    showAccess();

}


/* =========================================================
   ACCESS
========================================================= */

function showAccess() {

    showScreen(accessScreen);

    setTimeout(() => {

        state.currentStage++;

        saveState();

        if (
            state.currentStage >=
            TOTAL_STAGES
        ) {

            showStage18();

        } else {

            renderStage();

        }

    }, 1500);

}


/* =========================================================
   ERROR
========================================================= */

let errorTimer = null;


function showError(message) {

    if (!errorToast) {
        return;
    }

    errorText.textContent =
        message;

    errorToast.classList.add(
        "show"
    );

    clearTimeout(errorTimer);

    errorTimer =
        setTimeout(() => {

            errorToast.classList.remove(
                "show"
            );

        }, 2800);

}


/* =========================================================
   SECRET FINAL
========================================================= */

function showSecretFinal() {

    showScreen(secretFinalScreen);

    setTimeout(() => {

        showStage18();

    }, 2500);

}


/* =========================================================
   STAGE 18
========================================================= */

function showStage18() {

    state.currentStage = 18;

    saveState();

    showScreen(stage18Screen);

}


function startFinal() {

    state.finalStarted = true;

    saveState();

    showFinal();

}


/* =========================================================
   FINAL
========================================================= */

function showFinal() {

    showScreen(finalScreen);

    collectedClues = [];

    renderClues();

    assembledText.textContent =
        "Собери все улики...";

    agentTitle.classList.add(
        "hidden"
    );

    startConfetti();

    playFinalSound();

}


function playFinalSound() {

    setTimeout(
        () => beep(392, .15),
        100
    );

    setTimeout(
        () => beep(523, .15),
        230
    );

    setTimeout(
        () => beep(659, .25),
        360
    );

    setTimeout(
        () => beep(784, .4),
        520
    );

}


/* =========================================================
   CLUES
========================================================= */

function renderClues() {

    cluesContainer.innerHTML = "";

    clues.forEach(
        (clue, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "clue-card";

            button.type = "button";

            button.innerHTML = `
                <span class="clue-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="clue-hidden">
                    УЛИКА
                </span>

                <span class="clue-value">
                    ${clue}
                </span>
            `;

            button.addEventListener(
                "click",
                () => collectClue(
                    index,
                    button
                )
            );

            cluesContainer.appendChild(
                button
            );

        }
    );

}


function collectClue(index, button) {

    if (
        collectedClues.includes(index)
    ) {
        return;
    }

    collectedClues.push(index);

    button.classList.add(
        "collected"
    );

    beep(
        600 + index * 50,
        .1
    );

    updateFinalMessage();

}


function updateFinalMessage() {

    const ordered =
        [...collectedClues]
            .sort(
                (a, b) => a - b
            );

    if (!ordered.length) {

        assembledText.textContent =
            "Собери все улики...";

        return;

    }

    assembledText.textContent =
        ordered
            .map(
                index => clues[index]
            )
            .join(" ");

    if (
        ordered.length ===
        clues.length
    ) {

        assembledMessage.classList.add(
            "message-complete"
        );

        agentTitle.classList.remove(
            "hidden"
        );

        setTimeout(() => {

            assembledMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 250);

    }

}


/* =========================================================
   CONFETTI
========================================================= */

let confettiAnimation = null;


function startConfetti() {

    const canvas =
        $("confetti");

    if (!canvas) {
        return;
    }

    const ctx =
        canvas.getContext("2d");

    const particles = [];

    const colors = [
        "#ff174f",
        "#ff4b78",
        "#ffffff",
        "#5865ff",
        "#00ff9d",
        "#ffd166"
    ];


    function resize() {

        canvas.width =
            window.innerWidth *
            window.devicePixelRatio;

        canvas.height =
            window.innerHeight *
            window.devicePixelRatio;

        canvas.style.width =
            `${window.innerWidth}px`;

        canvas.style.height =
            `${window.innerHeight}px`;

        ctx.setTransform(
            window.devicePixelRatio,
            0,
            0,
            window.devicePixelRatio,
            0,
            0
        );

    }


    resize();


    for (
        let i = 0;
        i < 180;
        i++
    ) {

        particles.push({

            x:
                Math.random() *
                window.innerWidth,

            y:
                -Math.random() *
                window.innerHeight,

            width:
                3 + Math.random() * 5,

            height:
                5 + Math.random() * 8,

            speed:
                1.5 + Math.random() * 4,

            rotation:
                Math.random() *
                Math.PI,

            rotationSpeed:
                -.1 +
                Math.random() * .2,

            drift:
                -1 +
                Math.random() * 2,

            color:
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ]

        });

    }


    if (confettiAnimation) {

        cancelAnimationFrame(
            confettiAnimation
        );

    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
        );


        particles.forEach(
            particle => {

                particle.y +=
                    particle.speed;

                particle.x +=
                    particle.drift;

                particle.rotation +=
                    particle.rotationSpeed;


                if (
                    particle.y >
                    window.innerHeight + 20
                ) {

                    particle.y = -20;

                    particle.x =
                        Math.random() *
                        window.innerWidth;

                }


                ctx.save();

                ctx.translate(
                    particle.x,
                    particle.y
                );

                ctx.rotate(
                    particle.rotation
                );

                ctx.fillStyle =
                    particle.color;

                ctx.fillRect(
                    -particle.width / 2,
                    -particle.height / 2,
                    particle.width,
                    particle.height
                );

                ctx.restore();

            }
        );


        confettiAnimation =
            requestAnimationFrame(
                animate
            );

    }


    animate();

}


/* =========================================================
   RESTART
========================================================= */

function restartGame() {

    const confirmed =
        window.confirm(
            "Начать расследование заново?"
        );

    if (!confirmed) {
        return;
    }

    state = {

        currentStage: 1,

        started: true,

        soundEnabled:
            state.soundEnabled,

        finalStarted: false

    };

    saveState();

    if (confettiAnimation) {

        cancelAnimationFrame(
            confettiAnimation
        );

        confettiAnimation = null;

    }

    renderStage();

}


/* =========================================================
   RESET
========================================================= */

function resetGame() {

    const confirmed =
        window.confirm(
            "Сбросить весь прогресс Дела №18?"
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(
        STORAGE_KEY
    );

    location.reload();

}


/* =========================================================
   SOUND
========================================================= */

function toggleSound() {

    state.soundEnabled =
        !state.soundEnabled;

    saveState();

    soundButton.textContent =
        state.soundEnabled
            ? "🔊"
            : "🔇";

    if (state.soundEnabled) {

        beep(700, .08);

    }

}


/* =========================================================
   EVENTS
========================================================= */

startButton?.addEventListener(
    "click",
    startGame
);


continueButton?.addEventListener(
    "click",
    () => {

        state.started = true;

        saveState();

        renderStage();

    }
);


scanButton?.addEventListener(
    "click",
    openScanner
);


closeScanner?.addEventListener(
    "click",
    closeScannerView
);


restartButton?.addEventListener(
    "click",
    restartGame
);


resetGameButton?.addEventListener(
    "click",
    resetGame
);


soundButton?.addEventListener(
    "click",
    toggleSound
);


startFinalButton?.addEventListener(
    "click",
    startFinal
);


/* =========================================================
   VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden &&
            scannerRunning
        ) {

            stopScanner();

        }

    }
);


/* =========================================================
   INIT
========================================================= */

function init() {

    loadState();

    createParticles();

    soundButton.textContent =
        state.soundEnabled
            ? "🔊"
            : "🔇";


    if (
        state.currentStage >=
        TOTAL_STAGES &&
        state.finalStarted
    ) {

        showFinal();

        return;

    }


    if (
        state.currentStage >=
        TOTAL_STAGES
    ) {

        showStage18();

        return;

    }


    if (
        state.started &&
        state.currentStage > 1
    ) {

        continueButton.classList.remove(
            "hidden"
        );

        startButton.classList.add(
            "hidden"
        );

    }


    showScreen(startScreen);

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}