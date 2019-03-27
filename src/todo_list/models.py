from django.db import models

class TodoList(models.Model):
    descricao = models.CharField(max_length=255, null=False, blank=False)
    data_criacao = models.DateTimeField(auto_now_add=True)
    feito = models.BooleanField(default=False)