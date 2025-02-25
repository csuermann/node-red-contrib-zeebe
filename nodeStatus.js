module.exports = {
    error: function(node, errorMsg) {
        node.status({
            fill: 'red',
            shape: 'dot',
            text: formatErrorMsg(errorMsg),
        });
    },

    success: function(node, successMsg) {
        node.status({
            fill: 'green',
            shape: 'dot',
            text: successMsg,
        });
    },

    clear: function(node) {
        node.status({});
    },
};

function formatErrorMsg(errorMsg) {
    let result = errorMsg.split(':')[0];
    if (result.length > 30) {
        result = result.substring(0, 30) + '...';
    }
    return result;
}
