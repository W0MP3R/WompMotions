# WompMotions
This is a tiny little client side Chrome extension that integrates commands you can use on any Stackexchange Chat.

## WompMotions list
Right now, these are the commands implemented:
- `##notfunny`
- `##cry`
- `##scream`
- `##surprise`
- `##blankface`
- `##sad`
- `##todaypaella`
- `##notpaella`
- `##dance`
- `##workface`
- `##ugh`
- `##sleep`
- `##frustration`
- `##bored`
- `##shruggie`
- `##hiya`
- `##surprise_old`

## Adding new pictures
In case that you want to add new commands/pictures you just need to edit the *background.js* file and add the new line in the list of emotions.

```
  ...
  new Emotion('surprise_old', "https://i.imgur.com/V5Bgq0u.jpg"),
  new Emotion('codeWord', "imageUrl")
];
```

And to use it just call `##codeWord`

## How to install/use the extension
Right now the extension is *not* on the Chrome Web Store so, to be able to use it, it's necessary to download the code, extract it on a folder and then, add the extension as an Unpacked Extension.
