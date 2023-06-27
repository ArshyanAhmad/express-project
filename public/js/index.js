window.addEventListener('DOMContentLoaded', (event) => {
    const colorRange1 = document.getElementById('colorRange1');
    const colorRange2 = document.getElementById('colorRange2');
    const colorRange3 = document.getElementById('colorRange3');
    const colorRange4 = document.getElementById('colorRange4');
    const colorBox = document.querySelector('.color-box');

    const colors = [colorRange1, colorRange2, colorRange3, colorRange4]

    colors.forEach((color) => {
        color.addEventListener('input', () => {
            const value1 = colorRange1.value;
            const value2 = colorRange2.value;
            const value3 = colorRange3.value;
            const value4 = colorRange4.value;

            color = `rgba(${value1}, ${value2}, ${value3}, 0.${value4})`; // Set red component based on the range value
            colorBox.style.backgroundColor = color;

            document.getElementById('result').innerText = color;
            document.getElementById('result').style.backgroundColor = color;
        });
    })

});