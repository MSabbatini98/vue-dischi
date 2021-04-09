//?  https://flynn.boolean.careers/exercises/api/array/music

var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            album : [],
        },
        mounted : function () {
            axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((risposta) => {

                // console.log(risposta);
                // console.log(risposta.data);
                // console.log(risposta.data.response);

                this.album = risposta.data.response;
                // console.log(this.album[0].genre);

            })
        }

    }
)