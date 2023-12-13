function saveTranslation() {
  const englishWord = document.getElementById('englishWord').value.trim();
  const uzbekWord = document.getElementById('uzbekWord').value.trim();
  const description = document.getElementById('Tavsif').value.trim();

  if (englishWord !== '' && uzbekWord !== '') {
    const translation = { englishWord, uzbekWord, description };
    let translations = JSON.parse(localStorage.getItem('translations')) || [];
    translations.push(translation);
    localStorage.setItem('translations', JSON.stringify(translations));
    displayTranslations();
    clearFields();
  }
}

function displayTranslations() {
  const translationsList = document.getElementById('translationsList');
  translationsList.innerHTML = '';

  let translations = JSON.parse(localStorage.getItem('translations')) || [];

  translations.forEach((translation, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>English:</strong> ${translation.englishWord}<br>
      <strong>Uzbek:</strong> ${translation.uzbekWord}<br>
      <strong>Tavsif:</strong> ${translation.description}
      <button class="delete-btn" onclick="deleteTranslation(${index})">--</button>
    `;
    translationsList.appendChild(li);
  });
}

function deleteTranslation(index) {
  let translations = JSON.parse(localStorage.getItem('translations')) || [];
  translations.splice(index, 1);
  localStorage.setItem('translations', JSON.stringify(translations));
  displayTranslations();
}

function clearFields() {
  document.getElementById('englishWord').value = '';
  document.getElementById('uzbekWord').value = '';
  document.getElementById('Tavsif').value = '';
}

window.onload = displayTranslations;
