# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-02 14:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0008_auto_20171102_0736'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='deactivation_datetime',
            field=models.DateTimeField(null=True),
        ),
    ]
