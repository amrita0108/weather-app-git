<script>
    //Challenge 1
      function searchCity() {
        let searchInput = document.querySelector("#search-input");
        let cityName = document.querySelector("h1");
        let city = searchInput.value;
        console.log(city);
        // if (searchInput.value) {
        //   cityName.innerHTML = `${searchInput.value}`;
        // } else {
        //   cityName.innerHTML = null;
        // }
    }
      let enterCity = document.querySelector("#city-form");
      enterCity.addEventListener("click", searchCity);

      //Challenge 2

      let currentTime = new Date();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[currentTime.getDay()];
      let hour = currentTime.getHours();
      let minute = currentTime.getMinutes();

      let dayTime = document.querySelector("#day-time");
      dayTime.innerHTML = `${day} ${hour}:${minute}`;

      //Challenge 3

      function convert() {
        let newTemp = document.querySelector("#tempareture");
        newTemp.innerHTML = "66";
      }

      let fahrenheitTemp = document.querySelector("#fahrenheit-link");
      fahrenheitTemp.addEventListener("click", convert);

      function convertBack() {
        let newTemp = document.querySelector("#tempareture");
        newTemp.innerHTML = "19";
      }

      let celsiusLink = document.querySelector("#celsius-link");
      celsiusLink.addEventListener("click", convertBack);
    </script>