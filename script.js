window.onload = function(){
    const screenDiv = this.document.getElementById('screenDiv');


    // this is probably for loopable but i couldnt be bothered for just a linktree

    // discord
    const discord = this.document.getElementById('discord');
    //click
    discord.addEventListener('click', function(){
        var elem = document.createElement('p');
        elem.textContent = "Copied to clipboard:\nruby_programming";
        elem.id = 'screenText';
        navigator.clipboard.writeText('ruby_programming');
        screenDiv.innerHTML = ''
        screenDiv.style.backgroundImage = 'none'
        screenDiv.appendChild(elem);
    });

    //hover
    var isInside = false;
    discord.addEventListener('mouseover', function(){
        if (!isInside) {
            isInside = true;
            screenDiv.style.backgroundImage = "url('./Images/Discord Background.png')";
        }
    });
    discord.addEventListener('mouseout', () => {
        screenDiv.innerHTML = ''
        screenDiv.style.backgroundImage = 'none'
        isInside = false;
      });



    //Youtube
    const youtube = this.document.getElementById('youtube');

    //hover
    youtube.addEventListener('mouseover', function(){
        if (!isInside) {
            isInside = true;
            screenDiv.style.backgroundImage = "url('./Images/Youtube Background.png')";
        }
    });
    youtube.addEventListener('mouseout', () => {
        screenDiv.innerHTML = ''
        screenDiv.style.backgroundImage = 'none'
        isInside = false;
      });



    //Twitch
    const twitch = this.document.getElementById('twitch');

    //hover
    twitch.addEventListener('mouseover', function(){
        if (!isInside) {
            isInside = true;
            screenDiv.style.backgroundImage = "url('./Images/Twitch Background.png')";
        }
    });
    twitch.addEventListener('mouseout', () => {
        screenDiv.innerHTML = ''
        screenDiv.style.backgroundImage = 'none'
        isInside = false;
      });



    //Pronoun
    const pronoun = this.document.getElementById('pronoun');

    //hover
    pronoun.addEventListener('mouseover', function(){
        if (!isInside) {
            isInside = true;
            screenDiv.style.backgroundImage = "url('./Images/Pronoun Background.png')";
        }
    });
    pronoun.addEventListener('mouseout', () => {
        screenDiv.innerHTML = ''
        screenDiv.style.backgroundImage = 'none'
        isInside = false;
      });
};


