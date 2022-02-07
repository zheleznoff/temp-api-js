var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'NTMKbackend',
  description: 'backend app for ntmk',
  script: 'D:\\p1\\ntmk\\ntmk_backend\\server.js',
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();

// svc.on('uninstall',function(){
//   console.log('Uninstall complete.');
//   console.log('The service exists: ',svc.exists);
// });

// // Uninstall the service.
// svc.uninstall();