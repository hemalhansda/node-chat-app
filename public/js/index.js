var socket = io();

socket.on('connect', function () {
  console.log('New User connected');
  var params = jQuery.deparam(window.location.search);

  socket.emit('newUser', params, function (err) {
    if(err){
      alert(err);
      window.location.href = '/';
    } else {
      console.log('no error');
    }
  });
});

socket.on('allRooms', function (roomsArray) {
  console.log(roomsArray.length);
  if(roomsArray.length===0){
    var template = jQuery('#notifiTemplate2').html();
    var html = Mustache.render(template, {
           avroom: 'No Rooms Available'
    });

    jQuery('#avRooms').append(html);
  } else {
    var template2 = jQuery('#notifiTemplate').html();
    var html = Mustache.render(template2, {
           avroom: 'Rooms Available ↓'
    });

    jQuery('#avRooms').append(html);

    var rooms = [];
    var c;
    var d;
    var count = 0;
    for(c=0;c<roomsArray.length;c++)
    {
        for(d=0;d<count;d++)
        {
          if(roomsArray[c].room===rooms[d])
              break;
        }
        if(d==count)
        {
          rooms[count] = roomsArray[c].room;
          count++;
        }
    }
    var i;
    for(i=0;i<rooms.length;i++){
      var template = jQuery('#availableRooms').html();
      var html = Mustache.render(template, {
            room: rooms[i]
      });

      jQuery('#available-rooms').append(html);
    }
  }
});
