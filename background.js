(function () {   

    function findEmotion(_name) {
      var result = emotions.find(obj => {
        return obj.name.toLowerCase() === _name.toLowerCase()
      });
      return result.description;
    }

    function clearInput() {
      input.value = ''
    }
  
    function sendMessage(message) {
      input.value = message;
      document.getElementById('sayit-button').dispatchEvent(new MouseEvent('click'));
    }
  
    window.addEventListener('keydown', e => {

      var key = e.which || e.keyCode;
  
        if (key === 13 && input.value.match(/#{2,}/gi)) { // "Enter"

          var enteredText = input.value.trim();
          var data = enteredText.split(/\s+/);        
          var emotionName = data.length > 0 ? data[0].substring(2) : '';     
          e.stopPropagation();

          var tempEmotion = findEmotion(emotionName);

          if(tempEmotion != undefined)
          {
            sendMessage(tempEmotion);
          }
          else
          {
            sendMessage("`This is not the WompMotion you are looking for`");
          }

          clearInput()

        e.preventDefault()
      }
    }, true)
  
  })()
