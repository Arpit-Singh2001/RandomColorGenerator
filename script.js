const getColor  = () =>{
    const randomNumber=Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);

    const randomCode="#"+randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    const colorName=document.getElementById('color-code');
    colorName.innerHTML=randomCode;
    document.body.style.backgroundColor=randomCode;

    // navigator.clipboard.writeText(randomCode);
}

const button=document.getElementById('btn');



    // event call 
    button.addEventListener('click',getColor);

    // init call 

    getColor();