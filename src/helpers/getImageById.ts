import { IMAGES_URL } from "../constants/app";
import { FILE_FORMATS } from "../enums/file-formats.enum";
import {validateImage} from "./validateImage";

export const getImageById = (id: string) => {
    return validateImage(IMAGES_URL + id + FILE_FORMATS.PNG);
};
