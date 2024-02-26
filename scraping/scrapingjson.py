import requests
import json

# URL de la página web para hacer scraping
url = 'https://api.github.com/users/ggomez0/repos'

# solicitud HTTP a la página
response = requests.get(url)

# si la solicitud fue exitosa, extrae el contenido JSON
if response.status_code == 200:
    # Cargar el contenido JSON de la respuesta
    data = response.json()
    
    # Guarda los datos en un archivo JSON
    with open('data.json', 'w') as json_file:
        json.dump(data, json_file, indent=2)
else:
    print(f'Error al realizar la solicitud. Código de estado: {response.status_code}')
