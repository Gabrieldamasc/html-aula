        var corpo = document.getElementById('body1');
        var boxes = document.getElementsByClassName('caixas');
        var boxesSecundarias = document.getElementsByClassName('caixas2')

        function modoDark(){
            corpo.classList.toggle('testeDark');
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].classList.toggle('caixa1-darkMode');
            }

            for (var j = 0; j < boxesSecundarias.length; j++) {
                boxesSecundarias[j].classList.toggle('caixasSecundarias-darkMode')
            }
        }