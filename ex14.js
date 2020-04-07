// 배열 확장 : list메소드 추가하기
var f = function(element){
    console.log(">>>" + element);
   
}

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i = 0; i<value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // }
        var _this = this;
        value.forEach(function(element){
            // console.log(this + ">>>" + element);
           _this.splice(index++, 0, element)
        });
    } else{
        this.splice(index, 0, value);
    }
    this.splice(index, 0, value);
}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// 리스트로 사용하기
var a = [1,2,4];
a.insert(2,3);
console.log(a);
a.remove(3);
console.log(a);
a.insert(2, ['a', 'b', 'c']); // 기대 : [1, 2, 'a', 'b', 'c', 3]
console.log(a);               // 결봐 : [1, 2, ['a', 'b', 'c'], 3]