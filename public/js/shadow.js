const box = document.querySelector('.box');
const horizontalRange = document.getElementById('horizontal');
const verticalRange = document.getElementById('vertical');
const blurRange = document.getElementById('blur');
const opacityRange = document.getElementById('opacity');

function updateBoxShadow() {
    const horizontalOffset = horizontalRange.value;
    const verticalOffset = verticalRange.value;
    const blur = blurRange.value;
    const opacity = opacityRange.value;

    const boxShadow = `${horizontalOffset}px ${verticalOffset}px ${blur}px rgba(0, 0, 0, ${opacity})`;
    box.style.boxShadow = boxShadow;
    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('result').innerText = `box-shadow: ${boxShadow}`;
}

horizontalRange.addEventListener('input', updateBoxShadow);
verticalRange.addEventListener('input', updateBoxShadow);
blurRange.addEventListener('input', updateBoxShadow);
opacityRange.addEventListener('input', updateBoxShadow);