# Generated by Django 3.0.5 on 2020-05-02 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20200414_0359'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='archive',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='config',
            name='key',
            field=models.CharField(default='p_Zyh0D_hx2-ZfkmCbtvP-ZiWX1EyHtjNRWepiRMbjk=', editable=False, max_length=200),
        ),
    ]
