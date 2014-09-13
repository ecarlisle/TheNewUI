var projects = {
  "projects" : [
    {
      "name" : "Facebook Poke",
      "description" : "Fusce ornare, eros vitae cursus imperdiet, sapien elit cursus mi, sed elementum ex nisl ut ex. Nam ante metus, semper ac sagittis vel, scelerisque eu dolor. Phasellus sodales dolor sed porttitor posuere."
    },
    {
      "name" : "Twitter Infinite Scroll",
      "description" : "Praesent vel sodales massa. Ut viverra ut purus et rutrum. Vestibulum malesuada, mi at cursus tincidunt, metus ante pharetra velit, eget vestibulum magna mi ac ante. Praesent luctus dui eu est sodales tempor."
    },
    {
      "name" : "Pinterest 'Pin This'",
      "description" : "Duis eget interdum diam. Phasellus in lacinia ex. Ut nisi purus, eleifend vitae ullamcorper eget, scelerisque vel tortor. Aliquam quis leo aliquam, pretium lorem vel, eleifend elit. Maecenas pharetra porta suscipit."
    },
    {
      "name" : "LinkedIn InMail",
      "description" : "Donec interdum congue eros quis hendrerit. Maecenas neque est, consequat luctus arcu sit amet, finibus consequat arcu. Sed vestibulum eget neque in accumsan."
    }
  ]
};

$(document).ready(function(){
  $template = $('#projects-template').html();
  $('#projects-container').html(Mustache.render($template,projects));
});
