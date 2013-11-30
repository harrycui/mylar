Package.describe({
    summary: "Principal graph",
});

Package.on_use(function (api) {

    var where = ['client', 'server'];

    api.use(['standard-app-packages', 'accounts-base', 'basic-crypto', 'ejson', 'timing', 'http'], where);

    api.imply(['standard-app-packages', 'timing']);
    api.add_files(['graphmodel.js', 'certs.js', 'principal.js', 'collection_hook.js'], where);
    
    api.export("Principal");
    api.export("PrincAttr");
});
