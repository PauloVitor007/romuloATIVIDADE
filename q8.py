# 8. Função validar_email
def validar_email(email):
    """
    Verifica se uma string representa um email válido.
    
    Regras:
        - Deve conter exatamente um arroba.
        - Não pode conter espaços.
        - Deve terminar com '.com'.
    
    Args:
        email (str): String a ser verificada.
    
    Returns:
        bool: True se o email for válido, caso contrário False.
    """
    return email.count("@") == 1 and email.endswith(".com") and " " not in email