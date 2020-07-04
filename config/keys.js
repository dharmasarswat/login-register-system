dbPassword = 'mongodb+srv://test:'+ encodeURIComponent('1234') + '@lottery-pwzb7.mongodb.net/users?retryWrites=true&w=majority';

session_secrete = 'jguewibwfvsufeftwwsbvugf',

module.exports = {
    mongoURI: dbPassword,
    session_secrete
};
