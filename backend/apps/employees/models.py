from django.db import models
from apps.id_type.models import id_type

class employee(models.Model):
    country_choices = [
    ('col', 'Colombia'),
    ('usa', 'Estados unidos'),
    ]
    last_name = models.CharField('Primer apellido', max_length=20, blank=False, null=False)
    second_last_name = models.CharField('Segundo apellido', max_length=20, blank=False, null=False),
    first_name = models.CharField('Primer nomber', max_length=20, blank=False, null=False)
    other_name = models.CharField('Otros nombres', max_length=50, blank=True)
    id_type = models.ForeignKey(to = id_type, on_delete=models.CASCADE)
    country = models.CharField('Pais de empleo', max_length=3, choices=country_choices, blank=False, null=False)
    id_number = models.CharField('Numero de identificacion', max_length=20, unique=True, blank=False, null=False)
    email = models.EmailField('Correo electronico', null=False, blank=False)

    class Meta:
        verbose_name = 'Empleado'
        verbose_name_plural = 'Empleados'

    def __str__(self):
        return "Empleado con id {}, {} {}".format(self.id, self.first_name, self.last_name)


