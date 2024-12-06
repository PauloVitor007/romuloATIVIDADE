def saudacao_personalizada(nome, idioma="inglês"):
    if idioma.lower() == "inglês":
        return f"Hello, {nome}!"
    elif idioma.lower() == "português":
        return f"Olá, {nome}!"
    elif idioma.lower() == "espanhol":
        return f"¡Hola, {nome}!"
    elif idioma.lower() == "francês":
        return f"Bonjour, {nome}!"
    else:
        return f"Saudação não disponível para o idioma: {idioma}."

print(saudacao_personalizada("Paulo")) 
print(saudacao_personalizada("Paulo", "português"))
print(saudacao_personalizada("Paulo", "espanhol"))
print(saudacao_personalizada("Paulo", "francês"))
print(saudacao_personalizada("Paulo", "alemão"))