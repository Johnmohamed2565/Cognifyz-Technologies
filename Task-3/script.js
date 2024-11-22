
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('feedback');
  
    let isValid = true;
  
   
    feedback.classList.add('hidden');
    feedback.textContent = '';
  
    
    if (name === '') {
      isValid = false;
      feedback.textContent += 'Name is required. ';
    }
  
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      feedback.textContent += 'Please enter a valid email address. ';
    }
  
    
    if (message === '') {
      isValid = false;
      feedback.textContent += 'Message cannot be empty. ';
    }
  
    
    if (isValid) {
      const formData = { name, email, message };
      const existingData = JSON.parse(localStorage.getItem('formSubmissions')) || [];
      existingData.push(formData);
      localStorage.setItem('formSubmissions', JSON.stringify(existingData));
      
    
      window.location.href = 'table.html';
    } else {
      feedback.classList.remove('hidden');
      feedback.classList.add('error');
    }
  });
    