

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

    for (n = 0; n < themes[i].colors.length; n++) {
        let $selectedElements = $currentTheme.querySelectorAll('.theme'+[n+1])
        console.log($selectedElements.length);

        for (x = 0; 0 < $selectedElements.length; x++){
            console.log($selectedElements[x]);
            if ($selectedElements !== undefined){
                $selectedElements[x].style.backgroundColor = themes[i].colors[n]
            }
        }

    }
}

