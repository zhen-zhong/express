import app from './app';

const IP = process.env.IP

const port = process.env.PORT || 3000;

const os = require('os');
const networkInterfaces = os.networkInterfaces();
for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName];
    for (const addressInfo of addresses) {
        if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
            console.log(`本机的 IP 地址: ${addressInfo.address}`);
        }
    }
}

app.listen(port, () => {
    console.log(`Server is running on http://${IP}:${port}`);
});


