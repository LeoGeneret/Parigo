let unblurBtn = document.getElementById('unblurBtn');

unblurBtn.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'var blurredText = document.querySelectorAll(".blurText"); blurredText.forEach((text) => {text.classList.remove("blurText")}); document.querySelector("#paywall-connect").style.display = "none";'});
    });
};