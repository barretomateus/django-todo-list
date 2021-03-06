import json

from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import TodoList


def index(request):
    atividades = TodoList.objects.all()
    context = {
        'atividades': list(atividades)
    }

    return render(request, 'todo_list/index.html', context)


@csrf_exempt
def add_atividade(request):
    descricao_atividade = request.POST['atividade']
    atividade = TodoList(descricao=descricao_atividade)

    atividade.save()

    return HttpResponse(
        json.dumps({
            'descricao': atividade.descricao,
            'id': atividade.pk
        }),
        content_type='aplication/json',
        status=200
    )


@csrf_exempt
def remove_atividade(request):
    pass
