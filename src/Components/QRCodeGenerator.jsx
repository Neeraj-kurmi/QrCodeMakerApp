import QRCode from "react-qr-code";
import { useState } from 'react';

const QRCodeGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        setShowQRCode(false); // Hide QR code when input changes
    };

    const handleGenerateQRCode = () => {
        if (inputText) {
            setShowQRCode(true);
        } else {
            alert("Please enter some text or a URL.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

            <h1 className="text-2xl font-bold mb-4 text-blue-500">QR Code Generator</h1>
            {showQRCode && (
                <div className="m-4">
                    <QRCode value={inputText} size={256} />
                </div>
            )}
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter valid Link or URL"
                className="border border-gray-300 rounded-md p-2 mb-4 w-80"
            />
            <button
                onClick={handleGenerateQRCode}
                className="bg-blue-500 text-white rounded-md p-2 mb-4 hover:bg-blue-600 transition"
            >
                Generate QR Code
            </button>

            
        </div>
    );
};

export default QRCodeGenerator;
