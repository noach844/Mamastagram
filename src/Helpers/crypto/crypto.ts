export const encrypt = (text: string): string => {
    return Buffer.from(text).toString('base64');
};
