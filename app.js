const predictButton = document.querySelector('.btn-submit');
const result = document.querySelector('.result > span');


const request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.readyState === 4) {
    if(request.status === 200) {
      result.innerHTML = request.responseText;
    } else {
      result.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    }
  }
}

predictButton.addEventListener('click', function(e) {
  const weightElementA = document.querySelector('.weightA');
  const weightElementB = document.querySelector('.weightB');
  
  const query = JSON.stringify({
    weightA: parseFloat(weightElementA.value, 10),
    weightB: parseFloat(weightElementB.value, 10)
  });
  
  request.open('POST','/prediction', true);

  request.setRequestHeader("Content-type", "application/json");
  
  request.send(query);
})
