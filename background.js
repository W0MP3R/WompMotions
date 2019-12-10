(function () {   
    var Emotion = function (name, message) {
      this.name = name
      this.message = message
    }

    var emotions = [
      new Emotion('notfunny', "https://i.imgur.com/6RKuegb.jpg"),
      new Emotion('cry', "TT^TT", false),
      new Emotion('scream', "https://i.imgur.com/XfKv08W.png"),
      new Emotion('surprise', "https://i.imgur.com/gNyGnwB.png"),
      new Emotion('blankface', "https://i.imgur.com/DhCCvgc.png"),
      new Emotion('sad', "https://i.imgur.com/5R9wPkp.jpg"),
      new Emotion('todaypaella', "https://i.imgur.com/VPzhSHo.jpg"),
      new Emotion('notpaella', "https://i.imgur.com/lcmKemN.png"),
      new Emotion('dance', "https://i.imgur.com/nZta0t8.jpg"),
      new Emotion('workface', "https://i.imgur.com/9aw7xpn.jpg"),
      new Emotion('ugh', "https://i.imgur.com/WVbanvL.jpg"),
      new Emotion('sleep', "https://i.imgur.com/wa74uAK.jpg"),
      new Emotion('frustration', "https://i.imgur.com/BJBHlDr.jpg"),      
      new Emotion('bored', "https://i.imgur.com/5DNrFK7.png"),  
      new Emotion('shruggie', "https://i.stack.imgur.com/8MXJQ.jpg"),
      new Emotion('hiya', "https://i.imgur.com/Llzc0ED.jpg"),
      new Emotion('surprise_old', "https://i.imgur.com/V5Bgq0u.jpg"),
      new Emotion('scream_old', "https://i.imgur.com/myazEMI.jpg")
  ];


    function findEmotion(_name) {
      var result = emotions.find(obj => {
        return obj.name.toLowerCase() === _name.toLowerCase()
      });
      return result.message;
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
