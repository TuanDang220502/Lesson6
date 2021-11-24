const callAPI = () => {
    console.log(123);
    $.ajax({
        url: "https://619d074d68ebaa001753ce6a.mockapi.io/api/products",
        method: "GET", // GET or POST or PUT or DELETE
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: result => {
           
            // hide page content
            $(".main-page .card-row").fadeOut(1000);

            // show new content
            for (let item of result) {
                $(".main-page").append(`
                    <p>${item.description} - ${item.id}</p></br>
                `);
            }
        },
        error: (xhr, textStatus, errorThrown) => {
            console.log(textStatus);
        }
    });
};
