const image = document.getElementById("graphic");
const ctx = image.getContext("2d");
const w = 1920;
const h = 1080;
const backgroundImage = new Image();
backgroundImage.src = "images/weather.png";
image.setAttribute("width", w);
image.setAttribute("height", h);

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
partlycloudyIcon.src = "images/partly-cloudy.png";

const primaryFont = new FontFace("Gogh", "url(fonts/Gogh-ExtraBold.otf");

primaryFont.load().then(font => {
    document.fonts.add(font);
    refresh();
});

backgroundImage.onload = refresh;

function refresh() {
    ctx.drawImage(backgroundImage, 0, 0, w, h);


    switch (document.getElementById("friday-conditions").value) {
        case "sunny":
            ctx.drawImage(sunnyIcon, 120, 375, 350, 350);
            break;
        case "cloudy":
            ctx.drawImage(cloudyIcon, 120, 375, 350, 350);
            break;
        case "thunder":
            ctx.drawImage(thunderIcon, 120, 375, 350, 350);
            break;
        case "rain":
            ctx.drawImage(rainIcon, 120, 375, 350, 350);
            break;
        case "snow":
            ctx.drawImage(snowIcon, 120, 375, 350, 350);
            break;
        case "partlycloudy":
            ctx.drawImage(partlycloudyIcon, 120, 375, 350, 350);
            break;
    }

    switch (document.getElementById("saturday-conditions").value) {
        case "sunny":
            ctx.drawImage(sunnyIcon, 800, 375, 350, 350);
            break;
        case "cloudy":
            ctx.drawImage(cloudyIcon, 800, 375, 350, 350);
            break;
        case "thunder":
            ctx.drawImage(thunderIcon, 800, 375, 350, 350);
            break;
        case "rain":
            ctx.drawImage(rainIcon, 800, 375, 350, 350);
            break;
        case "snow":
            ctx.drawImage(snowIcon, 800, 375, 350, 350);
            break;
        case "partlycloudy":
            ctx.drawImage(partlycloudyIcon, 800, 375, 350, 350);
            break;
    }

    switch (document.getElementById("sunday-conditions").value) {
        case "sunny":
            ctx.drawImage(sunnyIcon, 1420, 375, 350, 350);
            break;
        case "cloudy":
            ctx.drawImage(cloudyIcon, 1420, 375, 350, 350);
            break;
        case "thunder":
            ctx.drawImage(thunderIcon, 1420, 375, 350, 350);
            break;
        case "rain":
            ctx.drawImage(rainIcon, 1420, 375, 350, 350);
            break;
        case "snow":
            ctx.drawImage(snowIcon, 1420, 375, 350, 350);
            break;
        case "partlycloudy":
            ctx.drawImage(partlycloudyIcon, 1420, 375, 350, 350);
            break;
    }


    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "100px Gogh";
    floating3DText(ctx, reporterName.value + "'s weekend outlook", w / 2, 90, 10);

    floating3DText(ctx, "Friday", 290, 300, 10);
    floating3DText(ctx, "Saturday", 975, 300, 10);
    floating3DText(ctx, "Sunday", 1612, 300, 10);

    let fridayTemp = document.getElementById("friday-temp").value;
    floating3DText(ctx, fridayTemp + "°", 290, 900, 10);

    let saturdayTemp = document.getElementById("saturday-temp").value;
    floating3DText(ctx, saturdayTemp + "°", 975, 900, 10);

    let sundayTemp = document.getElementById("sunday-temp").value;
    floating3DText(ctx, sundayTemp + "°", 1612, 900, 10);



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

document.getElementById("refresh").addEventListener("click", refresh);

document.getElementById("download").addEventListener("click", downloadImage);

function downloadImage() {
    var link = document.createElement("a");
    link.download = "weather.png";
    link.href = image.toDataURL();
    link.click();
}
