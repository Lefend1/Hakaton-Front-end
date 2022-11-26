module.exports = (m) => {
    var line = "";
    for (var i = 0; i < m.length; i++) {
        line += m[i].tag + ",";
    }
    return line;
};