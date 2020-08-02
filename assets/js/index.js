const text_input__callback = (_event) => {
  const client_input = document.getElementById('client__text--input').value;
  const client_prefix = document.getElementById('client__text--prefix').value;

  const output_element = document.getElementById('client__text--output');

  const unicode_list = toUnicode.fromString(client_input, client_prefix);
  console.log(unicode_list);
  output_element.innerText = unicode_list.join('\n');
};


window.addEventListener('load', () => {
  const client_text_input = document.getElementById('client__text--input');
  const client_text_prefix = document.getElementById('client__text--prefix');

  client_text_input.addEventListener('input', text_input__callback);
  client_text_prefix.addEventListener('input', text_input__callback);
});
