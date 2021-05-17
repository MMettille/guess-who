console.log('Here are all the available people:', people);
$(document).ready(readyNow)

function readyNow(){
    // checking to see if jQuery is loaded and it is safe to manipulate the DOM
    console.log( 'jQuery and JS loaded' );

    $( '#photos' ).on('click', '.pic', doSomething);
    generatePhotos();
    generatePlayer();
}

function generatePhotos(){
    // checking to see that the function is being run
    console.log( 'in function generatePhotos' );
    // loop through the people array
    for (let human of people){
    // append a div for each person in the array
        $( '#photos' ).append(`
        <div class="photos">
            <img class="pic" data-humanName="${human.name}" src="https://github.com/${human.githubUsername}.png?size=250" alt="Profile image of ${human.name}"
        </div>
        `) //div should contain an image from each gitHub profile
    }
} // end function generatePhotos

function generatePlayer(){
    // checking to see that the function is being run
    console.log( 'in function generatePlayer' );
    // select a random person from the people array
    let randomPlayer = people[Math.floor(Math.random()*people.length)].name;
    console.log(randomPlayer)
    // make the random player show up on the DOM
    $( '#displayName' ).text(` ${randomPlayer} `)
}

function doSomething(){
    // checking to see that the function is being run
    console.log( 'in function generatePlayer' );
    let clickedPhoto = $(this).data('humanname');
    // if they guessed incorrectly, prompt them to try again!
    if ( clickedPhoto !== $('displayName').text() ){
        alert(`Oh no! That's not ${$('#displayName').text()}- Try again!`)
    } else {
        alert(`YAY! That is ${$('#displayName').text()}`)
    }
} // end doSomething