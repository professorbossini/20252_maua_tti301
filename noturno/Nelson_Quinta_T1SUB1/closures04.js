function eAgora(){
    let cont = 1;
    function f1(){
        console.log(cont);
    }
    cont++;
    function f2(){
        console.log(cont);
    }
    return{f1,f2}
}
let eAgoraResult = eAgora();

eAgoraResult.f1();
eAgoraResult.f2();