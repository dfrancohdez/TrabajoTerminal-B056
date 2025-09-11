import { cognito, CLIENT_ID } from '../../config/awsConfig.mjs';
import { response } from '../../utils/response.mjs';

export const registerUser = async (event) => {
    try {
        const body = JSON.parse(event.body || '{}');
        const { nombreEmpresa, telefono, logo, email, password } = body;
        if (!CLIENT_ID) {
            throw new Error('CLIENT_ID no está definido');
        }


        if (!email || !password) {
            return response(400, { error: 'Email y password son obligatorios.' });
        }
        let telefonoFormateado;
        if (telefono) {
        // Asegúrate de poner el código de país correcto, aquí ejemplo México
            telefonoFormateado = telefono.startsWith('+') ? telefono : '+52' + telefono;
        }
        const params = {
            ClientId: CLIENT_ID,
            Username: email,
            Password: password,
            UserAttributes: [
                { Name: 'email', Value: email },
                { Name: 'name', Value: nombreEmpresa },
                { Name: 'phone_number', Value: telefonoFormateado },
            ],
        };

        await cognito.signUp(params).promise();
        return response(201, { message: 'Registro exitoso. Revisa tu correo para confirmar tu cuenta.' });
    } catch (error) {
        return response(400, { error: error.message });
    }
};
