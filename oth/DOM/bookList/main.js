// book class

const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const  submit = document.getElementById("submit");
const show = document.getElementById("showMessage")



class Book{
    constructor(title , author , isbn){
        this.bookTitle = title;
        this.bookAuthor= author;
        this.bookIsbn = isbn
    }
}

class UI {

    static displayBook(){

        const books = []

        for(let book of books){
            UI.addBookToList(book)
        }

    }

    static addBookToList(book){
        const displayPlace = document.getElementById("book-list")

        const row = document.createElement("tr")

        row.innerHTML = `
        
        <td>${book.bookTitle}</td>
        <td>${book.bookAuthor}</td>
        <td >${book.bookIsbn}</td>
        <td>
        <a href="#"  class = "btn btn-danger delete">X</a>
        </td>

        `

        displayPlace.appendChild(row);
    }

    static clearField(){
        title.value =""
        author.value = ""
        isbn.value = ""
    }

    static removeElement(el){
        el.parentElement.parentElement.remove()
        UI.showMessage("book remove sucessfully ","success")
    }

    static showMessage(message , className){
        show.innerHTML = ""
        const div = document.createElement("div")
        div.className = `alert alert-${className}`
        div.innerHTML = message
        show.appendChild(div)
    }
}

class store {
    static add(element){
        const array = []
        array[0]=element.bookTitle;
        array[1]=element.bookAuthor;
        array[2]=element.bookIsbn;
        if(localStorage.getItem(array[2]==null)){
            localStorage.setItem(array[2],array)
        }else{
            
        }
        
    }

    static remove(element){
        localStorage.removeItem(element.bookIsban)
    }
}

UI.displayBook()


submit.addEventListener("click",function(e){
    e.preventDefault()

    if(title.value == "" || author.value =="" || isbn.value == ""){
        
        UI.showMessage("please fill all field", "danger")
    }else{
        const book = new Book(title.value,author.value,isbn.value)
        console.log(book)
        UI.addBookToList(book)
        store.add(book)
        UI.clearField()
        UI.showMessage("book added sucsessfully" , "success")
    }

    
})

document.getElementById("book-list").addEventListener("click",function(e){
    
    UI.removeElement(e.target)

})