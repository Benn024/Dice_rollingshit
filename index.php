<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Rulla tärningar</title>
        <script src="jquery-1.11.2.min.js"></script>
        <script src="dice.js"></script>
        <link rel="stylesheet" href="dice.css">
    </head>
    <body>
        <div id="sak">
            <div id="ruta1" class="ruta"></div>
            <div id="ruta2" class="ruta"></div>
            <div id="ruta3" class="ruta"></div>
            <div id="ruta4" class="ruta"></div>
        </div>
        <form>
            <input class="radioBtn" type="radio" name="antal" value="1"> 1<br />
            <input class="radioBtn" type="radio" name="antal" value="2"> 2<br />
            <input class="radioBtn" type="radio" name="antal" value="3"> 3<br />
            
            <br />
            <input type="button" name="button" value="Rulla" class="button">
            
            <input type="text" class="text">
        </form>
    </body>
</html>
