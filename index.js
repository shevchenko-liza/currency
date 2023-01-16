const inputNode = document.querySelector('.value_input')
const currancyNode = document.querySelector('.currency_js')
const outputNode = document.querySelector('.output_js ')

inputNode.addEventListener('input', function() {
    const uah = Number(inputNode.value);
    const cur = currancyNode.value;
    const results = convert(uah, cur);
    outputNode.innerText = results
});

currancyNode.addEventListener('change', function() {
    const uah = Number(inputNode.value);
    const cur = currancyNode.value;
    const results = convert(uah, cur);
    outputNode.innerText = results
})

//Or the second way to implement
// const inputNode = document.querySelector('.value_input')
// const currancyNode = document.querySelector('.currency_js')
// const outputNode = document.querySelector('.output_js ')

// function getInput() {
//     return {
//         uah: Number(inputNode.value),
//         currency: currancyNode.value
//     }
// }

// function render(results) {
//     outputNode.innerText = results
// }
// inputNode.addEventListener('input', function() {
//     const results = convert(getInput());
//     render(results)
// });

// currancyNode.addEventListener('change', function() {
//     const results = convert(getInput());
//     render(results)
// })