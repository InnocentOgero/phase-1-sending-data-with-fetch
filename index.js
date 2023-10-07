// Add your code here

function submitData(name,email){
    const personData={name:name,email:email}
    const configurationObject={
        method:'POST',
        headers:{
            'content-Type':'application/json',
             Accept:'application/json'
        },
        body:JSON.stringify(personData)
    }
    return fetch('http://localhost:3000/users',configurationObject)
      .then(response=>response.json())
      .then(function(response){
        const idNumber=document.createElement('span')
        idNumber.textContent=response.id
        document.body.appendChild(idNumber)

      })
      .catch(function(error){
        const errorProblem=document.createElement('span')
        errorProblem.textContent=error.message
        document.body.appendChild(errorProblem)
      })
}
