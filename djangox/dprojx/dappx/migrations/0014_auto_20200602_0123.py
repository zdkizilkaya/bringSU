# Generated by Django 3.0.5 on 2020-06-01 23:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dappx', '0013_auto_20200601_2301'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orders',
            name='details',
        ),
        migrations.AddField(
            model_name='orders',
            name='details',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dappx.cartItem'),
        ),
    ]
