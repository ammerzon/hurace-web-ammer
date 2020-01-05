export JAVA_OPTS='-Dio.swagger.parser.util.RemoteUrl.trustAll=true -Dio.swagger.v3.parser.util.RemoteUrl.trustAll=true' && openapi-generator generate -g typescript-angular -i https://localhost:5001/swagger/v1/swagger.json -o hurace-client --additional-properties npmName=@hurace-client/api,npmVersion=1.0.0,ngVersion=8.2.14
cd ./hurace-client || exit
npm install
npm update
npm run build
npm pack
