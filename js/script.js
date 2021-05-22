window.addEventListener('DOMContentLoaded', () => {



   let countDownDate = new Date("May 26,2021 12:00:00").getTime();

   let countDownFunction = setInterval(function () {

      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = hours + '<span class="time">ч </span>' + minutes + '<span class="time">м </span>' + `<span class="roz">${seconds}<span class="time">с </span></span>`;
      document.getElementById("timers").innerHTML = hours + '<span class="time">ч </span>' + minutes + '<span class="time">м </span>' + `<span class="roz">${seconds}<span class="time">с </span></span>`;
   });



   let a = 0;
   $(window).scroll(function () {

      let oTop = $('#register').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
         $('.counter-value').each(function () {
            let $this = $(this),
               countTo = $this.attr('data-count');
            $({
               countNum: $this.text()
            }).animate({
               countNum: countTo
            },

               {

                  duration: 1500,
                  easing: 'swing',
                  step: function () {
                     $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                     $this.text(this.countNum);
                  }

               });
         });
         a = 1;
      }

   });

});






