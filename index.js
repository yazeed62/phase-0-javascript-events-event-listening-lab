function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('simon', function() {
    console.log('simon spied!');
  });
}