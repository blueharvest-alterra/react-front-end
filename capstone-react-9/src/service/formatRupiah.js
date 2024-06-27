export function formatRupiah(number) {
    if (typeof number !== "number") {
        return "Input harus berupa angka";
    }

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
