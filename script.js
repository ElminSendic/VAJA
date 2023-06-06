function drawDiamond() {
    const heightInput = document.getElementById('height');
    const diamondContainer = document.getElementById('diamond');
    const height = parseInt(heightInput.value);
  
    if (height < 3 || height > 45) {
      diamondContainer.textContent = 'Visina mora biti između 3 i 45.';
      return;
    }
  
    let diamond = '';
    for (let i = 0; i < height; i++) {
      let row = '';
      let spaceCount = Math.abs(Math.floor(height / 2) - i);
  
      for (let j = 0; j < spaceCount; j++) {
        row += ' ';
      }
  
      for (let j = 0; j < height - 2 * spaceCount; j++) {
        row += '*';
      }
  
      diamond += row + '\n';
    }
  
    diamondContainer.textContent = diamond;
  }
  