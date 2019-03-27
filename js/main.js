$( document ).ready(function() {
    $(".toggPreg3").click(function() {
        $(".innerTextPreg3").toggleClass('open');
        $(".open .empadrInner").toggleClass('enviameCorreo');
    });
    $(".bottonToggAcc").click(function() {
        $(this).toggleClass('open');
    });
    $(".toggEmpadronamiento").click(function() {
        $(".empadronamientoFather").toggleClass('open');
    });
});