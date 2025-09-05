function demorada(tempo){
    console.log(`demorada ${tempo}`);
    const atualMaisTempo = new Date().getTime()+tempo;
    while(new Date().getTime() <= atualMaisTempo);
    const d = 9
    return d
}
setTimeout(function(){demorada(7000)},7000);
setTimeout(function(){demorada(5000)},5000);
console.log('FIM do bloco principal')