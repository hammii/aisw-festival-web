$(function() {
    var fileName = "assets/test.csv";

    $.ajax({
        url:fileName,
        dataType:'text',
        success: function(data) {
            var allRow = data;
            var textLine = "";

            for(var singleRow = 0; singleRow < allRow.length; singleRow++) {
                var collapse = allRow[singleRow].split('\\n');
                console.log(collapse);

                for(var count = 0; count < allRow.length; count++) {
                    if(collapse[count] === " ")
                        console.log("ㅎㅇ");

                    textLine += collapse[count];

                }
            }

            $("#textArea").append(collapse);
        }
    });
});

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
