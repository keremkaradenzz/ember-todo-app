import { helper } from '@ember/component/helper';

function convertNumber(args){
    return Number(args) + 1;
}

export default helper(convertNumber);