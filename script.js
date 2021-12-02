

//use id to make a theme
let $themeCheck
const themes = {
    heat: ['#F90716',
        '#FF5403',
        '#FFCA03',
        '#FFF323'],
    vapour: ['#000D6B',
        '#9C19E0',
        '#FF5DA2',
        '#99DDCC']
};

//check if id is used when compared to the themes objects, if that exists send it to the next which would apply the appropriate values to it's children

function init() {
    console.log('object');
    for (i = 0; i < 2; i++) {
        $themeCheck = document.getElementById(themes[i])
        if ($themeCheck !== null) {
            console.log('object');
        }
    }
    
}
init()


