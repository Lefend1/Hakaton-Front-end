module.exports = (m, sort) => {
    var res = m;
    for (var i = 0; i < m.length; i++) {
        if (sort.indexOf(m[i].tag) === -1) {
            const el = m[i];
            res = res.filter((x) => x.id !== el.id);
        }
    }
    return res;
};