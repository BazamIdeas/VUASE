const url = require('url')
const redirecciones = [
  {
    'path': '/logo/transporte/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logo/ferreteria/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/frutas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/muebles/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logo/aires-acondicionados/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/pollos/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/carnicerias/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logotipos/informatica-comunicacion-tecnologia/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logo/jardineria/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/chocolate/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/nuestros-servicios/diseno-rotulos/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logos/logotipo-para-contador-publico/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/limpieza/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/heladerias/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/pastelerias/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logotipos/farmacia/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/lacteos/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/papelerias/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/opticas/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/electricos/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logo/nutricion/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/talleres/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/flores/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logotipos/mantenimiento-limpieza/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/joyeria/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/postre/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/cerdo/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/osos/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-para-laboratorio-clinico-2/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/logo-de-comida-saludable/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/gasolineras/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logos/logo-de-huellas-de-perro/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/vidrio/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-para-polleria/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/supermercado/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-de-huella-de-oso/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/mineria/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-silueta-de-montana/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logo/veterinarias/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/agencias-de-viajes/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logo/avion/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logo/electricidad/',
    'url': 'industria'
  },
  {
    'path': '/portfolio/logo-de-medicina-kinesiologia-y-rehabilitacion/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/quimica/',
    'url': 'industria'
  },
  {
    'path': '/logo/agua/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/toros/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/vacas/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logotipos/alimentos-bebida/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-contador/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-para-empresas-de-limpieza-e-higiene/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/dulces/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-muela/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/logo-de-seguridad-industrial/',
    'url': 'industria'
  },
  {
    'path': '/logo/bebidas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/portfolio/logo-para-laboratorio-de-analisis-clinicos/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/construccion/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/mecanica/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logo/consultoria/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/bolsos/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/computacion/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logo/librerias/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/laboratorio/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/logo-para-empresa-de-refrigeracion/',
    'url': 'industria'
  },
  {
    'path': '/logo/mariscos/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/licor/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/comidas-caseras/',
    'url': 'restaurant'
  },
  {
    'path': '/logotipos/medio-ambiente-ecologia/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-de-licores/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/portfolio/logo-de-limpieza-y-mantenimiento-en-empresas/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/corazon/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/vinos/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-empresa-de-electrodomesticos/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-para-empresa-de-multiservicios/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-para-galletas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/reloj/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-de-fruteria/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logotipos/motor-coches/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logo/labial/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/motos/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logo/seguridad/',
    'url': 'seguridad'
  },
  {
    'path': '/logo/danza/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/alas/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-para-salon-de-fiestas-infantiles/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/pintores/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logo/enfermeria/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/cosmeticos/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-de-huella-de-perro/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/juguetes/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-para-granjas-avicolas/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/guarderias/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/naranjas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/contabilidad/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/centro-estetica/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/pesca/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/gimnasia-ritmica/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/coctel/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/palomas/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-comida-saludable-2/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/electricista/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/queso/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/reciclaje/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/cerrajeria/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/tenis/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/asociaciones/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/ganaderia/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/palmera/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/fiesta/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logos/logo-de-velas-aromaticas/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logo/fruteria/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-tienda-de-regalos/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/bisuteria/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/ingenieria/',
    'url': 'ingenieria'
  },
  {
    'path': '/logos/logo-de-primeros-auxilios/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/logo-para-autolavado-2/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logos/logo-de-donas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/matematicas/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logo/logistica/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/blog/logo-tenologia/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logo/mariposas/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/portfolio/logo-empresa-mantenimiento-mangueras-hidraulicas-maquinarias-pesadas-venta-instrumentos-medicion-equipos-electricos-herramientas-manuales-ferreteria-general/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/chapa-y-pintura/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-para-un-vivero/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/padel/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/decoracion/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logos/logo-de-frutas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logotipo-para-agencia-de-viajes/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logo/marisqueria/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/baile/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/cocineros/',
    'url': 'restaurant'
  },
  {
    'path': '/logos/logo-para-restaurant-mexicano/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/piscinas/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/camaron/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/transportes/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-de-hormiga/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/maquinas-excavadoras/',
    'url': 'industria'
  },
  {
    'path': '/logo/caras/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-de-justicia/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/aviones/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-para-vivero/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-caritas-felices/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/imprentas/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logotipos/abstractos/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/caza/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/semilla/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/portfolio/folleto-para-reformas-inmobiliarias/',
    'url': 'inmobiliaria'
  },
  {
    'path': '/logo/piramide/',
    'url': 'ingenieria'
  },
  {
    'path': '/logo/cafe/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-parrilla-de-cerdo/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/edificios/',
    'url': 'inmobiliaria'
  },
  {
    'path': '/logos/logo-empresa-de-limpieza-de-oficinas/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/blog/buen-diseno-perfil-redes-sociales-atraer-clientes/',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logos/logo-de-un-huevo/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/zapaterias/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/agricola/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/camiones/',
    'url': 'importacion-exportacion'
  },
  {
    'path': '/logo/familia/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/floristeria/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/carpinterias/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-de-albanil/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/masaje/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/asado/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/circo/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-flores-de-bach/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-para-lavanderia-2/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/gallina/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/fontaneria/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/portfolio/logo-empresa-comercializadora-fertilizantes-plaguicidas-semillas-siembra/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/espiral/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/pizzerias/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/bebes/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logo/lobo/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/depilacion/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/helado/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/autos/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logo/playa/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logo/balanza/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-de-bolas-de-billar/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/taco/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/pasteles/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/hoteles/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/copas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/mecanicos/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/portfolio/logo-para-empresa-de-mensajeria-ecologica/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-de-acuario/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/sol/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/cybercafe/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/engranaje/',
    'url': 'ingenieria'
  },
  {
    'path': '/logo/gasolina/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logo/salsa/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-con-camello/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/huevos/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/ciclismo/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/25-aniversario/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/carpinteria/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-para-electricista/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/manos/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/celular/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logo/caballos/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-cejas/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/planta/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-para-ferreterias-2/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/gruas/',
    'url': 'ingenieria'
  },
  {
    'path': '/logos/logo-de-paloma-mensajera/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/lavadoras/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/hospitales/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/gas/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-para-tienda-de-manualidades-2/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logo/bombillo/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/aguilas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/ambulancia/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/discotecas/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/sobre-liderlogo//',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logos/logotipo-con-diseno-para-pescaderia/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/trebol/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-para-charcuteria/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/zapato/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logos/logo-de-trebol-de-cuatro-hojas/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/industriales/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-de-detergente/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logos/logo-de-palmeras/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/aviso-legal//',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/frio/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-castillo/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/catering/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-centros-de-masajes/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/barcos/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-de-tejido/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/atletismo/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/lampara/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logos/logo-empresas-ambientales/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/editoriales/',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logo/seguros/',
    'url': 'seguridad'
  },
  {
    'path': '/logos/logo-para-tienda-de-ropa-deportiva/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logos/logo-desinfectante/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logos/logo-para-productos-de-limpieza/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logos/logo-electricistas/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/buda/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logo/taxi/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/pluma/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/bienestar/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logotipos/inmobiliaria-promocion-construccion/',
    'url': 'inmobiliaria'
  },
  {
    'path': '/logo/farmacias/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/pan/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/pared/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/granja/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/portfolio/logo-servicio-mantenimiento-electricidad-fontaneria-pintura-construccion-seca/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/arroz/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-cana-de-azucar/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-para-empresa-de-carteras/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/comunicacion/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logos/logo-de-senderismo/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/portfolio/logo-para-laboratorio-de-analisis-clinicos/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/diseno-de-logo-para-empresas-de-seguro-o-finanzas/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-carpintero/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-de-olas-del-mar/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-comida-china/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/pasta/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/finanzas/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-una-casa-de-dulces/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/cereales/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-pescaderia/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logotipos/arte-diseno/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/asesorias/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/abeja/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/nuestros-servicios//',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/utiles-escolares/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logos/logo-con-ojos-de-buho/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/contador/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-cubiertos/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/grupos-musicales/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/electronica/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/vacaciones/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-para-empresa-de-telas/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/casas/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-de-trenzas-de-zapatos/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logos/logo-con-gancho/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-de-oveja/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/piedra/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/cascos/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/aguila/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/delfines/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-textil/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/mujer/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logotipos/consultoria-finanzas-seguros/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/panaderias/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logotipo-para-jugueteria/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/montana/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-para-empresa-de-electricidad/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/chino/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-de-guantes-de-boxeo/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-de-batido/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-ejercicios/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-de-albanileria/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-para-oficina-contable/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-dinero/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/peluche/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-con-escalera/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/portfolio/logo-de-comercio-minorista-de-tabaco-y-estancos/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-de-toro-rojo/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-un-montacargas/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-de-baile-de-salon/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/camioneta/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/castillo/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/perros/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-caja-de-primeros-auxilios/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logotipos/decoracion/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logotipos/comercio/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-para-empresas-de-aseo/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/peces/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/ladrillos/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/comercio-internacional/',
    'url': 'importacion-exportacion'
  },
  {
    'path': '/logo/nieve/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/luna/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-para-iglesia-2/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logos/logo-de-nieve/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-chino/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-de-frutos-rojos/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/diamantes/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-de-tacones/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/botellas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/neumaticos/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logos/logo-empresa-de-telecomunicaciones/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logos/logo-de-ortodoncia/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/logo-tren/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-para-discotecas/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-para-la-playa/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-maquinaria/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-de-un-mostacho/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/bailarina/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-para-perfumeria/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/cocinas/',
    'url': 'restaurant'
  },
  {
    'path': '/portfolio/folleto-para-instalaciones-electricas/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/joyas/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-hielo/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/buses/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logotipo-para-productora-audiovisual-y-cine/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-para-empresa-de-banquetes/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/tomate/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/puertas/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/delfin/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-con-mariposa-de-colores/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-vigilancia/',
    'url': 'seguridad'
  },
  {
    'path': '/logo/mar/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/paisaje/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-para-payaso/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/culturales/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logo/madera/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-para-alquiler-de-equipos-de-sonido/',
    'url': 'inmobiliaria'
  },
  {
    'path': '/logo/medicamentos/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/logo-de-deportes-extremos/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-para-empresa-de-turismo/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-con-lavadora/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/bicicletas/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-de-sillas-y-mesas-para-eventos/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logos/logo-para-tienda-de-bebes/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-empresa-de-topografia/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-para-batidos-naturales/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-ambulancia/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/logo-hawaiano-2/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-con-cartas-de-poker/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-cisne/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-casa-de-empeno/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-de-ojos-verdes/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-de-taller-mecanico-automotriz/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logos/logo-para-centro-de-estetica/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-carita-feliz/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-para-tienda-de-espejos/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-sabila/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-de-lineas-perpendiculares/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/velocidad/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/estetoscopio/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/dinero/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/globo/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/hielo/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-con-estrella-fugaz/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logotipos/medicina-salud-servicios-sanitarios/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/sanitarios/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logos/logo-construccion-civil/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/deportivos/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/flechas/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logotipo-de-acuario-o-tienda-de-peceras/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-cuadros-2/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/lentes/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-3d-para-empresa-constructora/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logotipo-para-arreglos-florales/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/desinfectante/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/arboles/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/bambu/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/tubos/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-con-tuercas-para-ferreteria/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/brujula/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/leyes/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-teclado-de-piano/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/colmena/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-para-venta-de-telas/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/luz/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-mariposa-multicolor/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-bienestar-familiar/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-de-un-pollo-asado/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/candado/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-media-luna/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-para-acuarios/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/panaderia/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/teclado/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logo/inmobiliarias/',
    'url': 'inmobiliaria'
  },
  {
    'path': '/logo/cine/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-carne/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/margarita/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-de-gaviota/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/contacto//',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-sonrisa/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/cerveceria/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/reformas/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-ferreteria/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-abstracto-con-ciervo/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-caballito-de-mar/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logotipo-para-medicina-estetica/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logotipo-de-audifonos/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/cangrejo/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/casas-rurales/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-de-un-sombrero/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/portfolio/logo-cielo-fm/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/medio-ambiente/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/cartas/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/buceo/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-para-lavanderias/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/parafarmacia/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/clinica-veterinaria/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-tricolor/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-con-diseno-para-ferreteria/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-computacion/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logos/logo-para-curso-de-corte-y-costura/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/cinta/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-paracaidismo/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/bares/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/montanas/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-cd/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/cobranza/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/cafeterias/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logotipos/dibujos/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/colonias/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/albanileria/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-de-espiga-de-trigo/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-de-un-atardecer/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/economia/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-para-empresas-de-computadoras/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logo/repuestos/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/pintura/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/ave/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/locomotora/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/deportes-extremos/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logotipo-con-diseno-para-floristeria/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logos-de-mineria/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-para-cooperativa/',
    'url': 'organizacion-sin-fin-de-lucro'
  },
  {
    'path': '/logos/logo-con-racimo-de-uvas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/filmacion/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-brujula/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/embalaje/',
    'url': 'industria'
  },
  {
    'path': '/logo/huerta/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-de-siembra/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/portfolio/rotulo-para-vehiculo-de-bebidas-de-jugos-de-fruta-naturales/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/burbujas/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logotipo-con-cerezas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-electricista/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/climatizacion/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-de-una-hada/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-naturista/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-con-toga-y-birrete/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logos/logo-con-tomates/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-hawaiano/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logo/vigilancia/',
    'url': 'seguridad'
  },
  {
    'path': '/logo/campo/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/servicio-tecnico/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-de-la-selva/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-plantas/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/furgoneta/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-de-duende/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-con-banderines/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logos/logo-taller/',
    'url': 'ingenieria'
  },
  {
    'path': '/logos/logo-con-un-trebol/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/blog/folletos-publicitarios-publicidades-alternativas/',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logo/insecto/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-ceramica/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logo/persona/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/salones-de-belleza/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-de-manzanas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/tribales/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-obras-publicas/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-para-guarderias/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/americanos/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logo/mostacho/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/paramedicos/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/nuestros-servicios//',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-media-luna-roja/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-para-chef-o-cocineros/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/congelados/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-bodegon/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-amanecer/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-para-maquinaria-agricola/',
    'url': 'industria'
  },
  {
    'path': '/logo/carpa/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logo/jovenes/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-laberinto/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-de-leon-rojo/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/cubiertos/',
    'url': 'restaurant'
  },
  {
    'path': '/logos/logo-de-una-medalla/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-para-empresa-de-telefonia/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logos/logo-de-lazos/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-de-ganado/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-paisaje/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/teatro/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/pladur/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-para-marisqueria/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-tienda-de-ropa-femenina/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logos/logo-de-pintor/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/barco/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/arco-iris/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/veleros/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/viento/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-para-guarderia/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/ruedas/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/agronomia/',
    'url': 'ingenieria'
  },
  {
    'path': '/logos/logo-de-flor-violeta/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/corona/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-del-ganado/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-con-huellas-de-oso/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logotipo-con-uvas-para-produccion-de-vino/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/excavaciones/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-de-silueta-de-una-hada/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/blog/disenar-mejor-logotipo-hoteles/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/citricos/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logotipos/oficios/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logos/logo-de-pollo-frito/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-camarones/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/tiro-al-blanco/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-con-una-cabra/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-para-empresa-de-construccion-o-excavacion/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/parapente/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logotipos/hosteleria/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/sabila/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/portfolio/logo-para-empresa-de-comercio-internacional/',
    'url': 'importacion-exportacion'
  },
  {
    'path': '/logotipos/arquitectura/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/tornillo/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/ballet/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/verdes/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/escudo/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-comida-gourmet/',
    'url': 'restaurant'
  },
  {
    'path': '/logo/carga/',
    'url': 'importacion-exportacion'
  },
  {
    'path': '/logo/roca/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-para-refrigeracion/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-de-barco-deportivo/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/caucho/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-de-una-montana-amarilla/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-de-tiro-al-blanco/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/musica/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/rosados/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/girasol/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-de-audifonos/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/recreacion/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-empresas-de-agua/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-maquillaje/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-vaca/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logos-de-dados/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-de-guepardo/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/gracioso/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-de-cubos/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-relojeria/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/hosteleria/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/universo/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/blog/tag/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/blog/disenar-mejor-logotipo-hoteles/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logos/logotipo-con-letra-p/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/rompecabezas/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/tierno/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/planeta/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-de-rehabilitacion/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/oriental/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-de-espiral-rojo/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-mujeres/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-de-cuadros-de-colores/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/baloncesto/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-de-corazones/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-naturaleza/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-de-circuitos/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/lazo/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/blog/crea-identidad-corporativa-estos-sencillos-pasos-video/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/veterinarios/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-ingenieria-mecanica/',
    'url': 'ingenieria'
  },
  {
    'path': '/logos/logo-de-una-media-luna/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-apicultura/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-la-suerte/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-espiral-naranja/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-colchones/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/combustible/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-de-traje-de-bano/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logos/logo-de-hilo-de-coser/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/alarmas/',
    'url': 'seguridad'
  },
  {
    'path': '/logos/logo-de-asadores-de-carne/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-caballo-para-caballeriza/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-para-empresas-de-ferretera/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-de-una-cometa/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/jardin-de-infantes/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logo/extremo/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/blog/project_category/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-para-artista-plastico/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/sintesis/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-herradura/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/boxeo/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-de-flor-amarilla/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logo/emergencia/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/portfolio/folleto-para-venta-de-joyeria/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-con-payaso/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/wp-content/uploads/',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logo/diablo/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-de-italia/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/blog/mejorando-el-servicio-post-venta-a-traves-de-las-redes-sociales/',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logos/logo-de-deportes-extremos-2/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/cerradura/',
    'url': 'seguridad'
  },
  {
    'path': '/logo/visto/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/balon/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-para-tienda-de-ropa-infantil/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/dvd/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/ganado/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-para-medico-veterinario/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-baston-de-caramelo/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logotipo-para-zapateria/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/bloques/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/blog/crea-tus-perfiles-de-redes-sociales-con-liderlogo/',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logo/gestores-administrativos/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-con-tres-aros-naranja/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-cabalgata/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/portfolio/logo-de-comercializacion-de-pollos-vivos-y-en-canal/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-para-servicio-de-grua/',
    'url': 'industria'
  },
  {
    'path': '/logo/oveja/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logo/carnes/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/moto/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/invierno/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/hoja/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/figurativo/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-viento/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-de-velas/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logos/logo-de-cisne/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logotipo-cono-de-helado/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-una-media-naranja/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-para-taller-mecanico/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logo/aves/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/nauticos/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-de-una-mariposa/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/cubo/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-mariquita/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/academias/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-silueta-de-carro-de-carga/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logotipo-para-clases-de-teclado/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logos/logo-para-farmacia-3d/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/portfolio/folleto-para-venta-de-joyeria/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/asiaticos/',
    'url': 'turismo-y-viajes'
  },
  {
    'path': '/logos/logo-de-combustible/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-de-cangrejo/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/ninos/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-de-estrellas-verdes/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/portfolio/logo-y-sitio-web-de-salud-nutricion-y-bienestar/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/mosca/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-con-dardo-y-diana/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/langosta/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-ventana/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/papel/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/soja/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/sushi/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/formacion/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logo/morado/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/anillos/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/remolque/',
    'url': 'industria'
  },
  {
    'path': '/logo/importacion/',
    'url': 'importacion-exportacion'
  },
  {
    'path': '/logos/logo-de-pelotas-de-tenis/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-de-durazno/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-peinado-con-afro/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logos/logo-de-ahorro-energia/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-publicidad-y-mercadeo/',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logos/logo-de-lancha/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-de-parapente/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logotipo-de-drogueria/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/hada/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/bodega/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/patines/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-de-una-lupa-de-detective/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/portfolio/folleto-para-consultoria-en-energias-renovables/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-para-pintores/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-para-corporaciones/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-ganado-2/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-para-nutricionista/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-para-agencia-de-festejos/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/monos/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-una-foca/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-con-ventilador/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/futbolista/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-nutricion-saludable/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/tuberias/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-de-actividad-fisica/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/sombrero/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-forestal/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/fontaneros/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/gimnasios/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/maquinaria/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-para-empresa-de-jardineria/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-de-franjas-de-colores/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/rosquillas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-equitacion/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logotipo-para-empresa-automotriz/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logo/distribucion/',
    'url': 'importacion-exportacion'
  },
  {
    'path': '/logos/logo-de-caza/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-para-empresa-de-entretenimiento/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-de-gallina-2/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-de-un-abanico/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logo-de-una-cruz-verde/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-trazos-de-pincel/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-baile-urbano/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-con-letra-z/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/cuchillo/',
    'url': 'restaurant'
  },
  {
    'path': '/blog/tag/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-pole-dance/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logotipo-para-firma-personal/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/gatos/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-torero/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-agua-potable/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logos/logo-para-tiendas-infantiles/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/exportacion/',
    'url': 'importacion-exportacion'
  },
  {
    'path': '/logos/logo-jardinero/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-de-figura-concava/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-buses/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-de-rectangulo-bicolor/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-para-sala-de-juegos/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-para-centro-comercial/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/musculos/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logos/logo-con-carruaje/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-con-cometa/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/portfolio/folleto-para-consultoria-en-energias-renovables/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/portfolio/folleto-para-venta-de-sistemas-de-seguridad/',
    'url': 'seguridad'
  },
  {
    'path': '/logo/hostales/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logos/logo-de-atun/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-enjuague/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/logo/paradores/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/portfolio/folleto-para-reformas-y-mantenimiento/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-3d-para-productora-audiovisual/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-para-aires-acondicionados/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-de-una-alga/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-para-alquiler-o-venta-de-casas/',
    'url': 'inmobiliaria'
  },
  {
    'path': '/logos/logo-de-pavo-real/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-torres/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/escalada/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-de-estrellas-azules/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/automocion/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/portfolio/logo-de-construccion-y-rehabilitacion-de-edificios/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-de-un-liston/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/combinados/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logotipo-para-tienda-de-ninos/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/rurales/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-abstracto-rectangular/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/esfera/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-con-clave-de-sol/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-ovalado/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/dorado/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logotipos/comercio-minorista/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/bonsai/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-con-avion-de-papel/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/mano/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-de-arquero/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/portfolio/rotulo-de-envase-para-la-comercializacion-de-alimentos-congelados/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/arcos/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/sol/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-con-canario/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logotipo-con-margarita-verde/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-espiral-azul/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-paisajes/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-de-torero/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-abstracto-de-redes-informaticas/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logo/maritimo/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/portfolio/logo-de-comercializacion-de-pollos-vivos-y-en-canal/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-de-licores-2/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-exterminadores/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-para-danza-clasica/',
    'url': 'deportes-y-ejercicios'
  },
  {
    'path': '/logo/gestorias/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/carruajes/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/centro-comercial/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/humo/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-con-flores-rosas/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/logos/logo-dentista/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/alquiler/',
    'url': 'inmobiliaria'
  },
  {
    'path': '/logos/logos-de-ceramicas/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-de-lineas-curvas/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-aves-volando/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/rapidez/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-de-una-bocina/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/flamenco/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/loteria/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-con-una-carreta/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/alegres/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-de-ondas-de-radio/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-un-toldo/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/atardecer/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-con-cabanas/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logo/tienda-de-ninos/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logo/flecha/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/portfolio/folleto-para-empresa-de-construccion/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-de-fuente-de-agua/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/brillantes/',
    'url': 'decoracion-y-diseno-de-interiores'
  },
  {
    'path': '/logo/bruja/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-con-toro-verde/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/sol/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-carroceria/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/portfolio/logo-de-asesoria-empresarial/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/semicirculo/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-con-signo-de-exclamacion/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-para-agropecuarios/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-para-tienda-de-ninos/',
    'url': 'educacion-y-formacion'
  },
  {
    'path': '/logotipos/nuevas-energias/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logo/jade/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/portfolio/rotulo-de-envase-para-la-venta-de-alimentos-en-conserva/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logos/logo-de-semicirculos/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/cuadro/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-de-exclusividad/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/portfolio/logo-centro-medico-especializado-inmunologia-medicina-regenerativa-estetica/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logo/reparto/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/rocio/',
    'url': 'hogar-y-jardin'
  },
  {
    'path': '/blog/buen-diseno-perfil-redes-sociales-atraer-clientes/',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logos/logo-de-focos/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/martillo/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logo/herraduras/',
    'url': 'industria'
  },
  {
    'path': '/logos/logo-plano/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-para-caucheras/',
    'url': 'industria'
  },
  {
    'path': '/portfolio/papeleria-para-empresa-de-venta-alimentos-y-bebidas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/logo/facturas/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/medias/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logos/logo-transporte-de-carga/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logos/logo-orfebreria/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-para-pollera/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/logo/temperatura/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/aros/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logos/logotipo-para-casa-de-apuestas/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logo/recursos-renovables/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/portfolio/folleto-para-instalaciones-electricas/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/logos/logo-de-letras-sobrias/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-con-vector-para-asesora-contable/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logos/logo-de-un-caballero/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logos/logo-para-productos-de-higiene/',
    'url': 'limpieza-higiene'
  },
  {
    'path': '/blog/psicologia-del-color-en-el-diseno/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/cerrado/',
    'url': 'comercio-almacenes'
  },
  {
    'path': '/logos/logo-de-can/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logos/logo-de-ovejita/',
    'url': 'agricultura-y-ganaderia'
  },
  {
    'path': '/logos/logo-de-hojas-verdes-con-flores/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logo/ocio/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-albanileria/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logos/logo-de-camaras-sumergibles/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/logo-con-pandereta/',
    'url': 'arte-y-fotografia'
  },
  {
    'path': '/logo/romantico/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-para-estetica-de-belleza/',
    'url': 'belleza-y-cuidado-personal'
  },
  {
    'path': '/logos/logo-vigas/',
    'url': 'industria'
  },
  {
    'path': '/portfolio/folleto-de-alimentos-y-bebidas/',
    'url': 'alimentos-y-bebidas'
  },
  {
    'path': '/portfolio/papeleria-para-empresa-de-construccion-de-inmuebles/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/instalaciones/',
    'url': 'reparaciones-y-mantenimiento'
  },
  {
    'path': '/portfolio/logo-hobbie/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/sobre-liderlogo//',
    'url': 'marketing-sicial-media'
  },
  {
    'path': '/logo/oficinas/',
    'url': 'asesoria-y-consultoria'
  },
  {
    'path': '/logo/autocares/',
    'url': 'transporte-y-logistica'
  },
  {
    'path': '/logo/albergue/',
    'url': 'hosteleria-y-alojamiento'
  },
  {
    'path': '/logos/logo-de-estrella-de-ocho-puntas/',
    'url': 'accesorios-y-glamour'
  },
  {
    'path': '/logo/vegetacion/',
    'url': 'medio-ambiente'
  },
  {
    'path': '/logos/logo-lunares/',
    'url': 'ropa-y-moda'
  },
  {
    'path': '/portfolio/papeleria-para-empresa-de-construccion-de-inmuebles/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/pez/',
    'url': 'animales-y-mascotas'
  },
  {
    'path': '/logo/cuarzos/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logos/logo-computarizado/',
    'url': 'tecnologia-y-telecomunicacion'
  },
  {
    'path': '/logos/logo-lacrado/',
    'url': 'industria-autommotriz'
  },
  {
    'path': '/logos/logo-de-aplanadora/',
    'url': 'construccion-y-arquitectura'
  },
  {
    'path': '/logo/termometro/',
    'url': 'salud-y-medicina'
  },
  {
    'path': '/logos/logo-para-parque-infantil/',
    'url': 'hobies-y-entretenimiento'
  },
  {
    'path': '/logos/catalogo/',
    'url': 'marketing-sicial-media'
  }
]

module.exports = function (req, res, next) {
  // const dominio = req.headers.host
  const path = url.parse(req.url).pathname

  redirecciones.forEach(redirect => {
    if (path === redirect.path) {
      // console.log(dominio + '/ejemplos/servicios/' + redirect.url)
      res.writeHead(301, {Location: 'http://www.liderlogo.com' + '/ejemplos/servicios/' + redirect.url})
      return res.end()
    }
  })

  next()
}
