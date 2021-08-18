export function errorImg(e:Event) {
	(e.target as HTMLImageElement).src = '/resource/img/oop.png';
}

// 數字 轉 千分位
export const commaFormat=(value:number):string => value?.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'));

// 小數點格式化有四捨五入
export const commaDecimalFormat = (value:number): string =>{
	const realVal = ((Number(value) * 100) / 100).toFixed(2);
  if (!Number.isNaN(value) && value !== undefined) {
    let realVal_str = realVal.toString();    
    let rs = realVal_str.indexOf('.');    
    if (rs < 0) {    
      rs = realVal_str.length;    
      realVal_str += '.';    
    }    
    while (realVal_str.length <= rs + 2) {    
      realVal_str += '0';    
    }    
    return realVal_str.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'));
  }
  return realVal;
}