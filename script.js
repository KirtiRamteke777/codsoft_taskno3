let display = document.getElementById('display');

    function appendToDisplay(value) {
      display.innerHTML += value;
    }

    function clearDisplay() {
      display.innerHTML = '';
    }

    function calculateResult() {
      try {
        display.innerHTML = eval(display.innerHTML);
      } catch (error) {
        display.innerHTML = 'Error';
      }
    }