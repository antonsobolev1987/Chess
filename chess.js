<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <style>

        body{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 100vh;
        }
        h1, p{
            text-align: center;
        }

        .container{
            align-self: center;
            justify-self: center;
        }

        .deckWrapper{
            width: 640px;
            height: 640px;
            background: #fff;
            box-shadow: rgba(0,0,0,0.4) 0 0 50px;
            border-radius: 20px;
            display: grid;
            grid-template-columns: 20px repeat(8, 1fr) 20px;
            grid-template-rows: 20px repeat(8, 1fr) 20px;
        }
        .deckWrapper__cell{
            font-size: 0.5em;
            display: grid;
        }
        .deckWrapper__cell_black{
            padding: 5px;
            background: #3e2315;
            color: #fff;
        }
        .deckWrapper__cell_white{
            padding: 5px;
            background: #fffbc3;
            color: #fff;
        }
        .deckWrapper__figure{
            font-size: 30pt;
            justify-self: center;
            align-self: center;
            text-shadow: #000 0 0 10px;
        }
        .deckWrapper__figure_black{
            font-size: 30pt;
            justify-self: center;
            align-self: center;
            color: #000;
            text-shadow: #fff 0 0 10px;
        }
        .deckWrapper__cell_index{
            justify-self: center;
            align-self: center;
            font-size: 0.9em;
        }

    </style>
</head>
<body>

<script>


    // Создали заголовок и параграф (ну и контейнер для шахматной доски)

    var container = document.createElement("div");
    container.className = "container";
    container.id = "container";
    container.innerHTML = "<h1>Генерируемая скриптом шахматная доска</h1>";

    document.body.appendChild(container); // выводим контейнер

    var deckWrapper = document.createElement("div");
    deckWrapper.className = "deckWrapper";
    deckWrapper.id = "deckWrapper";
    deckWrapper.innerHTML = "";
    container.appendChild(deckWrapper); // добавляем деку к контейнеру

    var i,j, deckWrapper__cell,letterName;
    for (i = 9; i >= 0; i--) { // стартуем цикл для строк (10 строк, 8 для клеток + 2 для надписей)

        for (j=0; j < 10; j++) { // стартуем цикл для ячеек (10 ячеек в каждой строке)

            deckWrapper__cell = document.createElement("div");
            deckWrapper__cell.className = "deckWrapper__cell";
            deckWrapper__cell.id = "" + i + j; // присваиваем индекс каждой созданной ячейке

            // deckWrapper__Cell.innerHTML = i + " " + j; // подписываем индекс к каждой ячейке

            if (j === 0 || j === 9 || i === 9 || i === 0) { // если мы НА полях, ТО

                // индексы клеток на полях не проставляем
                // но нужн проставить названия строк и столбцов

                if ((j === 0 || j === 9) && (i !== 0 && i !== 9)) {
                    deckWrapper__cell.className += " deckWrapper__cell_index";
                    deckWrapper__cell.innerHTML = " "+ i ;
                }
                else if ((i === 0 || i === 9) && (j !== 0 && j !== 9)) {

                    switch(j) {
                        case 1: letterName = "A";
                            break;
                        case 2: letterName = "B";
                            break;
                        case 3: letterName = "C";
                            break;
                        case 4: letterName = "D";
                            break;
                        case 5: letterName = "E";
                            break;
                        case 6: letterName = "F";
                            break;
                        case 7: letterName = "G";
                            break;
                        case 8: letterName = "H";
                            break;
                    }

                    deckWrapper__cell.className += " deckWrapper__cell_index";
                    deckWrapper__cell.innerHTML = " "+ letterName ; // подписываем имена в поля A, B, C, D, E, F

                }

            }
            else { // работаем по ячейкам




                if ((i+j)%2 === 0) { // определяем черные и белые ячейки
                    deckWrapper__cell.className += " deckWrapper__cell_black";
                }
                else {
                    deckWrapper__cell.className += " deckWrapper__cell_white";
                }

                // только для индексирования элементов, где i - название строки (номер), а j - название столбца (буква)
                // deckWrapper__cell.innerHTML = "i: " + i + ", j: " + j; // подписываем индекс к каждой ячейке


                if (i === 2) {
                    deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure'>&#9817;</div>";
                }
                else if (i === 1) {
                    if (j === 1 || j === 8) {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure'>&#9814;</div>";
                    }
                    else if (j === 2 || j === 7) {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure'>&#9816;</div>";
                    }
                    else if (j === 3 || j === 6) {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure'>&#9815;</div>";
                    }
                    else if (j === 4) {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure'>&#9813;</div>";
                    }
                    else {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure'>&#9812;</div>";
                    }
                }

                else if (i === 7) {
                    deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure_black'>&#9817;</div>";
                }
                else if (i === 8) {
                    if (j === 1 || j === 8) {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure_black'>&#9814;</div>";
                    }
                    else if (j === 2 || j === 7) {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure_black'>&#9816;</div>";
                    }
                    else if (j === 3 || j === 6) {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure_black'>&#9815;</div>";
                    }
                    else if (j === 4) {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure_black'>&#9813;</div>";
                    }
                    else {
                        deckWrapper__cell.innerHTML = "<div class='deckWrapper__figure_black'>&#9812;</div>";
                    }
                }

            }

            deckWrapper.appendChild(deckWrapper__cell);
        }

    }
</script>



</body>
</html>