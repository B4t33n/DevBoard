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

// question 

document.getElementById("discover").addEventListener("click", function(){
    window.location.href = "./question.html";
})


// show calender

const calender = document.getElementById("calender");
calender.addEventListener("click", function(){

})



// complete button functionality

const completeBtn = document.getElementsByClassName("complete-btn");

for(let i = 0; i < completeBtn.length; i ++){
    const comBtn = completeBtn[i];
    comBtn.addEventListener('click', function(){
        alert("board updated successfully")
        comBtn.disabled = true;
        comBtn.style.backgroundColor = "gray"
        document.getElementsByClassName("complete-btn")
        let taskAssing = document.getElementById("task-assing");
        let countComplete = document.getElementById("count-complete");

        taskAssing.innerText = parseInt(taskAssing.innerText) -1;
        countComplete.innerText = parseInt(countComplete.innerText) + 1;

        
        // activity set div

        const activityBtn = document.getElementById("activity");
        const div = document.createElement("div");
        div.classList.add("text-gray-500", "bg-slate-200", "rounded-xl", "p-2", "mt-2");
        div.innerHTML = `
        <p>You have Complete The Task Add Dark Mode at 12:48:15 PM </p>
        `
        activityBtn.appendChild(div);


        // activity-btn click to clear all history

        const activityButton = document.getElementById("activity-btn");
        activityButton.addEventListener("click", function(){
            div.innerHTML = "";
            div.remove(div.classList)
        })
    })
}