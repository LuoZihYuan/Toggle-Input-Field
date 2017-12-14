var toggleInputFieldPlugins = toggleInputFieldPlugins || [];

toggleInputFieldPlugins.push({
  name: 'Default',
  filter: function(elements) {
    let targetInputTypes = ['date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'text', 'time', 'url', 'week'];

    for (let i = 0; i < elements.length; i++) {
      let elementTag = elements[i].tagName;

      if (elements[i].readOnly === true) {
        elements.splice(i, 1);
        i--;
      } else if (elementTag === 'INPUT') {
        let inputType = elements[i].type;
        if (targetInputTypes.indexOf(inputType) === -1) {
          elements.splice(i, 1);
          i--;
        }
      }
      
    }

  }
});
