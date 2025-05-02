from flask import Flask, request, jsonify
from flask_cors import CORS  # Importar CORS
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

# Habilitar CORS para todas las rutas
CORS(app)

@app.route('/enviar-mensaje', methods=['POST'])
def enviar_mensaje():
    try:
        # Recibir los datos del formulario
        datos = request.get_json()
        nombre = datos['nombre']
        telefono = datos['telefono']
        correo = datos['correo']
        tema = datos['tema']
        mensaje = datos['mensaje']

        # Crear el mensaje de correo
        msg = MIMEMultipart()
        msg['From'] = 'gareb.felipe@gmail.com'  # Tu correo (debe ser el correo de tu cuenta de Gmail)
        msg['To'] = 'gareb.felipe@gmail.com'  # El correo donde se enviarán los mensajes (tu correo)
        msg['Subject'] = f"Nuevo mensaje de {nombre}: {tema}"

        # Cuerpo del mensaje
        body = f"Nombre: {nombre}\nTeléfono: {telefono}\nCorreo: {correo}\nMensaje: {mensaje}"
        msg.attach(MIMEText(body, 'plain'))

        # Configuración de SMTP para Gmail
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login('gareb.felipe@gmail.com', 'ilbs gavi usjc hzep')  # Usa tu contraseña de aplicación

        # Enviar el mensaje
        server.sendmail('gareb.felipe@gmail.com', 'gareb.felipe@gmail.com', msg.as_string())
        server.quit()

        return jsonify({'status': 'success', 'message': 'Mensaje enviado correctamente!'})
    except Exception as e:
        print(f"Error al enviar el correo: {e}")
        return jsonify({'status': 'error', 'message': str(e)})

if __name__ == '__main__':
    app.run(debug=True)



    

