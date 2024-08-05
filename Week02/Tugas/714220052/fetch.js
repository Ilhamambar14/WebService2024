const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://spapi.dev/api/characters/1", requestOptions)
    .then(response => response.json())
    .then(result => {
        tampilkan(result); // Panggil fungsi tampilkan dengan hasil respons JSON
    })
    .catch(error => console.error(error));

function tampilkan(result) {
    console.log(result);
    const characters = result; // Asumsikan variabel characters adalah array

    if (Array.isArray(characters)) {
        let tabelHTML = "";

        // Loop melalui setiap karakter dan tambahkan baris tabel untuk setiap karakter
        characters.forEach(character => {
            tabelHTML += "<tr>";
            tabelHTML += "<td class='px-4 py-3 border'>" + character.name + "</td>";
            tabelHTML += "<td class='px-4 py-3 border'>" + character.age + "</td>";
            tabelHTML += "<td class='px-4 py-3 border'>" + character.status + "</td>";
            tabelHTML += "<td class='px-4 py-3 border'>" + character.date + "</td>";
            tabelHTML += "</tr>";
        });

        // Setel isi tabel HTML dengan data yang diperoleh dari API
        document.getElementById("inidata").innerHTML = tabelHTML;
    } else {
        console.error("Data tidak valid"); // Tampilkan pesan kesalahan jika data tidak valid
    }
}
