# Generated by Django 3.0.4 on 2020-03-14 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodrecipe', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='description',
            field=models.CharField(default='good', max_length=256),
            preserve_default=False,
        ),
    ]
