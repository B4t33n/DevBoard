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

// complete button functionality

const completeBtn = document.getElementsByClassName("complete-btn");

for(let i = 0; i < completeBtn.length; i ++){
    const comBtn = completeBtn[i];
    comBtn.addEventListener('click', function(){
        comBtn.disabled = true;
        comBtn.style.backgroundColor = "gray"
        document.getElementsByClassName("complete-btn")
        let taskAssing = document.getElementById("task-assing");
        let countComplete = document.getElementById("count-complete");

        taskAssing.innerText = parseInt(taskAssing.innerText) -1;
        countComplete.innerText = parseInt(countComplete.innerText) + 1;



        
    })
}