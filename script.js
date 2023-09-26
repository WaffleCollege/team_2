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
            image.src = "images/saya_team2.jpg"; //さやさんカフェ
        });
        explanations.forEach(explanation => {
            explanation.innerHTML = "ミルフィーユが大好物の私。<br> 姉に誕生日祝いに連れてきてもらいました！季節のフルーツを楽しめます。<br>オシャレな雰囲気は女子会にぴったりでした♪ （さや）\
            <br>季節のミルフィーユ: ¥1,980\
            <br>TREE by NAKED yoyogi park\
            <br>東京都渋谷区富ヶ谷間1-10-2\
            <br>代々木公園駅　徒歩1分";
        }
        ) ;
        }  else if (buttonNumber === 2) {
        images.forEach(image => {
            image.src = "images/haruka_team2.jpg";　//はるかさんカフェ
        });
        explanations.forEach(explanation => {
            explanation.innerHTML = "ハワイアンカフェ カプカふらっと入ったカフェのご飯が美味しそうで、ランチも注文してしまいました！\
            <br>もちろん味もとても美味しいです、内装も沖縄とハワイがかけ合わさってる感じでとても素敵でした！\
            <br>アメリカンビレッジと海のそばで立地も良かったです:ヤシの木:\
            <br>モチコチキンランチ　2000円\
            <br>沖縄県中頭郡北谷町美浜３４−３ デポセントラル地下 1階";
        }) ;
            }else if(buttonNumber === 3){
            images.forEach(image =>{
                image.src = "images/sumeli_team2.jpg";　//すめりさんカフェ
            });
             explanations.forEach(explanation =>{
             explanation.innerHTML ="テラス席でゆったり\
                パンケーキが大好物の私が選ぶランキングNo.1!\
                フードも種類が豊富で、ご飯にもちょっとした休憩にもぴったり！\
                テラス席では近くの公園の自然を眺めながらゆったりと過ごせます♪\
                ぷるぷるパンケーキ: ¥1,650\
                512cafe&grill 東京乃木坂\
                東京都港区赤坂9-5-12\
                乃木坂駅 徒歩4分\
                webサイト: https://512.tokyo";
            });
            }　else if(buttonNumber === 4){
                images.forEach(image =>{
                    image.src = "images/saikyo_team2.jpg";　//最強ちゃんカフェ
                });
            explanations.forEach(explanation =>{
            explanation.innerHTML = "恵比寿、横浜に展開するカフェ\
            <br> 名物は季節のフルーツが乗ったパンケーキですが、私は切ったら割れる\
            <br>フワフワのオムライスがオススメです。\
            <br>切る瞬間を動画におさめてもよし！\
            <br>デザートにパンケーキをシェアするもよし！です！\
            <br>オムライスとパンケーキとドリンクのSET ¥2200\
            <br>アクイーユ特製ふわとろ卵のオムライス\
            <br>～デミグラスソース～ ¥1430\
            <br>東京都渋谷区恵比寿西2-10-10\
            <br> 山手線/日比谷線 恵比寿駅　徒歩4分 / 東横線 代官山駅　徒歩5分\
            <br>café accueil Ebisu\
            <br>カフェアクイーユ恵比寿\
            <br>公式サイト : https://accueil.co.jp";
            });
        　　} else if(buttonNumber === 5){
            　　images.forEach(image =>{
                　image.src = "images/ika_team2.jpg";　//いかさんカフェ
            });
            explanations.forEach (explanation =>{
            explanation.innerHTML = "ふらっと寄りたい気分\
            <br>商店街の中にある入りやすい雰囲気のカフェ。\
            <br>名物は巨大ソフトクリームですが私がおすすめするのはクレープ！クレープ生地にシュガーバターというシンプルな組み合わせが最高です。\
            <br>ミニソフトの追加なども◎\
            <br>四つ葉バターとシュガー　¥550\
            <br>東京都品川区平塚3-4-2 戸越銀座商店街内\
            <br> シロクマカフェ"
            });
        }
    }
     // 他のボタンに対する処理も追加


    // 画像とテキストを表示
    images.forEach(image => {
        image.style.display = "block";
    });
    explanations.forEach(explanation => {
        explanation.style.display = "block";
    });


