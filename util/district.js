const axios = require('axios');
const Table = require('tty-table');
const {config,options} = require("./config")
module.exports = function (stateid) {
    // Make a request for a user with a given ID
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`, config)
        .then(function (response) {
            // handle success
            // console.table(response.data.states);

            let header = [{
                value: "district_id",
                headerColor: "cyan",
                color: "green",
                align: "left",
                alias: "DISTRICT ID",
                width: 20
              },
              {
                value: "district_name",
                color: "red",
                alias: "DISTRICT NAME",
                width: 40
              }]

              const out = Table(header,response.data.districts,options).render()
              console.log(out); //prints output
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}