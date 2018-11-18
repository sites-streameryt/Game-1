// Server ----------------------------------------------------------------------
// -----------------------------------------------------------------------------
var NodeGame = require('./nodegame/nodegame');

// Setup Game Model
Shooter = NodeGame.Model(20);
require('./shooter/game');
require('./shooter/client');
require('./shooter/actors');

// Start a Server
Shooter.Server({
    'port': Math.abs(process.argv[2]) || 28785,
    'status': false,
    'recordFile': './../record[date].js',
    'record': false,
    'flash': false
});

