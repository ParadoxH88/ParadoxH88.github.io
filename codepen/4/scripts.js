let names = ['Levi', 'Anna', 'Tibi'];

for (i = 0; i < names.length + 1; i++) {
    $('.lista').append('<li>',names[i],'</li>');
};

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

  $('body').append('<h1>',additionalBlock.title ,'</h1>');
  $('body').append('<p>',additionalBlock.text ,'</p>');