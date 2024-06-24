const form = document.querySelector('form');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const namaInput = document.getElementById('nama').value;
    const laguInput = document.getElementById('lagu').value; // Ambil nilai input lagu
    const pesanInput = document.getElementById('pesan').value
    const untukInput = document.getElementById('untuk').value
    const response = await fetch('https://api.telegram.org/bot7349014663:AAFRdu6z3jrWI0YXcDAwnuDAvhVufJ4yRRI/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '6155031774',
            text: `Nama : ${namaInput}\nUntuk : ${untukInput}\nLagu : ${laguInput}\nPesan : ${pesanInput}`, // Format pesan dengan "Nama: (output yang Anda tulis)"
        }),
    });
    const result = await response.json();
    if (result.ok) {
        outputDiv.textContent = `Selamat ${namaInput}, pesan kamu telah dikirim! mohon tunggu admin agar post songfess kamu yaa!😊`;
    } else {
        outputDiv.textContent = 'Gagal mengirim pesan. Silakan coba lagi.';
    }
});
