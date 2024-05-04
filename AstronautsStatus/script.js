
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => {
        const astronauts = data.people;
        const astronautList = document.getElementById("astronauts-list");

        astronauts.forEach(astronaut => {
          const listItem = document.createElement("li");
          listItem.textContent = `${astronaut.name} - Craft: ${astronaut.craft}`;
          astronautList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error fetching astronaut data:", error);
        const errorText = document.createElement("li");
        errorText.textContent = "Error fetching astronaut data. Please try again.";
        document.getElementById("astronauts-list").appendChild(errorText);
      });
  