'use client'

import { ChangeEvent, useState } from 'react';
import { Readable } from 'stream';
import { RekognitionClient, CompareFacesCommand } from '@aws-sdk/client-rekognition';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';

// Configuración de Multer
const upload = multer({ dest: './public/uploads/' });
const Rekognition = () => {
    const [image1, setImage1] = useState<File | null>(null);
    const [image2, setImage2] = useState<File | null>(null);
    const [comparisonResult, setComparisonResult] = useState<string>('');

    const handleImage1Change = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage1(file);
        }
    };

    const handleImage2Change = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage2(file);
        }
    };

    const handleUpload = async () => {
        const formData = new FormData();
        if (image1 && image2) {
            formData.append('image1', image1);
            formData.append('image2', image2);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                setComparisonResult(data.message);
            } catch (error) {
                console.error('Error al subir imágenes:', error);
            }
        } else {
            alert('Por favor, selecciona ambas imágenes.');
        }
    };

    const compareFaces = async () => {
        // Implementación de la comparación de rostros con AWS Rekognition
        // Igual al código anterior, omitido por brevedad en este ejemplo
    };

    return (
        <div>
            <h1>Comparación de Rostros</h1>
            <input type="file" accept="image/*" onChange={handleImage1Change} />
            <input type="file" accept="image/*" onChange={handleImage2Change} />
            <button onClick={handleUpload}>Subir Imágenes</button>
            <button onClick={compareFaces}>Comparar Rostros</button>
            <p>{comparisonResult}</p>
        </div>
    );
 
}

export default Rekognition

