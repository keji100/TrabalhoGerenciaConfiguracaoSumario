function contains(verbeteCadastrado, verbetePesquisado) {
    return verbeteCadastrado.toLowerCase().indexOf(verbetePesquisado.toLowerCase()) != -1;
}

$("#searchText").keyup(function(){
    var searchText = $(this).val();
    $(".trigger").each(function() {
        $(this).toggle(contains($(this).text(), searchText));
    });
});

$(function() {
    $('.trigger').click(function() {
        $(this).next('.toggle').slideToggle();
        return !1
    });
});
var visible = !1;