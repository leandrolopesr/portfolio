
function typeWriter (el){
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i)  => {
        setTimeout(() => (el.innerHTML += letter), 140 * i);
    });
}

typeWriter(myname);

