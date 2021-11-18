function addClassTo(item, clas) {
    item.classList.add(clas);
}

function removeClassTo(item, clas) {
    item.classList.remove(clas);
}


function green() {
       addClassTo(count, 'well');
       addClassTo(helpText, 'well');
       addClassTo(helpText, 'guessCount');
       removeClassTo(count, 'normal');
       removeClassTo(count, 'hard');
       removeClassTo(helpText, 'normal');
       removeClassTo(helpText, 'hard');
       removeClassTo(guessCount, 'normal');
       removeClassTo(guessCount, 'hard');
    }
    
    function yellow() {
       addClassTo(count, 'normal');
       addClassTo(helpText, 'normal');
       addClassTo(helpText, 'normal');
       addClassTo(guessCount, 'normal');
       removeClassTo(count, 'well');
       removeClassTo(count, 'hard');
       removeClassTo(helpText, 'well');
       removeClassTo(helpText, 'hard');
       removeClassTo(guessCount, 'well');
       removeClassTo(guessCount, 'hard');
    }
    
    function red() {
       removeClassTo(count, 'well');
       removeClassTo(count, 'normal');
       removeClassTo(helpText, 'well');
       removeClassTo(helpText, 'normal');
       removeClassTo(guessCount, 'well');
       removeClassTo(guessCount, 'normal');
       addClassTo(helpText, 'hard');
       addClassTo(count, 'hard');
       addClassTo(guessCount, 'hard');
    }

    function changeColor() {
        switch (true) {
           case (parseInt(count.innerText) >= numberOfAttempts):
              green();
              break;
     
           case (parseInt(count.innerText) > 2) && (parseInt(count.innerText)) <= (Math.ceil(numberOfAttempts * 0.7)) && (parseInt(count.innerText)) >= (Math.ceil(numberOfAttempts * 0.41)):
              yellow();
              break;
     
           case (parseInt(count.innerText) === 1 || (parseInt(count.innerText)) <= (Math.ceil(numberOfAttempts * 0.4))):
              red();
              break;
        }
     }