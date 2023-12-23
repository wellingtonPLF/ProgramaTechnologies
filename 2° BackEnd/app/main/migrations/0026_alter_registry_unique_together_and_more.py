# Generated by Django 4.2.1 on 2023-12-22 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0025_alter_registry_updatedate'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='registry',
            unique_together=set(),
        ),
        migrations.AddConstraint(
            model_name='registry',
            constraint=models.UniqueConstraint(fields=('user', 'game'), name='unique_user_game'),
        ),
    ]
