from django.db import models
from sqlalchemy import null
from django.core.validators import RegexValidator

class employee(models.Model):
    country_choices = [
    ('col', 'Colombia'),
    ('usa', 'Estados unidos'),
    ]

    area_choices = [
        ('adm', 'Administracion'),
        ('fin', 'Financiera'),
        ('com', 'Compras'),
        ('inf', 'Infraestructura'),
        ('ope', 'Operacion'),
        ('tal', 'Talento humano'),
        ('ser', 'Servicios varios'),
        ('otr', 'Otros')
    ]

    type_id_choices = [
        ('cc', 'Cedula de ciudadania'),
        ('ce', 'Cedula de extranjeria'),
        ('pp', 'Pasaporte'),
        ('pe', 'Permiso Especial')
    ]
    last_name = models.CharField('Primer apellido', max_length=20, validators=[
        RegexValidator(
            regex='^[A-Z ]*$',
            message='Last name must contain only letters from A to Z(uppercase), no ñ, no accents.',
            code='invalid_lastname'
        ),
    ], blank=False, null=False)

    second_last_name = models.CharField('Segundo apellido', max_length=20, validators=[
        RegexValidator(
            regex='^[A-Z]*$',
            message='Second last name must contain only letters from A to Z(uppercase), no ñ, no accents.',
            code='invalid_second_last_name'
        ),
    ], blank=False, null=False)

    first_name = models.CharField('Primer nomber', max_length=20, validators=[
        RegexValidator(
            regex='^[A-Z]*$',
            message='First name must contain only letters from A to Z(uppercase), no ñ, no accents.',
            code='invalid_firstname'
        ),
    ], blank=False, null=False)

    other_name = models.CharField('Otros nombres', max_length=50, validators=[
        RegexValidator(
            regex='^[A-Z]*$',
            message='Other name must contain only letters from A to Z(uppercase), no ñ, no accents.',
            code='invalid_othername'
        ),
    ], blank=True)

    id_type = models.CharField('Tipo de identificacion', choices=type_id_choices, max_length=2, blank=False, null=False)
    country = models.CharField('Pais de empleo', max_length=3, choices=country_choices, blank=False, null=False)
    id_number = models.CharField('Numero de identificacion', max_length=20, validators=[
        RegexValidator(
            regex='^[a-zA-Z0-9\-]*$',
            message='id_number only accept letters from a to z, A to Z, numbers or hyphen minus',
            code='invalid_id_number'
        ),
    ], unique=True, blank=False, null=False)
    email = models.EmailField('Correo electronico', null=False, blank=False)
    state = models.BooleanField('Estado', default = True)
    entry_date = models.DateField('Fecha de Ingreso', auto_now=False, auto_now_add=True)
    area = models.CharField('Area', max_length=3, choices=area_choices, blank=False, null=False)


    class Meta:
        verbose_name = 'Empleado'
        verbose_name_plural = 'Empleados'

    def __str__(self):
        return "Empleado con id {}, {} {}".format(self.id, self.first_name, self.last_name)


