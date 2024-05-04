// script.js
function setAlarm() {
    const alarmTime = document.getElementById("alarmTime").value;
  
    if (!alarmTime) {
      alert("Please select a time for the alarm.");
      return;
    }
  
    const [hours, minutes] = alarmTime.split(":");
    const currentTime = new Date();
    const alarmDate = new Date();
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);
    alarmDate.setSeconds(0);
  
    const timeDifference = alarmDate.getTime() - currentTime.getTime();
  
    if (timeDifference <= 0) {
      alert("Please select a future time for the alarm.");
      return;
    }
  
    setTimeout(() => {
      showNotification();
      playAlarmSound();
    }, timeDifference);
  }
  
  function showNotification() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new Notification("Alarm", { body: "Wake up!" });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification("Alarm", { body: "Wake up!" });
        }
      });
    }
  }
  
  function playAlarmSound() {
    const alarmSound = document.getElementById("alarmSound");
    alarmSound.play();
  }
  