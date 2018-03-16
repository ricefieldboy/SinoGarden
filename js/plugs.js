var myChart = document.getElementById("myChart").getContext("2d");

var pieChart= new Chart(myChart,{
    type:"pie",// bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:["Example 1","Example 2","Example 3","Example 4"],
        datasets:[{
            label:"Label",
            data:[
                10,20,30,40,
            ],
            backgroundColor:[
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(255, 159, 64, 0.6)",         
            ]
        }]
    },
    options:{
        legend:{
            dispaly:true,
            position:"top",
        },
    }

});

//Scripp reveal
window.sr = ScrollReveal({reset:true,duration: 2000
                         });

sr.reveal('.c1', {
    distance:'300px',
    origin:'left',
    viewFactor: 0.2
});

sr.reveal('.c2', {

    distance: '600px',
    origin:'left',
    viewFactor: 0.2
});

sr.reveal('.c3', {

    distance:'900px',
    origin:'left',
    viewFactor: 0.2
});


$(document).ready(function(){    
    $('.dropdown').on('mouseenter mouseleave click tap', function(event) {
        event.preventDefault();
        $(this).toggleClass("open");
    });
});

