from cryptography.fernet import Fernet

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
    f = _get_fernent(item)
    return f.decrypt(password)