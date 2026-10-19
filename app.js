import { obtenerPublicaciones } from "./publicaciones.js";
import { obtenerUsuario } from "./usuario.js";
import { obtenerAlbumes } from "./albums.js";

const identificador = 8;

const obtenerUsuarioConComentarios = async (id) => {
 const usuario = await obtenerUsuario(id);
 const publicaciones = await obtenerPublicaciones(usuario.id);

	return {
		usuario: usuario.name,
		publicaciones,
		albumes: await obtenerAlbumes(usuario.id)
	};
};

try {
	const resultado = await obtenerUsuarioConComentarios(identificador);
	console.dir({ ...resultado }, { depth: null });
} catch (error) {
	console.error("No se pudieron obtener los datos:", error.message);
	process.exitCode = 1;
}