
/**
 * 判断包含关系
 * @param {*} target
 * @param {*} contain
 */
const isCover = (target, contain) => {
    if (target.x <= contain.x &&
        target.y <= contain.y &&
        target.x + target.width >= contain.x + contain.width &&
        target.y + target.height >= contain.y + contain.height
    ) {
        return true;
    }
    return false;
}

module.exports = isCover;
