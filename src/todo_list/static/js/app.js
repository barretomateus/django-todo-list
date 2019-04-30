$(document).ready(function () {
    var getRowId, removeAtividade;

    getRowId = function (e) {
        var target = e.target,
            row = $(target).parents('tr')[0],
            id = $(row).children().first().html();

        return id;
    };

    removeAtividade = function (e) {
        var rowId = getRowId(e),
            csrfCookie = Cookies.get('csrftoken');;

        $.ajax({
            url: 'remove_atividade',
            type: 'POST',
            headers: { 'X-CSRFToken': csrfCookie },
            data: { id: rowId },
            success: function (data) {
                $(e.target).parents('tr')[0].remove();
            },
            error: function () {
                alert('Erro ao remover atividade!');
            }
        });

    }

    $('#add-button').click(function () {
        var atividade = $('#add-input').val(),
            csrfCookie = Cookies.get('csrftoken');

        $.ajax({
            url: 'add_atividade',
            type: 'POST',
            headers: { 'X-CSRFToken': csrfCookie },
            data: { atividade: atividade },
            success: function (data) {
                var $tr = $('<tr>'), $th = $('<th>'), $td = $('<td>'), $done = $('<button>'), $del = $('<button>'), $i;

                $th.prop('scope', 'row');
                $th.html(data.id);
                $td.html(data.descricao);

                $del.addClass('delete float-right btn btn-danger');
                $del.prop('type', 'button');
                $i = $('<i>').addClass('fas fa-trash-alt');
                $del.append($i);

                $td.append($del, $done);
                $tr.append($th, $td);

                $('tbody').append($tr);
            },
        });
    });

    $('.delete').on('click', removeAtividade);
});
