var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'));
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})

function loaded() {
    let ul_list; //ul_list선언
    const fileName = "../assets/sheet.csv";

    $.ajax({
        url: fileName,
        dataType: 'text',
        success: function (data) {
            const allRow = data;
            let allData = "";

            for (var singleRow = 0; singleRow < allRow.length; singleRow++) {
                allData += allRow[singleRow];
            }

            const rowArr = allData.split('\n');
            const textArr = new Array(rowArr.length);
            let mobile_cnt = 0;
            let gproject_cnt = 0;
            let cnt;

            for (var num = 0; num < rowArr.length; num++) {
                textArr[num] = CSVtoArray(rowArr[num]);

                if (textArr[num][0] !== undefined && num > 0) {
                    let subject = "";
                    const email = textArr[num][1];
                    const project_name = textArr[num][2];
                    const members_name = textArr[num][3];

                    switch (textArr[num][0]) {
                        case "모바일프로그래밍":
                            ul_list = $("#mobile-data");
                            subject = "MOBILE";
                            mobile_cnt += 1;
                            cnt = mobile_cnt;
                            break;
                        case "졸업작품3":
                            ul_list = $("#gproject-data");
                            subject = "GPROJECT";
                            gproject_cnt += 1;
                            cnt = gproject_cnt;
                            break;
                        default:
                            break;
                    }

                    ul_list.append(`<div class="row" id="data-group">
                                        <div class="col-md-2 align-self-center">
                                            <button type="button"
                                                    class="btn btn-primary btn-block btn-sm justify-content-center subject-name"
                                                    id = "${email}"
                                                    onclick="btnClickHandler(this)">${subject}-${cnt}
                                            </button>
                                        </div>
                                        <div class="col-md-10">
                                            <a href="#" class="text-primary text-decoration-none mb-0"
                                            id = "${email}"
                                            onclick="clickHandler(this)">${project_name}</a>
                                            <p class="mb-0 small">${members_name}</p>
                                        </div>
                                    </div>
                                    <hr/>`)
                }
            }
        }
    });
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
$(home).click(function (){
    location.href="../index.html";
})

$(list).click(function () {
    location.href = "../List/list.html?type=list";
})

$(schedule).click(function () {
    location.href = "../Schedule/schedule.html?type=schedule";
})

// 나중에 오픈소스 창 생기면 추가
// $(opensource).click(function (){
//     location.href="showDetails.html?type=detail";
// })

// project 클릭 리스너
function clickHandler(ths) {
    const text = $(ths)[0].id;
    location.href = "showDetails.html?email=" + text;
}
function btnClickHandler(ths) {
    const text = $(ths)[0].id;
    location.href = "showDetails.html?email=" + text;
}
