export const getUniqueObjFromArray = (arr) => {
    let res;
    if (arr && arr.length) {
        res = arr.filter((value, index, self) => value && self.findIndex((m) => m?._id === value?._id) === index);
    }
    return res;
};
