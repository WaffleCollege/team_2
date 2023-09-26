const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const imageContainer = document.getElementById("image-container");
const image = document.getElementById("images");
const text = document.getElementById("explanation");

//button1が押されたとき
button1.addEventListener("click",function(){
    image.src = "images/saya_team2.jpg";
    text.textContent = "ミルフィーユが大好物の私。\
    姉に誕生日祝いに連れてきてもらいました！\
    <br>季節のフルーツを楽しめます。\
    オシャレな雰囲気は女子会にぴったりでした♪ （さや）\
    季節のミルフィーユ: ¥1,980\
    TREE by NAKED yoyogi park\
    東京都渋谷区富ヶ谷間1-10-2\
    代々木公園駅　徒歩1分"
})

    imageContainer.style.display = "block";

//button2が押されたとき
button2.addEventListener("click",function(){
    image.src = "images/haruka_team2.jpg";
    text.textContent = "ハワイアンカフェ カプカ\
    ふらっと入ったカフェのご飯が美味しそうで、ランチも注文してしまいました！\
    もちろん味もとても美味しいです、内装も沖縄とハワイがかけ合わさってる感じでとても素敵でした！\
    アメリカンビレッジと海のそばで立地も良かったです:ヤシの木:\
    モチコチキンランチ　2000円\
    沖縄県中頭郡北谷町美浜３４−３ デポセントラル地下 1階"
})

    imageContainer.style.display = "block";

//button3が押されたとき
button3.addEventListener("click",function(){
    image.src = "images/sumeli_team2.jpg";
    text.textContent = "テラス席でゆったり\
    パンケーキが大好物の私が選ぶランキングNo.1!\
    フードも種類が豊富で、ご飯にもちょっとした休憩にもぴったり！\
    テラス席では近くの公園の自然を眺めながらゆったりと過ごせます♪\
    ぷるぷるパンケーキ: ¥1,650\
    512cafe&grill 東京乃木坂\
    東京都港区赤坂9-5-12\
    乃木坂駅 徒歩4分\
    webサイト: https://512.tokyo\
})

    imageContainer.style.display = "block";
