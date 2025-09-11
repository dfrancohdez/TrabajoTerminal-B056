@echo off
echo ------Deploying Function
echo Current directory:
echo %cd%

echo Packing...
tar -a -c -f SessionControl.zip index.mjs node_modules src

echo "Subiendo a AWS Lambda..."
aws lambda update-function-code --function-name SessionControl --zip-file fileb://SessionControl.zip

echo Deployment complete!