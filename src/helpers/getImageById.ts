import { IMAGES_URL } from "../constants/app";
import { FILE_FORMATS } from "../enums/file-formats.enum";

export const getImageById = (id: string) => {
    return IMAGES_URL + id + FILE_FORMATS.PNG;
};
