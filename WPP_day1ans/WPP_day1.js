let container= document.getElementById('container');

function getToday(){
    let date= new Date;
    let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today= days[date.getDay()];
    let para1= document.createElement('p');
    para1.innerText= `Today is: ${today}`;
    container.appendChild(para1);
}

function getCurrentTime(){
    let para= document.createElement('p');
    setInterval(()=>{
        let date= new Date;
        let hours= date.getHours();
        let minutes= date.getMinutes();
        let seconds= date.getSeconds();
        let ampm= hours>=12 ? 'PM' : 'AM';

        hours= hours%12;
        hours= hours !== 0? hours: 12;

        para.innerText= `${hours}: ${minutes}: ${seconds}, ${ampm}`;
        container.appendChild(para);
    }, 1000)
}

getToday();
getCurrentTime();