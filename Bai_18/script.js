$(document).ready(function(){

    // Hàm cập nhật số thứ tự
    function updateNumber(){

        $("#memberList li").each(function(index){

            $(this)
            .find(".number")
            .text(index + 1);
        });

    }

    // Thêm thành viên
    $("#addBtn").click(function(){

        let name = $("#memberName").val();

        if(name.trim() === ""){
            alert("Vui lòng nhập tên!");
            return;
        }

        let item = `
            <li>

                <div class="member-info">

                    <span class="number"></span>.
                    <span class="member-text">${name}</span>

                </div>

                <div class="action-buttons">

                    <button class="editBtn">
                        Sửa
                    </button>

                    <button class="deleteBtn">
                        Xóa
                    </button>

                </div>

            </li>
        `;

        $("#memberList").append(item);

        $("#memberName").val("");

        updateNumber();
    });

    // Xóa
    $("#memberList").on(
        "click",
        ".deleteBtn",
        function(){

            $(this)
            .closest("li")
            .remove();

            updateNumber();
        }
    );

    // Sửa
    $("#memberList").on(
        "click",
        ".editBtn",
        function(){

            let currentText =
                $(this)
                .closest("li")
                .find(".member-text")
                .text();

            let newText =
                prompt(
                    "Nhập tên mới:",
                    currentText
                );

            if(
                newText !== null &&
                newText.trim() !== ""
            ){

                $(this)
                .closest("li")
                .find(".member-text")
                .text(newText);
            }

        }
    );

    // Tìm kiếm realtime
    $("#searchInput").on(
        "keyup",
        function(){

            let keyword =
                $(this)
                .val()
                .toLowerCase();

            $("#memberList li").filter(function(){

                $(this).toggle(

                    $(this)
                    .text()
                    .toLowerCase()
                    .indexOf(keyword) > -1
                );

            });

        }
    );

});