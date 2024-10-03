import CryptoJS from 'crypto-js';

const decryptData = (encryptedData: any) => {
    try {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, 'secret_key');
        const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    } catch (error) {
        return null
    }
};
export default decryptData