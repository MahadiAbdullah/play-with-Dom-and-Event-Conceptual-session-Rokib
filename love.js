document.getElementById('yes').addEventListener('click', function(){
    // document.getElementById('message').innerText = 'I Love You';
    sentMsg('message');
});

// event handler
function loveLetter(){
    // document.getElementById('message').innerText = 'I Hate You';
    sentMsg('message')
}

// 1 bar function kre simply vabe kra jy 
function sentMsg(id){
    document.getElementById(id).innerText = 'I Love You';
}