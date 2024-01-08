document.addEventListener('DOMContentLoaded', function() {
  var storyButton = document.querySelector('.story-button');

  storyButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#cc8400';
  });

  storyButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#ffa500';
  });
});