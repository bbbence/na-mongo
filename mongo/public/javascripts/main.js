var deleteButtons = document.querySelectorAll(".delete-user-btn");
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function(ev) {
        if ( !confirm("Biztosan törli a bejegyzést?") ) {
            ev.preventDefault();
        }
    });
}