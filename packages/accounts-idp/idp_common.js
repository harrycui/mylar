idp_pk = undefined;
idp_url = undefined;
app_origin = undefined; // maintained for server side

idp_init = function(url, pk, origin) {
    idp_pk =  deserialize_keys(pk);
    idp_url = url;
    app_origin = origin;
    if (Meteor.isClient) {
        Session.set('idp_user_debug', true);
	Session.set('idp_user_origin', url);
    }
}

// checks that `cert' is a valid certificate
// by the idp for user with msg at origin
// e.g., msg can be pks or "register"
idp_check = function(msg, user, cert) {
    var c = JSON.stringify({user: user,
			    msg: msg, origin: app_origin});

    return base_crypto.verify(c, cert, idp_pk.verify);
}

