chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: "www.leparisien.fr" }, // detect if www.leparisien.fr
          css: [".blurText"], // detect if article is blurred
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()],
    },
  ]);
});
