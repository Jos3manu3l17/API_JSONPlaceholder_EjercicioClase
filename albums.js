import { URL } from "./env.js";
import { solicitar } from "./solicitudes.js";

export const obtenerAlbumes = async (usuarioId) => {
    const albumes = await solicitar(`${URL}/albums?userId=${usuarioId}`);

    return Promise.all(
        albumes.map(async (album) => {
            const fotos = await solicitar(`${URL}/photos?albumId=${album.id}`);
            return { ...album, fotos };
        })
    );
};