$(document).ready(function() {
    var count = 0;
    var max_count = 0;
    
    
    
    up_sc(count, max_count);

    var DIV = $("#gameholder").children("div");
    shuffle(DIV);

    $("#lion").mousedown(function() {
        $("#lion").css('background-image', 'url("images/lion.png")');
        $('#lion_voice').get(0).play();
        document.getElementById('lion').style.pointerEvents = 'none';
        default_image();
        default_behaviour();

        setTimeout(function() {
            $("#lion").css('background-image', 'url("images./mound_1.png")');
            document.getElementById('lion').style.pointerEvents = 'auto';
            count = 0;
            up_sc(count, max_count);
            shuffle(DIV);
        }, 1000);
    });

    $("#deer1").mousedown(function() {
        $('#deer_voice').get(0).play();
        $("#deer1").css('background-image', 'url("images/deer_1.png")');
        count = count + 1;
        up_sc(count, max_count);
        document.getElementById('deer1').style.pointerEvents = 'none';
    });
    $("#deer2").mousedown(function() {

        $('#deer_voice').get(0).play();
        $("#deer2").css('background-image', 'url("images/deer_1.png")');
        count = count + 1;
        up_sc(count, max_count);
        document.getElementById('deer2').style.pointerEvents = 'none';
    });
    $("#deer3").mousedown(function() {
        $('#deer_voice').get(0).play();
        $("#deer3").css('background-image', 'url("images/deer_1.png")');
        count = count + 1;
        up_sc(count, max_count);
        document.getElementById('deer3').style.pointerEvents = 'none';
    });
    $("#deer4").mousedown(function() {
        $('#deer_voice').get(0).play();
        $("#deer4").css('background-image', 'url("images/deer_1.png")');
        count = count + 1;
        up_sc(count, max_count);
        document.getElementById('deer4').style.pointerEvents = 'none';
    });
    $("#deer5").mousedown(function() {
        $('#deer_voice').get(0).play();
        $("#deer5").css('background-image', 'url("images/deer_1.png")');
        count = count + 1;
        up_sc(count, max_count);
        document.getElementById('deer5').style.pointerEvents = 'none';
    });
    $("#deer6").mousedown(function() {
        $('#deer_voice').get(0).play();
        $("#deer6").css('background-image', 'url("images/deer_1.png")');
        count = count + 1;
        up_sc(count, max_count);
        document.getElementById('deer6').style.pointerEvents = 'none';
    });
    $("#deer7").mousedown(function() {
        $('#deer_voice').get(0).play();
        $("#deer7").css('background-image', 'url("images/deer_1.png")');
        count = count + 1;
        up_sc(count, max_count);
        document.getElementById('deer7').style.pointerEvents = 'none';
    });
    $("#deer8").mousedown(function() {
        $('#deer_voice').get(0).play();
        $("#deer8").css('background-image', 'url("images/deer_1.png")');
        count = count + 1;
        up_sc(count, max_count);
        document.getElementById('deer8').style.pointerEvents = 'none';
    });

    function up_sc(count, max) {
        if (max < count) {
            max_count = count;
        }
        $("#score").empty();
        $("#score").append("count-" + count + "\nHigh-Score-" + max_count);
    }

    function default_image() {
        $("#deer1").css('background-image', 'url("images/mound_1.png")');
        $("#deer2").css('background-image', 'url("images/mound_1.png")');
        $("#deer3").css('background-image', 'url("images/mound_1.png")');
        $("#deer4").css('background-image', 'url("images/mound_1.png")');
        $("#deer5").css('background-image', 'url("images/mound_1.png")');
        $("#deer6").css('background-image', 'url("images/mound_1.png")');
        $("#deer7").css('background-image', 'url("images/mound_1.png")');
        $("#deer8").css('background-image', 'url("images/mound_1.png")');
    }

    function default_behaviour() {
        document.getElementById('deer1').style.pointerEvents = 'auto';
        document.getElementById('deer2').style.pointerEvents = 'auto';
        document.getElementById('deer3').style.pointerEvents = 'auto';
        document.getElementById('deer4').style.pointerEvents = 'auto';
        document.getElementById('deer5').style.pointerEvents = 'auto';
        document.getElementById('deer6').style.pointerEvents = 'auto';
        document.getElementById('deer7').style.pointerEvents = 'auto';
        document.getElementById('deer8').style.pointerEvents = 'auto';
    }

    function shuffle(array) {
        var scoreCount = array.length,
            temporaryValue, randomIndex;

           while (0 !== scoreCount) {

               randomIndex = Math.floor(Math.random() * scoreCount);
            scoreCount -= 1;

              temporaryValue = array[scoreCount];
            array[scoreCount] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        for (i = 0; i < array.length; i++) {
            $('#gameholder').append($(array[i]));
        }
    }

});