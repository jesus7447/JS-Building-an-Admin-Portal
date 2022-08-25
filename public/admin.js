
// Your Code Here
async function main(){
   let res = await fetch('http://localhost:3001/listBooks')

   let books = await res.json()

   books.forEach(displayBook)
}

function displayBook(book){
   let rootDiv = document.querySelector('#root')

   let li = document.createElement('li')
   li.textContent = book.title

   let input = document.createElement('input')
   input.value = book.quantity

   let button = document.createElement('button')
   button.textContent = 'Save'

   let delButton = document.createElement('button')
   delButton.textContent = 'Delete'


   button.addEventListener('click', function(){
        fetch('http://localhost:3001/updateBook',{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: book.id,
                quantity: input.value
            })
        })
   })


   delButton.addEventListener('click', function(){
       fetch('http://localhost:3001/removeBook/{bookId}', {
           method:'DELETE',
           headers:{'Contenet-Type': 'application/json'},
           body: null
       })
       
   })

   

   li.append(input, button, delButton)
   rootDiv.append(li)


}

main()