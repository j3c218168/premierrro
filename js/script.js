

// inisialisasi navbar sebelah kiri biar aktif
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// inisialisasi slider sebelah kiri biar aktif
const Slider =  document.querySelectorAll('.slider');
M.Slider.init(Slider,
    {
        indicators: false,
        height : 580,
        transition : 3000
    }
);

// inisialisasi parallax biar aktif
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// inisialisasi material boxed biar bisa diarah
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scrollaja = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollaja,{
    scrollOffset: 50
    
});


