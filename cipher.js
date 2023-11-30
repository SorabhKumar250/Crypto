
function calculateCipher() {
    var plaintext = document.getElementById('plaintext').value;
    var key = document.getElementById('key').value;

    var vignere = vigenereCipher(key, plaintext, 1);
    var polybius = polybiusCipher(plaintext);
    var hybrid = polybiusCipherHybrid(vignere);

    document.getElementById('results').innerHTML = 'Vignere: ' + vignere + '<br>Polybius: ' + polybius + '<br>Hybrid: ' + hybrid;
}

var output_str;

function vigenereCipher(key, str, mode) {
    var output = [str.length];
    var result = 0; 

    for (var i = 0; i < str.length; i++) {
        if (mode == 1) {
            result = ((str.charCodeAt(i) + key.charCodeAt(i % key.length)) % 128);
            output[i] = String.fromCharCode(result);
        } else if (mode == 0) {
            if (str.charCodeAt(i) - key.charCodeAt(i % key.length) < 0) {
                result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) + 128;
            } else {
                result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) % 128;
            }
            output[i] = String.fromCharCode(result);
        }
    }
    output_str = output.join('');
    return output_str;
}

function polybiusCipher(str) {
    var polybius = '';
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            polybius += String.fromCharCode((charCode - 65) / 5 + 65) + String.fromCharCode((charCode - 65) % 5 + 1);
        } else if (charCode >= 97 && charCode <= 122) {
            polybius += String.fromCharCode((charCode - 97) / 5 + 97) + String.fromCharCode((charCode - 97) % 5 + 1);
        }
    }
    return polybius;
}

function polybiusCipherHybrid(output_str) {
    var polybius = '';
    for (var i = 0; i < output_str.length; i++) {
        var charCode = output_str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            polybius += String.fromCharCode((charCode - 65) / 5 + 65) + String.fromCharCode((charCode - 65) % 5 + 1);
        } else if (charCode >= 97 && charCode <= 122) {
            polybius += String.fromCharCode((charCode - 97) / 5 + 97) + String.fromCharCode((charCode - 97) % 5 + 1);
        }
    }
    return polybius;
}
