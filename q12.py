def len_custom(iteravel):
    """
    Calcula o comprimento de um iterável.
    
    Args:
        iteravel (iterável): Iterável para o qual o comprimento será calculado.
    
    Returns:
        int: Comprimento do iterável.
    """
    comprimento = 0
    for _ in iteravel:
        comprimento += 1
    return comprimento