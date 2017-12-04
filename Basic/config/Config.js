exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://localhost/turkey-chase';

exports.PORT = process.env.PORT || 7000;
