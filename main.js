const image = document.getElementById("graphic");
const ctx = image.getContext("2d");
const w = 1920;
const h = 1080;
image.setAttribute("width", w);
image.setAttribute("height", h);

const backgroundImageThree = new Image();
backgroundImageThree.src = "images/weather_three.png";

const backgroundImageFour = new Image();
backgroundImageFour.src = "images/weather_four.png";

const reporterName = document.getElementById("reporter-name");

const sunnyIcon = new Image();
sunnyIcon.src = "images/sunny.png";

const cloudyIcon = new Image();
cloudyIcon.src = "images/cloudy.png";

const thunderIcon = new Image();
thunderIcon.src = "images/thunder.png";

const rainIcon = new Image();
rainIcon.src = "images/rain.png";

const snowIcon = new Image();
snowIcon.src = "images/snow.png";

const partlycloudyIcon = new Image();
partlycloudyIcon.src = "images/partly_cloudy.png";

const primaryFont = new FontFace("Gogh", "url(fonts/Gogh-ExtraBold.otf");

primaryFont.load().then(font => {
    document.fonts.add(font);
    refresh();
});

backgroundImageThree.onload = refresh;

refresh();

function refresh() {
    let thursdayBox = document.getElementById("thursday-box");
    let mondayBox = document.getElementById("monday-box");

    let thursdayTemp = document.getElementById("thursday-temp").value;
    let fridayTemp = document.getElementById("friday-temp").value;
    let saturdayTemp = document.getElementById("saturday-temp").value;
    let sundayTemp = document.getElementById("sunday-temp").value;
    let mondayTemp = document.getElementById("monday-temp").value;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "100px Gogh";

    switch (document.getElementById("which-days").value) {
        case "friday-sunday":
            // Hide/show relevant options
            thursdayBox.style.display = "none";
            mondayBox.style.display = "none";

            // Draw background image for three days
            ctx.drawImage(backgroundImageThree, 0, 0, w, h);

            // Draw day of the week
            floating3DText(ctx, "Friday", 340, 300, 10);
            floating3DText(ctx, "Saturday", 950, 300, 10);
            floating3DText(ctx, "Sunday", 1550, 300, 10);

            // Draw temperature text
            floating3DText(ctx, fridayTemp + "°", 360, 900, 10);
            floating3DText(ctx, saturdayTemp + "°", 950, 900, 10);
            floating3DText(ctx, sundayTemp + "°", 1560, 900, 10);

            // Draw icons
            switch (document.getElementById("friday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 167, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 167, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 167, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 167, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 167, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 167, 375, 350, 350);
                    break;
            }

            switch (document.getElementById("saturday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 780, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 780, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 780, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 780, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 780, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 780, 375, 350, 350);
                    break;
            }

            switch (document.getElementById("sunday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 1550 - (350 / 2), 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 1550 - (350 / 2), 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 1550 - (350 / 2), 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 1550 - (350 / 2), 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 1550 - (350 / 2), 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 1550 - (350 / 2), 375, 350, 350);
                    break;
            }
            break;
        case "friday-monday":
            // Hide/show relevant options
            thursdayBox.style.display = "none";
            mondayBox.style.display = "grid";

            // Draw background image for four days
            ctx.drawImage(backgroundImageFour, 0, 0, w, h);

            // Draw day of the week
            floating3DText(ctx, "Fri", 265, 300, 10);
            floating3DText(ctx, "Sat", 730, 300, 10);
            floating3DText(ctx, "Sun", 1190, 300, 10);
            floating3DText(ctx, "Mon", 1650, 300, 10);

            // Draw temperature text
            floating3DText(ctx, fridayTemp + "°", 265, 900, 10);
            floating3DText(ctx, saturdayTemp + "°", 730, 900, 10);
            floating3DText(ctx, sundayTemp + "°", 1190, 900, 10);
            floating3DText(ctx, mondayTemp + "°", 1650, 900, 10);

            // Draw icons
            switch (document.getElementById("friday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 95, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 95, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 95, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 95, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 95, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 95, 375, 350, 350);
                    break;
            }
            switch (document.getElementById("saturday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 560, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 560, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 560, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 560, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 560, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 560, 375, 350, 350);
                    break;
            }
            switch (document.getElementById("sunday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 1025, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 1025, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 1025, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 1025, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 1025, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 1025 - (350 / 2), 375, 350, 350);
                    break;
            }
            switch (document.getElementById("monday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 1485, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 1485, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 1485, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 1485, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 1485, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 1485, 375, 350, 350);
                    break;
            }
            break;

        case "thursday-sunday":
            // Hide/show relevant options
            thursdayBox.style.display = "grid";
            mondayBox.style.display = "none";

            // Draw background image for Four days
            ctx.drawImage(backgroundImageFour, 0, 0, w, h);

            // Draw day of the week
            floating3DText(ctx, "Thu", 265, 300, 10);
            floating3DText(ctx, "Fri", 730, 300, 10);
            floating3DText(ctx, "Sat", 1190, 300, 10);
            floating3DText(ctx, "Sun", 1650, 300, 10);

            // Draw temperature text
            floating3DText(ctx, thursdayTemp + "°", 265, 900, 10);
            floating3DText(ctx, fridayTemp + "°", 730, 900, 10);
            floating3DText(ctx, saturdayTemp + "°", 1190, 900, 10);
            floating3DText(ctx, sundayTemp + "°", 1650, 900, 10);

            // Draw icons
            switch (document.getElementById("thursday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 95, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 95, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 95, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 95, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 95, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 95, 375, 350, 350);
                    break;
            }
            switch (document.getElementById("friday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 560, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 560, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 560, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 560, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 560, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 560, 375, 350, 350);
                    break;
            }
            switch (document.getElementById("saturday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 1025, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 1025, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 1025, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 1025, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 1025, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 1025 - (350 / 2), 375, 350, 350);
                    break;
            }
            switch (document.getElementById("sunday-conditions").value) {
                case "sunny":
                    ctx.drawImage(sunnyIcon, 1485, 375, 350, 350);
                    break;
                case "cloudy":
                    ctx.drawImage(cloudyIcon, 1485, 375, 350, 350);
                    break;
                case "thunder":
                    ctx.drawImage(thunderIcon, 1485, 375, 350, 350);
                    break;
                case "rain":
                    ctx.drawImage(rainIcon, 1485, 375, 350, 350);
                    break;
                case "snow":
                    ctx.drawImage(snowIcon, 1485, 375, 350, 350);
                    break;
                case "partlycloudy":
                    ctx.drawImage(partlycloudyIcon, 1485, 375, 350, 350);
                    break;
            }
            break;
    }
    floating3DText(ctx, reporterName.value + "'s weekend outlook", w / 2, 120, 10);
}

function floating3DText(ctx, string, x, y, depth) {
    let startX = x + depth;
    let startY = y + depth;
    for (i = 1; i < depth; i++) {
        if (i == 1) {
            ctx.shadowColor = "rgba(0, 0, 10, 0.75)";
            ctx.shadowBlur = 50;
            ctx.shadowOffsetX = 30;
            ctx.shadowOffsetY = 30;
        }
        ctx.fillStyle = "rgb(30, 30, 30)";
        ctx.fillText(string, startX - i, startY - i);
        ctx.shadowColor = "transparent";
    }
    ctx.fillStyle = "white";
    ctx.fillText(string, x, y);
}

window.setTimeout(5000, refresh);

// hello mr lipsky :) -kenny
document.querySelectorAll("input, select").forEach(input => {
    input.addEventListener("input", refresh);
})

document.getElementById("hover-overlay").addEventListener("click", downloadImage);

function downloadImage() {
    console.log("downloaded");
    var link = document.createElement("a");
    if (reporterName.value?.trim()) {
        let name = reporterName.value?.trim().toLowerCase();
        link.download = `${name}-weather-graphic`;
    }
    else {
        link.download = "weather-graphic";
    }
    link.href = image.toDataURL();
    link.click();
}
