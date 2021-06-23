function load() {

    let sch = decodeURI(location.search);

    let params = new URLSearchParams(sch);
    let sch_keyword = params.get('email');
    console.log(sch_keyword);

    let fileName = "../assets/sheet.csv";

    let sub = document.getElementById("subject");
    let team_name = document.getElementById("team_name");
    let player_name = document.getElementById("player_name");
    let abstract = document.getElementById("abstract");

    $.ajax({
        url: fileName,
        dataType: 'text',
        success: function (data) {
            var allRow = data;
            var allData = "";

            for (var singleRow = 0; singleRow < allRow.length; singleRow++) {
                allData += allRow[singleRow];
            }

            var rowArr = allData.split('\n');
            var textArr = new Array(rowArr.length);

            for (var num = 0; num < rowArr.length; num++) {
                textArr[num] = CSVtoArray(rowArr[num]);

                if (textArr[num][0] !== undefined && num > 0) {
                    var email = textArr[num][1];

                    if (email == sch_keyword){
                        var subject = textArr[num][0];
                        sub.append(subject);

                        var project_name = textArr[num][2];
                        team_name.append(project_name);

                        var members_name = textArr[num][3];
                        player_name.append(members_name);

                        var abst = textArr[num][4];
                        abstract.append(abst);

                        var youtube = textArr[num][5];
                        var git = textArr[num][6];
                        $("#github").append(`<a href ="${git}"> ${git} </a>`);

                        var tag = document.createElement('script');
                        tag.src = "https://www.youtube.com/iframe_api";
                        var firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                        var player;
                        onYouTubeIframeAPIReady(youtube);

                        break;
                    }

                }
            }
        }
    });
}

function onYouTubeIframeAPIReady(url){

    var id = url.split("/");
    player = new YT.Player('player', {
        videoId: id[3],
        playerVars:{
            'modestbranding': 1,
            'autoplay': 0,
            'controls': 1,
            'showinfo': 1,
            'rel':0,
            'loop':0
        },
        events:{
            'onError': onPlayerError
        }
    });
}
function onPlayerError(event) {
    console.log(event.data);
}

function CSVtoArray(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    //Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = []; //Initialize array to receive values.
    text.replace(re_value, //"Walk" the string using replace with callback.
        function (m0, m1, m2, m3) {
            //Remove backslash from \' in single quoted values.
            if (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            //Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; //Return empty string.
        });
    //Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
}

window.addEventListener('DOMContentLoaded', event => {

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(home).click(function () {
    location.href = "../index.html";
})

$(list).click(function(){
    location.href="../List/list.html?type=list";
})

$(schedule).click(function(){
    location.href="../Schedule/schedule.html?type=schedule";
})

// 나중에 오픈소스 창 생기면 추가
// $(opensource).click(function (){
//     location.href="showDetails.html?type=detail";
// })


// 나중에 가치확산 창 생기면 추가
// $(value).click(function (){
//     location.href="showDetails.html?type=detail";
// })