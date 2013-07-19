var datGUI = {
  setup : function () {
    var gui = new dat.GUI();
    var f1 = gui.addFolder('Parameters:');

    f1.addColor(ImageCanvas, 'color').name('Color Picker');
    f1.add(ImageCanvas, 'fillFactor').min(2).name('Fill Factor');
    f1.add(ImageCanvas, 'XDecrement').min(2).name('X Axis Value');
    f1.add(ImageCanvas, 'YDecrement').min(2).name('Y Axis Value');

    gui.add(ImageCanvas, "save").name('Save');
    gui.add(ImageCanvas, "clear").name('Clear Canvas');
    gui.add(ImageCanvas, "draw").name('Draw');

    f1.open();

    ImageCanvas.draw();
  }
}
