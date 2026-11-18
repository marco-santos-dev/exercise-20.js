// 20. Grade de horários. Exiba todos os horários de atendimento das 08:00 às 12:00, em intervalos de 15 minutos, sempre no formato HH:MM com zero à esquerda.

for (let totalMinutes = 8 * 60; totalMinutes <= 12 * 60; totalMinutes += 15) {
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;

    const formattedHour = String(hour).padStart(2, "0");
    const formattedMinute = String(minute).padStart(2, "0");

    console.log(`${formattedHour}:${formattedMinute}`);
}