// color piker 
const colorPiker = document.getElementById("color-piker");
colorPiker.addEventListener('click', function(){
    let colorLatter = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0; i < 6 ; i ++){
       let finalColor =  color += colorLatter[Math.floor(Math.random() * 16 )];
       document.getElementById("body").style.backgroundColor = finalColor;
    }

})