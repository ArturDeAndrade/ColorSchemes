const body = document.body
const buttonBar = document.getElementById('buttonBar')
const buttonList = document.getElementById('buttonList')

// This function creates a new button(with its own label and id), 
// adds it to the page and also creates a function to change the page theme(this function works by adding the className parameter to the body element).
function colorButton(name, className, id) {
    this.button = document.createElement('button')
    this.label = document.createTextNode(name)
    this.button.appendChild(this.label)
    buttonList.appendChild(this.button)
    buttonBar.appendChild(buttonList)

    this.button.id = id
    this.changeColorScheme = function changeColorScheme() {
        body.classList.remove(...body.classList)
        body.classList.add(className)
        console.log("Set to " + name)
    }
}

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

// const 'button-variable' = new colorButton("button label", "class-name", "button id")
// 'button-variable'.button.addEventListener('click', 'button-variable'.changeColorScheme)