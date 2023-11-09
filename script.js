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

const images = document.querySelectorAll(".images");
const explanations = document.querySelectorAll(".explanation");
const cards = document.getElementsByClassName("card");


// 一覧表示機能　さや担当
// GASのURLを渡してfetchファンクションを呼ぶ、最強ちゃんからURLをもらう
// fetch(
//     `【ここに公開したWebアプリケーションURL】`,
//     {
//       method: "GET"
//     }
//   )
//     // データを取得した場合
//     .then(function(data) {
//       console.log(data);
//     })
//     // サーバーがエラーを返した場合
//     .catch(function(error) {
//       console.log(error);
//     });

function makeCard(allData){
      
    for(let i = 0; i < allData.length; i++){
        //要素を複製
        let newCard = cards[i].cloneNode(true);
        //複製した要素を編集
        let cardTitle = newCard.querySelector("h5");
        cardTitle.innerHTML = allData[i].title;
        let cardImage = newCard.querySelector("img");
        cardImage.src = allData[i].image;
        let cardExplanation = newCard.querySelector("p");
        cardExplanation.innerHTML = allData[i].explanation;
        let cardLink = newCard.querySelector("a");
        cardLink.href = allData[i].link;

        //最新の情報を一番上に更新
        cards[0].before(newCard);
    }
    //複製元のフォーマットは非表示
    cards[cards.length-1].style.display = "none";
}

// test用データ,　GASのデータに変更
const dataFromGAS = [
    {image:"images/saya_team2.jpg",
    title:"ミルフィーユが大好物の私。",
    explanation:"<br> 姉に誕生日祝いに連れてきてもらいました！\
    <br>季節のフルーツを楽しめます。<br>オシャレな雰囲気は女子会にぴったりでした♪ \
    <br><br>季節のミルフィーユ: ¥1,980\
    <br><br>TREE by NAKED yoyogi park\
    <br>東京都渋谷区富ヶ谷間1-10-2\
    <br> <br>代々木公園駅　徒歩1分",
    link:"https://maps.app.goo.gl/jTgMiuuAVFuBTL2H8"},

    {image:"images/haruka_team2.jpg",
    title:"ハワイアンカフェ カプカ",
    explanation:"ハワイアンカフェ。\
    <br>カプカふらっと入ったカフェのご飯が美味しそうで、ランチも注文してしまいました！\
    <br>もちろん味もとても美味しいです、内装も沖縄とハワイがかけ合わさってる感じでとても素敵でした！\
    <br>アメリカンビレッジと海のそばで立地も良かったです!!\
    <br><br>モチコチキンランチ　2000円\
    <br><br>沖縄県中頭郡北谷町美浜３４−３ デポセントラル地下 1階",
    link:"https://maps.app.goo.gl/GUpabM3sGhrTGEMt9"},

];

makeCard(dataFromGAS);

// 以上、さや編集

function changeImage(buttonNumber) {

    // ボタンに応じて画像とテキストを変更
    if (buttonNumber === 1) {
        images.forEach(image => {
            image.src = "images/saya_team2.jpg"; //さやさんカフェ
        });
        explanations.forEach(explanation => {
            explanation.innerHTML = "ミルフィーユが大好物の私。<br> 姉に誕生日祝いに連れてきてもらいました！\
            <br>季節のフルーツを楽しめます。<br>オシャレな雰囲気は女子会にぴったりでした♪ \
            <br><br>季節のミルフィーユ: ¥1,980\
            <br><br>TREE by NAKED yoyogi park\
            <br>東京都渋谷区富ヶ谷間1-10-2\
            <br> <br>代々木公園駅　徒歩1分";
        }
        ) ;
        }  else if (buttonNumber === 2) {
        images.forEach(image => {
            image.src = "images/haruka_team2.jpg";　//はるかさんカフェ
        });
        explanations.forEach(explanation => {
            explanation.innerHTML = "ハワイアンカフェ。\
            <br>カプカふらっと入ったカフェのご飯が美味しそうで、ランチも注文してしまいました！\
            <br>もちろん味もとても美味しいです、内装も沖縄とハワイがかけ合わさってる感じでとても素敵でした！\
            <br>アメリカンビレッジと海のそばで立地も良かったです!!\
            <br><br>モチコチキンランチ　2000円\
            <br><br>沖縄県中頭郡北谷町美浜３４−３ デポセントラル地下 1階";
        }) ;
            }else if(buttonNumber === 3){
            images.forEach(image =>{
                image.src = "images/sumeli_team2.jpg";　//すめりさんカフェ
            });
             explanations.forEach(explanation =>{
             explanation.innerHTML ="テラス席でゆったり\
             <br> パンケーキが大好物の私が選ぶランキングNo.1!\
             <br> フードも種類が豊富で、ご飯にもちょっとした休憩にもぴったり！\
             <br> テラス席では近くの公園の自然を眺めながらゆったりと過ごせます♪\
             <br><br>  ぷるぷるパンケーキ: ¥1,650\
             <br><br>  512cafe&grill 東京乃木坂\
             <br>  東京都港区赤坂9-5-12\
             <br><br>  乃木坂駅 徒歩4分\
             <br>  webサイト: https://512.tokyo";
            });
            }　else if(buttonNumber === 4){
                images.forEach(image =>{
                    image.src = "images/saikyo_team2.jpg";　//最強ちゃんカフェ
                });
            explanations.forEach(explanation =>{
            explanation.innerHTML = "恵比寿、横浜に展開するカフェ。\
            <br> 名物は季節のフルーツが乗ったパンケーキですが、私は切ったら割れる\
            <br>フワフワのオムライスがオススメです。\
            <br>切る瞬間を動画におさめてもよし！\
            <br>デザートにパンケーキをシェアするもよし！です！\
            <br><br>オムライスとパンケーキとドリンクのSET ¥2200\
            <br>アクイーユ特製ふわとろ卵のオムライス～デミグラスソース～ ¥1430\
            <br><br>東京都渋谷区恵比寿西2-10-10\
            <br><br> 山手線/日比谷線 恵比寿駅　徒歩4分 / 東横線 代官山駅　徒歩5分\
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
            <br>名物は巨大ソフトクリームですが私がおすすめするのはクレープ！\
            <br>クレープ生地にシュガーバターというシンプルな組み合わせが最高です。\
            <br>ミニソフトの追加なども◎\
            <br> <br>四つ葉バターとシュガー　¥550\
            <br><br>東京都品川区平塚3-4-2 戸越銀座商店街内\
            <br> シロクマカフェ"
            });
        }
    }
     // 他のボタンに対する処理も追加

// DOMが読み込まれた後に実行するコード
document.addEventListener('DOMContentLoaded', function() {
    // ここにDOM操作やイベントリスナーの設定を行うコードを書く
    var stickyButton = new Sticky('.sticky');
});
