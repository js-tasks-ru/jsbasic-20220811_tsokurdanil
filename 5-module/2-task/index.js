function toggleText() {
  let btn = document.querySelector('.toggle-text-button')
  let txt = document.getElementById('text')

  btn.addEventListener('click', () => {
    let hiddenTxt = txt.hidden
    txt.hidden = !hiddenTxt
  });
}
