import favicon

from django.core.files import File
from cryptography.fernet import Fernet
from tempfile import NamedTemporaryFile
from urllib.request import urlopen


def _get_fernent(item):
    key = item.user.config.key
    return Fernet(key.encode())

def generate_key():
    key = Fernet.generate_key() 
    return key.decode()


def encrypt_password(item):
    password = item.password.encode()
    f = _get_fernent(item)
    return f.encrypt(password)


def decrypt_password(item):
    password = item.password.encode()
    try:
        f = _get_fernent(item)
        return f.decrypt(password)
    except Exception as exc:
        print(exc)

def create_item_icon(item):
    icons = favicon.get(item.url)
    icon = icons[0]
    temp = NamedTemporaryFile(delete=True)
    temp.write(urlopen(icon.url).read())
    temp.flush()
    item.icon.save(f"icon-{item.id}.png", File(temp))
    item.save()

class ItemMixins:

    def _get_fernent(self, item):
        key = item.user.config.key
        return Fernet(key.encode())  

    def encrypt_password(self, item, password):
        password = password.encode()
        f = self._get_fernent(item)
        return f.encrypt(password)
    