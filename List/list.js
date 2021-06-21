var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'));
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})

// $(document).bind('DOMSubtreeModified', function () {
//     console.log('changed');
//
//     var ul_list = $("#pills-tab"); //ul_list선언
//     ul_list.append(`<li class="flex-sm-fill text-sm-center nav-item" role="presentation">
//                         <button class="nav-link active w-100" id="pills-home-tab" data-bs-toggle="pill"
//                                 data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
//                                 aria-selected="true">로봇공학
//                         </button>
//                     </li>`); //ul_list안쪽에 li추가
// // }
// });

function loaded() {
    alert('hello')

    var ul_list = $("#pills-tab"); //ul_list선언
    ul_list.append(`<li class="flex-sm-fill text-sm-center nav-item" role="presentation">
                        <button class="nav-link active w-100" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">로봇공학
                        </button>
                    </li>`); //ul_list안쪽에 li추가
// }
}

$(function () {
    var fileName = "assets/test.csv";

    $.ajax({
        url: fileName,
        dataType: 'text',
        success: function (data) {
            var allRow = data;
            var allData = "";

            for (var singleRow = 0; singleRow < allRow.length; singleRow++) {
                allData += allRow[singleRow];
                // var collapse = allRow[singleRow].split('\\n');

                // for(var count = 0; count < allRow.length; count++) {
                //     if(collapse[count] === " ")
                //         console.log("ㅎㅇ");
                //
                //     textLine += collapse[count];
                // }
            }

            var rowArr = allData.split('\n');
            var textArr = new Array(rowArr.length);

            for (var num = 0; num < rowArr.length; num++) {
                textArr[num] = CSVtoArray(rowArr[num]);
            }
            console.log(textArr);

            $("#textArea").append(allData);

            // processData(data)
        }
    });

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

});
