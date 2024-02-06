import IconAhorro from '../assets/img/icono_ahorro.svg';
import IconCasa from '../assets/img/icono_casa.svg';
import IconComida from '../assets/img/icono_comida.svg';
import IconOtros from '../assets/img/icono_gastos.svg';
import IconOcio from '../assets/img/icono_ocio.svg';
import IconSuscripciones from '../assets/img/icono_suscripciones.svg';
import IconSalud from '../assets/img/icono_salud.svg';

export const format_date = date => {
    const now = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    return now.toLocaleDateString('es-ES', options);
};

export const randomId = () => '_' + Math.random().toString(36).substring(2, 9) + Date.now();

const reference_icons = {
    suscripciones: IconSuscripciones,
    ahorro: IconAhorro,
    comida: IconComida,
    vacaciones: IconOcio,
    servicios: IconOtros,
    casa: IconCasa,
    salud: IconSalud
}
export const getIcon = icon_name => icon_name && reference_icons[icon_name];
export const opts_select_nuevo_gasto = [
    {
        value: '', text: '--Seleccionar--'
    },
    {
        value: 'suscripciones', text: 'Suscripciones'
    },
    {
        value: 'ahorro', text: 'Ahorro'
    },
    {
        value: 'comida', text: 'Comida'
    },
    {
        value: 'vacaciones', text: 'Vacaciones'
    },
    {
        value: 'servicios', text: 'Servicios'
    },
    {
        value: 'salud', text: 'Salud'
    },
    {
        value: 'casa', text: 'Casa'
    }
];