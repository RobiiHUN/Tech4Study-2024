

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) { // Ha az oldal le van görgetve 50px-nél többet
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 20000; // Lassabb számlálás sebessége (ms)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 60); // Lassabb frissítési idő
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
                observer.unobserve(counter); // Megállítja az observert, miután a számláló elérte a célértéket
            }
        });
    }, {
        threshold: 0.1 // Akkor aktiválódik, ha a számláló legalább 10%-ban látható
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) { // Ha az oldal le van görgetve 50px-nél többet
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    var myBtn = document.getElementById('myBtn');
    if (window.scrollY > 300) { // Ha az oldal le van görgetve 300px-nél többet
        myBtn.style.display = 'block';
    } else {
        myBtn.style.display = 'none';
    }
});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}





function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }


  
  

var countDownDate = new Date("Nov 7, 2024 08:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
}, 1000);






