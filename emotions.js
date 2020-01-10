
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
        }
        else
        {
            var emotionPicSpan = document.createElement('span');
            emotionPicSpan.innerHTML = emotions[i].description;
            emotionPic.appendChild(emotionPicSpan);
        }
        emotionItemList.appendChild(emotionPic);
        emotionsList.appendChild(emotionItemList);
    }
}

document.body.onload = paintEmotions();
