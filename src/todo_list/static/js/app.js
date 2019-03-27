$(document).ready(function () {
    $('#add-button').click(function () {
        var atividade = $('#add-input').val(),
            csrfCookie = Cookies.get('csrftoken');
        console.log(atividade);
        $.ajax({
            url: 'add_atividade',
            type: 'POST',
            headers: { 'X-CSRFToken': csrfCookie },
            data: { atividade: atividade },
            success: function (data) {
                console.log(data);
            },
        });
    });
});
