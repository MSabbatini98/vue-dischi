//?  https://flynn.boolean.careers/exercises/api/array/music

var app_Vue = new Vue (
    {
        el : "#app_Vue",
        data : {
            album_arr : [],
            genre : [],
            chosen_genre : "",
        },
        mounted : function () {

            // console.log(this, self);  //this e self sono la stessa cosa  
            axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((answer) => {


                // console.log(answer.data.response);
                this.album_arr = answer.data.response;

                this.album_arr.forEach((element, index) => {
                    console.log(this.genre);
                    if (!this.genre.includes(element.genre)) {
                        this.genre.push(element.genre)
                    }
                });
                
                // console.log(answer.data.response[0].poster);

            });
        }

    }
);

/*
* trash code:
mounted :  function() {
                console.log(this.email_list);
                var self = this;
                for(var i = 0; i != email_numbers; i++) {
                    console.log(i);    
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (answer) {
    
                        // console.log(self.email_list);
                        self.email = answer.data.response;
                        self.email_list.push(self.email);
                        // self.email_list.push(self.email)
                    })
                }

axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((risposta) => {

                // console.log(risposta);
                // console.log(risposta.data);
                // console.log(risposta.data.response);

                this.album = risposta.data.response;
                console.log(this.album[0].genre);

            })

this.album_arr.forEach((element, index )  =>

                    // self.poster.push(element[index]),
                    console.log( answer.data.response[index].poster),
                    
                    // !! perchè index funziona solo nel console.log ?
                    // value = answer.data.response[index].poster,
                    // self.poster_arr.push(value),
                    // console.log(poster_arr, value)

                    // if (this.genres)

                );
*/