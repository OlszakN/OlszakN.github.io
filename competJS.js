const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        boxes.forEach(b => {
            if (b !== box) {
                b.classList.remove('expand');
                b.style.transform = 'scale(0.5)';
                b.style.transition = '0.5s'; 
            }
        });
        box.classList.add('expand');
        box.style.transform = 'scale(1.5)';
    });

    box.addEventListener('mouseout', () => {
        boxes.forEach(b => {
            b.classList.remove('expand');
            b.style.transform = 'scale(1)';
        });
    });
});
