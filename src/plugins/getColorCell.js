module.exports = (precent) => {
    if (precent === 0) {
        return "rgb(193, 196, 205)";
    } else if (precent > 0 && precent < 1) {
        return "rgb(66, 189, 127)";
    } else if (precent > 1 && precent < 2) {
        return "rgb(8, 153, 80)";
    } else if (precent >= 2) {
        return "rgb(5, 102, 54)";
    }
    if (precent > -1 && precent < 0) {
        return "rgb(247, 124, 128)";
    } else if (precent > -2 && precent < -1) {
        return "rgb(242, 54, 69)";
    } else if (precent <= -2) {
        return "rgb(153, 31, 41)";
    }
    return false;
};