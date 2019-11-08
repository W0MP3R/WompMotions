(function () {   
    var Emotion = function (name, message) {
      this.name = name
      this.message = message
    }
  
    /*var emotions = {
      notfunny: new Emotion('notfunny', "https://i.imgur.com/6RKuegb.jpg"),
      cry: new Emotion('cry', "TT^TT"),
      scream: new Emotion('scream', "https://i.imgur.com/myazEMI.jpg"),
      surprise: new Emotion('surprise', "https://i.imgur.com/V5Bgq0u.jpg"),
      blankface: new Emotion('blankface', "https://i.imgur.com/DhCCvgc.png"),
      sad: new Emotion('sad', "https://i.imgur.com/5R9wPkp.jpg"),
      todaypaella: new Emotion('todaypaella', "https://i.imgur.com/VPzhSHo.jpg"),
      notpaella: new Emotion('notpaella', "https://i.imgur.com/lcmKemN.png"),
      dance: new Emotion('dance', "https://i.imgur.com/nZta0t8.jpg"),
      workface: new Emotion('workface', "https://i.imgur.com/9aw7xpn.jpg"),
      ugh: new Emotion('ugh', "https://i.imgur.com/WVbanvL.jpg"),
      sleep: new Emotion('sleep', "https://i.imgur.com/wa74uAK.jpg"),
      frustration: new Emotion('frustration', "https://i.imgur.com/BJBHlDr.jpg"),      
      bored: new Emotion('bored', "https://i.imgur.com/5DNrFK7.png"),      
      dancedance: new Emotion('dancedance', "~(-.-~)"),      
      pepelaugh: new Emotion('pepelaugh', "https://i.redd.it/isrzbgp0evn21.png"),
      mejoke: new Emotion('mejoke', "http://9buz.com/content/uploads/images/September2014/9buz_the_joke_me.jpg")

    };*/
    var emotions = {
      cry: new Emotion('cry', "TT^TT"),
      fixThis: new Emotion('fixthis', ">.<")
    };   

    function findEmotion(_name) {
      console.log("find Name:" + _name);
      console.log(Object.prototype.toString.call(emotions));
      var result = emotions.find(function(element) {

        console.log(element);
        return element.name == _name;
      });
      /*var result = emotions.filter(obj => {
        console.log("OBJ: " + Object.values(obj));
        return obj.name == _name
      })*/
      //var result = emotions.find(x => x.name === 'cry').name;

      console.log(result);
      if(result)
      {
        return result.name;
      }
      else{
        return undefined;
      }
      //return emotions.hasOwnProperty(name) ? emotions[name].message : undefined;
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

          var enteredText = input.value.trim().toLowerCase();
          console.log("Entered text: " + enteredText);
          var data = enteredText.split(/\s+/);        
          console.log("data: " + data);
          var emotionName = data.length > 0 ? data[0].substring(2) : '';     
          console.log("emotionName: " + emotionName);
          e.stopPropagation();

          var tempEmotion = findEmotion(emotionName);
              
          console.log("tempEmotion: " + tempEmotion);
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