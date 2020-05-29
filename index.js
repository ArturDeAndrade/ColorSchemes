// Getting button list.
const buttonList = document.getElementById('buttonList')

/*
This function creates a new button(with its own name and id), 
adds it to the page 
and also creates a function to change the page theme
(this function works by adding the className parameter to the body element).
*/
function colorButton(name, className, id) {
    /*
    Creating a button with the name and id provided 
    and appending it to the list.
    */
    this.button = document.createElement('button')
    this.button.innerText = name
    this.button.id = id
    buttonList.appendChild(this.button)
    /*
    Creating a function that removes all classes from the body element 
    and adds the one from the button that called the function.
    */
    this.changeColorScheme = () => {
        document.body.classList.remove(...document.body.classList)
        document.body.classList.add(className)
    }
}

/*
To create a new button:
const "variable" = new colorButton("button label", "class-name", "buttonId")
"variable".button.addEventListener('click', "variable".changeColorScheme)
*/

const defaultB = new colorButton('Default', 'default', 'default')
defaultB.button.addEventListener('click', defaultB.changeColorScheme)

const darkB = new colorButton('Dark Theme', 'dark-theme', 'darkTheme')
darkB.button.addEventListener('click', darkB.changeColorScheme)

const lightB = new colorButton('Light Theme', 'light-theme', 'lightTheme')
lightB.button.addEventListener('click', lightB.changeColorScheme)

const batmanB = new colorButton('Batman Theme', 'batman-theme', 'batmanTheme')
batmanB.button.addEventListener('click', batmanB.changeColorScheme)

const loveB = new colorButton('Love Theme', 'love-theme', 'loveTheme')
loveB.button.addEventListener('click', loveB.changeColorScheme)

const natureB = new colorButton('Nature Theme', 'nature-theme', 'natureTheme')
natureB.button.addEventListener('click', natureB.changeColorScheme)

const luizaB = new colorButton('Luiza Theme', 'luiza-theme', 'luizaTheme')
luizaB.button.addEventListener('click', luizaB.changeColorScheme)

/*
TODO:
Create a new function(or change the current one)
that allows the user to add and remove themes;
This would require the user to enter the following information:
- The button name, consisting of one word with a capital first letter
(The new function would then create a class name and id automatically,
using regular expressions);
- A primary color;
- A secondary color;
- A text color;
- An outline color;
(The function would have to somehow create the CSS rules for those,
and it would be preferable to have multiple ways of getting the colors).
*/