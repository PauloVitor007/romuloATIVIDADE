# 11. Função contagem de maiúsculas e minúsculas
def contagem_letras(s):
    """
    Conta o número de letras maiúsculas e minúsculas em uma string.
    
    Args:
        s (str): String a ser analisada.
    
    Returns:
        tuple: Número de maiúsculas e minúsculas (maiusculas, minusculas).
    """
    maiusculas = sum(1 for c in s if c.isupper())
    minusculas = sum(1 for c in s if c.islower())
    return maiusculas, minusculas

# 12. Função len_custom