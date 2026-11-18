const inputName = document.getElementById('inputName');
const inputEvent = document.getElementById('inputEvent');
const inputDesc = document.getElementById('inputDesc');
const inputDate = document.getElementById('inputDate');
const inputSigner = document.getElementById('inputSigner');

const previewName = document.getElementById('previewName');
const previewEvent = document.getElementById('previewEvent');
const previewDesc = document.getElementById('previewDesc');
const previewDate = document.getElementById('previewDate');
const previewSignature = document.getElementById('previewSignature');
const previewSigner = document.getElementById('previewSigner');

// Fungsi memperbarui teks secara langsung saat diketik
inputName.addEventListener('input', (e) => { previewName.textContent = e.target.value || 'Nama Penerima'; });
inputEvent.addEventListener('input', (e) => { previewEvent.textContent = e.target.value || 'Nama Kegiatan/Acara'; });
inputDesc.addEventListener('input', (e) => { previewDesc.textContent = e.target.value || 'Keterangan/Deskripsi'; });
inputDate.addEventListener('input', (e) => { previewDate.textContent = e.target.value || 'Tanggal'; });

inputSigner.addEventListener('input', (e) => { 
    const val = e.target.value || 'Nama Penandatangan';
    previewSignature.textContent = val;
    previewSigner.textContent = val; 
});

// Fitur Download menggunakan html2canvas
const btnDownload = document.getElementById('btnDownload');
const certificateCard = document.getElementById('certificateCard');

btnDownload.addEventListener('click', () => {
    btnDownload.textContent = 'Memproses Gambar...';
    btnDownload.disabled = true;

    html2canvas(certificateCard, {
scale: 2,
useCORS: true
    }).then(canvas => {
const imageURL = canvas.toDataURL('image/png');

const link = document.createElement('a');
link.href = imageURL;
link.download = `Sertifikat ${inputName.value || 'Penerima'}.png`;

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

btnDownload.textContent = 'Unduh Sertifikat';
btnDownload.disabled = false;
    }).catch(err => {
console.error('Gagal mendownload sertifikat:', err);
alert('Terjadi kesalahan saat memproses gambar.');
btnDownload.textContent = 'Unduh Sertifikat';
btnDownload.disabled = false;
    });
});