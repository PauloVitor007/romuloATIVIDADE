# 6. Função idade_valida
def idade_valida(idade):
    """
    Verifica se a idade fornecida é válida (entre 0 e 150).
    
    Args:
        idade (int): Idade a ser verificada.
    
    Returns:
        bool: True se a idade for válida, caso contrário False.
    """
    return isinstance(idade, int) and 0 <= idade <= 150