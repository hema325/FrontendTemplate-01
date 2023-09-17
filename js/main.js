
// skills section

let skills = $("#skills");
let isSkillsBarExpended = false;

$(window).scroll(function () {

    if (!isSkillsBarExpended && $(window).scrollTop() >= skills.offset().top - (skills.innerHeight() / 2)) {
        skills.find("div.bar > span").each(function () {
            $(this).animate({ width: $(this).attr("data-width") }, 1000);
        });

        isSkillsBarExpended = true;
    }
});


// events section

let events = $("#events");

let secondsCell = events.find("#seconds");
let minutesCell = events.find("#minutes");
let hoursCell = events.find("#hours");
let daysCell = events.find("#days");

let eventEndDate = new Date(events.find("#countDownTimer").attr("data-endDate")).getTime();

let countDownInterval = setInterval(function () {

    let timeSpan = eventEndDate - new Date().getTime();

    let seconds = Math.floor(timeSpan / 1000) % 60;
    let minutes = Math.floor(timeSpan / 1000 / 60) % 60;
    let hours = Math.floor(timeSpan / 1000 / 60 / 60) % 24;
    let days = Math.floor(timeSpan / 1000 / 60 / 60 / 24);

    if (timeSpan <= 0) {
        clearInterval(countDownInterval);
    }

    secondsCell.text(seconds < 10 ? "0" + seconds : seconds).end()
    minutesCell.text(minutes < 10 ? "0" + minutes : minutes).end()
    hoursCell.text(hours < 10 ? "0" + hours : hours).end()
    daysCell.text(days < 10 ? "0" + days : days);

}, 1000);

// stats section 

let stats = $("#stats");
let isStatsActive = false;

$(window).scroll(function () {
    if (!isStatsActive && $(this).scrollTop() >= stats.offset().top - (stats.innerHeight() / 2)) {
        stats.find(".number").each(function () { startCount({ element: this, duration: 1000 }) });
        isStatsActive = true;
    }

});

function startCount({ element, duration = 600 }) {
    let goal = $(element).attr("data-goal");

    let countUpInterval = setInterval(() => {
        let number = Number($(element).text()) + 1;
        if (number > goal) {
            clearInterval(countUpInterval);
            return;
        }

        $(element).text(number);
    }, duration / goal);

    isStatsActive = false;
}



