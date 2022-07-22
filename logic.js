const convertToNum = (val) => parseInt(val);

const calculateResults = (amount, percent) => {
    return (convertToNum(amount)*convertToNum(percent))/100;
}

export {
    convertToNum,
    calculateResults
}