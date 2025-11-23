Array.prototype.myMap=function(cb,thisArg){
  const res=[];
  for(let i=0;i<this.length;i++){
    if(!(i in this)) continue;
    res.push(cb.call(thisArg,this[i],i,this));
  }
  return res;
};
console.log([1,2,3].myMap(n=>n*2));
