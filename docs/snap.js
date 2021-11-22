var s = Snap("#svg");
var фон = s.rect(5,5, 290,290);
фон.attr({ fill: "#8a04", stroke: "#000d",
    strokeWidth: 1, }); // CamelCase...

var нимб = s.rect(10,10, 280,280);   // квадр 
нимб.attr({ fill: "#fff", stroke: "#f0f",
    strokeWidth: 2, });

var глаз = s.circle(150,150, 60);    // круг
окно = s.group(нимб, глаз);

var кино = s.rect(13,13, 274,274);
кино.attr({ mask: окно, stroke: "#f00a",
    strokeWidth: 6, });
