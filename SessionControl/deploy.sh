#!/bin/bash

echo "Instalando dependencias..."
npm install

echo "Empaquetando..."
zip -r SessionControl.zip index.mjs node_modules/ src/

echo "Subiendo a AWS Lambda..."
aws lambda update-function-code --function-name SessionControl --zip-file fileb://SessionControl.zip

echo "Despliegue completado."
