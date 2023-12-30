$(document).ready(function () {
  $("body").css("cursor", "none");
  $(document).on("mousemove", function (event) {
    var x = event.pageX;
    var y = event.pageY;

    $(".circle").css({
      left: x + "px",
      top: y + "px",
    });
  });
  setTimeout(() => {
    $(".flash").css("left", "120%");
  }, 500);

  // const images = [
  //   "url('https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  //   "url('https://images.unsplash.com/photo-1565035010268-a3816f98589a?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  //   "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  //   "url('https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  //   "url('https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  //   "url('https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  // ];

  // var count = 0;
  // const imageChanger = setInterval(() => {
  //   $("body").css("background-image", images[count]);

  //   if (count == 2) {
  //     // clearInterval(imageChanger);
  //     count = -1;
  //   }
  //   count = count + 1;
  // }, 4000);
});
