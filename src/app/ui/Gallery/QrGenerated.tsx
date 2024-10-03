import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const QRDisplay = () => {
  const qrRef = useRef(null);

  useEffect(() => {
    const currentUrl = window.location.href;

    if (qrRef.current) {
      QRCode.toCanvas(qrRef.current, currentUrl, function (error) {
        if (error) console.error(error);
        console.log('QR code generated');
      });
    }
  }, []);

  return <canvas ref={qrRef} />;
};

export default QRDisplay;