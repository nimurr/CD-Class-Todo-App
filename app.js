let sum = 1;

function submitData(){
    const input1 = document.getElementById('input1');
    const input1Value = input1.value;

    const input2 = document.getElementById('input2');
    const input2Value = input2.value;

    if(!input1Value){
       return sweetAlert("Oops...", "Something went wrong!", "error");
    }
    if(!input2Value){
       return sweetAlert("Oops...", "Something went wrong!", "error");
    }
    // console.log(input1Value, input2Value)
    const list = document.getElementById('list');
    const ul = document.createElement('ul')
    ul.classList.add('p-2')
    ul.classList.add('my-4')
    ul.classList.add('m-4')
    ul.classList.add('flex')
    ul.classList.add('justify-between')
    ul.classList.add('bg-red-400')
    ul.classList.add('rounded-md')
    ul.classList.add('text-white')
    ul.innerHTML = `
     <h2>${sum}</h2>
     <h2>${input1Value}</h2>
     <h4>$${input2Value}</h4>
    `
    list.appendChild(ul)
    
    input1.value='';
    input2.value = '';

    swal("Good job!", "You clicked the button!", "success")

    sum = sum + 1 ;
}
   


