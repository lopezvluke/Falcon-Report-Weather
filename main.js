// Canvas setup
const image = document.getElementById("graphic");
const ctx = image.getContext("2d");
const w = 1920;
const h = 1080;
image.setAttribute("width", w);
image.setAttribute("height", h);

// Background image for three days
const backgroundImageThree = new Image();
backgroundImageThree.src = "images/weather_three.png";

// Background image for four days
const backgroundImageFour = new Image();
backgroundImageFour.src = "images/weather_four.png";

var icon = new Image();
const icons = {
    "sunny": () => {
        icon.src = "images/sunny.png";
        return icon;
    },
    "cloudy": () => {
        icon.src = "images/cloudy.png";
        return icon;
    },
    "thunder": () => {
        icon.src = "images/thunder.png";
        return icon;
    },
    "rain": () => {
        icon.src = "images/rain.png";
        return icon;
    },
    "snow": () => {
        icon.src = "images/snow.png";
        return icon;
    },
    "partlycloudy": () => {
        icon.src = "images/partly_cloudy.png";
        return icon;
    }
}

const reporterName = document.getElementById("reporter-name");

const primaryFont = new FontFace("Gogh", "url(fonts/Gogh-ExtraBold.otf");

primaryFont.load().then(font => {
    document.fonts.add(font);
    refresh();
});

refresh();

// Redraw canvas
function refresh() {
    let thursdayBox = document.getElementById("thursday-box");
    let mondayBox = document.getElementById("monday-box");

    let thursdayTemp = document.getElementById("thursday-temp").value;
    let fridayTemp = document.getElementById("friday-temp").value;
    let saturdayTemp = document.getElementById("saturday-temp").value;
    let sundayTemp = document.getElementById("sunday-temp").value;
    let mondayTemp = document.getElementById("monday-temp").value;

    // Clear canvas
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, w, h);

    // Set text formatting
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
            ctx.drawImage(icons[document.getElementById("friday-conditions").value](), 167, 375, 350, 350);
            ctx.drawImage(icons[document.getElementById("saturday-conditions").value](), 780, 375, 350, 350);
            ctx.drawImage(icons[document.getElementById("sunday-conditions").value](), 1375, 375, 350, 350);

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
            ctx.drawImage(icons[document.getElementById("friday-conditions").value](), 95, 375, 350, 350);
            ctx.drawImage(icons[document.getElementById("saturday-conditions").value](), 560, 375, 350, 350);
            ctx.drawImage(icons[document.getElementById("sunday-conditions").value](), 1025, 375, 350, 350);
            ctx.drawImage(icons[document.getElementById("monday-conditions").value](), 1485, 375, 350, 350);
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
            ctx.drawImage(icons[document.getElementById("thursday-conditions").value](), 95, 375, 350, 350);
            ctx.drawImage(icons[document.getElementById("friday-conditions").value](), 560, 375, 350, 350);
            ctx.drawImage(icons[document.getElementById("saturday-conditions").value](), 1025, 375, 350, 350);
            ctx.drawImage(icons[document.getElementById("sunday-conditions").value](), 1485, 375, 350, 350);
            break;
    }

    // If reporter name is blank
    if (!reporterName.value?.trim()) {
        floating3DText(ctx, "Today's Weekend Outlook", w / 2, 120, 10);
    }
    else {
        let name = reporterName.value?.trim()
        // Grammar
        if (reporterName.value.slice(-1) == "s") {
            floating3DText(ctx, name + "' Weekend Outlook", w / 2, 120, 10);
        }
        else {
            floating3DText(ctx, name + "'s Weekend Outlook", w / 2, 120, 10);
        }
    }
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

document.querySelectorAll("input, select").forEach(input => {
    input.addEventListener("input", refresh);
})

document.getElementById("hover-overlay").addEventListener("click", downloadImage);

function downloadImage() {
    let link = document.createElement("a");
    let name = reporterName.value?.trim() && reporterName.value?.trim().toLowerCase() + "-";
    link.download = `${name}weather-graphic`;
    link.href = image.toDataURL();
    link.click();
}
