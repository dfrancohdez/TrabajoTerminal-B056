@echo off
echo ------ Deploying Function ------
echo Current directory: %cd%

echo Packing...
powershell -Command "Compress-Archive -Path index.mjs,node_modules,src,.env -DestinationPath SessionControl.zip -Force"

if %ERRORLEVEL% neq 0 (
    echo Error al crear el zip.
    exit /b 1
)

echo Subiendo a AWS Lambda...
aws lambda update-function-code --function-name SessionControl --zip-file fileb://SessionControl.zip

if %ERRORLEVEL% neq 0 (
    echo Error al subir a AWS Lambda.
    exit /b 1
)

echo Deployment complete!
pause
