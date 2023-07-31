const body = document.querySelector('body'),
    hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second'),
    modeSwitch = document.querySelector('.mode-switch');

    //add a click event listener to modeSwitch
    modeSwitch.addEventListener('click', () => {
        //toggle the dark class to the body
        body.classList.toggle('dark');
        //check if the dark class is prsent
        const isDarkMode =body.classList.contains('dark');
        //seting modswitch text based on dark clas prsenc
        modeSwitch.textContent = isDarkMode ? 'light Mode' : 'Dark Mode';
        //set locat
    })

    const updateTime = () => {
       //get current time and calculate degrees for clock hands
       let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;

        //Rotate the clock hands to the appropiate degree based onthe curr time
        secondHand.style.transform = `rotate(${secToDeg}deg)`;
        minuteHand.style.transform = `rotate(${minToDeg}deg)`;
        hourHand.style.transform = `rotate(${hrToDeg}deg)`;
    };
    //call the update time to set clock hands every second
setInterval(updateTime, 1000)
    //call updateTime function on page load
updateTime();