# 9. Função calcular_pagamento
def calcular_pagamento(horas_trabalhadas, taxa_hora):
    """
    Calcula o pagamento total com base nas horas trabalhadas e taxa horária.
    
    Args:
        horas_trabalhadas (int ou float): Número de horas trabalhadas.
        taxa_hora (int ou float): Valor por hora.
    
    Returns:
        float: Pagamento total.
    """
    return horas_trabalhadas * taxa_hora