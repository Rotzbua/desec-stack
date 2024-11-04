# Generated by Django 5.1.2 on 2024-11-01 14:29

import django.db.migrations.operations.special
from django.db import migrations, models


def forwards_func(apps, schema_editor):
    Token = apps.get_model("desecapi", "Token")
    db_alias = schema_editor.connection.alias
    Token.objects.using(db_alias).filter(tokendomainpolicy__isnull=True).update(
        perm_create_domain=True, perm_delete_domain=True
    )


class Migration(migrations.Migration):

    dependencies = [
        ("desecapi", "0038_user_throttle_daily_rate"),
    ]

    operations = [
        migrations.AddField(
            model_name="token",
            name="perm_create_domain",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="token",
            name="perm_delete_domain",
            field=models.BooleanField(default=False),
        ),
        migrations.RunPython(
            code=forwards_func,
            reverse_code=django.db.migrations.operations.special.RunPython.noop,
        ),
    ]
