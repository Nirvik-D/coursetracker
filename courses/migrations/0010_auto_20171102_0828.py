# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-02 15:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0009_auto_20171102_0739'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='deactivation_datetime',
            new_name='deactivation_time',
        ),
        migrations.AddField(
            model_name='course',
            name='creation_time',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='course',
            name='activated',
            field=models.BooleanField(default=True, help_text='Deactivated courses still appear in history, but cannot be reactivated.'),
        ),
    ]
