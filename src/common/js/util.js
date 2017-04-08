/*
* 解析url参数
* @example  ?id=12345&a=b
* @return Object {id:12345,a:b}
*/
export function urlParse() {
  let url=window.location.search;
  let obj={};
  let reg=/[?&][^?&]+=[^?&]+/g;
  let arr=url.match(reg);  //['?id=12345','&a=b']

  if(arr){
    arr.forEach((item) => {    //遍历arr数组
       let tempArr=item.substring(1).split('=');  //将item的最后一项删除 并根据=分割
       let key=decodeURIComponent(tempArr[0]);
       let val=decodeURIComponent(tempArr[1]);   //decodeURIComponent()函数可对encodeURIComponent()函数编码的URI进行解码
       obj[key]=val;
    });
  }
  return obj;
};
