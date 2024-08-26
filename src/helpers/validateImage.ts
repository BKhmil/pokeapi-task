import notFound from "../assets/image_not_found.png";

export const validateImage = async (source: string) => {
    const response = await fetch(source);
    if (response.ok) {
        return source;
    } else {
        return notFound;
    }
}