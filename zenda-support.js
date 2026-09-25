(function () {
  var agentId = "0cbba2c4-93c2-47d4-818f-07f02b35eb2a";
  if (document.querySelector('script[data-agent-id="' + agentId + '"]')) return;
  var script = document.createElement("script");
  script.src = "https://api.zendachat.com/static/zenda-widget.js";
  script.async = true;
  script.setAttribute("data-agent-id", agentId);
  script.setAttribute("data-api-base", "https://api.zendachat.com");
  document.body.appendChild(script);
})();
