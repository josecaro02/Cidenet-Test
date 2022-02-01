from django.db import models

class id_type(models.Model):
    type_id = models.CharField('Tipo de idenficiacion', max_length=255, null=False, blank=False)

    class Meta:
        verbose_name = 'Tipo de ID'
        verbose_name_plural = 'Tipos de ID'

    def __str__(self):
        return "Tipo de identificacion: {}".format(self.id, self.type_id)
