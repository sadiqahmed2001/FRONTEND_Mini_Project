function setReminder() {
    const reminderMessage = document.getElementById("reminderMessage").value.trim();
    const reminderTime = document.getElementById("reminderTime").value;

    if (!reminderMessage || !reminderTime) {
      alert("Please enter both reminder message and time.");
      return;
    }

    const currentTime = new Date();
    const selectedTime = new Date();
    const [hours, minutes] = reminderTime.split(":");
    selectedTime.setHours(hours);
    selectedTime.setMinutes(minutes);
    selectedTime.setSeconds(0);

    const timeDifference = selectedTime.getTime() - currentTime.getTime();
    if (timeDifference <= 0) {
      alert("Please select a future time for the reminder.");
      return;
    }

    setTimeout(() => {
      alert(reminderMessage);
    }, timeDifference);
  }