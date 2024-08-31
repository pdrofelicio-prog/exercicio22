// Configuração da data do evento
const countDownDate = new Date("2025-07-17T19:00:00-03:00").getTime(); // Horário de Brasília (UTC-3)

// Atualiza o contador a cada 1 segundo
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Cálculo de dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza o texto do timer
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Atualiza o círculo de progresso
    const totalDuration = countDownDate - new Date("2024-01-01T00:00:00-03:00").getTime(); // Use o início do ano para cálculo de porcentagem
    const elapsed = totalDuration - distance;
    const percentage = (elapsed / totalDuration) * 100;
    const circle = document.getElementById("timer-circle");

    circle.style.background = `conic-gradient(#007BFF ${percentage}%, transparent ${percentage}%)`;

    // Quando a contagem regressiva terminar
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Feliz Aniversário!";
        document.getElementById("timer-circle").style.background = "#007BFF"; // Círculo completo
    }
}, 1000);
