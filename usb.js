navigator.usb.getDevices().then(devices => {
    devices.map(device => {
        console.log(device.productName);
        console.log(device.manufacturerName);
    });
});