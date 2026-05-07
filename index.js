
let expenses=JSON.parse(localStorage.getItem('expenses')) ||[];

function addExpense(){
    let title=document.getElementById('title').value;
    let amount=document.getElementById('amount').value;
    let category=document.getElementById('category').value;
    let expense={
        id:Date.now(),
        title,
        amount:Number(amount),
        category

    };
    console.log(expense)
    expenses.push(expense);
    localStorage.setItem('expenses',JSON.stringify(expenses))
    displayExp();
    

}

function displayExp(){
    let list=document.getElementById('list');
    let total=0;
    list.innerHTML="";
    expenses.forEach(e => {
        console.log(e);
        total+=e.amount

        list.innerHTML+=`
    <div class="card p-3 mb-2 shadow-sm">
    <h5>${e.title}</h5>
    <p>₹${e.amount} | ${e.category}</p>
    <button class="btn btn-danger btn-sm" onclick="removeexp(${e.id})">Delete</button>

    
    </div>
    
    `});
    document.getElementById('total').innerHTML=total;
}

function removeexp(id){
    expenses=expenses.filter(e => e.id !== id)
    localStorage.setItem('expenses',JSON.stringify(expenses))
    displayExp();

}
displayExp();