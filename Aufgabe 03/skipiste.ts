/*
Aufgabe: (03 Skipiste mit Animation)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (05.11.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aufgabe3 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let x: number = 250;
    let y: number = 250;
    let flockeX: number[] = [];
    let flockeY: number[] = [];
    let wolkeX: number[] = [];
    let wolkeY: number[] = [];
    let skiX: number[] = [];
    let skiY: number[] = [];

    var canvasImg: any;



    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");



        /*Himmel - Canvas breiter als Aufgabenstellung*/
        crc2.fillStyle = "#b2dfee";
        crc2.fillRect(0, 0, 1000, 600);


        /*Piste*/
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(1250, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();


        /*Lift-Linie*/
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(800, 600);
        crc2.stroke();

        /*Gondel links*/
        crc2.beginPath();
        crc2.moveTo(120, 345);
        crc2.lineTo(120, 380);
        crc2.stroke();
        crc2.fillStyle = "darkred";
        crc2.fillRect(95, 380, 50, 30);
        crc2.strokeRect(95, 380, 50, 30);
        crc2.fillStyle = "#b2dfee";
        crc2.fillRect(100, 385, 40, 12);

        /*Gondel rechts*/
        crc2.beginPath();
        crc2.moveTo(525, 497);
        crc2.lineTo(525, 545);
        crc2.stroke();
        crc2.fillStyle = "darkred";
        crc2.fillRect(500, 530, 50, 30);
        crc2.strokeRect(500, 530, 50, 30);
        crc2.fillStyle = "#b2dfee";
        crc2.fillRect(505, 535, 40, 12);

        /*Berge Links*/
        crc2.beginPath();
        crc2.moveTo(600, 100);
        crc2.lineTo(800, 420);
        crc2.lineTo(500, 300);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#888888";
        crc2.fill();

        /*Berge Rechts*/
        crc2.beginPath();
        crc2.moveTo(800, 200);
        crc2.lineTo(950, 480);
        crc2.lineTo(700, 380);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#888888";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(800, 200);
        crc2.lineTo(700, 380);
        crc2.strokeStyle = "#888888";
        crc2.stroke();

        /*Sonne*/
        crc2.beginPath();
        crc2.arc(700, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(685, 85, 6, 0, 2 * Math.PI);
        crc2.arc(715, 85, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(700, 110, 18, 0, 1 * Math.PI);
        crc2.stroke();

        /*Eis links*/
        crc2.beginPath();
        crc2.arc(589, 150, 15, 0, Math.PI);
        crc2.arc(614, 148, 20, 0, Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(600, 99);
        crc2.lineTo(635, 150);
        crc2.lineTo(573, 150);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        /*Eis rechts*/
        crc2.beginPath();
        crc2.arc(789, 250, 20, 0, Math.PI);
        crc2.arc(814, 250, 15, 0, Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(800, 200);
        crc2.lineTo(830, 250);
        crc2.lineTo(769, 250);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        


        //For Schleife f�r die randomB�ume
        for (let i: number = 0; i < 10; i++) {
            let x: number = 50 + Math.random() * 300;
            let y: number = 400 + Math.random() * 100;
            drawTree(x, y, "darkgreen");
        }
        //For Schleife f�r die Wolken
        for (let i: number = 0; i < 3; i++) {
            wolkeX[i] = 0 + Math.random() * 1000;
            wolkeY[i] = 0 + Math.random() * 200;
        }
        //For Schleife f�r die Schneeflocken
        for (let i: number = 0; i < 100; i++) {
            flockeX[i] = 0 + Math.random() * 1000;
            flockeY[i] = 0 + Math.random() * 600;
        }
          //For Schleife f�r den Skifahrer
        for (let i: number = 0; i < 3; i++) {
            skiX[i] = 0;
            skiY[i] = 100 + Math.random() * 150;
        }

        /*H�tte unten*/
        crc2.fillStyle = "darkred";
        crc2.fillRect(170, 550, 60, 40);
        crc2.strokeRect(95, 380, 50, 30);
        crc2.fillStyle = "#b2dfee";
        crc2.fillRect(180, 560, 10, 10);
        crc2.fillRect(210, 560, 10, 10);
        crc2.beginPath();
        crc2.moveTo(160, 550);
        crc2.lineTo(200, 500);
        crc2.lineTo(240, 550);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();
        canvasImg = crc2.getImageData(0, 0, 1000, 600); //Bild machen nachdem alles gezeichnet wurde

        animate(); //Funktionsaufruf der Animation
    }

    function drawTree(_x: number, _y: number, _color: string): void {

        crc2.fillStyle = "brown";
        crc2.fillRect(_x - 5, _y + 90, 10, 20);
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y + 60);
        crc2.lineTo(_x - 25, _y + 60);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y + 30);
        crc2.lineTo(_x + 25, _y + 90);
        crc2.lineTo(_x - 25, _y + 90);
        crc2.closePath();
        crc2.fillStyle = _color;

        /*Feste B�ume*/
        crc2.fill();
        crc2.fillStyle = "brown";
        crc2.fillRect(820, 550, 10, 20);
        crc2.beginPath();
        crc2.moveTo(825, 470);
        crc2.lineTo(850, 530);
        crc2.lineTo(800, 530);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(825, 500);
        crc2.lineTo(850, 550);
        crc2.lineTo(800, 550);
        crc2.closePath();
        crc2.fillStyle = "#darkgreen";
        crc2.fill();
        crc2.fillStyle = "brown";
        crc2.fillRect(730, 580, 10, 20);
        crc2.beginPath();
        crc2.moveTo(735, 500);
        crc2.lineTo(710, 560);
        crc2.lineTo(760, 560);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(735, 530);
        crc2.lineTo(710, 580);
        crc2.lineTo(760, 580);
        crc2.closePath();
        crc2.fillStyle = "#darkgreen";
        crc2.fill();

    }

    function drawCloud(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
        crc2.arc(_x - 40, _y, 15, 0, 2 * Math.PI);
        crc2.arc(_x - 20, _y - 5, 18, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
    }
    function drawFlakes(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
        crc2.lineWidth = 1;
        crc2.strokeStyle = "grey";
        crc2.stroke();
    }
    
    function drawSki(_x: number, _y: number): void {

        
        crc2.beginPath();
        crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "#F79F81";
        crc2.fill();
        crc2.fillStyle = "grey";
        crc2.fillRect(_x - 4, _y + 5, 8, 20);
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y + 18);
        crc2.lineWidth = 5;
        crc2.lineTo(_x + 20, _y + 35);
        crc2.stroke();
        
    }

    // Animation 
    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 1000, 600);
        crc2.putImageData(canvasImg, 0, 0);

        //Wolkenanimation
        for (let i: number = 0; i < wolkeX.length; i++) {
            if (wolkeX[i] > 1000) {
                wolkeX[i] = 0;
            }
            wolkeX[i] += 2.5;
            drawCloud(wolkeX[i], wolkeY[i]);
        }
        //Skifahrernanimation
        for (let i: number = 0; i < skiX.length; i++) {
            if (skiX[i] > 1000) {
                skiX[i] = 0;
                skiY[i] = 150 + Math.random() * 100; //Random Y-Koordinaten f�r anderen Startpunkt
            }
            skiY[i] += 1.5;
            skiX[i] += 4;
            drawSki(skiX[i], skiY[i]);
        }
        //Schneeflockenanimation
        for (let i: number = 0; i < flockeX.length; i++) {
            if (flockeY[i] > 600) {
                flockeY[i] = 0;
            }
            flockeY[i] += Math.random() + 10;
            drawFlakes(flockeX[i], flockeY[i]);
        }
        
        window.setTimeout(animate, 20);



    }

}

