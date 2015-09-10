document.getElementById('test').addEventListener('change', function () {
    var style = this.value == 1 ? 'block' : 'none';
    document.getElementById('hidden_div').style.display = style;
});

document.getElementById('test').addEventListener('change', function () {
    var style = this.value == 0 ? 'block' : 'none';
    document.getElementById('hidden_divje').style.display = style;
});
