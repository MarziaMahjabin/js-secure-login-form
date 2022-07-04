var el_down = document.getElementById("generate");

/* Function to generate combination of password */
      function generateP() {
          var pass = '';
          var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                  'abcdefghijklmnopqrstuvwxyz0123456789@#$'+
                  '%&$&%$^%*&%&*%*^$^%#@!@#%$$$^)+_+{}":"?>?<<>$!~~%$%*&(*)';

          for (i = 1; i <= 8; i++) {

              var char = Math.floor(Math.random()* str.length + 1);

              pass += str.charAt(char)
          }

          return pass;
      }
