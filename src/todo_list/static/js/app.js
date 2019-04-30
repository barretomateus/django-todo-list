$(document).ready(function () {
    $('#add-button').click(function () {
        var atividade = $('#add-input').val(),
            csrfCookie = Cookies.get('csrftoken');

        $.ajax({
            url: 'add_atividade',
            type: 'POST',
            headers: { 'X-CSRFToken': csrfCookie },
            data: { atividade: atividade },
            success: function (data) {
                var $tr = $('<tr>'), $th = $('<th>'), $td = $('<td>');

                $th.prop('scope', 'row');
                $th.html(data.id);
                $td.html(data.descricao);

                $tr.append($th, $td);

                $('tbody').append($tr);
            },
        });
    });
});
