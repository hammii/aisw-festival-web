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
