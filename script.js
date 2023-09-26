function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}



function changeImage(buttonNumber) {
    const images = document.querySelectorAll(".images");
    const explanations = document.querySelectorAll(".explanation");

    // ボタンに応じて画像とテキストを変更
    if (buttonNumber === 1) {
        images.forEach(image => {
            image.src = "images/saya_team2.jpg";
        });
        explanations.forEach(explanation => {
            explanation.innerHTML = "ミルフィーユが大好物の私。<br> 姉に誕生日祝いに連れてきてもらいました！季節のフルーツを楽しめます。<br>オシャレな雰囲気は女子会にぴったりでした♪ （さや）\
            <br>季節のミルフィーユ: ¥1,980\
            <br>TREE by NAKED yoyogi park\
            <br>東京都渋谷区富ヶ谷間1-10-2\
            <br>代々木公園駅　徒歩1分";
        }
        );
    } else if (buttonNumber === 2) {
        images.forEach(image => {
            image.src = "images/haruka_team2.jpg";
        });
        explanations.forEach(explanation => {
            explanation.innerHTML = "ハワイアンカフェ カプカふらっと入ったカフェのご飯が美味しそうで、ランチも注文してしまいました！\
            <br>もちろん味もとても美味しいです、内装も沖縄とハワイがかけ合わさってる感じでとても素敵でした！\
            <br>アメリカンビレッジと海のそばで立地も良かったです:ヤシの木:\
            <br>モチコチキンランチ　2000円\
            <br>沖縄県中頭郡北谷町美浜３４−３ デポセントラル地下 1階";
        });
        else if(buttonNumber === 3){
            images.forEach(explanation =>{
                explanation.innerHTML ="テラス席でゆったり\
                パンケーキが大好物の私が選ぶランキングNo.1!\
                フードも種類が豊富で、ご飯にもちょっとした休憩にもぴったり！\
                テラス席では近くの公園の自然を眺めながらゆったりと過ごせます♪\
                ぷるぷるパンケーキ: ¥1,650\
                512cafe&grill 東京乃木坂\
                東京都港区赤坂9-5-12\
                乃木坂駅 徒歩4分\
                webサイト: https://512.tokyo\
            })"
            })
        }
    } // 他のボタンに対する処理も追加


    // 画像とテキストを表示
    images.forEach(image => {
        image.style.display = "block";
    });
    explanations.forEach(explanation => {
        explanation.style.display = "block";
    });
}

