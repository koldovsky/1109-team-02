document.addEventListener('DOMContentLoaded', function() {
  var storyButton = document.querySelector('.story-button');

  storyButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#cc8400'; // Darker shade for the hover state
  });

  storyButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#ffa500'; // Original color
  });
});