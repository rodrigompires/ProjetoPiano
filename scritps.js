(function () {

    // ADICIONANDO EVENTOS DE CLICK E ALTERANDO SRC DOS AUDIOS

    const $TECLAS = document.querySelectorAll(".tc");
    let somNota = document.getElementById("sons");
    let input = document.getElementById("selecao");

    $TECLAS.forEach((t) => {

        t.addEventListener("click", () => {

            let ini = null;
            let i = input.selectedIndex;

            switch (i) {
                case 0:
                    ini = "audios/Normal/";
                    break;
                case 1:
                    ini = "audios/Orgão/";
                    break;
                case 2:
                    ini = "audios/Teclado/";
                    break;
                case 3:
                    ini = "audios/Xilofone/";
                    break;
                case 4:
                    ini = "audios/Teclado Suave/";
                
            }

            somNota.src =  `${ini}${t.id}.mp3`
            somNota.currentTime = 0;
            somNota.play();
        });
    });




    // MAPEAMENTO DAS TECLAS

    const mapaTeclas = {
        "q" : "C",
        "w" : "Csus",
        "e" : "D",
        "r" : "Dsus",
        "t" : "E",
        "y" : "F",
        "u" : "Fsus",
        "i" : "G",
        "o" : "Gsus",
        "p" : "A",
        "a" : "Asus",
        "s" : "B",
        "d" : "C2",
        "f" : "C2sus",
        "g" : "D2",
        "h" : "D2sus",
        "j" : "E2"
    }

    const teclasDigitadas = (evento) => {
        const tecla = evento.key;
        const teclaMapeada = () => Object.keys(mapaTeclas).indexOf(tecla) !== -1;

        if (teclaMapeada()) document.getElementById(mapaTeclas[tecla]).click();
    }

    document.addEventListener("keydown", teclasDigitadas);

})()