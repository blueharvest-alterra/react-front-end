export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export function formatDate1(isoDate) {
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dateObj = new Date(isoDate);

  const hari = dateObj.getUTCDate();
  const bulanIndex = dateObj.getUTCMonth();
  const tahun = dateObj.getUTCFullYear();

  const formattedDate = `${hari} ${bulan[bulanIndex]} ${tahun}`;

  return formattedDate;
}
