function counterCreator(num){
  var count = num;
  return function(){
    return count += 1;
  }
}

function countAnnouncer(type, counter){
  var bake_type = type;
  var ticket_num = counter();
  return function(){
    return "Now serving " + bake_type + " number " + ticket_num + "!";
  }
}
