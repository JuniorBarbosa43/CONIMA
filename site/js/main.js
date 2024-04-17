          // Data final da contagem regressiva (formato: ano, mês - 1, dia, hora, minuto, segundo)
          var endDate = new Date(2024, 4, 20, 0, 0, 0);
          
          function updateCountdown() {
            var now = new Date();
            var timeDiff = endDate - now;
          
            if (timeDiff <= 0) {
              document.getElementById('contador').innerHTML = 'Contagem finalizada!';
            } else {
              var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
              var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
          
              document.getElementById('contador').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
            }
          }
          
          // Contagem regressiva a cada segundo
          setInterval(updateCountdown, 1000);