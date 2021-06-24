$(home).click(function () {
    location.href = "../index.html";
})

$(list).click(function () {
    location.href = "../List/list.html?type=list";
})

$(schedule).click(function () {
    location.href = "../Schedule/schedule.html?type=schedule";
})

$(opensource).click(function () {
    location.href = "../Opensource/openSource.html?type=opensource";
})

$(value).click(function () {
    location.href = "../ValueDiffusion/valueDiffusion.html?type=value";
})

const triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'));
triggerTabList.forEach(function (triggerEl) {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})

function loaded() {
    let ul_list; //ul_list선언
    const swFileName = "../assets/sw_value.csv";
    const aiFileName = "../assets/ai_value.csv";

    $.ajax({
        url: swFileName,
        dataType: 'text',
        success: function (data) {
            const allRow = data;
            let allData = "";

            for (let singleRow = 0; singleRow < allRow.length; singleRow++) {
                allData += allRow[singleRow];
            }

            const rowArr = allData.split('\n');
            const textArr = new Array(rowArr.length);

            for (let num = 0; num < rowArr.length; num++) {
                textArr[num] = CSVtoArray(rowArr[num]);

                if (textArr[num][0] !== undefined) {
                    const project_name = textArr[num][1];
                    const members_name = textArr[num][2];
                    const url = textArr[num][3];
                    const url2 = textArr[num][4];

                    ul_list = $("#sw-data");
                    ul_list.append(`<div class="row m-2" id="data-group">
                                        <div class="col-md-10 mt-2 mb-2">
                                            <a href="#" class="text-success text-decoration-none mb-2 fw-bold h4"
                                            id = "${project_name}">${project_name}</a>
                                            <p class="mb-0 small">${members_name}</p>
                                            <div>
                                                <a class="text-secondary small" href="${url}" target="_blank">${url}</a>
                                            </div>
                                            <div>
                                                <a class="text-secondary small" href="${url2}" target="_blank">${url2}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>`)
                }
            }
        }
    });

    $.ajax({
        url: aiFileName,
        dataType: 'text',
        success: function (data) {
            const allRow = data;
            let allData = "";

            for (let singleRow = 0; singleRow < allRow.length; singleRow++) {
                allData += allRow[singleRow];
            }

            const rowArr = allData.split('\n');
            const textArr = new Array(rowArr.length);

            for (let num = 0; num < rowArr.length; num++) {
                textArr[num] = CSVtoArray(rowArr[num]);

                if (textArr[num][0] !== undefined) {
                    const project_name = textArr[num][1];
                    const members_name = textArr[num][2];
                    const url = textArr[num][3];
                    const url2 = textArr[num][4];

                    ul_list = $("#ai-data");
                    ul_list.append(`<div class="row m-2" id="data-group">
                                        <div class="col-md-10 mt-2 mb-2">
                                            <a href="#" class="text-success text-decoration-none mb-2 fw-bold h4"
                                            id = "${project_name}">${project_name}</a>
                                            <p class="mb-0 small">${members_name}</p>
                                            <div>
                                                <a class="text-secondary small" href="${url}" target="_blank">${url}</a>
                                            </div>
                                            <div>
                                                <a class="text-secondary small" href="${url2}" target="_blank">${url2}</a>
                                            </div>
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
