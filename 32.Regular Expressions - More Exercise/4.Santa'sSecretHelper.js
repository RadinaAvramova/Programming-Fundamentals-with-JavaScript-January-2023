function santaSecretHelper(params) {
    let key = +params.shift();
    params.pop();
    let regex = /@([A-Za-z]+)[^\@\-!:>]*!G!/;

    for (let param of params) {
        let decryptedInfo = param.split('')
            .map(c => String.fromCharCode(c.charCodeAt(0) - key))
            .join('');

        let result = decryptedInfo.match(regex);
        if (result) {
            console.log(result[1]);
        }
    }
}


santaSecretHelper(['3','CNdwhamigyenumje$J$',

'CEreelh-nmguuejnW$J$','CVwdq&gnmjkvng$Q$','end'])

santaSecretHelper(['3','N}eideidmk$'(mnyenmCNlpamnin$J$','ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge','ppqmkkkmnolmnnCEhq/vkievk$Q$','yyegiivoguCYdohqwlqh/kguimhk$J$','end'])