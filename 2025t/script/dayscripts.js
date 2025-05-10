$(document).ready(function () {
    console.log("Pop Art Travel Template Loaded!");

    // Smooth scrolling for navigation links
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Fetch Berlin weather data and update the banner
    $(document).ready(function () {
        console.log("Pop Art Travel Template Loaded!");
    
    // Fetch Berlin weather data and update the banner
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.405&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Berlin')
        .then(response => response.json())
        .then(data => {
            // Parse daily temperatures and current weather
            const daily = data.daily || {};
            const currentWeather = data.current_weather || {};
            
            const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
            const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
            const currentTemp = currentWeather.temperature || '--';
            
            // Update the DOM
            $('#high-temp').text(highTemp);
            $('#low-temp').text(lowTemp);
            $('#current-temp').text(currentTemp);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            $('#weather-info').text('Error fetching weather data. Please try again later.');
        });
});

// Fetch Bremen weather data and update the banner
fetch('https://api.open-meteo.com/v1/forecast?latitude=53.0793&longitude=8.8017&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Berlin')
    .then(response => response.json())
    .then(data => {
        // Parse daily temperatures and current weather
        const daily = data.daily || {};
        const currentWeather = data.current_weather || {};
        
        const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
        const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
        const currentTemp = currentWeather.temperature || '--';
        
        // Update the DOM
        $('#high-tempb').text(highTemp);
        $('#low-tempb').text(lowTemp);
        $('#current-tempb').text(currentTemp);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        $('#weather-infob').text('Error fetching weather data. Please try again later.');
    });

    // Fetch Lanaken weather data and update the banner
fetch('https://api.open-meteo.com/v1/forecast?latitude=50.8931&longitude=5.6466&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Brussels')
.then(response => response.json())
.then(data => {
    // Parse daily temperatures and current weather
    const daily = data.daily || {};
    const currentWeather = data.current_weather || {};
    
    const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
    const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
    const currentTemp = currentWeather.temperature || '--';
    
    // Update the DOM
    $('#high-templ').text(highTemp);
    $('#low-templ').text(lowTemp);
    $('#current-templ').text(currentTemp);
})
.catch(error => {
    console.error('Error fetching weather data:', error);
    $('#weather-infol').text('Error fetching weather data. Please try again later.');
});

// Fetch Reims weather data and update the banner
fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2628&longitude=4.0347&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Paris')
    .then(response => response.json())
    .then(data => {
        // Parse daily temperatures and current weather
        const daily = data.daily || {};
        const currentWeather = data.current_weather || {};
        
        const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
        const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
        const currentTemp = currentWeather.temperature || '--';
        
        // Update the DOM
        $('#high-tempr').text(highTemp);
        $('#low-tempr').text(lowTemp);
        $('#current-tempr').text(currentTemp);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        $('#weather-infor').text('Error fetching weather data. Please try again later.');
    });

    // Fetch Nimshuscheid weather data and update the banner
fetch('https://api.open-meteo.com/v1/forecast?latitude=50.1000&longitude=6.5333&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Berlin')
.then(response => response.json())
.then(data => {
    // Parse daily temperatures and current weather
    const daily = data.daily || {};
    const currentWeather = data.current_weather || {};
    
    const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
    const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
    const currentTemp = currentWeather.temperature || '--';
    
    // Update the DOM
    $('#high-tempn').text(highTemp);
    $('#low-tempn').text(lowTemp);
    $('#current-tempn').text(currentTemp);
})
.catch(error => {
    console.error('Error fetching weather data:', error);
    $('#weather-infon').text('Error fetching weather data. Please try again later.');
});

// Fetch Dresden weather data and update the banner
fetch('https://api.open-meteo.com/v1/forecast?latitude=51.0504&longitude=13.7373&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Berlin')
    .then(response => response.json())
    .then(data => {
        // Parse daily temperatures and current weather
        const daily = data.daily || {};
        const currentWeather = data.current_weather || {};
        
        const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
        const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
        const currentTemp = currentWeather.temperature || '--';
        
        // Update the DOM
        $('#high-tempd').text(highTemp);
        $('#low-tempd').text(lowTemp);
        $('#current-tempd').text(currentTemp);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        $('#weather-infod').text('Error fetching weather data. Please try again later.');
    });

    // Fetch Warszawa weather data and update the banner
fetch('https://api.open-meteo.com/v1/forecast?latitude=52.2298&longitude=21.0122&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Warsaw')
.then(response => response.json())
.then(data => {
    // Parse daily temperatures and current weather
    const daily = data.daily || {};
    const currentWeather = data.current_weather || {};
    
    const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
    const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
    const currentTemp = currentWeather.temperature || '--';
    
    // Update the DOM
    $('#high-tempw').text(highTemp);
    $('#low-tempw').text(lowTemp);
    $('#current-tempw').text(currentTemp);
})
.catch(error => {
    console.error('Error fetching weather data:', error);
    $('#weather-infow').text('Error fetching weather data. Please try again later.');
});

// Fetch Baltic Sea weather data and update the banner
fetch('https://api.open-meteo.com/v1/forecast?latitude=56.0&longitude=18.0&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Berlin')
    .then(response => response.json())
    .then(data => {
        // Parse daily temperatures and current weather
        const daily = data.daily || {};
        const currentWeather = data.current_weather || {};
        
        const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
        const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
        const currentTemp = currentWeather.temperature || '--';
        
        // Update the DOM
        $('#high-temps').text(highTemp);
        $('#low-temps').text(lowTemp);
        $('#current-temps').text(currentTemp);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        $('#weather-infos').text('Error fetching weather data. Please try again later.');
    });

// Fetch Riga weather data and update the banner
fetch('https://api.open-meteo.com/v1/forecast?latitude=56.9496&longitude=24.1052&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=Europe/Riga')
    .then(response => response.json())
    .then(data => {
        // Parse daily temperatures and current weather
        const daily = data.daily || {};
        const currentWeather = data.current_weather || {};
        
        const highTemp = daily.temperature_2m_max ? daily.temperature_2m_max[0] : '--';
        const lowTemp = daily.temperature_2m_min ? daily.temperature_2m_min[0] : '--';
        const currentTemp = currentWeather.temperature || '--';
        
        // Update the DOM
        $('#high-tempma').text(highTemp);
        $('#low-tempma').text(lowTemp);
        $('#current-tempma').text(currentTemp);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        $('#weather-infoma').text('Error fetching weather data. Please try again later.');
    });


    // Load the saved free text when the page loads
    $.get('save-text.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area').val(response.text);
    });
        
    // Save free text on input change
    $('.free-text-area').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });

    $.get('save-text-k.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area-k').val(response.text);
    });
        
    $('.free-text-area-k').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text-k.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });

    $.get('save-text-k2.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area-k2').val(response.text);
    });
       
    $('.free-text-area-k2').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text-k2.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });
    $.get('save-text-d1.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area-d1').val(response.text);
    });
       
    $('.free-text-area-d1').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text-d1.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });
    $.get('save-text-d2.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area-d2').val(response.text);
    });
       
    $('.free-text-area-d2').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text-d2.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });
    $.get('save-text-d3.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area-d3').val(response.text);
    });
       
    $('.free-text-area-d3').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text-d3.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });
    $.get('save-text-d4.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area-d4').val(response.text);
    });
       
    $('.free-text-area-d4').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text-d4.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });
    $.get('save-text-d5.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area-d5').val(response.text);
    });
       
    $('.free-text-area-d5').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text-d5.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });
    $.get('save-text-d6.php', function (data) {
        const response = JSON.parse(data);
        $('.free-text-area-d6').val(response.text);
    });
       
    $('.free-text-area-d6').on('input', function () {
        const text = $(this).val();
        $.ajax({
            url: 'save-text-d6.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ text }),
            success: function (response) {
                console.log('Text saved:', response);
            },
            error: function (error) {
                console.error('Error saving text:', error);
            }
        });
    });    
});