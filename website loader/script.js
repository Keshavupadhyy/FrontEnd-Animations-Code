// Simulate loading for 3 seconds and then display content
window.addEventListener('load', () => {
    setTimeout(() => {
      // Hide loader
      document.querySelector('.loader-wrapper').style.display = 'none';
  
      // Show content with fade-in effect
      document.querySelector('.content').classList.add('fade-in');
    }, 3000); // You can adjust the time as needed
  });
  