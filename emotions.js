/*var Emotion = function(name, description, isPic = true) {
    this.name = name;
    this.description = description;
    this.isPic = isPic;
};*/

/*var emotions = [
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
];*/

function paintEmotions() {

    var emotionsList = document.getElementById("emotions-list");
    emotionsList.innerHTML = "";
    for (var i = 0; i < emotions.length; i++) {
        var emotionItemList = document.createElement('div');
        emotionItemList.className = 'emotion-item-list';

        var emotionName = document.createElement('div');
        emotionName.className = 'emotion-name';

        var emotionNameSpan = document.createElement('span');
        emotionNameSpan.innerHTML = '##' + emotions[i].name;
        emotionName.appendChild(emotionNameSpan);

        emotionItemList.appendChild(emotionName);

        var emotionPic = document.createElement('div');
        emotionPic.className = 'emotion-pic-wrapper';

        if(emotions[i].isPic == true)
        {
            

            var emotionPicIMG = document.createElement('img');
            emotionPicIMG.className = 'pics';
            emotionPicIMG.src = emotions[i].description;
            emotionPic.appendChild(emotionPicIMG);

            emotionItemList.appendChild(emotionPic);
        }
        else
        {
            var emotionPicSpan = document.createElement('span');
            emotionPicSpan.innerHTML = emotions[i].description;
            emotionPic.appendChild(emotionPicSpan);

            emotionItemList.appendChild(emotionPic);
        }
        emotionsList.appendChild(emotionItemList);
    }
}

document.body.onload = paintEmotions();