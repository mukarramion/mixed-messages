const generaterRandomNumber=num=> Math.floor(Math.random()*num);

const knock_KnockJokes={
    reply:['I am','Oink oink','Abe','Leaf'],
    replyWho:['I am who?','Oink oink who?','Abe who?','Leaf who?'],
    reply2Me:['You tell me!!','Make up your mind are you a pig, or an owl?!','Abe CDEFGH...','Leaf Me Alone!']
};

let knock_knock=[];
knock_knock.push('Knock! Knock! \u{270A}\u{1F6AA}');
knock_knock.push('Who\'s there?');
let kk_Index=generaterRandomNumber(knock_KnockJokes.reply.length);
for(let part in knock_KnockJokes){
    switch(part){
        case 'reply':
            knock_knock.push(knock_KnockJokes[part][kk_Index]);
            break;
        case 'replyWho':
            knock_knock.push(knock_KnockJokes[part][kk_Index]);
            break;
        case 'reply2Me':
            knock_knock.push(knock_KnockJokes[part][kk_Index]);
            break;
        default:
            knock_knock.push('Silence!...');
    }
}
const formatJoke=joke=>{
    const formatted= knock_knock.join('\n');
    console.log(formatted);
}
formatJoke(knock_knock);