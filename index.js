var numberString = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413'

var delimiter = /[.,_]/g;

var replaceString = numberString.replace(delimiter, ' ');

document.write('"%s"', replaceString);