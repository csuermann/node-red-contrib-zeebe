module.exports = function(RED) {
    const ZB = require('zeebe-node');

    function Zeebe(config) {
        RED.nodes.createNode(this, config);

        const node = this;

        const options = {
            useTls: Boolean(config.useTls),
            oAuth: {
                url: config.oAuthUrl,
                audience: config.contactPoint.split(':')[0],
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                cacheOnDisk: false,
            },
        };

        if (config.useLongpoll) {
            options.longPoll = 600000;
        }

        if (config.oAuthUrl === '') {
            delete options.oAuth;
        }

        try {
            console.log('CREATING ZEEBE CLIENT');
            node.zbc = new ZB.ZBClient(config.contactPoint, options);
        } catch (err) {
            console.log('MY ERROR', err);
        }

        node.on('close', function(done) {
            return node.zbc.close().then(() => {
                console.log('All workers closed');
                done();
            });
        });
    }

    RED.nodes.registerType('zeebe', Zeebe);
};
