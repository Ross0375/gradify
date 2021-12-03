

//use id to make a theme
let $currentTheme
const themes = [
    {
    title: 'heat',
    colors: ['#F90716',
        '#FF5403',
        '#FFCA03',
        '#FFF323']
    },
    {
    title: 'vapor',
    colors: ['#000D6B',
        '#9C19E0',
        '#FF5DA2',
        '#99DDCC']
    },
    {
    title: 'forest',
    colors: ['#064635',
        '#519259',
        '#F0BB62',
        '#F4EEA9']
    }

];

//check if id is used when compared to the themes objects, if that exists send it to the next which would apply the appropriate values to it's children

function init() {
    for (i = 0; i < themes.length; i++) {
        $currentTheme = document.getElementById(themes[i].title)
        if ($currentTheme !== null) {
            console.log(themes[i].colors);
            colorize(i)
        }
    }
    
}
init()

function colorize(i) {
    console.log(themes[i].colors.length);
    //assigning the children of the selected gradient theme zone
    let $gradChildren = $currentTheme.children
    console.log($gradChildren);


    // looping through the colors in the currently selected theme
    for (n = 0; n < themes[i].colors.length; n++) {

        let $selectedElements = themes[i].colors[n]
        console.log($selectedElements);
        console.log([n]);
        // go through every child before moving on to the next number
        for (x = 0; x < $gradChildren.length; x++){
            if ($gradChildren[x].classList.contains('theme' + [n+1])) {
                console.log($gradChildren[n]);
                $gradChildren[x].style.backgroundColor = themes[i].colors[n]
            }
        }
    }
    

    //     // let selectedArray = Array.from($selectedElements)
    //     // console.log(selectedArray);

    //     // selectedArray.forEach( function () {
    //     //     this.style.backgroundColor = themes[i].colors[n]
    //     // });


    //     // for (x = 0; 0 < $selectedElements.length; x++){
    //     //     console.log($selectedElements[x]);
    //     //     if ($selectedElements !== undefined){
    //     //         $selectedElements[x].style.backgroundColor = themes[i].colors[n]
    //     //     }
    //     // }

    // }
}

